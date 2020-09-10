import React, { useEffect } from "react";
import useStroage from "../../hooks/useStorage";
import { motion } from "framer-motion";

function Progressbar({ file, setFile }) {
  const { progress, url } = useStroage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <motion.div
        className="progressbar"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
        style={{
          backgroundColor: "teal",
          height: "5px",
        }}
      ></motion.div>
    </div>
  );
}

export default Progressbar;
