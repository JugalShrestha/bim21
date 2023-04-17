
let nameToShow, rollNoToShow
let subjectNameToShow, subjectTeacherNameToShow, teacherDescriptionToShow

window.jsPDF = window.jspdf.jsPDF

function savePdf()
{
  var bigSize = 16
  var textSize = 14

  var doc = new jsPDF()

  //--------------COLLEGE NAME PART-----------------
  doc.setFontSize(textSize)
  doc.setFont("times","normal")
  doc.text("(Department of Computer Science)",105,30,null,null,"center")
  doc.setFont("times","bold")
  doc.setFontSize(bigSize)
  doc.text("ST. XAVIER'S COLLEGE",105,40,null,null,"center")
  doc.setFontSize(textSize)
  doc.setFont("times","normal")
  doc.text("Kathmandu, Maitighar",105,46,null,null,"center")
  doc.setFontSize(13)
  doc.text("(Affiliated by T.U.)",105,52,null,null,"center")
  doc.setFontSize(textSize)
  //-------------COLLEGE LOGO PART------------------
  doc.addImage("images/college-logo.jpg","JPEG",85,60,40,50,"center")

  //-------------Subject Title Part----------------
  doc.setFont("times","bold")
  doc.setFontSize(bigSize)
  doc.text(titleSelector.value.toUpperCase(),105,120,null,null,"center")
  doc.setFont("times","normal")
  doc.setFontSize(textSize)
  doc.text("(Bachelor of Information Management)",105,127,null,null,"center")
  doc.setFont("times","bold")
  doc.text(subjectNameToShow,105,134,null,null,"center")

  //----------------Submitted To Part---------------
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text("SUBMITTED TO:",105,155,null,null,"center")
  doc.setFont("times","normal")
  doc.text(subjectTeacherNameToShow,105,165,null,null,"center")
  doc.text(teacherDescriptionToShow,105,170,null,null,"center")
  doc.text("_ _ _ _ _ _ _ _ _ _ _",105,200,null,null,"center")
  
  //----------------Submitted By Part---------------
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text("SUBMITTED BY:",105,220,null,null,"center")
  doc.setFont("times","normal")
  doc.text(nameToShow,105,230,null,null,"center")
  doc.text(rollNoToShow,105,235,null,null,"center")
  doc.text("BIM, 2nd Semester",105,240,null,null,"center")

  doc.save('coverpage-'+titleSelector.value.toLowerCase().trim()+'.pdf')
}


const titleScreen = document.querySelector('.title-screen')
const subjectScreen = document.querySelector('.subject-screen')
const nameScreen = document.querySelector('.name-screen')
