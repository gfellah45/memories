import React, { useState } from "react";

import "./App.css";
import Heading from "./components/heading/Heading";
import Uploadfile from "./components/fileupload/Uploadfile";
import Images from "./components/images/Images";
import Modal from "./components/modal/Modal";

function App() {
  const [imageurl, setImageurl] = useState(null);
  return (
    <div className="App">
      <Heading />
      <Uploadfile />
      <Images setImageurl={setImageurl} />
      {imageurl && <Modal setImageurl={setImageurl} imageurl={imageurl} />}
    </div>
  );
}

export default App;
