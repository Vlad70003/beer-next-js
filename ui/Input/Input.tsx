import React, { useState } from "react";

import { inputState } from "../../types/input";

import { inputChanger } from "../../script/input/inputChanger";

export const Input = ({ border, width, type, disabled, checked, placeholder, margin, maxLength }: inputState) => {
  
  const inputStyle = {
    border: border || "none",
    width: width || "auto",
    margin: margin || "0px",
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type={type || "string"}
      className="input"
      style={inputStyle}
      onChange={(event) => inputChanger(event, setInputValue)}
      value={inputValue}
      disabled={disabled}
      checked={checked}
      placeholder={placeholder}
      maxLength={maxLength || "524288"}
    />
  );
};
