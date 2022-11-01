import React from "react";

import { motion } from "framer-motion";

function Box4() {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li className="boxItem" variants={listVariant}></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Box4;
