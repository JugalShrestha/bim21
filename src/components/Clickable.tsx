import { Link } from "react-router-dom";
import items from "./variables/items";
import { motion } from "framer-motion";

//this is for all the clickable items

interface Props {
  searchItem: string;
}

const Clickable: React.FC<Props> = ({ searchItem }) => {
  return (
    <>
      {searchItem === ""
        ? items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              key={index}
            >
              <Link
                to={item.link}
                key={index}
                className="show-item"
                id="clickable"
              >
                {item.name}
              </Link>
            </motion.div>
          ))
        : items.map(
            (item, index) =>
              (item.name.includes(searchItem) ||
                item.tag.includes(searchItem)) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  key={index}
                >
                  <Link
                    to={item.link}
                    key={index}
                    className="show-item"
                    id="clickable"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )
          )}
    </>
  );
};

export default Clickable;
