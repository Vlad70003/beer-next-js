import React, { useState } from "react";
import Select from "react-select";
import style from "./InputSelect.module.scss";

import { customStyles } from "./customStyles";

interface InputSelectTypes {
  placeholder: string,
  options?: any,
  width: string,
  minWidth: string,
  border: string,
  transform: boolean,
  selectedOption?: any,
  setSelectedOption?:any,
  noOptionsMessage?:any,
}

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
}:InputSelectTypes) => {

  const [focus, setFocus] = useState(false);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const handleFocus = (value: boolean | ((prevState: boolean) => boolean)) => {
    setFocus(value);
  };

  return (
    <div style={{ minWidth: minWidth, border: border, borderRadius: "20px" }}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
        options={options}
        placeholder={placeholder}
        // minWidth={minWidth}
        // border={border}
        // transform={transform}
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
