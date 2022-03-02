exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 799:
/***/ ((module) => {

// Exports
module.exports = {
	"subtitle": "Subtitle_subtitle__EIha5"
};


/***/ }),

/***/ 7471:
/***/ ((module) => {

// Exports
module.exports = {
	"inputMask": "InputMaskLib_inputMask__K3TSs"
};


/***/ }),

/***/ 2606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Subtitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Subtitle_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(799);
/* harmony import */ var _Subtitle_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Subtitle_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Subtitle = ({ text , padding , fontSize  })=>{
    const subtitleStyle = {
        padding: padding || "0px",
        fontSize: fontSize || "24px"
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: (_Subtitle_module_scss__WEBPACK_IMPORTED_MODULE_2___default().subtitle),
        style: subtitleStyle,
        children: text
    }));
};


/***/ }),

/***/ 3713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ InputMaskLib)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InputMaskLib_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7471);
/* harmony import */ var _InputMaskLib_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InputMaskLib_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4648);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);




const InputMaskLib = ({ mask , width , placeholder , handleTimeOrder , timeOrder  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_input_mask__WEBPACK_IMPORTED_MODULE_2___default()), {
        mask: mask,
        width: width,
        placeholder: placeholder,
        className: (_InputMaskLib_module_scss__WEBPACK_IMPORTED_MODULE_3___default().inputMask),
        onChange: (event)=>handleTimeOrder(event)
        ,
        value: timeOrder
    }));
};


/***/ })

};
;