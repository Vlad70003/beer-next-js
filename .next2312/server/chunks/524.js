exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 1017:
/***/ ((module) => {

// Exports
module.exports = {
	"catalog__title": "Catalog_catalog__title__2hiq_",
	"catalog__nav__list": "Catalog_catalog__nav__list__ney4_",
	"catalog__list": "Catalog_catalog__list__iHgwX",
	"catalog__item": "Catalog_catalog__item__n80qO"
};


/***/ }),

/***/ 1455:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "Product_product__uHBX_",
	"product__img": "Product_product__img__1gvza",
	"product__title": "Product_product__title__l4GDR",
	"product__grade": "Product_product__grade__YKLAc",
	"product__subtitle": "Product_product__subtitle__Xr_Y_",
	"product__production": "Product_product__production__H2s5Q",
	"product__hooter": "Product_product__hooter__zNQ2s",
	"product__production__leftSide": "Product_product__production__leftSide__Hy5a_",
	"product__production__price": "Product_product__production__price__QKsYh",
	"product__production__count": "Product_product__production__count__MAcvs"
};


/***/ }),

/***/ 6147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/product.d006be18.png","height":220,"width":220,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEX+/v79/f3////+/v79/v79/f38/Pz19fX19PX////+///+/v79/f38/Pz6+fn5+PT29vT29vL09PLy8/PRzs7Pzs7Auba6t7asvHynuniVtY6ooZ+inp6OnWeMnGt4mH2FeG96cWprcWlmamQNJ1ihAAAACXRSTlPg4P7+/v7+/v4vhsScAAAASElEQVR42hXLRxKAIBQE0REVHfkg5pzvf0dh11VdDxA19EoAozmN1ILUct9oMxi653aVhPDz2TEs1uvVMIdRfjnayFi8X8nkB3SDA2gj1L/hAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 1533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ Catalog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Catalog/Catalog.module.scss
var Catalog_module = __webpack_require__(1017);
var Catalog_module_default = /*#__PURE__*/__webpack_require__.n(Catalog_module);
// EXTERNAL MODULE: ./assests/variable/variable.ts
var variable = __webpack_require__(8935);
// EXTERNAL MODULE: ./ui/Button/Button.tsx + 1 modules
var Button = __webpack_require__(205);
// EXTERNAL MODULE: ./components/Product/Product.module.scss
var Product_module = __webpack_require__(1455);
var Product_module_default = /*#__PURE__*/__webpack_require__.n(Product_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Product/Product.tsx





const Product = ({ product  })=>{
    const { productImg , productCount , productGrade , productPrice , productProduction , productSubtitle , productTextButton , productTitle ,  } = product;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: (Product_module_default()).product,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (Product_module_default()).product__img__wrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: productImg,
                    alt: "",
                    className: (Product_module_default()).product__img,
                    width: 220,
                    height: 220
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (Product_module_default()).product__title__wrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Product_module_default()).product__title,
                    children: productTitle
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (Product_module_default()).product__grade__wrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Product_module_default()).product__grade,
                    children: productGrade
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (Product_module_default()).product__subtitle__wrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Product_module_default()).product__subtitle,
                    children: productSubtitle
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: (Product_module_default()).product__production__wrapper,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Product_module_default()).product__production,
                    children: productProduction
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: (Product_module_default()).product__hooter,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Product_module_default()).product__production__leftSide,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Product_module_default()).product__production__price,
                                children: productPrice
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Product_module_default()).product__production__count,
                                children: productCount
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Product_module_default()).product__production__rightSide,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                            title: "В\xa0корзину",
                            color: "white",
                            background: "#20598E",
                            padding: "11px 24px",
                            borderRadius: "60px"
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./assests/img/product.png
var product = __webpack_require__(6147);
;// CONCATENATED MODULE: ./assests/img/Coca-cola.jpg
/* harmony default export */ const Coca_cola = ({"src":"/_next/static/media/Coca-cola.0a5dcb69.jpg","height":1600,"width":1065,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAK6F/8QAGxAAAQQDAAAAAAAAAAAAAAAAAwACBREBEoH/2gAIAQEAAT8AjzkJISws3oEoms6y1//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AK//2Q=="});
;// CONCATENATED MODULE: ./assests/img/fish.png
/* harmony default export */ const fish = ({"src":"/_next/static/media/fish.aea5148f.png","height":220,"width":220,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42mNAAky1GanMz168YgGyQZgZLuHt4bMpIjzqnpaG9lUg/3p+Ruq9iY1lB4FsLgaQytSk9AfBfoH/w9w9/s+ePvv/wV2b/zeUZH9mYNCQZzi1aQqbp73TzXkzpv2/efXa74unTvxprSn931iS93XNgslODJvnt2c0FWd+am2o+99SlvdnUnP9n/27dv6vr6x4CjRdgKGmslbI3dnlQXZK0v+1y1f/P3XkyP8ZUyb/D/YPe5eamiHMAAJFaTE7V8yf+nTz+lU3wwL9b6mIKTyMi4o9DpTih/mEA4i5gZgThM2stLhAPpg1ZTojAHajY0QHKYK6AAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assests/img/meat.png
/* harmony default export */ const meat = ({"src":"/_next/static/media/meat.892605cc.png","height":220,"width":220,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42mMAg+R6RiDJzGAbzAyis0pqQDQjWO7///+Mfi5umz1trR9YGxle83O0ua4mr3jHztLmQH5WHi/DxNnLmMN8/e7H+vv+D3Z3++9hY/XfzkDrv7ez08eK4koRhvXb9zIHe3lfC3Zz/R/o4vg73Nvjj7ul6X9vW6tniiYOIgwMhXNY4gL9riUG+f5PDA357eNg98fBSOe/v5vbs/KyGmEGBv0slviw0Acxvu7/Q9yd/7sBdVtqqf73d/d839zUKcxw4eJNJk8X961uNtaPTHU0b5jq6t400dK8b2lieigpIZWPAQpYgZiDQc2Og0Faj4OBXZUDyGdjYGBgAACW5lOfOcZqIwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./assests/img/chease.jpg
/* harmony default export */ const chease = ({"src":"/_next/static/media/chease.1fc15a2d.jpg","height":900,"width":900,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAIiY7//EABwQAAMAAQUAAAAAAAAAAAAAAAECAwQABRESMf/aAAgBAQABPwCONtWYsoyjOQVBV3RWTl2HX06//8QAGhEAAQUBAAAAAAAAAAAAAAAAAgABERIzgf/aAAgBAgEBPwA7zobdX//EABgRAQADAQAAAAAAAAAAAAAAAAIAAREi/9oACAEDAQE/ACTe8Gf/2Q=="});
;// CONCATENATED MODULE: ./assests/img/snack.jpg
/* harmony default export */ const snack = ({"src":"/_next/static/media/snack.aa67ba90.jpg","height":800,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApoC//8QAHRAAAQIHAAAAAAAAAAAAAAAAAgABAxIiMUFFkf/aAAgBAQABPwDd2iMIm2Sleni//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECQXL/2gAIAQIBAT8Ahemf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJBcf/aAAgBAwEBPwBph//Z"});
;// CONCATENATED MODULE: ./assests/img/other.jpg
/* harmony default export */ const other = ({"src":"/_next/static/media/other.7e84d98a.jpg","height":1200,"width":435,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgAAwMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAhA//xAAZEAACAwEAAAAAAAAAAAAAAAACAwEEEQD/2gAIAQEAAT8AstupsNWrDASnChZz3//EABYRAQEBAAAAAAAAAAAAAAAAAAEhAP/aAAgBAgEBPwAYQ3//xAAXEQADAQAAAAAAAAAAAAAAAAAAARJh/9oACAEDAQE/AJ1n/9k="});
;// CONCATENATED MODULE: ./components/Product/productExample.ts







const BeerExample = [
    {
        productImg: product/* default */.Z,
        productTitle: "Пиво Jaws \xabАтомная Прачечная\xbb",
        productGrade: "Светлое, 0.5\xa0л",
        productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
        productProduction: "Производство: Бельгия",
        productPrice: "105\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: product/* default */.Z,
        productTitle: "Пиво Jaws \xabАтомная Прачечная\xbb",
        productGrade: "Светлое, 0.5\xa0л",
        productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
        productProduction: "Производство: Бельгия",
        productPrice: "105\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: product/* default */.Z,
        productTitle: "Пиво Jaws \xabАтомная Прачечная\xbb",
        productGrade: "Светлое, 0.5\xa0л",
        productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
        productProduction: "Производство: Бельгия",
        productPrice: "105\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: product/* default */.Z,
        productTitle: "Пиво Jaws \xabАтомная Прачечная\xbb",
        productGrade: "Светлое, 0.5\xa0л",
        productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
        productProduction: "Производство: Бельгия",
        productPrice: "105\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: product/* default */.Z,
        productTitle: "Пиво Jaws \xabАтомная Прачечная\xbb",
        productGrade: "Светлое, 0.5\xa0л",
        productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
        productProduction: "Производство: Бельгия",
        productPrice: "105\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: product/* default */.Z,
        productTitle: "Пиво Jaws \xabАтомная Прачечная\xbb",
        productGrade: "Светлое, 0.5\xa0л",
        productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
        productProduction: "Производство: Бельгия",
        productPrice: "105\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: product/* default */.Z,
        productTitle: "Пиво Jaws \xabАтомная Прачечная\xbb",
        productGrade: "Светлое, 0.5\xa0л",
        productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
        productProduction: "Производство: Бельгия",
        productPrice: "105\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: product/* default */.Z,
        productTitle: "Пиво Jaws \xabАтомная Прачечная\xbb",
        productGrade: "Светлое, 0.5\xa0л",
        productSubtitle: "Алкоголь: 4,0% Плотность: 16,0%",
        productProduction: "Производство: Бельгия",
        productPrice: "105\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    }, 
];
const beveragesExaple = [
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: Coca_cola,
        productTitle: "Кока-кола\xbb",
        productGrade: "0.5\xa0л",
        productSubtitle: "Алкоголь: 0%",
        productProduction: "Производство: Россия",
        productPrice: "50\xa0₽",
        productCount: "цена за\xa01\xa0шт",
        productTextButton: "В\xa0корзину"
    }, 
];
const fishExaple = [
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: fish,
        productTitle: "Лещь",
        productGrade: "На развес",
        productSubtitle: "Вяленая",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    }, 
];
const meatExaple = [
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: meat,
        productTitle: "Вяленое мясо",
        productGrade: "На развес",
        productSubtitle: "Вяленое",
        productProduction: "Производство: Россия",
        productPrice: "450\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    }, 
];
const cheaseExaple = [
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: chease,
        productTitle: "Пармезан",
        productGrade: "На развес",
        productSubtitle: "Мягкий сыр",
        productProduction: "Производство: Италия",
        productPrice: "250\xa0₽",
        productCount: "цена за\xa0100\xa0гр",
        productTextButton: "В\xa0корзину"
    }, 
];
const snackExaple = [
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: snack,
        productTitle: "Чипсы Rice Up",
        productGrade: "1 шт",
        productSubtitle: "Чипсы",
        productProduction: "Производство: Россия",
        productPrice: "150\xa0₽",
        productCount: "цена за\xa060\xa0гр",
        productTextButton: "В\xa0корзину"
    }, 
];
const otherExaple = [
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    },
    {
        productImg: other,
        productTitle: "Ягуар Оригинальный",
        productGrade: "1 шт",
        productSubtitle: "Алкоголь: 7,0% Плотность: 16,0%",
        productProduction: "Производство: Россия",
        productPrice: "Бесценно",
        productCount: "цена за\xa00.5 мл",
        productTextButton: "В\xa0корзину"
    }, 
];

;// CONCATENATED MODULE: ./components/Catalog/Catalog.tsx







function Catalog({ title , sortButton , product  }) {
    const { 0: currentProduct , 1: setCurrentProduct  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        switch(product){
            case "beer":
                setCurrentProduct(BeerExample);
                break;
            case "bottled":
                setCurrentProduct(BeerExample);
                break;
            case "beverages":
                setCurrentProduct(beveragesExaple);
                break;
            case "fishes":
                setCurrentProduct(fishExaple);
                break;
            case "meat":
                setCurrentProduct(meatExaple);
                break;
            case "chease":
                setCurrentProduct(cheaseExaple);
                break;
            case "snacks":
                setCurrentProduct(snackExaple);
                break;
            case "other":
                setCurrentProduct(otherExaple);
                break;
            default:
                return;
        }
    }, [
        product
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (Catalog_module_default()).catalog,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (Catalog_module_default()).catalog__title,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (Catalog_module_default()).catalog__nav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (Catalog_module_default()).catalog__nav__list,
                    children: sortButton === null || sortButton === void 0 ? void 0 : sortButton.map((item, ind)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Catalog_module_default()).catalog__nav__item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                                title: item,
                                background: variable/* baseBackground */.w,
                                padding: "13px 40px",
                                color: "#434242",
                                border: "1px solid #C5C5C580",
                                borderRadius: "40px",
                                margin: "14px 25px 0 0"
                            })
                        }, ind));
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (Catalog_module_default()).catalog__list,
                children: currentProduct === null || currentProduct === void 0 ? void 0 : currentProduct.map((item, ind)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (Catalog_module_default()).catalog__item,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Product, {
                            product: item
                        })
                    }, ind));
                })
            })
        ]
    }));
}


