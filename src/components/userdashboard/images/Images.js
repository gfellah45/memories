import React from "react";
import { useDatabase } from "../../hooks/useDatabase";
import { motion } from "framer-motion";
import { projectStorage, projectDatabase } from "../../../firebase/config";
import Loader from "../loader/Loader";

function Images({ setImageurl }) {
  const { docs } = useDatabase("images");

  const handleDelete = (id) => {
    projectDatabase
      .doc(`images/${id}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data().filename;
        }
      })
      .then((res) => {
        projectStorage.ref().child(res).delete();
        return "successfull";
      })
      .then((resp) => {
        if (resp === "successfull") {
          projectDatabase
            .collection("images")
            .doc(id)
            .delete()
            .then(() => {
              console.log("deleted succesfully");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {docs.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-4">
          {docs &&
            docs.map((element) => (
              <motion.div className="" layout key={element.id}>
                <div>
                  <motion.div
                    className="image_wrap   m-auto "
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.img
                      src={element.url}
                      alt={element.url}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      onClick={() => setImageurl(element.url)}
                      className="w-full h-full"
                    />
                  </motion.div>

                  <div className="mt-2 text-center">
                    <button
                      onClick={() => handleDelete(element.id)}
                      className="px-4 text-center py-1 m-1 w-32 lg:w-1/3 bg-red-600 mx-2 text-white  rounded shadow"
                    >
                      Delete
                    </button>
                    <button
                      className="px-4 text-center py-1 m-1 w-32 lg:w-1/3 bg-blue-600 mx-2 text-white rounded shadow"
                      href={element.url}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Images;
