//All the available items in the website

import rootBranch from "./rootBranch";

const items = [
  {
    name: "coverpage generator",
    tag: "project coverpage",
    link: rootBranch + "/coverpage-generator",
  },
  {
    name: "text-2-handwriting",
    tag: "project text2hw",
    link: rootBranch + "/text2hw",
  },
  { name: "syllabus", tag: "syllabus", link: rootBranch + "/syllabus" },
  { name: "class routine", tag: "routine", link: rootBranch + "/routine" },
  //3rd sem notes
  {
    name: "data structure and algorithm",
    tag: "note dsa 3sem",
    link: rootBranch + "/note?query=IT238",
  },
  {
    name: "microprocessor and c.a",
    tag: "note mpca 3sem",
    link: rootBranch + `/note?query=IT236`,
  },
  {
    name: "financial accounting",
    tag: "note fa 3sem",
    link: rootBranch + "/note?query=ACC201",
  },
  {
    name: "business statistics",
    tag: "note 3sem",
    link: rootBranch + "/note?query=STT201",
  },
  {
    name: "discrete structure",
    tag: "note ds 2sem",
    link: rootBranch + "/note?query=IT235",
  },
  //4th sem notes
  {
    name: "web technology II",
    tag: "note 4sem",
    link: rootBranch + "/note?query=IT239",
  },
  {
    name: "Economics for Business",
    tag: "note 4sem",
    link: rootBranch + "/note?query=ECO206",
  },
  {
    name: "Cost Management and Accounting",
    tag: "note cma 4sem",
    link: rootBranch + "/note?query=ACC202",
  },
  {
    name: "Business Data Com. and Networking",
    tag: "note bdcn 4sem",
    link: rootBranch + "/note?query=IT240",
  },
  {
    name: "Database Management System",
    tag: "note dbms 4sem",
    link: rootBranch + "/note?query=IT220",
  },
  {
    name: "Operating System",
    tag: "note os 4sem",
    link: rootBranch + "/note?query=IT241",
  },
  //5th sem notes
  {
    name: "Artificial Intelligence",
    tag: "note ai 5sem",
    link: rootBranch + "/note?query=IT228",
  },
  {
    name: "Software Design and Development",
    tag: "note 5sem",
    link: rootBranch + "/note?query=IT242",
  },
  {
    name: "Programming with python",
    tag: "note 5sem",
    link: rootBranch + "/note?query=IT243",
  },
  {
    name: "Information Security",
    tag: "note 5sem",
    link: rootBranch + "/note?query=IT244",
  },
  {
    name: "fundamental of Marketing",
    tag: "note 5sem",
    link: rootBranch + "/note?query=MKT201",
  },
];

//For sorting searchable items
items.sort((a, b) => a.name.localeCompare(b.name));

export default items;
