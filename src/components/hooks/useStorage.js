import { useState, useEffect } from "react";
import {
  projectStorage,
  projectDatabase,
  timeStamp,
} from "../../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //getting refrence where file is saved

    const storageRef = projectStorage.ref(file.name);
    const databseRef = projectDatabase.collection("images");
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
        databseRef.add({ url, created_At });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
