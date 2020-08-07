import React, { useState } from "react";
import Progressbar from "../progressbar/Progressbar";

function Uploadfile() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const fileTypes = ["image/jpeg", "image/png"];

  const handleChange = (e) => {
    let selectedImg = e.target.files[0];

    if (selectedImg && fileTypes.includes(selectedImg.type)) {
      setFile(selectedImg);
      setError("");
    } else {
      setFile(null);
      setError("only jpeg and png file type allowed");
    }
  };

  return (
    <div className="file_upload">
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div>
        {error && <p className="redish">{error}</p>}
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </div>
  );
}

export default Uploadfile;
