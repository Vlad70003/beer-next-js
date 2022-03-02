import React, { useState } from "react";
import Select from "react-select";
import style from "./InputSelect.module.scss";

import { citiesObject } from "./options";
import { customStyles } from "./customStyles";

import { inputSelectState } from "../../types/inputSelect";

export const InputSelect = ({ placeholder, width }: inputSelectState) => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [focus, setFocus] = useState(false);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const handleFocus = (value: boolean) => {
    setFocus(value);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      styles={customStyles}
      options={citiesObject}
      placeholder={placeholder}
      className={width && style.selectWidth}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      onFocus={() => handleFocus(true)}
      onBlur={() => handleFocus(false)}
    />
  );
};
