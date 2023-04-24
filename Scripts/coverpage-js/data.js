var students = [
    {
        name: "Aashish Maharjan",
        rN: "021BIM001"
    },
    {
        name: 'Aashra Pradhan',
        rN: "021BIM002"
    },
    {
        name: "Aditya Thapa",
        rN: "021BIM003"
    },
    {
        name: "Aenish Maharjan",
        rN: "021BIM004"
    },
    {
        name: "Anu Ujhanthachhen",
        rN: "021BIM005"
    },
    {
        name: "Apoorva Ranjit",
        rN: "021BIM006"
    },
    {
        name: "Ashika Balami",
        rN: "021BIM007"
    },
    {
        name: "Bardan Khatiwada",
        rN: "021BIM008"
    },
    {
        name: "Bibek Belbase",
        rN: "021BIM009"
    },
    {
        name: 'Bibek Kumar Paswan',
        rN: "021BIM010"
    },
    {
        name: "Bibek Shrestha",
        rN: "021BIM011"
    },
    {
        name: 'Jugal Shrestha',
        rN: "021BIM012"
    },
    {
        name: "Kaushal Bikram Gajmeer",
        rN: "021BIM013"
    },
    {
        name: 'Koshish K.C.',
        rN: "021BIM014"
    },
    {
        name: "Krishangsu Rai",
        rN: "021BIM015"
    },
    {
        name: 'Kritika Khatiwada',
        rN: "021BIM016"
    },
    {
        name: "Maitry Bajracharya",
        rN: "021BIM017"
    },
    {
        name: 'Nabin Khadka',
        rN: "021BIM018"
    },
    {
        name: "Neha Thakur",
        rN: "021BIM019"
    },
    {
        name: '',
        rN: ""
    },
    {
        name: "Nishan Duwal",
        rN: "021BIM021"
    },
    {
        name: 'Nivedita Tuladhar',
        rN: "021BIM022"
    },
    {
        name: "Ojas Raj Joshi",
        rN: "021BIM023"
    },
    {
        name: "Pranij Manandhar",
        rN: "021BIM024"
    },
    {
        name: "Pranish Maharjan",
        rN: "021BIM025"
    },
    {
        name: "Pranjal Pandey",
        rN: "021BIM026"
    },
    {
        name: "Prasansa Chiluwal",
        rN: "021BIM027"
    },
    {
        name: "Prashant Manandhar",
        rN: "021BIM028"
    },
    {
        name: "Prasiddha Gurung",
        rN: "021BIM029"
    },
    {
        name: "Pratik Raut",
        rN: "021BIM030"
    },
    {
        name: "Pratiksa Rana Kshetri",
        rN: "021BIM031"
    },
    {
        name: "Prince Raut Kurmi",
        rN: "021BIM032"
    },
    {
        name: "Priyanka Shrestha",
        rN: "021BIM033"
    }
]

