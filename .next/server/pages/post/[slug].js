"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/client.js */ \"./src/client.js\");\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_src_client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).image(source);\n}\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , authorImage  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \" By \",\n                    name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\r\ntitle,\r\n\"name\":author->name,\r\n\"authorImage\": author->image\r\n}`;\nasync function getStaticPaths() {\n    const paths = await _src_client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    const { slug =\"\"  } = context.params;\n    const post = await _src_client_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUI7QUFDd0I7QUFDUDtBQUV4QyxTQUFTRyxNQUFNLENBQUVDLE1BQU0sRUFBRTtJQUNyQixPQUFPSCx3REFBZSxDQUFFQyxzREFBTSxDQUFDLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0NBQ2hEO0FBRUQsTUFBTUUsSUFBSSxHQUFHLENBQUMsRUFBQ0MsSUFBSSxHQUFDLEdBQUs7SUFDckIsTUFBTSxFQUNGQyxLQUFLLEVBQUcsZUFBZSxHQUN2QkMsSUFBSSxFQUFHLGNBQWMsR0FDckJDLFdBQVcsR0FDZCxHQUFHSCxJQUFJO0lBQ1IscUJBQ0ksOERBQUNJLFNBQU87OzBCQUNKLDhEQUFDQyxJQUFFOzBCQUFFSixLQUFLOzs7Ozt5QkFBTTswQkFDaEIsOERBQUNLLE1BQUk7O29CQUFDLE1BQUk7b0JBQUNKLElBQUk7b0JBQUMsR0FBQzs7Ozs7O3lCQUFPO1lBQ3ZCQyxXQUFXLGtCQUNSLDhEQUFDSSxLQUFHOzBCQUNBLDRFQUFDQyxLQUFHO29CQUNKQyxHQUFHLEVBQUViLE1BQU0sQ0FBQ08sV0FBVyxDQUFDLENBQ3ZCTyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQ1RDLEdBQUcsRUFBRTs7Ozs7NkJBRUo7Ozs7O3lCQUNBOzs7Ozs7aUJBRUosQ0FDYjtDQUNKO0FBRUQsTUFBTUMsS0FBSyxHQUFHbkIsNkNBQUksQ0FBQztBQU1uQixPQUFPO0lBQ0gsTUFBTXFCLEtBQUssR0FBRztJQUlkLE9BQU87O1NBQzBCSSxNQUFNLEVBQUM7b0JBQUNELElBQUk7O2FBQUUsQ0FBQyxDQUFDO1FBQzdDRSxRQUFRLEVBQUUsSUFBSTtLQUNqQjtDQUNKO0FBRUQsT0FBTztJQUNILE1BQU0sRUFBRUYsSUFBSSxFQUFHLEVBQUU7SUFDakI7O0FBQWdEO0lBQ2hELE9BQU87UUFDSEssS0FBSyxFQUFFO1lBQUV0Qjs7S0FDWjtDQUNKO0FBRUQsZUFBZUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZmJsb2cvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncm9xIGZyb20gJ2dyb3EnXHJcbmltcG9ydCBpbWFnZVVSTEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vc3JjL2NsaWVudC5qcydcclxuXHJcbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VVUkxCdWlsZGVyIChjbGllbnQpLmltYWdlKHNvdXJjZSlcclxufVxyXG5cclxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcclxuICAgIGNvbnN0IHsgXHJcbiAgICAgICAgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsIFxyXG4gICAgICAgIG5hbWUgPSAnTWlzc2luZyBuYW1lJyxcclxuICAgICAgICBhdXRob3JJbWFnZVxyXG4gICAgfSA9IHBvc3RcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPHNwYW4+IEJ5IHtuYW1lfSA8L3NwYW4+XHJcbiAgICAgICAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSlcclxuICAgICAgICAgICAgICAgICAgICAud2lkdGgoNTApXHJcbiAgICAgICAgICAgICAgICAgICAgLnVybCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbnRpdGxlLFxyXG5cIm5hbWVcIjphdXRob3ItPm5hbWUsXHJcblwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZVxyXG59YFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICAgICBncm9xIGAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoe3BhcmFtczp7c2x1Z319KSksIFxyXG4gICAgICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXNcclxuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBwb3N0IH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVUkxCdWlsZGVyIiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJQb3N0IiwicG9zdCIsInRpdGxlIiwibmFtZSIsImF1dGhvckltYWdlIiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsImRpdiIsImltZyIsInNyYyIsIndpZHRoIiwidXJsIiwicXVlcnkiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJtYXAiLCJzbHVnIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"aqqopmgs\",\n    dataset: \"production\",\n    useCdn: true\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUUxQyxpRUFBZUEscURBQVksQ0FBQztJQUN4QkMsU0FBUyxFQUFFLFVBQVU7SUFDckJDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCQyxNQUFNLEVBQUUsSUFBSTtDQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZmJsb2cvLi9zcmMvY2xpZW50LmpzPzRiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiQHNhbml0eS9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQ6ICdhcXFvcG1ncycsXHJcbiAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXHJcbiAgICB1c2VDZG46IHRydWVcclxufSkiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client.js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();