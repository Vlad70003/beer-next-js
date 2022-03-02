export const customStyles = {
  
  option: (provided, state) => ({
    ...provided,
    padding: 10,
  }),

  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "100%",
    borderRadius: "20px",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