var subjects = [
    //1st sem
    {
        name: "Foundation of Information Technology [IT 231]",
        teacher: "Mr. Robin Maharjan",
        title: "lecturer",
        department: "Dept. of Computer Science",
        shortForm: "Foundation of I.T. [IT 231]"
    },
    {
        name: "C Programming [IT 232]",
        teacher: "Er. Anuj Shrestha",
        title: "lecturer",
        department: "Dept. of Computer Science"
    },
    {   
        name: "English [ENG 206]",
        teacher: "Mr. Sushil Paudel",
        title: "lecturer",
        department: "Dept. of English"
    },
    {
        name: "Foundation of Business Management [MGT 231]",
        teacher: "Mr. Rameshwor Suwal",
        title: "lecturer",
        department: "Dept. of Computer Science",
        shortForm : "Foundation of B.M [MGT 231]"
    },
    {
        name: "Basic mathematics [MTH 204]",
        teacher: "Er. Anuj Shrestha",
        title: "lecturer",
        department: "Dept. of Computer Science"
    },
    //2nd sem
    {
        name: "Digital logic [IT 233]",
        teacher: "Er. Saugat Sigdel",
        title: "lecturer",
        department: "Dept. of Computer Science"
    },
    {
        name: "Object Oriented Programming (Java) [IT 234]",
        teacher: "Mr. Mario",
        title: "lecturer",
        department: "Dept. of Computer Science",
        shortForm: "O.O.P. with Java [IT 234]"
    },
    {
        name: "Discrete Structure [IT 235]",
        teacher: "Er. Anuj Shrestha",
        title: "lecturer",
        department: "Dept. of Computer Science"
    },
    {
        name: "Business Communication [ENG 203]",
        teacher: "Mr. Vidya Devi",
        title: "lecturer",
        department: "Dept. of English"
    },
    {
        name: "Orgainzational Behaviour and HRM [MGT 241]",
        teacher: "Mr. Rameshwor Suwal",
        title: "lecturer",
        department: "Dept. of Computer Science",
        shortForm: "OB and HRM [MGT 241]"
    },
    //3rd sem
    {
        name: "Microprocessor and Computer Architecture [IT 236]",
        teacher: "Er. Anuj Shrestha",
        title: "lecturer",
        department: "Dept. of Computer Science",
        shortForm: "Microprocessor and C.A [IT 236]"
    },
    {
        name: "Web Technology I [IT 237]",
        teacher: "Er. Anuj Shrestha",
        title: "lecturer",
        department: "Dept. of Computer Science"
    },
    {
        name: "Data Structure and Algorithm [IT 238]",
        teacher: "Er. Anuj Shrestha",
        title: "lecturer",
        department: "Dept. of Computer Science"
    },
    {
        name: "Financial Accounting [ACC 201]",
        teacher: "Er. Anuj Shrestha",
        title: "lecturer",
        department: "Dept. of Computer Science"
    },
    {
        name: "Business Statistics [SIT 201]",
        teacher: "Er. Anuj Shrestha",
        title: "lecturer",
        department: "Dept. of Computer Science"
    },
]

students.forEach((student,index)=>{
    if(student.name == '')
    {
        return
    }
    const rollNo = document.createElement('option')
    rollNo.innerText = index+1 +" . "+ student.name
    rollNoSelector.appendChild(rollNo)
})

subjects.forEach((subject,index)=>{
    if(index==0){
        const opt = document.createElement('optgroup')
        opt.label = "1st sem"
        opt.style.textTransform = "uppercase"
        subjectSelector.appendChild(opt)
    }
    if(index==5){
        const opt = document.createElement('optgroup')
        opt.label = "2nd sem"
        opt.style.textTransform = "uppercase"
        subjectSelector.appendChild(opt)
    }
    if(index==10){
        const opt = document.createElement('optgroup')
        opt.label = "3rd sem"
        opt.style.textTransform = "uppercase"
        subjectSelector.appendChild(opt)
    }
    const option = document.createElement('option')
    var subjectName = subject.name.split('[')
    option.innerHTML = subjectName[0].trim()
    subjectSelector.appendChild(option)
})

function printRN(rollNo){
    submittedbyName.innerText = students[rollNo-1].name;
    submittedbyRN.innerText = students[rollNo-1].rN;
    nameToShow = students[rollNo-1].name;
    rollNoToShow = students[rollNo-1].rN;
}

function printSub(subject)
{
    subjects.forEach(sub=>{
        var name1 = sub.name.split('[')
        if(name1[0].trim() == subject.trim())
        {
            if(sub.shortForm != null)
            {
                subjectTitle.innerText = sub.shortForm
                subjectNameToShow = sub.shortForm
            }
            else
            {
                subjectTitle.innerText = sub.name
                subjectNameToShow = sub.name
            }

            submittedToTitle.innerText = sub.title 
            submittedToName.innerText = sub.teacher
            submittedToDept.innerText = sub.department
            
            subjectTeacherNameToShow = sub.teacher
            teacherDeptToShow = sub.department
            teacherDescriptionToShow = sub.title
        }
    })
}
