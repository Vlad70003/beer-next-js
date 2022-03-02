exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 4016:
/***/ ((module) => {

// Exports
module.exports = {
	"selectWidth": "InputSelect_selectWidth__fOJCn"
};


/***/ }),

/***/ 7143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ InputSelect)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(1929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
// EXTERNAL MODULE: ./ui/Select/InputSelect.module.scss
var InputSelect_module = __webpack_require__(4016);
var InputSelect_module_default = /*#__PURE__*/__webpack_require__.n(InputSelect_module);
;// CONCATENATED MODULE: ./ui/Select/options.ts
const citiesObject = [
    {
        value: "архангельская",
        label: "Архангельская"
    },
    {
        value: "московская",
        label: "Московская"
    },
    {
        value: "ленинградская",
        label: "Ленинградская"
    }, 
];

;// CONCATENATED MODULE: ./ui/Select/customStyles.js
const customStyles = {
    option: (provided, state)=>({
            ...provided,
            padding: 10
        })
    ,
    control: ()=>({
            // none of react-select's styles are passed to <Control />
            width: "100%",
            borderRadius: "20px"
        })
    ,
    singleValue: (provided, state)=>{
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "opacity 300ms";
        return {
            ...provided,
            opacity,
            transition
        };
    }
};

;// CONCATENATED MODULE: ./ui/Select/InputSelect.tsx






const InputSelect = ({ placeholder , width  })=>{
    const { 0: selectedOption1 , 1: setSelectedOption  } = (0,external_react_.useState)(null);
    const { 0: focus , 1: setFocus  } = (0,external_react_.useState)(false);
    const handleChange = (selectedOption)=>{
        setSelectedOption(selectedOption);
    };
    const handleFocus = (value)=>{
        setFocus(value);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
        value: selectedOption1,
        onChange: handleChange,
        styles: customStyles,
        options: citiesObject,
        placeholder: placeholder,
        className: width && (InputSelect_module_default()).selectWidth,
        components: {
            DropdownIndicator: ()=>null
            ,
            IndicatorSeparator: ()=>null
        },
        onFocus: ()=>handleFocus(true)
        ,
        onBlur: ()=>handleFocus(false)
    }));
};


/***/ })

};
;