//All the available items in the website

import rootBranch from "./rootBranch";

const items = [
  {
    name: "coverpage generator",
    tag: "project",
    link: rootBranch + "/coverpage-generator",
  },
  { name: "text-2-handwriting", tag: "project", link: rootBranch + "/text2hw" },
  { name: "syllabus", tag: "syllabus", link: rootBranch + "/syllabus" },
  { name: "class routine", tag: "routine", link: rootBranch + "/routine" },
  {
    name: "data structure and algorithm",
    tag: "note, dsa",
    link: rootBranch + "/note?query=IT238",
  },
  {
    name: "microprocessor and c.a",
    tag: "note",
    link: rootBranch + `/note?query=IT236`,
  },
  {
    name: "financial accounting",
    tag: "note, fa",
    link: rootBranch + "/note?query=ACC201",
  },
  {
    name: "business statistics",
    tag: "note",
    link: rootBranch + "/note?query=STT201",
  },
  {
    name: "discrete structure",
    tag: "note",
    link: rootBranch + "/note?query=IT235",
  },
  {
    name: "web technology II",
    tag: "note",
    link: rootBranch + "/note?query=IT239",
  },
];

//For sorting searchable items
items.sort((a, b) => a.name.localeCompare(b.name));

export default items;
