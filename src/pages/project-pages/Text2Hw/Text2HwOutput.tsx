import jsPDF from "jspdf";
import rootBranch from "../../../components/variables/rootBranch";
import { useState } from "react";

interface Props {
  handwriting: string;
  linespacing: number;
  pageMargin: number;
  textSize: number;
  text: string;
  customHwChecker: boolean;
  customHw: string;
  pageBorder: boolean;
}

const Text2HwOutput: React.FC<Props> = ({
  handwriting,
  linespacing,
  pageMargin,
  textSize,
  text,
  customHwChecker,
  customHw,
  pageBorder,
}) => {
  //For output
  const [pdfDataUri, setPdfDataUri] = useState<string | null>(null);
  const [downloadText2Hw, setDownloadText2Hw] = useState(false);
  //Loading the font as Binary
  async function loadFontAsBinary(url: string) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const fontData = await response.arrayBuffer();
        return fontData;
      } else {
        throw new Error(
          `Failed to fetch font: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error loading font:", error);
      return null;
    }
  }

  // Function to convert ArrayBuffer to Base64
  function arrayBufferToBase64(buffer: ArrayBuffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  async function text2handwritingConvertionOutput() {
    const doc = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });

    const fontUrl = `${rootBranch}/fonts/` + handwriting + ".ttf";

    const binaryFont = await loadFontAsBinary(fontUrl);

    doc.setFontSize(textSize);
    if (customHwChecker) {
      doc.addFont(customHw, "CustomFont", "normal");
      doc.setFont("CustomFont");
    } else {
      if (binaryFont) {
        const base64Font = arrayBufferToBase64(binaryFont);
        doc.addFileToVFS(
          `${rootBranch}/fonts/` + handwriting + ".ttf",
          base64Font
        );
        doc.addFont(
          `${rootBranch}/fonts/` + handwriting + ".ttf",
          "Handwriting",
          "normal"
        );
        doc.setFont("Handwriting");
      }
    }

    // Set initial position
    let x = pageMargin;
    let y = pageMargin;

    // Calculate available width for text
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const availableHeight = pageHeight - 2 * pageMargin;
    const availableWidth = pageWidth - pageMargin;

    // Split the text into multiple lines within the document's width
    const lines = doc.splitTextToSize(text, availableWidth - pageMargin);

    const minLineSpacing = 6;
    const maxLineSpacing = linespacing;

    const minLineWidthSpacing = -3;
    const maxLineWidthSpacing = 3;

    let minFontSize = 0;
    let maxFontSize = 0;

    if (textSize == 14 || textSize == 15) {
      minFontSize = textSize;
      maxFontSize = textSize + 1;
    } else if (textSize == 24 || textSize == 23) {
      minFontSize = textSize - 1;
      maxFontSize = textSize;
    } else if (textSize > 15 && textSize < 23) {
      minFontSize = textSize - 1;
      maxFontSize = textSize + 1;
    }

    const generatePageLine = () => {
      //underline generator
      if (pageBorder) {
        //global line margin
        const liner = 6;
        //left line
        doc.line(
          pageMargin - liner,
          pageMargin - liner,
          pageMargin - liner,
          297 - pageMargin + liner
        );
        //right line
        doc.line(
          210 + liner - pageMargin,
          pageMargin - liner,
          210 + liner - pageMargin,
          297 - pageMargin + liner
        );
        //top line
        doc.line(
          pageMargin - liner,
          pageMargin - liner,
          210 - pageMargin + liner,
          pageMargin - liner
        );
        //bottom line
        doc.line(
          pageMargin - liner,
          297 - pageMargin + liner,
          210 - pageMargin + liner,
          297 - pageMargin + liner
        );
      }
    };

    generatePageLine();

    // Loop through each line and add it to the PDF
    lines.forEach((line: string) => {
      if (y > availableHeight + pageMargin + linespacing) {
        doc.addPage("a4", "p");
        generatePageLine();
        y = pageMargin;
      }

      const randomLineSpacing =
        Math.floor(Math.random() * (maxLineSpacing - minLineSpacing + 1)) +
        minLineSpacing;
      const randomLineWidthSpacing =
        Math.floor(
          Math.random() * (maxLineWidthSpacing - minLineWidthSpacing + 1)
        ) + minLineWidthSpacing;
      const randomFontSize =
        Math.floor(Math.random() * (maxFontSize - minFontSize + 1)) +
        minFontSize;
      x = pageMargin + randomLineWidthSpacing;

      doc.setFontSize(randomFontSize);
      doc.text(line, x, y);
      y += randomLineSpacing;
    });
    const output = doc.output("datauristring");
    setPdfDataUri(output);
    if (downloadText2Hw) {
      console.log("downloading:" + downloadText2Hw);

      doc.save(handwriting + ".pdf");
      setDownloadText2Hw(false);
    }
  }

  const generatePdf = () => {
    text2handwritingConvertionOutput();
  };

  const realDownloadPdf = () => {
    text2handwritingConvertionOutput();
  };

  const downloadPdf = () => {
    setDownloadText2Hw(true);
    realDownloadPdf();
  };

  return (
    <>
      <div className="download-field">
        <div onClick={generatePdf} className="download">
          Generate
        </div>
        <div onClick={downloadPdf} className="download">
          Download
        </div>
      </div>
      <div className="text-2-handwriting-output-whole">
        {pdfDataUri && (
          <>
            <div className="header">output:</div>
            <iframe
              src={pdfDataUri}
              className="text-2-handwriting-output"
            ></iframe>
          </>
        )}
      </div>
    </>
  );
};

export default Text2HwOutput;
