import items from "./items";
const tags = ["coverpage"];
items.forEach((item) => {
  if (!tags.includes(item.tag)) {
    if (item.tag.includes(" ")) {
      const spaceContainingTags = item.tag.split(" ");
      spaceContainingTags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    } else {
      tags.push(item.tag);
    }
  }
});
tags.sort();
export default tags;
