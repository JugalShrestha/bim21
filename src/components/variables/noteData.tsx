// this variable is used when a user clicks on a clickable having tag note inorder to open a single page for respective clickable

const note = [
  //6th sem notes
  {
    id: "IT245",
    subject: "Business Information Systems",
    lab: "",
    link: "https://docs.google.com/document/d/1bAAsOYt5QEJd-z17R3o_V4_5G3hmWtns7TdKZ8H-p5Y/edit?usp=sharing",
  },
  {
    id: "IT246",
    subject: "IT Ethics and Cybersecurity",
    lab: "",
    link: "https://docs.google.com/document/d/1UjOnDiH1bLULWf-5f-oY0Yh-g7dvHId4sHf_7uf-ypU/edit?usp=sharing",
  },
  {
    id: "MGT236",
    subject: "Business Environment",
    lab: "",
    link: "https://docs.google.com/document/d/1veI21i5n2ndGgNtUP7DN5XQcQH0f4_5d6hExrn_mzwE/edit?usp=sharing",
  },
  {
    id: "FIN229",
    subject: "Fundamentals of Corporate Finance",
    lab: "",
    link: "https://docs.google.com/document/d/19arN26WAHnLld5lkTbT6ILckX_zy7c7wk55KrZaxmYY/edit?usp=sharing",
  },
  {
    id: "RCH201",
    subject: "Business Research Methods",
    lab: "",
    link: "https://docs.google.com/document/d/1bgFL3R9VjHN-LtUO0rC20ypQRvdJA7tYOFKS1Wh_2qY/edit?usp=sharing",
  },
  
  //5th sem notes
  {
    id: "IT228",
    subject: "Artificial Intelligence",
    lab: "https://docs.google.com/document/d/1OmVdUAW42M95cC9UXrWHxiZZipSLCn08BsTZOixGyeM/edit?usp=sharing",
    link: "https://docs.google.com/document/d/1vjVAomVRb6mJUfUn34CP20h7uDnZqDgPU5yrtFdwVFI/edit?usp=sharing",
  },
  {
    id: "IT242",
    subject: "Software Design and Development",
    lab:"https://docs.google.com/document/d/1oLK3Lm7rL0vymHWTkLyZwkJg7PzdPrsqH0MNhtFR5Lo/edit?usp=sharing",
    link: "https://docs.google.com/document/d/1YYlIRSgTt9ETh1NGVAtRvxKQ5mYhR6VpcQxfz36GcT4/edit?usp=sharing",
  },
  {
    id: "IT243",
    subject: "Programming with python",
    lab: "https://docs.google.com/document/d/1GmQqqsMapY_0x-XDKW3pQkRnZqw6WJEYEVi_FLFklmE/edit?usp=sharing",
    link: "https://docs.google.com/document/d/1NR6WoFMYkpojFO_QWJ2v-X0KR1VVDYeFUMpbXqaBDVA/edit?usp=sharing",
  },
  {
    id: "IT244",
    lab: "https://docs.google.com/document/d/1XLscqmen4maLXJXEYhy2nReEvcSWZENA5hhA_yNjRx4/edit?usp=sharing",
    subject: "Information Security",
    link: "https://docs.google.com/document/d/11DXovKCw7YR2H1LGHDBzgMN5LZY3ywgAhEeawt9lxaA/edit?usp=sharing",
  },
  {
    id: "MKT201",
    subject: "Fundamental of Marketing",
    link: "https://docs.google.com/document/d/1SdM7g5GgDOsSntDX16pxFlajlIHP5DG1HqDLrqI4uZ0/edit?usp=sharing",
  },
  //4th sem notes
  {
    id: "IT239",
    subject: "Web Technology II",
    lab:"https://docs.google.com/document/d/1QCS71RprkFUro0WsI4FGlzpl7_Puf3LDzjXuS1F6oJc/edit?usp=sharing",
    link: "https://docs.google.com/document/d/17KqnJW1vDqnMPR3UYNM0W0b3LunlylOCVj5LOOy4XI4/edit?usp=sharing",
  },
  {
    id: "ACC202",
    subject: "Cost Management and Accounting",
    link: "https://docs.google.com/document/d/1dr6CpDSOvWgDNIIkVfd0SgLwyoyL6LF4zxfl01JuEN4/edit?usp=sharing",
  },
  {
    id: "IT240",
    subject: "Business Data Communication and Networking",
    lab: "https://drive.google.com/drive/folders/1PqBeoYgpvG1UxTO7cQBYK3grdbeG9U6v?usp=drive_link",
    link: "https://docs.google.com/document/d/13XwYcAMKdUJ67rAUTi7AJzTgtULTTE2cO1Rihht66j4/edit?usp=sharing",
  },
  {
    id: "IT220",
    subject: "Database Management System",
    lab: "https://docs.google.com/document/d/1wJTbXy-529g0CQnUzcBexYJPnK6OvE8qmFYiEq_QaYE/edit?usp=sharing",
    link: "https://docs.google.com/document/d/1GysDiSkLa6PJ1XN39RvPRvwpKI8gUb6byzoP04g9sUk/edit?usp=sharing",
  },
  {
    id: "ECO206",
    subject: "Economics for Business",
    link: "https://docs.google.com/document/d/1ay8vGkG_vlRrqxbGISWI_MorCyBp123XoV4eYUWj23g/edit?usp=sharing",
  },
  {
    id: "IT241",
    subject: "Operating System",
    lab: "https://docs.google.com/document/d/1ity5V_USbiXRtii4lCzpf--v1BKCNNRcR0nbSOOUIU0/edit?usp=sharing",
    link: "https://docs.google.com/document/d/15xOQTmfE-uGKcrxx6dBoUR_UQdAMIGlXGw5qBNhOlmg/edit?usp=sharing",
  },
  //3rd sem notes
  {
    id: "IT236",
    subject: "Microprocessor and C.A.",
    link: "https://docs.google.com/document/d/1klAT3rWaDuxUmZ4UVYeAOYxg7ub4bS-NI9GevtIVYvk/edit?usp=sharing",
  },
  {
    id: "ACC201",
    subject: "Financial Accounting",
    link: "https://docs.google.com/document/d/14Lc3CDdz3A4Vm2STgH0tW3XbNw9GNfJOzqh7b4UNd18/edit?usp=sharing",
  },
  {
    id: "IT237",
    subject: "Web Technology I",
    link: "https://www.w3schools.com/html/default.asp",
  },
  {
    id: "STT201",
    subject: "Business Statistics",
    link: "https://docs.google.com/document/d/12WS30OSyA5TVT-IcAoJDW7HRhF1Gg5SiATYK71QexWU/edit?usp=sharing",
  },
  {
    id: "IT238",
    subject: "Data Structure and Algorithm",
    link: "https://docs.google.com/document/d/1dhqhGedOjZtPUvDk4cEfrlbQPvujX7wVXXj4fJ-i_0Y/edit?usp=sharing",
  },
  {
    id: "IT235",
    subject: "Discrete Structure",
    link: "https://docs.google.com/document/d/1sgv2F3dqrR8jN4sKiwvWvJLfBYQ5FnRfBzRxG-VBFB0/edit?usp=sharing",
  },
  //7th sem notes
  {
    id: "IT247",
    subject: "E-Commerce and Internet Marketing",
    link: "https://docs.google.com/document/d/1sgv2F3dqrR8jN4sKiwvWvJLfBYQ5FnRfBzRxG-VBFB0/edit?usp=sharing",
    lab: "https://docs.google.com/document/d/1eN2KpFG5ur1FlcfJkwQjS1Mr1KbInQCC4FYBBeCh9lg/edit?usp=sharing",
  },
  {
    id: "IT274",
    subject: "Data Warehousing and Data Mining",
    link: "https://docs.google.com/document/d/1sgv2F3dqrR8jN4sKiwvWvJLfBYQ5FnRfBzRxG-VBFB0/edit?usp=sharing",
    lab: "https://docs.google.com/document/d/1eN2KpFG5ur1FlcfJkwQjS1Mr1KbInQCC4FYBBeCh9lg/edit?usp=sharing",
  },
  {
    id: "SOC203",
    subject: "Sociology for Business Management",
    link: "https://docs.google.com/document/d/1sgv2F3dqrR8jN4sKiwvWvJLfBYQ5FnRfBzRxG-VBFB0/edit?usp=sharing",
  },
  {
    id: "MGT205",
    subject: "Operations Management",
    link: "https://docs.google.com/document/d/1sgv2F3dqrR8jN4sKiwvWvJLfBYQ5FnRfBzRxG-VBFB0/edit?usp=sharing",
  },
  {
    id: "MGT240",
    subject: "Strategic Management",
    link: "https://docs.google.com/document/d/1sgv2F3dqrR8jN4sKiwvWvJLfBYQ5FnRfBzRxG-VBFB0/edit?usp=sharing",
  },
];

export default note;
