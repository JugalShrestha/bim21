var rollNoArray = new Array()
var subjectArray = new Array()

function checkRollNo(rollNo){
    rollNoArray[0] = {
        name: "Aashish Maharjan",
        rN: "021BIM001"
    }
    rollNoArray[1] = {
        name: 'Aashra Pradhan',
        rN: "021BIM002"
    }
    rollNoArray[2] = {
        name: "Aditya Thapa",
        rN: "021BIM003"
    }
    rollNoArray[3] = {
        name: "Aenish Maharjan",
        rN: "021BIM004"
    }  
    rollNoArray[4] = {
        name: "Anu Ujhanthachhen",
        rN: "021BIM005"
    }
    rollNoArray[5] = {
        name: "Apoorva Ranjit",
        rN: "021BIM006"
    }  
    rollNoArray[6] = {
        name: "Ashika Balami",
        rN: "021BIM007"
    }
    rollNoArray[7] = {
        name: "Bardan Khatiwada",
        rN: "021BIM008"
    }  
    rollNoArray[8] = {
        name: "Bibek Belbase",
        rN: "021BIM009"
    }
    rollNoArray[9] = {
        name: 'Bibek Kumar Paswan',
        rN: "021BIM010"
    }  
    rollNoArray[10] = {
        name: "Bibek Shrestha",
        rN: "021BIM011"
    }
    rollNoArray[11] = {
        name: 'Jugal Shrestha',
        rN: "021BIM012"
    }  
    rollNoArray[12] = {
        name: "Kaushal Bikram Gajmeer",
        rN: "021BIM013"
    }
    rollNoArray[13] = {
        name: 'Koshish K.C.',
        rN: "021BIM014"
    }  
    rollNoArray[14] = {
        name: "Krishangsu Rai",
        rN: "021BIM015"
    }
    rollNoArray[15] = {
        name: 'Kritika Khatiwada',
        rN: "021BIM016"
    }  
    rollNoArray[16] = {
        name: "Maitry Bajracharya",
        rN: "021BIM017"
    }
    rollNoArray[17] = {
        name: 'Nabin Khadka',
        rN: "021BIM018"
    }  
    rollNoArray[18] = {
        name: "Neha Thakur",
        rN: "021BIM019"
    }
    rollNoArray[19] = {
        name: '',
        rN: ""
    }  
    rollNoArray[20] = {
        name: "Nishan Duwal",
        rN: "021BIM021"
    }
    rollNoArray[21] = {
        name: 'Nivedita Tuladhar',
        rN: "021BIM022"
    }
    rollNoArray[22] = {
        name: "Ojas Raj Joshi",
        rN: "021BIM023"
    }
    rollNoArray[23] = {
        name: "Pranij Manandhar",
        rN: "021BIM024"
    }
    rollNoArray[24] = {
        name: "Pranish Maharjan",
        rN: "021BIM025"
    }
    rollNoArray[25] = {
        name: "Pranjal Pandey",
        rN: "021BIM026"
    }
    rollNoArray[26] = {
        name: "Prasansa Chiluwal",
        rN: "021BIM027"
    }
    rollNoArray[27] = {
        name: "Prashant Manandhar",
        rN: "021BIM028"
    }
    rollNoArray[28] = {
        name: "Prasiddha Gurung",
        rN: "021BIM029"
    }
    rollNoArray[29] = {
        name: "Pratik Raut",
        rN: "021BIM030"
    }
    rollNoArray[30] = {
        name: "Pratiksa Rana Kshetri",
        rN: "021BIM031"
    }
    rollNoArray[31] = {
        name: "Prince Raut Kurmi",
        rN: "021BIM032"
    }
    rollNoArray[32] = {
        name: "Priyanka Shrestha",
        rN: "021BIM033"
    }
    nameToShow = rollNoArray[rollNo-1].name
    rollNoToShow = rollNoArray[rollNo-1].rN
}
function checkSubject(subject){
    /*-------------------1st Semester---------------------------- */
    /*-------------------2nd Semester---------------------------- */
    subjectArray[0] = {
        subjectName: "Discrete Structure",
        teacherName: "Er. Anuj Shrestha Sir",
        teacherDes: "Faculty Member of  Computer Science"
    }
    subjectArray[1] = {
        subjectName: "Object Oriented Programming",
        teacherName: "Mr. Ramesh Shahi Sir",
        teacherDes: "Faculty Member of  Computer Science"
    }
    subjectArray[2] = {
        subjectName: "Digital Logic",
        teacherName: "Er. Saugat Sigdel Sir",
        teacherDes: "Faculty Member of  Computer Science"
    }
    subjectArray[3] = {
        subjectName: "Organizational Behaviour and HRM",
        teacherName: "Mr. Ramesh Suwal Sir",
        teacherDes: "Faculty Member of  Computer Science"
    }
    subjectArray[4] = {
        subjectName: "Business Communication",
        teacherName: "Mr. Dibya Darpan Adhikari",
        teacherDes: "Faculty Member of English "
    }
    
    /*-------------------3rd Semester---------------------------- */
    
    /*-------------------4th Semester---------------------------- */
    
    /*-------------------5th Semester---------------------------- */
    
    /*-------------------6th Semester---------------------------- */
    
    /*-------------------7th Semester---------------------------- */
    
    /*-------------------8th Semester---------------------------- */
    subjectArray[5] = {
        subjectName: "C Programming",
        teacherName: "Er. Anuj Shrestha Sir"
    }
    subjectNameToShow = subjectArray[subject-1].subjectName
    subjectTeacherNameToShow = subjectArray[subject-1].teacherName
    teacherDescriptionToShow = subjectArray[subject-1].teacherDes
}