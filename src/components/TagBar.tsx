import { useState } from "react";
import rootBranch from "./variables/rootBranch";
import tags from "./variables/tags";
import { Link } from "react-router-dom";

const TagBar: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const numberOfTagsToShow = showMore ? tags.length : 6;
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="tag-bar">
      <div className="header">Tag list:</div>
      <div className="tag-list">
        {tags.slice(0, numberOfTagsToShow).map((tag, index) => (
          <Link
            to={`${rootBranch}/search?query=${encodeURIComponent(
              tag.toLowerCase()
            )}`}
            key={index}
            className="tags"
          >
            {tag}
          </Link>
        ))}
      </div>
      <div className="show-more" onClick={handleShowMore}>
        {showMore ? "Show less" : "Show more"}
      </div>
    </div>
  );
};

export default TagBar;
