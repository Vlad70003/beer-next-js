export const customStyles = {
  
  option: (provided, state) => ({
    ...provided,
    padding: 10,
    backgroundColor: state.isDisabled
    ? undefined
    : state.isSelected
    ? "grey"
    : state.isFocused
    ? "#EBEBEB"
    : undefined, 
  }),

  menu: (provided, state) => ({
    ...provided,
    margin:  state.selectProps.transform ? "0px" : "10px 0",
    color: state.selectProps.menuColor,
    borderRadius: state.selectProps.transform ? "0px 0px 20px 20px" : "10px",
    borderTop: state.selectProps.transform ? "none" : state.selectProps.border,
    border: "1px solid #BFBFBF",
  }),

  control: (provided, state) => ({
    borderRadius: (state.menuIsOpen && state.selectProps.transform) ? "17px 17px 0px 0px" : "20px",
    minWidth: state.selectProps.minWidth,
    border: state.selectProps.border,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    const padding = "0px";
    const margin = "0px";

    return { ...provided, opacity, transition, padding, margin };
  },
};
