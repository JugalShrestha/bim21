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
  { name: "java course", tag: "note", link: rootBranch + "/na" },
  {
    name: "data structure and algorithm",
    tag: "note, dsa",
    link: rootBranch + "/na",
  },
  {
    name: "web technology i",
    tag: "note",
    link: rootBranch + "/na",
  },
  { name: "microprocessor and c.a", tag: "note", link: rootBranch + "/mpca" },
  {
    name: "financial accounting",
    tag: "note, fa",
    link: rootBranch + "/financial-accounting",
  },
  {
    name: "business statistics",
    tag: "note",
    link: rootBranch + "/na",
  },
  {
    name: "discrete structure",
    tag: "note",
    link: rootBranch + "/na",
  },
  {
    name: "web technology II",
    tag: "note",
    link: rootBranch + "/na",
  },
];

//For sorting searchable items
items.sort((a, b) => a.name.localeCompare(b.name));

export default items;
