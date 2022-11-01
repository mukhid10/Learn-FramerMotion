import React from "react";

import { motion } from "framer-motion";

function Box3() {
  const boxVariant = {
    lion: {
      x: 100,
      scale: 1.5,
    },
    elephant: {
      x: 100,
      scale: 0.5,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="elephant"
      ></motion.div>
    </div>
  );
}

export default Box3;
