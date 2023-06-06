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
  doc.text("Maitighar, Kathmandu",105,40,null,null,"center")
  doc.setFontSize(12)
  doc.setFont("times","normal")
  doc.text("(Affiliated by Tribhuvan University)",105,47,null,null,"center")
  doc.setFontSize(textSize)
  //-------------COLLEGE LOGO PART------------------
  doc.addImage("images/college-logo.jpg","JPEG",80,60,50,60,"alias1","center")

  //-------------Subject Title Part----------------
  doc.setFont("times","normal")
  doc.setFontSize(12)
  doc.text("( Department of Computer Science )",105,135,null,null,"center")

  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text(subjectNameToShow.toUpperCase(),105,145,null,null,"center")
  
  //--------------Line part=----------------
  doc.addImage("images/middle-line.png","png",98,155,15,40,"alias2","center")

  //-----------Subject title part 2-------------------
  doc.setFont("times","normal")
  doc.setFontSize(12)
  doc.text("LAB REPORT "+reportNoSelector.value.toUpperCase(),105,210,null,null,"center")
  
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text(titleSelector.value.toUpperCase(),105,220,null,null,"center")
  //----------------Submitted To Part---------------
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  
  doc.line(0,240,1000,240)
  doc.text("SUBMITTED TO:",110,247,null,null,"center")
  doc.line(0,250,1000,250)
  doc.text(subjectTeacherNameToShow,110,268,null,null,"center")
  doc.text(teacherDescriptionToShow,110,273,null,null,"center")
  doc.text(teacherDeptToShow,110,278,null,null,"center")
  doc.line(150,240,150,300)
  
  //----------------Submitted By Part---------------
  doc.line(70,240,70,300)
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text("SUBMITTED BY:",35,247,null,null,"center")

  doc.text(nameToShow,35,268,null,null,"center")
  doc.text("BIM, "+semCount+"rd Semester",35,273,null,null,"center")
  doc.text(rollNoToShow,35,278,null,null,"center")

  
  //--------------------Sign Part-----------------
  
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text("SIGNATURE:",180,247,null,null,"center")

  doc.save("coverpage-"+titleSelector.value+'.pdf')
  
}