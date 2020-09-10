import { useState, useEffect, useContext } from "react";
import {
  projectStorage,
  projectDatabase,
  timeStamp,
} from "../../firebase/config";

import { photoContext } from "../../context/index";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { currentUser } = useContext(photoContext);

  useEffect(() => {
    //getting refrence where file is saved

    const storageRef = projectStorage.ref(file.name);
    const databseRef = projectDatabase.collection("images");
    const { email } = currentUser;

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        let url = await storageRef.getDownloadURL();
        setUrl(url);
        const created_At = timeStamp();
        const filename = file.name;

        databseRef.add({ url, email, filename, created_At });
      }
    );
  }, [file, currentUser]);

  return { progress, url, error };
};

export default useStorage;
