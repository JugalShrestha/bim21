const rollNoSelector = document.querySelector('.roll-no-selector')
const subjectSelector = document.querySelector('.subject-selector')
const downloader = document.querySelector('.download')
const titleSelector = document.querySelector('.title-selector input')
const reportNoSelector = document.querySelector('.report-no-selector input')

const submittedbyName = document.querySelector('.submitted-by .name')
const submittedbyDept = document.querySelector('.submitted-by .department')
const submittedbyRN = document.querySelector('.submitted-by .roll-number')

const submittedToName = document.querySelector('.submitted-to .name')
const submittedToDept = document.querySelector('.submitted-to .department')
const submittedToTitle = document.querySelector('.submitted-to .title')

const outputTitle = document.querySelector('.titles .title')
const subjectTitle = document.querySelector('.titles .subject-title')
const reportNoTitle = document.querySelector('.titles .report-no')

var rollNo, subject

rollNoSelector.addEventListener('change',()=>{
    getRollNo()
})

subjectSelector.addEventListener('change',()=>{
    getSubject()
})

titleSelector.addEventListener('input',()=>{
    outputTitle.innerText = titleSelector.value
})

reportNoSelector.addEventListener('input',()=>{
    reportNoTitle.innerText = "Lab report "+reportNoSelector.value
})

function getRollNo()
{
    rollNo = rollNoSelector.value
    var split = rollNo.split('.')
    rollNo = split[0].trim()
    printRN(rollNo)
}

function getSubject()
{
    subject = subjectSelector.value
    printSub(subject)
}

downloader.addEventListener('click',()=>{
    getRollNo()
    getSubject()
    savePdf()
})
