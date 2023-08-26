const rollNoSelector = document.querySelector('.cover-page-generator-page .roll-no-selector')
const subjectSelector = document.querySelector('.cover-page-generator-page .subject-selector')
const downloader = document.querySelector('.cover-page-generator-page .download')
const titleSelector = document.querySelector('.cover-page-generator-page .title-selector input')
const reportNoSelector = document.querySelector('.cover-page-generator-page .report-no-selector input')
let coverpageOutput = document.querySelector('.cover-page-generator-page .coverpage-output');
let downloadCoverpage = false;

var semCount = 3;

let title = titleSelector.value;
let reportNo = reportNoSelector.value

let coverpageTitle = "";

//Checking if mobile or not for the pdf to be outputed
const deviceWidth = window.innerWidth;
window.addEventListener('resize',()=>{
    deviceWidth = window.innerWidth;
})

window.jsPDF = window.jspdf.jsPDF

let name = "";
let teacher = "";
let teacherDes = "";
let teacherDept = "";

let rollNo = "";
let subject = "";

rollNoSelector.addEventListener('change',()=>{
    getRollNo()
})

subjectSelector.addEventListener('change',()=>{
    getSubject()
})

titleSelector.addEventListener('input',()=>{
    title = titleSelector.value;
    generatePdf();
})

reportNoSelector.addEventListener('input',()=>{
    reportNo = reportNoSelector.value;
    generatePdf();
})

function getRollNo()
{
    rollNo = rollNoSelector.value
    var split = rollNo.split('.')
    rollNo = split[0].trim()

    name = students[rollNo-1].name;
    rollNo = students[rollNo-1].rN; 
    generatePdf(); 
}

function getSubject()
{
    subject = subjectSelector.value
    
    subjects.forEach(sub=>{
        var name1 = sub.name.split('[')
        if(name1[0].trim() == subject.trim())
        {
            if(sub.shortForm != null)
            {
                subject = sub.shortForm
            }
            else
            {
                subject = sub.name
            }

            teacher = sub.teacher
            teacherDept = sub.department
            teacherDes = sub.title
        }
    })
    generatePdf();
}

downloader.addEventListener('click',()=>{
    downloadCoverpage = true;
    generatePdf()
})

// --------------------------------------start of pdf generation

function generatePdf()
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
  doc.text("( Department of Computer Science )",105,133,null,null,"center")

  doc.setFont("times","bold")
  doc.setFontSize(bigSize)
  doc.text(subject,105,143,null,null,"center")
  
  //--------------Line part=----------------
  doc.line(100,165,100,190)
  doc.line(105,160,105,195)
  doc.line(110,165,110,190)

  //-----------Subject title part 2-------------------
  if(title === '')
  {  
    doc.setFont("times","bold")
    doc.setFontSize(textSize)
    doc.text("Lab Report "+reportNo,105,220,null,null,"center") 
    coverpageTitle=subject.toUpperCase()
     
  }
  else{
    doc.setFont("times","normal")
    doc.setFontSize(textSize)
    doc.text("Lab Report "+reportNo,105,210,null,null,"center")
    
    doc.setFont("times","bold")
    doc.setFontSize(textSize)
    doc.text(title,105,220,null,null,"center")
    coverpageTitle = title.replace(/\s/g, "_");
  } 

  //----------------Submitted By Part---------------
  
  doc.setFont("times","bold")
  doc.setFontSize(textSize)

  //Top lines
  doc.line(5,240,75,240)
  doc.text("SUBMITTED BY:",40,248,null,null,"center")
  doc.line(5,252,75,252)

  doc.setFont("times","normal")

  doc.text(name,40,264,null,null,"center")
  doc.text("BIM, "+semCount+"rd Semester",40,272,null,null,"center")
  doc.text(rollNo,40,280,null,null,"center")
  
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

  doc.text(teacher,120,264,null,null,"center")
  doc.text(teacherDes,120,272,null,null,"center")
  doc.text(teacherDept,120,280,null,null,"center")

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
  if(deviceWidth > 980)
  {
    const output = doc.output("dataurlstring");
    coverpageOutput.src = output;
  }
  if(downloadCoverpage)
  {
    doc.save(name+" - ( "+coverpageTitle+" ).pdf");
    downloadCoverpage = false;
  }
}
if(deviceWidth > 980)
{    
    generatePdf();
}