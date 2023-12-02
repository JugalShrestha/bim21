import { Link } from "react-router-dom";
import items from "./variables/items";
import { motion } from "framer-motion";

//this is for all the clickable items

interface Props {
  searchItem: string;
}

const vairants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
};

const Clickable: React.FC<Props> = ({ searchItem }) => {
  return (
    <>
      {searchItem === ""
        ? items.map((item, index) => (
            <motion.div
              initial="hidden"
              animate="show"
              variants={vairants}
              transition={{
                duration: 0.2,
                delay: index * 0.1,
                type: "spring",
                damping: 15,
                stiffness: 500,
              }}
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
                  initial="hidden"
                  animate="show"
                  variants={vairants}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.1,
                    type: "spring",
                    damping: 15,
                    stiffness: 500,
                  }}
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
