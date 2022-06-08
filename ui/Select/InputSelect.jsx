import React, { useState } from "react";
import Select from "react-select";
import style from "./InputSelect.module.scss";

import { customStyles } from "./customStyles.js";

export const InputSelect = ({
  placeholder,
  options,
  width,
  minWidth,
  border,
  transform,
  selectedOption,
  setSelectedOption,
  noOptionsMessage
}) => {

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
        options={options}
        placeholder={placeholder}
        minWidth={minWidth}
        border={border}
        transform={transform}
        noOptionsMessage={() => noOptionsMessage}
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
