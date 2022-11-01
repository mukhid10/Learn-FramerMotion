import React, { useState } from "react";
import { motion } from "framer-motion";

function Box1() {
  const [animation, setAnimation] = useState(false);
  console.log(animation);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: animation ? "80vw" : 0,
          opacity: animation ? 1 : 0.3,
          rotate: animation ? 360 : 0,
        }}
        initial={{
          opacity: 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onClick={() => setAnimation(!animation)}
      ></motion.div>
    </div>
  );
}

export default Box1;
