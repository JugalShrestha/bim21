import { Link } from "react-router-dom";
import items from "./variables/items";

//this is for all the clickable items

interface Props {
  searchItem: string;
}

const Clickable: React.FC<Props> = ({ searchItem }) => {
  return (
    <>
      {searchItem === ""
        ? items.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="show-item"
              id="clickable"
            >
              {item.name}
            </Link>
          ))
        : items.map(
            (item, index) =>
              (item.name.includes(searchItem) ||
                item.tag.includes(searchItem)) && (
                <Link
                  to={item.link}
                  key={index}
                  className="show-item"
                  id="clickable"
                >
                  {item.name}
                </Link>
              )
          )}
    </>
  );
};

export default Clickable;
