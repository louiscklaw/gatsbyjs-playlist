import * as React from "react";
import { motion } from "framer-motion";

function Example() {
  return(
    <>
      <motion.div
        animate={{ scale: 2.5 }}
        style={{
          background: "white",
          borderRadius: "30px",
          width: "150px",
          height: "150px"
        }}
      />
    </>
  )
}

export {Example}