/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NY": () => (/* binding */ BeerAndCider),
/* harmony export */   "M": () => (/* binding */ Beverages),
/* harmony export */   "aR": () => (/* binding */ Fish),
/* harmony export */   "yf": () => (/* binding */ Meat),
/* harmony export */   "re": () => (/* binding */ Chease),
/* harmony export */   "r_": () => (/* binding */ Snacks),
/* harmony export */   "PL": () => (/* binding */ Other)
/* harmony export */ });
const BeerAndCider = [
    "Светлое",
    "Тёмное",
    "Фильтрованное",
    "Нефильтрованное",
    "Безалкогольное",
    "Сидр",
    "Эль",
    "Пшеничное",
    "Крафтовое",
    "Карамельное",
    "Фруктовое",
    "С горчинкой", 
];
const Beverages = [
    "Лимонад",
    "Квас",
    "Газированная вода",
    "Не газированная вода",
    "Минеральная вода", 
];
const Fish = [
    "Вяленная",
    "Копченая",
    "Соленая",
    "Свежая"
];
const Meat = [
    "Вяленное",
    "Копченое",
    "Сырокопченое",
    "На костре"
];
const Chease = [
    "Твердые",
    "Полутвердые",
    "Мягкие"
];
const Snacks = [
    "Чипсы",
    "Сырные",
    "Мясные ",
    "Соломка ",
    "Орешки "
];
const Other = [
    "Прочее"
];


/***/ })

};
;