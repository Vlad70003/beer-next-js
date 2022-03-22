import React, { useState } from "react";
import Select from "react-select";
import style from "./InputSelect.module.scss";

import { citiesObject } from "./options";
import { customStyles } from "./customStyles.js";

import { inputSelectState } from "../../types/inputSelect";

export const InputSelect = ({
  placeholder,
  width,
  minWidth,
  border,
  transform,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [focus, setFocus] = useState(false);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleFocus = (value) => {
    setFocus(value);
  };

  return (
    <div style={{ minWidth: minWidth }}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
        options={citiesObject}
        placeholder={placeholder}
        minWidth={minWidth}
        border={border}
        transform={transform}
        className={width && style.selectWidth}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
      />
    </div>
  );
};
