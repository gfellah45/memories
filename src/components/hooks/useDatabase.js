import { useState, useEffect, useContext } from "react";
import { photoContext } from "../../context/index";
import { projectDatabase } from "../../firebase/config";

const useDatabase = (collection) => {
  const [docs, setDocs] = useState([]);
  const { currentUser } = useContext(photoContext);

  useEffect(() => {
    const unsubscribe = projectDatabase
      .collection(collection)
      .orderBy("created_At", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        const { email } = currentUser;

        // let userDetails = snap.filter((ele) => ele.email === email);
        // console.log(currentUser);
        snap.forEach((doc) => {
          if (doc.data().email === email) {
            documents.push({ ...doc.data(), id: doc.id });
          }
        });
        setDocs(documents);
      });
    return () => unsubscribe();
  }, [collection, currentUser]);

  return { docs };
};

export { useDatabase };
