import React, { useState } from "react";
import style from "./InputRadio.module.scss";
import { RadioGroup } from "react-radio-input";

export const InputRadio = ({ children, initialState, className }) => {

  const initialValue = initialState;
  const [selectedFruit, setSelectedFruit] = useState(initialValue);

  return (
    <RadioGroup
      className={`${style[className]}`}
      name="favoriteFruit"
      onChange={setSelectedFruit}
      selectedValue={selectedFruit}
    >
      {children}
    </RadioGroup>
  );
};
