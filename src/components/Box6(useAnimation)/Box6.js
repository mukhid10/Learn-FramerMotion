import React, { useState } from "react";

import { motion, useAnimation } from "framer-motion";

function Box6() {
  const controll = useAnimation();

  return (
    <div className="box-container">
      <button
        onClick={() => {
          controll.start({
            x: 1000,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          controll.start({
            x: 0,
            transition: {
              duration: 2,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          controll.start({
            borderRadius: "50%",
            transiton: {
              duration: 2,
            },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          controll.start({
            borderRadius: "0%",
            transiton: {
              duration: 2,
            },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          controll.stop();
        }}
      >
        Stop
      </button>
      <motion.div className="box" animate={controll} tra></motion.div>
    </div>
  );
}

export default Box6;
