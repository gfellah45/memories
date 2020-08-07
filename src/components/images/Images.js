import React from "react";
import { useDatabase } from "../hooks/useDatabase";
import { motion } from "framer-motion";

function Images({ setImageurl }) {
  const { docs } = useDatabase("images");
  console.log(docs);
  return (
    <>
      <div className="image_grid">
        {docs &&
          docs.map((element) => (
            <motion.div
              onClick={() => setImageurl(element.url)}
              className="image_wrap"
              layout
              whileHover={{ opacity: 1 }}
              key={element.id}
            >
              <motion.img
                src={element.url}
                alt={element.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </>
  );
}

export default Images;
