const element = document.querySelector('.canvas')

let nameToShow, rollNoToShow
let subjectNameToShow, subjectTeacherNameToShow, teacherDescriptionToShow,teacherDeptToShow

var semCount = 3;

window.jsPDF = window.jspdf.jsPDF

function savePdf()
{
  var bigSize = 18
  var textSize = 14

  var doc = new jsPDF({
    orientation : "potrait",
    format: "a4",
  })

  //--------------COLLEGE NAME PART-----------------
  doc.setFont("times","bold")
  doc.setFontSize(bigSize)
  doc.text("ST. XAVIER'S COLLEGE",105,30,null,null,"center")
  doc.setFontSize(16)
  doc.text("Maitighar, Kathmandu",105,38,null,null,"center")
  doc.setFontSize(12)
  doc.setFont("times","normal")
  doc.text("(Affiliated by Tribhuvan University)",105,45,null,null,"center")
  doc.setFontSize(textSize)
  //-------------COLLEGE LOGO PART------------------
  doc.addImage("images/college-logo.jpg","JPEG",80,58,50,58,"alias1","center")

  //-------------Subject Title Part----------------
  doc.setFont("times","normal")
  doc.setFontSize(textSize)
  doc.text("( Department of Computer Science )",105,135,null,null,"center")

  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text(subjectNameToShow.toUpperCase(),105,145,null,null,"center")
  
  //--------------Line part=----------------
  doc.line(100,165,100,190)
  doc.line(105,160,105,195)
  doc.line(110,165,110,190)

  //-----------Subject title part 2-------------------
  doc.setFont("times","normal")
  doc.setFontSize(12)
  doc.text("LAB REPORT "+reportNoSelector.value.toUpperCase(),105,210,null,null,"center")
  
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text(titleSelector.value.toUpperCase(),105,220,null,null,"center")  

  //----------------Submitted By Part---------------
  
  doc.setFont("times","bold")
  doc.setFontSize(textSize)

  //Top lines
  doc.line(5,240,75,240)
  doc.text("SUBMITTED BY:",40,248,null,null,"center")
  doc.line(5,252,75,252)

  doc.setFont("times","normal")

  doc.text(nameToShow,40,264,null,null,"center")
  doc.text("BIM, "+semCount+"rd Semester",40,272,null,null,"center")
  doc.text(rollNoToShow,40,280,null,null,"center")
  
  //Side lines 
  doc.line(75,240,75,292)
  doc.line(5,240,5,292)

  //Bottom line
  doc.line(5,292,75,292)

  //----------------Submitted To Part---------------
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  
  doc.line(80,240,205,240)
  doc.text("SUBMITTED TO:",120,248,null,null,"center")
  doc.line(80,252,205,252)

  doc.setFont("times","normal")

  doc.text(subjectTeacherNameToShow,120,264,null,null,"center")
  doc.text(teacherDescriptionToShow,120,272,null,null,"center")
  doc.text(teacherDeptToShow,120,280,null,null,"center")

  //Side lines 
  doc.line(80,240,80,292)
  doc.line(160,240,160,292)
  
  //Bottom line
  doc.line(80,292,205,292)

  
  //--------------------Sign Part-----------------
  
  doc.setFont("times","normal")
  doc.setFontSize(textSize)
  doc.text("SIGNATURE",182.5,248,null,null,"center")

  //side line
  doc.line(205,240,205,292)

  doc.save(nameToShow+" - ("+titleSelector.value.toUpperCase().replace(/\s/g, "_")+').pdf')
  
}