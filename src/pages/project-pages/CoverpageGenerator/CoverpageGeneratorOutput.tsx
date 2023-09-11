import jsPDF from "jspdf";
import collegeLogo from "/images/college-logo.jpg";
import studentData from "../../../components/variables/studentData";
import subjectData from "../../../components/variables/subjectData";

interface Props {
  rollNoProp: string;
  subjectProp: string;
  titleProp: string;
  reportNoProp: string;
}

const CoverpageGeneratorOutput: React.FC<Props> = ({
  rollNoProp,
  subjectProp,
  titleProp,
  reportNoProp,
}) => {
  //to declare name and roll number
  let name = "";
  let rollNo = "";
  let teacherName = "";
  let teacherTitle = "";
  let teacherDept = "";
  const sem = "3";

  //to get rollNo and name from data
  studentData.forEach((data) => {
    if (rollNoProp === data.name) {
      name = data.name;
      rollNo = data.rN;
    }
  });

  //to get teacher info
  subjectData.forEach((data) => {
    if (subjectProp === data.name) {
      teacherName = data.teacher;
      teacherTitle = data.title;
      teacherDept = data.department;
    }
  });

  //generating coverpage
  function generateCoverpage() {
    const bigSize = 18;
    const textSize = 14;

    const doc = new jsPDF({
      orientation: "p",
      format: "a4",
      unit: "mm",
    });

    //--------------COLLEGE NAME PART-----------------
    doc.setFont("times", "bold");
    doc.setFontSize(bigSize);
    doc.text("ST. XAVIER'S COLLEGE", 105, 30, { align: "center" });
    doc.setFontSize(16);
    doc.text("Maitighar, Kathmandu", 105, 38, { align: "center" });
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(Affiliated by Tribhuvan University)", 105, 45, {
      align: "center",
    });
    doc.setFontSize(textSize);

    //-------------COLLEGE LOGO PART------------------
    doc.addImage(collegeLogo, "JPEG", 80, 58, 50, 58);

    //-------------Subject Title Part----------------
    doc.setFont("times", "normal");
    doc.setFontSize(textSize);
    doc.text("( Department of Computer Science )", 105, 133, {
      align: "center",
    });

    doc.setFont("times", "bold");
    doc.setFontSize(bigSize);
    doc.text(subjectProp, 105, 143, { align: "center" });

    //--------------Line part=----------------
    doc.line(100, 165, 100, 190);
    doc.line(105, 160, 105, 195);
    doc.line(110, 165, 110, 190);

    //-----------Subject title part 2-------------------
    if (titleProp == "") {
      doc.setFont("times", "bold");
      doc.setFontSize(textSize);
      doc.text("Lab Report " + reportNoProp, 105, 220, { align: "center" });
      titleProp = subjectProp.toUpperCase();
    } else {
      doc.setFont("times", "normal");
      doc.setFontSize(textSize);
      doc.text("Lab Report " + reportNoProp, 105, 210, { align: "center" });

      doc.setFont("times", "bold");
      doc.setFontSize(textSize);
      doc.text(titleProp, 105, 220, { align: "center" });
      titleProp = titleProp.replace(/\s/g, "_");
    }

    //----------------Submitted By Part---------------

    doc.setFont("times", "bold");
    doc.setFontSize(textSize);

    //Top lines
    doc.line(5, 240, 75, 240);
    doc.text("SUBMITTED BY:", 40, 248, { align: "center" });
    doc.line(5, 252, 75, 252);

    doc.setFont("times", "normal");

    doc.text(name, 40, 264, { align: "center" });
    doc.text("BIM, " + sem + "rd Semester", 40, 272, { align: "center" });
    doc.text(rollNo, 40, 280, { align: "center" });

    //Side lines
    doc.line(75, 240, 75, 292);
    doc.line(5, 240, 5, 292);

    //Bottom line
    doc.line(5, 292, 75, 292);

    //----------------Submitted To Part---------------
    doc.setFont("times", "bold");
    doc.setFontSize(textSize);

    doc.line(80, 240, 205, 240);
    doc.text("SUBMITTED TO:", 120, 248, { align: "center" });
    doc.line(80, 252, 205, 252);

    doc.setFont("times", "normal");

    doc.text(teacherName, 120, 264, { align: "center" });
    doc.text(teacherTitle, 120, 272, { align: "center" });
    doc.text(teacherDept, 120, 280, { align: "center" });

    //Side lines
    doc.line(80, 240, 80, 292);
    doc.line(160, 240, 160, 292);

    //Bottom line
    doc.line(80, 292, 205, 292);

    //--------------------Sign Part-----------------

    doc.setFont("times", "normal");
    doc.setFontSize(textSize);
    doc.text("SIGNATURE", 182.5, 248, { align: "center" });

    //side line
    doc.line(205, 240, 205, 292);

    const output = doc.output("dataurlstring");

    return output;
  }

  const pdfURL = generateCoverpage();

  const downloadpdf = () => {
    const bigSize = 18;
    const textSize = 14;

    const doc = new jsPDF({
      orientation: "p",
      format: "a4",
      unit: "mm",
    });

    //--------------COLLEGE NAME PART-----------------
    doc.setFont("times", "bold");
    doc.setFontSize(bigSize);
    doc.text("ST. XAVIER'S COLLEGE", 105, 30, { align: "center" });
    doc.setFontSize(16);
    doc.text("Maitighar, Kathmandu", 105, 38, { align: "center" });
    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.text("(Affiliated by Tribhuvan University)", 105, 45, {
      align: "center",
    });
    doc.setFontSize(textSize);

    //-------------COLLEGE LOGO PART------------------
    doc.addImage(collegeLogo, "JPEG", 80, 58, 50, 58);

    //-------------Subject Title Part----------------
    doc.setFont("times", "normal");
    doc.setFontSize(textSize);
    doc.text("( Department of Computer Science )", 105, 133, {
      align: "center",
    });

    doc.setFont("times", "bold");
    doc.setFontSize(bigSize);
    doc.text(subjectProp, 105, 143, { align: "center" });

    //--------------Line part=----------------
    doc.line(100, 165, 100, 190);
    doc.line(105, 160, 105, 195);
    doc.line(110, 165, 110, 190);

    //-----------Subject title part 2-------------------
    if (titleProp == "") {
      doc.setFont("times", "bold");
      doc.setFontSize(textSize);
      doc.text("Lab Report " + reportNoProp, 105, 220, { align: "center" });
      titleProp = subjectProp.toUpperCase();
    } else {
      doc.setFont("times", "normal");
      doc.setFontSize(textSize);
      doc.text("Lab Report " + reportNoProp, 105, 210, { align: "center" });

      doc.setFont("times", "bold");
      doc.setFontSize(textSize);
      doc.text(titleProp, 105, 220, { align: "center" });
      titleProp = titleProp.replace(/\s/g, "_");
    }

    //----------------Submitted By Part---------------

    doc.setFont("times", "bold");
    doc.setFontSize(textSize);

    //Top lines
    doc.line(5, 240, 75, 240);
    doc.text("SUBMITTED BY:", 40, 248, { align: "center" });
    doc.line(5, 252, 75, 252);

    doc.setFont("times", "normal");

    doc.text(name, 40, 264, { align: "center" });
    doc.text("BIM, " + sem + "rd Semester", 40, 272, { align: "center" });
    doc.text(rollNo, 40, 280, { align: "center" });

    //Side lines
    doc.line(75, 240, 75, 292);
    doc.line(5, 240, 5, 292);

    //Bottom line
    doc.line(5, 292, 75, 292);

    //----------------Submitted To Part---------------
    doc.setFont("times", "bold");
    doc.setFontSize(textSize);

    doc.line(80, 240, 205, 240);
    doc.text("SUBMITTED TO:", 120, 248, { align: "center" });
    doc.line(80, 252, 205, 252);

    doc.setFont("times", "normal");

    doc.text(teacherName, 120, 264, { align: "center" });
    doc.text(teacherTitle, 120, 272, { align: "center" });
    doc.text(teacherDept, 120, 280, { align: "center" });

    //Side lines
    doc.line(80, 240, 80, 292);
    doc.line(160, 240, 160, 292);

    //Bottom line
    doc.line(80, 292, 205, 292);

    //--------------------Sign Part-----------------

    doc.setFont("times", "normal");
    doc.setFontSize(textSize);
    doc.text("SIGNATURE", 182.5, 248, { align: "center" });

    //side line
    doc.line(205, 240, 205, 292);

    doc.save(name + " - " + titleProp || reportNoProp);
  };

  return (
    <>
      <iframe className="coverpage-output" src={pdfURL}></iframe>

      <div onClick={downloadpdf} className="download">
        download
      </div>
    </>
  );
};

export default CoverpageGeneratorOutput;
