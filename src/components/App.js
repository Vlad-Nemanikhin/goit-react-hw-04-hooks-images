import "./App.css";
import Gallery from "./imageGallery/imageGallery";
import Searchbar from "./searchbar/searchbar";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const formSubmitHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={formSubmitHandler} />

      <Gallery title={value} />
    </div>
  );
}
