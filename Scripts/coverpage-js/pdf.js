const element = document.querySelector('.canvas')

let nameToShow, rollNoToShow
let subjectNameToShow, subjectTeacherNameToShow, teacherDescriptionToShow,teacherDeptToShow

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
  doc.setFontSize(11)
  doc.text("(Affiliated by Tribhuvan University)",105,47,null,null,"center")
  doc.setFontSize(textSize)
  //-------------COLLEGE LOGO PART------------------
  doc.addImage("images/college-logo.jpg","JPEG",80,60,50,60,"alias1","center")

  //-------------Subject Title Part----------------
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text(titleSelector.value.toUpperCase(),105,135,null,null,"center")
  doc.text(subjectNameToShow.toUpperCase(),105,145,null,null,"center")
  
  //--------------Line part=----------------
  doc.addImage("images/middle-line.png","PNG",98,155,15,40,"alias2","center")

  //----------------Submitted To Part---------------
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text("SUBMITTED TO:",130,230,null,null,"left")
  doc.line(130,231,170,231)
  doc.text(subjectTeacherNameToShow,130,245,null,null,"left")
  doc.text(teacherDescriptionToShow,130,252,null,null,"left")
  doc.text(teacherDeptToShow,130,259,null,null,"left")
  
  //----------------Submitted By Part---------------
  doc.setFont("times","bold")
  doc.setFontSize(textSize)
  doc.text("SUBMITTED BY:",30,230,null,null,"left")
  doc.line(30,231,70,231)
  doc.text(nameToShow,30,245,null,null,"left")
  doc.text("BIM, 2nd Semester",30,252,null,null,"left")
  doc.text(rollNoToShow,30,259,null,null,"left")

  doc.save("coverpage-"+titleSelector.value+'.pdf')
  
}