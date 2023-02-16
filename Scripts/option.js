const rollNoSelector = document.querySelector('.roll-no-selector')
const subjectSelector = document.querySelector('.subject-selector')
const downloader = document.querySelector('.download')
const titleSelector = document.querySelector('.title input')

var rollNo, subject

function getRollNo()
{
    rollNo = rollNoSelector.value
    checkRollNo(rollNo)
}

function getSubject()
{
    subject = subjectSelector.value
    checkSubject(subject)
}
downloader.addEventListener('click',()=>{
    getRollNo()
    getSubject()
    savePdf()
})
