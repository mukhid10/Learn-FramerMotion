import React from "react";

import { motion } from "framer-motion";

function Box2() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        drag
        dragConstraints={{
          right: 20,
          left: -10,
          top: 5,
          bottom: 5,
        }}
      ></motion.div>
    </div>
  );
}

export default Box2;
