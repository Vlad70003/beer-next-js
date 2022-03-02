import React, { useState } from "react";
import style from "./InputRadio.module.scss";
import { RadioGroup } from "react-radio-input";

export const InputRadio = ({ children, initialState, flex, className }) => {

  const initialValue = initialState;
  const [selectedFruit, setSelectedFruit] = useState(initialValue);

  const RadioGroupStyle = {
    flex: flex,
  }

  return (
    <RadioGroup
      className={`${style[className]}`}
      name="favoriteFruit"
      onChange={setSelectedFruit}
      selectedValue={selectedFruit}
      style={RadioGroupStyle}
    >
      {children}
    </RadioGroup>
  );
};
