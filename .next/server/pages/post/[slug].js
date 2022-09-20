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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\n/* harmony import */ var _src_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/client.js */ \"./src/client.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_3__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_src_client_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: ({ value  })=>{\n            if (!value?.asset?._ref) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \"\",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, undefined);\n        }\n    }\n};\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , authorImage , body  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \" By \",\n                    name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(100).url()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 40,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                value: body,\n                components: ptComponents\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mczbr\\\\ffblog\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\r\ntitle,\r\n\"name\":author->name,\r\n\"authorImage\": author->image,\r\nbody\r\n}`;\nasync function getStaticPaths() {\n    const paths = await _src_client_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch((groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    const { slug =\"\"  } = context.params;\n    const post = await _src_client_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVCO0FBQ3dCO0FBQ0c7QUFDVjtBQUV4QyxTQUFTSSxNQUFNLENBQUVDLE1BQU0sRUFBRTtJQUNyQixPQUFPSix3REFBZSxDQUFFRSxzREFBTSxDQUFDLENBQUNHLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0NBQ2hEO0FBRUQsTUFBTUUsWUFBWSxHQUFHO0lBQ2pCQyxLQUFLLEVBQUU7UUFDSEYsS0FBSyxFQUFFLENBQUMsRUFBRUcsS0FBSyxHQUFFLEdBQUs7WUFDbEIsSUFBSSxDQUFDQSxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO2dCQUNyQixPQUFPLElBQUk7YUFDZDtZQUNELHFCQUNJLDhEQUFDQyxLQUFHO2dCQUNKQyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ksR0FBRyxJQUFJLEVBQUU7Z0JBQ3BCQyxPQUFPLEVBQUMsTUFBTTtnQkFDZEMsR0FBRyxFQUFFWCxNQUFNLENBQUNLLEtBQUssQ0FBQyxDQUFDTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozt5QkFDakUsQ0FDTDtTQUNKO0tBQ0o7Q0FDSjtBQUVELE1BQU1DLElBQUksR0FBRyxDQUFDLEVBQUNDLElBQUksR0FBQyxHQUFLO0lBQ3JCLE1BQU0sRUFDRkMsS0FBSyxFQUFHLGVBQWUsR0FDdkJDLElBQUksRUFBRyxjQUFjLEdBQ3JCQyxXQUFXLEdBQ1hDLElBQUksR0FDUCxHQUFHSixJQUFJO0lBQ1IscUJBQ0ksOERBQUNLLFNBQU87OzBCQUNKLDhEQUFDQyxJQUFFOzBCQUFFTCxLQUFLOzs7Ozt5QkFBTTswQkFDaEIsOERBQUNNLE1BQUk7O29CQUFDLE1BQUk7b0JBQUNMLElBQUk7b0JBQUMsR0FBQzs7Ozs7O3lCQUFPO1lBQ3ZCQyxXQUFXLGtCQUNSLDhEQUFDSyxLQUFHOzBCQUNBLDRFQUFDakIsS0FBRztvQkFDSkcsR0FBRyxFQUFFWCxNQUFNLENBQUNvQixXQUFXLENBQUMsQ0FDdkJSLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDVmMsR0FBRyxFQUFFOzs7Ozs2QkFFSjs7Ozs7eUJBQ0E7MEJBRVYsOERBQUM1Qiw2REFBWTtnQkFDYk8sS0FBSyxFQUFJZ0IsSUFBSTtnQkFDYk0sVUFBVSxFQUFFeEIsWUFBWTs7Ozs7eUJBQ3RCOzs7Ozs7aUJBQ0ksQ0FDYjtDQUNKO0FBRUQsTUFBTXlCLEtBQUssR0FBR2hDLDZDQUFJLENBQUM7QUFPbkIsT0FBTztJQUNILE1BQU1rQyxLQUFLLEdBQUc7SUFJZCxPQUFPOzs7YUFDa0NHLElBQUk7aUJBQUM7O1FBQzFDRSxRQUFRLEVBQUUsSUFBSTtLQUNqQjtDQUNKO0FBRUQsT0FBTztJQUNILE1BQU0sRUFBRUYsSUFBSTtJQUNaLE1BQU1oQixJQUFJLEdBQUc7OztBQUNiLElBQU87UUFDSHFCLEtBQUssRUFBRTtZQUFFckIsSUFBSTtTQUFFO0tBQ2xCO0NBQ0o7QUFFRCxlQUFlRCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZmYmxvZy8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcclxuaW1wb3J0IGltYWdlVVJMQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcclxuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCdcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9zcmMvY2xpZW50LmpzJ1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UpIHtcclxuICAgIHJldHVybiBpbWFnZVVSTEJ1aWxkZXIgKGNsaWVudCkuaW1hZ2Uoc291cmNlKVxyXG59XHJcblxyXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XHJcbiAgICB0eXBlczoge1xyXG4gICAgICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCAnJ31cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKS53aWR0aCgzMjApLmhlaWdodCgyNDApLmZpdCgnbWF4JykuYXV0bygnZm9ybWF0Jyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBQb3N0ID0gKHtwb3N0fSkgPT4ge1xyXG4gICAgY29uc3QgeyBcclxuICAgICAgICB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJywgXHJcbiAgICAgICAgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLFxyXG4gICAgICAgIGF1dGhvckltYWdlLFxyXG4gICAgICAgIGJvZHlcclxuICAgIH0gPSBwb3N0XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxzcGFuPiBCeSB7bmFtZX0gPC9zcGFuPlxyXG4gICAgICAgICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLndpZHRoKDEwMClcclxuICAgICAgICAgICAgICAgICAgICAudXJsKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8UG9ydGFibGVUZXh0XHJcbiAgICAgICAgICAgIHZhbHVlID0ge2JvZHl9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbnRpdGxlLFxyXG5cIm5hbWVcIjphdXRob3ItPm5hbWUsXHJcblwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcclxuYm9keVxyXG59YFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICAgICBncm9xIGAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoe3BhcmFtczp7c2x1Z319KSksIFxyXG4gICAgICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXNcclxuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBwb3N0IH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVUkxCdWlsZGVyIiwiUG9ydGFibGVUZXh0IiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiYXV0aG9ySW1hZ2UiLCJib2R5IiwiYXJ0aWNsZSIsImgxIiwic3BhbiIsImRpdiIsInVybCIsImNvbXBvbmVudHMiLCJxdWVyeSIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsIm1hcCIsInNsdWciLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

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

/***/ }),

/***/ "@portabletext/react":
/*!**************************************!*\
  !*** external "@portabletext/react" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@portabletext/react");;

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