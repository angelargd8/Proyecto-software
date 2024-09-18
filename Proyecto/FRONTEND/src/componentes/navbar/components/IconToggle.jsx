import * as React from "react";
import { motion } from "framer-motion";
import "./IconToggle.css";

const Path = ({ spanColor, ...props }) => (
  <motion.path
    fill={spanColor}
    strokeWidth="3"
    stroke={spanColor}
    strokeLinecap="round"
    {...props}
  />
);

export const IconToggle = ({ toggle, spanColor, extraStyles }) => (
  <button onClick={toggle} className="iconButton" id="iconButton">
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      style={{ marginTop: 30, ...extraStyles }}
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        spanColor={spanColor}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        spanColor={spanColor}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        spanColor={spanColor}
      />
    </svg>
  </button>
);
