const subjectData = [
  //1st sem
  {
    name: "Foundation of Information Technology [IT 231]",
    teacher: "Mr. Robin Maharjan",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    shortForm: "Foundation of I.T. [IT 231]",
    sem: 1,
  },
  {
    name: "C Programming [IT 232]",
    teacher: "Er. Anuj Shrestha",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 1,
  },
  {
    name: "English [ENG 206]",
    teacher: "Mr. Sushil Paudel",
    title: "Lecturer",
    department: "Dept. of English",
    sem: 1,
  },
  {
    name: "Foundation of Business Management [MGT 231]",
    teacher: "Mr. Rameshwor Suwal",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    shortForm: "Foundation of B.M [MGT 231]",
    sem: 1,
  },
  {
    name: "Basic Mathematics [MTH 204]",
    teacher: "Er. Anuj Shrestha",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 1,
  },
  //2nd sem
  {
    name: "Digital Logic [IT 233]",
    teacher: "Er. Saugat Sigdel",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 2,
  },
  {
    name: "Object Oriented Programming (Java) [IT 234]",
    teacher: "Mr. Ramesh Shahi",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    shortForm: "O.O.P. with Java [IT 234]",
    sem: 2,
  },
  {
    name: "Discrete Structure [IT 235]",
    teacher: "Er. Anuj Shrestha",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 2,
  },
  {
    name: "Business Communication [ENG 203]",
    teacher: "Mr. Vidya Devi",
    title: "Lecturer",
    department: "Dept. of English",
    sem: 2,
  },
  {
    name: "Orgainzational Behaviour and HRM [MGT 241]",
    teacher: "Mr. Rameshwor Suwal",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    shortForm: "OB and HRM [MGT 241]",
    sem: 2,
  },
  //3rd sem
  {
    name: "Microprocessor and Computer Architecture [IT 236]",
    teacher: "Er. Bishnu K.C.",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    shortForm: "Microprocessor and C.A [IT 236]",
    sem: 3,
  },
  {
    name: "Web Technology I [IT 237]",
    teacher: "Mr. Ujjwal Shrestha",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 3,
  },
  {
    name: "Data Structure and Algorithm [IT 238]",
    teacher: "Er. Sudan Maharjan",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 3,
  },
  {
    name: "Financial Accounting [ACC 201]",
    teacher: "Mr. Rameswhor Suwal",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 3,
  },
  {
    name: "Business Statistics [STT 201]",
    teacher: "Mr. Pushpa Lal Shrestha",
    title: "Lecturer",
    department: "Dept. of Management",
    sem: 3,
  },
  //4th sem
  {
    name: "Database Management System [IT 220]",
    teacher: "Er. Nitin Malla",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 4,
  },
  {
    name: "Web Technology II [IT 239]",
    teacher: "Er. Sudhir Maharjan",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 4,
  },
  {
    name: "Business Data Communication and Networking [IT 240]",
    teacher: "Er. Sanjay Kumar Yadav",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 4,
  },
  {
    name: "Operating System [IT 241]",
    teacher: "Mr. Lalit Giri",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 4,
  },
  {
    name: "Cost and Management Accounting [ACC 202]",
    teacher: "Mr. Rameshwor Suwal",
    title: "Lecturer",
    department: "Dept. of Management",
    sem: 4,
  },
  {
    name: "Economics for Business [ECO 206]",
    teacher: "Mr. Niroj Duwal",
    title: "Lecturer",
    department: "Dept. of Management",
    sem: 4,
  },
  //5th sem
  {
    name: "Programming with Python [IT 243]",
    teacher: "Mr. Ramesh Shahi",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 5,
  },
  {
    name: "Fundamental of Marketing [MKT 201]",
    teacher: "Mr. Sunil Subedi",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 5,
  },
  {
    name: "Software Design and Development [IT 242]",
    teacher: "Er. Sanjay Kumar Yadav",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 5,
  },
  {
    name: "Artificial Intelligence [IT 228]",
    teacher: "Mr. Nishchhal Shrestha",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 5,
  },
  {
    name: "Information Security [IT 244]",
    teacher: "Mr. Saroj Shahi",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 5,
  },
  //6th semester
  {
    name: "Business Information Systems [IT 245]",
    teacher: "Er. Rabin Raj Ghimire",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 6,
  },
  {
    name: "IT Ethics and Cybersecurity [IT 246]",
    teacher: "Mr. Anish Shrestha",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 6,
  },
  {
    name: "Fundamentals of Corporate Finance [FIN 229]",
    teacher: "Mr. Debendra Bhandari",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 6,
  },
  {
    name: "Business Environment [MGT 236]",
    teacher: "Mr. Pravin Ratna Shayka",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 6,
  },
  {
    name: "Business Research Methods [RCH 201]",
    teacher: "Mr. Niroj Duwal",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 6,
  },
  //7 semester
  {
    name: "E-Commerce and Internet Marketing [IT 247]",
    teacher: "Er. Rabin Raj Ghimire",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 7
  },
  {
    name: "Data Warehousing and Data Mining [IT 274]",
    teacher: "Er. Anuj Shrestha",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 7
  },
  {
    name: "Sociology for Business Management [SOC 203]",
    teacher: "Dr. Sagar Shahi",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 7
  },
  {
    name: "Operations Management [MGT 205]",
    teacher: "Mr. Debindra Bhandari",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 7
  },
  {
    name: "Strategic Management [MGT 240]",
    teacher: "Mr. Pravin Ratna Shakya",
    title: "Lecturer",
    department: "Dept. of Computer Science",
    sem: 7
  }
];

export default subjectData;
