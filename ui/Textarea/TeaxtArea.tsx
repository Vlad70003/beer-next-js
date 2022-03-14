import React, { useState } from "react";
import style from "./TeaxtArea.module.scss";

import { textareaState } from "../../types/textarea";

import { inputChanger } from "../../script/input/inputChanger";

export const TextArea = ({ border, width, margin, placeholder, resize, rows }: textareaState) => {
  const inputStyle = {
    border: border || "none",
    width: width || "auto",
    margin: margin || "0px",
  };

  const [textareaValue, setTextareaValue] = useState("");

  return (
    <textarea
      className={style.textarea}
      style={inputStyle}
      onChange={(event) => inputChanger(event, setTextareaValue)}
      placeholder={placeholder}
      rows={rows || 5}
    >
      {textareaValue}
    </textarea>
  );
};
