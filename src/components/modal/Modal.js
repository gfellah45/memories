import React from "react";
import { motion } from "framer-motion";

function Modal({ imageurl, setImageurl }) {
  const hadleClick = (e) => {
    if (e.target.classList.contains("modal_backdrop")) {
      setImageurl(null);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal_backdrop"
      onClick={hadleClick}
    >
      <motion.img
        initial={{ x: "-1000vw" }}
        animate={{ x: 0 }}
        src={imageurl}
        alt="enlarged"
      />
    </motion.div>
  );
}

export default Modal;
