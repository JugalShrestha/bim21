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
  { name: "java course", tag: "note", link: rootBranch + "/java-course" },
];

//For sorting searchable items
items.sort((a, b) => a.name.localeCompare(b.name));

export default items;
