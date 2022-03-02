exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 9769:
/***/ ((module) => {

// Exports
module.exports = {
	"additionalPage__contscts__header": "AdditionPageWrapper_additionalPage__contscts__header__8Du0I",
	"additionalPage__contscts__header__title": "AdditionPageWrapper_additionalPage__contscts__header__title___p_1J",
	"additionalPage__contscts__header__wrapper": "AdditionPageWrapper_additionalPage__contscts__header__wrapper__OU5Sc"
};


/***/ }),

/***/ 6069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ AdditionalPageWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdditionPageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9769);
/* harmony import */ var _AdditionPageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AdditionPageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _components_Bonus_Bonus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7481);
/* harmony import */ var _components_CartCounter_CartCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5714);





const AdditionalPageWrapper = ({ children , title , bonus , price  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_AdditionPageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().additionalPage),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: (_AdditionPageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().additionalPage__contscts__header),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_AdditionPageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().additionalPage__contscts__header__title),
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_AdditionPageWrapper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().additionalPage__contscts__header__wrapper),
                        children: [
                            bonus && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Bonus_Bonus__WEBPACK_IMPORTED_MODULE_2__/* .Bonus */ .r, {}),
                            price && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: "/Ordering",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CartCounter_CartCounter__WEBPACK_IMPORTED_MODULE_3__/* .CartCounter */ .l, {})
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    }));
};


/***/ })

};
;