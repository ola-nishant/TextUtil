// modules
import React, { useState } from "react";

function Form(props) {
  // constants

  // states
  const [text, setText] = useState("");

  // functions
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
  };
  const handleClrClick = () => {
    setText("");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleCpyClick = () => {
    let textArea = document.getElementById("textArea");
    textArea.select();
    document.execCommand("copy");
  };

  // jsx
  return (
    <>
      {/* heading */}
      <h1>Enter text here</h1>

      {/* form  */}
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textArea"
          rows="3"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* buttons */}
      <button type="button" className="btn btn-primary" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={handleLowClick}
      >
        Convert to lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClrClick}
      >
        Clear text
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={handleCpyClick}
      >
        Copy text
      </button>

      {/* analytics */}
      <div>
        <h2 className="my-3">Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>Time to read is {(text.split(" ").length - 1) * 0.008} minutes</p>
        <h2 className="my-3">Preview</h2>
        <p>{(text.length===0)?"Please enter some text to preview it here":text}</p>
      </div>
    </>
  );
}

// exports
export default Form;
