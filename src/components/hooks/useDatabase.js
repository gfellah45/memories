import { useState, useEffect } from "react";

import { projectDatabase } from "../../firebase/config";

const useDatabase = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = projectDatabase
      .collection(collection)
      .orderBy("created_At", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export { useDatabase };
