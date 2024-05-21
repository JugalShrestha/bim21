import React, { useState } from "react";
import GoBackBtn from "../../../components/GoBackBtn";
import Text2HwOutput from "./Text2HwOutput";
import handwritings from "../../../components/variables/handwriting";
import rootBranch from "../../../components/variables/rootBranch";

const Text2Hw = () => {
  const [handwriting, setHandwriting] = useState(handwritings[0].fontName);
  const [customHwChecker, setCustomHwChecker] = useState(false);
  const [customHw, setCustomHw] = useState("");
  const [text, setText] = useState("");
  const [lineSpacing, setlineSpacing] = useState<number>(10);
  const [pageMargin, setpageMargin] = useState<number>(25);
  const [textSize, settextSize] = useState<number>(18);
  const [pageBorder, setPageBorder] = useState(false);
  const [randomLine, setRandomLine] = useState(false);

  const handleHandwritingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHandwriting(e.target.value);
    setCustomHwChecker(false);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleLineSpacingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseFloat(e.target.value);
    if (number < 5) {
      setlineSpacing(5);
    } else if (number > 10) {
      setlineSpacing(10);
    } else if (Number.isNaN(number)) {
      setlineSpacing(5);
    } else {
      setlineSpacing(number);
    }
  };

  const handleTextSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseFloat(e.target.value);
    if (number < 14) {
      settextSize(14);
    } else if (number > 24) {
      settextSize(24);
    } else if (Number.isNaN(number)) {
      setlineSpacing(14);
    } else {
      settextSize(number);
    }
  };

  const handleCustomHwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const fontData = e.target?.result;
        const fontBlob = new Blob([fontData as ArrayBuffer], {
          type: "application/octet-stream",
        });
        const fontUrl = URL.createObjectURL(fontBlob);
        setCustomHw(fontUrl);

        const fontFace = new FontFace("customFont", `url(${fontUrl})`);
        fontFace.load().then((loadedFont) => {
          document.fonts.add(loadedFont);
          setCustomHwChecker(true);
        });
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handlePageMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseFloat(e.target.value);
    if (number < 10) {
      setpageMargin(10);
    } else if (number > 35) {
      setpageMargin(35);
    } else if (Number.isNaN(number)) {
      setlineSpacing(10);
    } else {
      setpageMargin(number);
    }
  };

  const handlePageBorderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checker = e.target.checked;
    setPageBorder(checker);
  };

  const handleRandomLineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checker = e.target.checked;
    setRandomLine(checker);
  };

  const divStyle: React.CSSProperties = {
    fontFamily: handwriting,
  };

  const customhandwritingStyle: React.CSSProperties = {
    fontFamily: "customFont",
  };

  return (
    <section className="text-2-handwriting" id="page">
      <GoBackBtn />
      <div className="header">
        <div className="main-header">text-2-handwriting</div>
        <div className="sub-header">
          Converts your given text to your own handwriting on a A4 sized .pdf to
          print
        </div>
      </div>
      <div className="text-2-handwriting-body">
        <div className="handwriting-selection">
          <div className="in-built-handwritings">
            <div className="header">Select a handwriting:</div>
            <select
              onChange={handleHandwritingChange}
              name="handwriting-selector"
              className="handwriting-selector"
            >
              {handwritings.map((data) => (
                <option key={data.name} value={data.fontName}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div className="custom-handwriting">
            <div className="header">Upload a handwriting:</div>
            <div className="custom-handwriting-selector">
              <input
                type="file"
                onChange={handleCustomHwChange}
                accept=".ttf, .otf"
                name="handwriting-custom"
                id="custom-hw-selector"
              />
              <div className="header btn">Upload</div>
            </div>
          </div>
        </div>
        <div className="sub-header opacity">
          how to add your own handwriting?
          <a
            href={"https://www.wherethesmileshavebeen.com/how-to-turn-your-handwriting-into-a-font-for-free/"}
            target="_blank"
          >
            click_here!
          </a>
        </div>
        <div className="text-2-handwriting-converter-field">
          <div className="page-customization">
            <div className="headers">
              <div className="header">line spacing</div>
              <div className="header">font size</div>
              <div className="header">page margin</div>
              <div className="header">page border</div>
              <div className="header">random lines</div>
            </div>
            <div className="customizations">
              <input
                onChange={handleLineSpacingChange}
                value={lineSpacing}
                min="5"
                max="10"
                step="1"
                name="line-spacing"
                type="number"
                placeholder="line space (5-10)"
                id="line-space-text2handwriting"
              />
              <input
                onChange={handleTextSizeChange}
                value={textSize}
                min="14"
                max="24"
                step="2"
                name="font-size"
                type="number"
                placeholder="font size (14-24)"
                id="font-size-text2handwriting"
              />
              <input
                onChange={handlePageMarginChange}
                value={pageMargin}
                min="10"
                max="35"
                step="5"
                name="page-margin"
                type="number"
                placeholder="page margin (10-35)"
                id="page-margin-text2handwriting"
              />
              <label className="page-border-checker">
                <input
                  type="checkbox"
                  name="page-border"
                  onChange={handlePageBorderChange}
                  id="page-border-text2handwriting"
                />
              </label>
              <label className="random-line-checker">
                <input
                  type="checkbox"
                  name="random-space"
                  onChange={handleRandomLineChange}
                  id="random-space-text2handwriting"
                />
              </label>
            </div>
          </div>
          <textarea
            onChange={handleTextChange}
            style={customHwChecker ? customhandwritingStyle : divStyle}
            name="assignment-text"
            placeholder="write your assignment which is to be converted here!"
            className="text-selector"
            value={text}
          ></textarea>
        </div>
        <div className="sub-header opacity">
          see the real output of this project?
          <a
            href={rootBranch + "/pdf/examples-of-real-time-output.pdf"}
            target="_blank"
          >
            click_here!
          </a>
        </div>
        <Text2HwOutput
          handwriting={handwriting}
          linespacing={lineSpacing}
          pageMargin={pageMargin}
          textSize={textSize}
          text={text}
          customHwChecker={customHwChecker}
          customHw={customHw}
          pageBorder={pageBorder}
          randomLine={randomLine}
        />
      </div>
    </section>
  );
};

export default Text2Hw;
