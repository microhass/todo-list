/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}

:root {
  --pri-background: #121212;
  --sec-background: #292929;
  --text-color: #fff;
  --hover-color: #303030;
  --focus-color: #383838;
  --btn-background: #26b13d;
  --btn-hover: #3ec554;
  --btn-color: #000;
  --header-color: #3cff5c;
}

.light-mode {
  --pri-background: #e7e7e7;
  --sec-background: #fff;
  --text-color: #000;
  --hover-color: #f0f0f0;
  --focus-color: #c8ffd8;
  --btn-background: #1d16e4;
  --btn-hover: #4039ff;
  --btn-color: #fff;
  --header-color: #1d16e4;
}

body {
  background-color: var(--pri-background);
  color: var(--text-color);
  display: grid;
  place-items: center;
  padding: 10vh 0;
  min-height: 100vh;
}

main {
  background-color: var(--sec-background);
  height: fit-content;
  padding: 24px 0 0 0;
  width: 80vw;
  max-width: 700px;
  margin-bottom: auto;
  border-radius: 8px;
}

main .title {
  text-transform: capitalize;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 10px;
  color: var(--header-color);
}

img {
  width: 20px;
  cursor: pointer;
}

.task img {
  cursor: move;
}

img:hover {
  filter: brightness(0) invert(1);
}

.title .themer img {
  width: 30px;
}

.light-mode img:hover {
  filter: brightness(0);
}

.themer #dark {
  width: 20px;
  display: none;
}

main ul {
  background-color: var(--pri-background);
  border-top: 2px solid var(--pri-background);
}

ul li {
  list-style-type: none;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--sec-background);
  margin-bottom: 2px;
}

li:hover {
  background-color: var(--hover-color);
}

li:focus-within {
  background-color: var(--focus-color);
}

form {
  width: 90%;
}

li form#tasks {
  margin-right: auto;
  margin-left: 18px;
}

form input {
  background-color: transparent;
  color: var(--text-color);
  border: none;
  outline: none;
  padding: 20px 0;
  font-size: 16px;
  width: 100%;
}

input[type='checkbox'] {
  width: 16px;
  height: 16px;
  outline: 1px solid var(--pri-background);
  cursor: pointer;
}

input[type='checkbox']:checked + form input {
  text-decoration: line-through;
  opacity: 0.4;
}

input::placeholder {
  color: inherit;
  opacity: 1;
  font-style: italic;
}

#clear {
  background-color: var(--btn-background);
  color: var(--btn-color);
  border: none;
  width: 100%;
  border-top: 2px solid var(--pri-background);
  padding: 15px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

#clear:hover {
  cursor: pointer;
  text-decoration: underline;
  background-color: var(--btn-hover);
}

.dragging {
  opacity: 0.4;
}

.notif-container {
  position: fixed;
  top: 18px;
  left: 30vw;
  width: 40vw;
  padding: 0.4rem;
  text-align: center;
  background: transparent;
  display: grid;
  place-items: center;
}

.notification {
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 5px;
  color: #fff;
  transform: scale(0%);
}

.show-notification {
  transform: unset;
  z-index: 10;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,yBAAyB;EACzB,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,yBAAyB;EACzB,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,uCAAuC;EACvC,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,uCAAuC;EACvC,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,uCAAuC;EACvC,2CAA2C;AAC7C;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,uCAAuC;EACvC,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,eAAe;EACf,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;EACd,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,uCAAuC;EACvC,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,2CAA2C;EAC3C,aAAa;EACb,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n:root {\r\n  --pri-background: #121212;\r\n  --sec-background: #292929;\r\n  --text-color: #fff;\r\n  --hover-color: #303030;\r\n  --focus-color: #383838;\r\n  --btn-background: #26b13d;\r\n  --btn-hover: #3ec554;\r\n  --btn-color: #000;\r\n  --header-color: #3cff5c;\r\n}\r\n\r\n.light-mode {\r\n  --pri-background: #e7e7e7;\r\n  --sec-background: #fff;\r\n  --text-color: #000;\r\n  --hover-color: #f0f0f0;\r\n  --focus-color: #c8ffd8;\r\n  --btn-background: #1d16e4;\r\n  --btn-hover: #4039ff;\r\n  --btn-color: #fff;\r\n  --header-color: #1d16e4;\r\n}\r\n\r\nbody {\r\n  background-color: var(--pri-background);\r\n  color: var(--text-color);\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 10vh 0;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  background-color: var(--sec-background);\r\n  height: fit-content;\r\n  padding: 24px 0 0 0;\r\n  width: 80vw;\r\n  max-width: 700px;\r\n  margin-bottom: auto;\r\n  border-radius: 8px;\r\n}\r\n\r\nmain .title {\r\n  text-transform: capitalize;\r\n  margin-bottom: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 20px;\r\n  font-size: 10px;\r\n  color: var(--header-color);\r\n}\r\n\r\nimg {\r\n  width: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.task img {\r\n  cursor: move;\r\n}\r\n\r\nimg:hover {\r\n  filter: brightness(0) invert(1);\r\n}\r\n\r\n.title .themer img {\r\n  width: 30px;\r\n}\r\n\r\n.light-mode img:hover {\r\n  filter: brightness(0);\r\n}\r\n\r\n.themer #dark {\r\n  width: 20px;\r\n  display: none;\r\n}\r\n\r\nmain ul {\r\n  background-color: var(--pri-background);\r\n  border-top: 2px solid var(--pri-background);\r\n}\r\n\r\nul li {\r\n  list-style-type: none;\r\n  padding: 0 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--sec-background);\r\n  margin-bottom: 2px;\r\n}\r\n\r\nli:hover {\r\n  background-color: var(--hover-color);\r\n}\r\n\r\nli:focus-within {\r\n  background-color: var(--focus-color);\r\n}\r\n\r\nform {\r\n  width: 90%;\r\n}\r\n\r\nli form#tasks {\r\n  margin-right: auto;\r\n  margin-left: 18px;\r\n}\r\n\r\nform input {\r\n  background-color: transparent;\r\n  color: var(--text-color);\r\n  border: none;\r\n  outline: none;\r\n  padding: 20px 0;\r\n  font-size: 16px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  width: 16px;\r\n  height: 16px;\r\n  outline: 1px solid var(--pri-background);\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type='checkbox']:checked + form input {\r\n  text-decoration: line-through;\r\n  opacity: 0.4;\r\n}\r\n\r\ninput::placeholder {\r\n  color: inherit;\r\n  opacity: 1;\r\n  font-style: italic;\r\n}\r\n\r\n#clear {\r\n  background-color: var(--btn-background);\r\n  color: var(--btn-color);\r\n  border: none;\r\n  width: 100%;\r\n  border-top: 2px solid var(--pri-background);\r\n  padding: 15px;\r\n  border-bottom-left-radius: 8px;\r\n  border-bottom-right-radius: 8px;\r\n}\r\n\r\n#clear:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n  background-color: var(--btn-hover);\r\n}\r\n\r\n.dragging {\r\n  opacity: 0.4;\r\n}\r\n\r\n.notif-container {\r\n  position: fixed;\r\n  top: 18px;\r\n  left: 30vw;\r\n  width: 40vw;\r\n  padding: 0.4rem;\r\n  text-align: center;\r\n  background: transparent;\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n.notification {\r\n  padding: 6px 12px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  color: #fff;\r\n  transform: scale(0%);\r\n}\r\n\r\n.show-notification {\r\n  transform: unset;\r\n  z-index: 10;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTasks: () => (/* binding */ deleteTasks),
/* harmony export */   removeTask: () => (/* binding */ removeTask),
/* harmony export */   updateTask: () => (/* binding */ updateTask)
/* harmony export */ });
const createTask = (description, tasks) => {
  const newTasks = [
    ...tasks,
    { index: tasks.length + 1, description, completed: false },
  ];
  return newTasks;
};

const deleteTasks = (tasks) => {
  // Remove completed
  const newTasks = [...tasks].filter((task) => !task.completed);

  // Update indices
  newTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  return newTasks;
};

const updateTask = (index, desc, tasks) => {
  const newTasks = [...tasks].map((task) => {
    if (task.index === index) task.description = desc;
    return task;
  });
  return newTasks;
};

const removeTask = (index, tasks) => {
  // Remove completed
  const newTasks = [...tasks].filter((task) => task.index !== index);

  // Update indices
  newTasks.forEach((task, index) => {
    task.index = index + 1;
  });
  return newTasks;
};


/***/ }),

/***/ "./src/modules/dragDrop.js":
/*!*********************************!*\
  !*** ./src/modules/dragDrop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTaskBelow: () => (/* binding */ getTaskBelow),
/* harmony export */   reorderTasks: () => (/* binding */ reorderTasks)
/* harmony export */ });
const getTaskBelow = (mousePosition) => {
  const currTasks = [
    ...document.querySelectorAll('.task:not(.dragging)'),
  ];

  const targetTask = currTasks.reduce(
    (closestEl, currTask) => {
      const { height, top } = currTask.getBoundingClientRect();
      const midPoint = top - height / 2;
      const currOffset = mousePosition - midPoint - height;

      return currOffset < 0 && currOffset > closestEl.offset
        ? { task: currTask, offset: currOffset }
        : closestEl;
    },
    { task: null, offset: Number.NEGATIVE_INFINITY },
  );

  return targetTask.task;
};

const orderTasksInAscending = (tasks) => {
  const orderedTasks = [];
  tasks.forEach((task) => {
    orderedTasks[task.index - 1] = task;
  });
  return orderedTasks;
};

// Dragging from top going down the list
const reorderTopDown = (id1, id2, tasks) => {
  const newTasks = [...tasks];
  for (let i = id1; i < id2 - 1; i += 1) {
    newTasks[i].index -= 1;
  }
  newTasks[id1 - 1].index = id2 - 1;
  const orderedTasks = orderTasksInAscending(newTasks);
  return orderedTasks;
};

// Dragging from bottom going up the list
const reorderBottomUp = (id1, id2, tasks) => {
  const newTasks = [...tasks];
  newTasks[id1 - 1].index = id2;
  for (let i = id2 - 1; i < id1 - 1; i += 1) {
    newTasks[i].index += 1;
  }

  const orderedTasks = orderTasksInAscending(newTasks);
  return orderedTasks;
};

const reorderTasks = (droppedTaskId, taskBelowId, tasks) => {
  // Item was dropped in original position
  if (droppedTaskId === taskBelowId - 1) return tasks;
  const newTasks = droppedTaskId < taskBelowId
    ? reorderTopDown(droppedTaskId, taskBelowId, tasks)
    : reorderBottomUp(droppedTaskId, taskBelowId, tasks);

  return newTasks;
};


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   saveTasks: () => (/* binding */ saveTasks)
/* harmony export */ });
const getTasks = () => JSON.parse(localStorage.getItem('todos')) || [];

const saveTasks = (tasks) => {
  localStorage.setItem('todos', JSON.stringify(tasks));
};


/***/ }),

/***/ "./src/modules/themer.js":
/*!*******************************!*\
  !*** ./src/modules/themer.js ***!
  \*******************************/
/***/ (() => {

const themeChanger = document.querySelector('.themer');
const darkThemeIcon = themeChanger.querySelector('#dark');
const lightThemeIcon = themeChanger.querySelector('#light');

themeChanger.addEventListener('click', () => {
  const currTheme = document.documentElement.classList;
  const lightTheme = currTheme.contains('light-mode');
  if (!lightTheme) {
    lightThemeIcon.style.display = 'none';
    darkThemeIcon.style.display = 'block';
  } else {
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'block';
  }

  currTheme.toggle('light-mode');
});


/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearField: () => (/* binding */ clearField),
/* harmony export */   focusUpdate: () => (/* binding */ focusUpdate),
/* harmony export */   markCompleted: () => (/* binding */ markCompleted),
/* harmony export */   notify: () => (/* binding */ notify),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/icon.png */ "./images/icon.png");
/* harmony import */ var _images_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/trash.svg */ "./images/trash.svg");



const notifier = document.querySelector('.notification');
const taskList = document.querySelector('.list div');

const renderTasks = (tasks) => {
  const tasksMarkup = tasks
    .map(
      (task) => `
  <li class='task' id=${task.index} draggable="true">
    <input type="checkbox" ${
  task.completed && 'checked'
} name="check" id="check" />
    <form id="tasks">
      <input
        type="text"
        name="task"
        id="task"
        value="${task.description}"
      />
    </form>
    <img src="${_images_icon_png__WEBPACK_IMPORTED_MODULE_0__}" alt="drag icon" />
  </li>
`,
    )
    .join('');

  taskList.innerHTML = '';
  taskList.insertAdjacentHTML('beforeend', tasksMarkup);
};

const clearField = (inputEl) => {
  inputEl.value = '';
  inputEl.blur();
};

const markCompleted = (checkBox, tasks) => {
  const taskId = checkBox.closest('li').id;
  tasks.forEach((task) => {
    if (task.index !== +taskId) return;
    // completed set to true or false based on checkbox status
    task.completed = checkBox.checked;
  });
};

const focusUpdate = (currTask, state) => {
  const focusIcon = currTask.lastElementChild;
  if (state === 'focus') {
    focusIcon.src = _images_trash_svg__WEBPACK_IMPORTED_MODULE_1__;
    focusIcon.title = 'Delete todo';
    focusIcon.style.cursor = 'pointer';
  } else {
    focusIcon.src = _images_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    focusIcon.style.cursor = 'move';
  }
};

const notify = (type, message) => {
  notifier.textContent = message;
  notifier.style.backgroundColor = type === 'danger' ? 'red' : 'green';
  notifier.classList.add('show-notification');
  setTimeout(() => {
    notifier.classList.remove('show-notification');
  }, 3000);
};


/***/ }),

/***/ "./images/icon.png":
/*!*************************!*\
  !*** ./images/icon.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7940ef8ca164de9fa9fe.png";

/***/ }),

/***/ "./images/trash.svg":
/*!**************************!*\
  !*** ./images/trash.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6908457208cbe41fe2a3.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/view.js */ "./src/modules/view.js");
/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/crud.js */ "./src/modules/crud.js");
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");
/* harmony import */ var _modules_dragDrop_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dragDrop.js */ "./src/modules/dragDrop.js");
/* harmony import */ var _modules_themer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/themer.js */ "./src/modules/themer.js");
/* harmony import */ var _modules_themer_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_themer_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const todoForm = document.querySelector('#todo-form');
const listContainer = document.querySelector('.list div');
const clearBtn = document.querySelector('#clear');
const todoFormSubmitBtn = document.querySelector('#todo-form + img');

let tasks;
let dragTask;
let taskBelow;

const createTodo = () => {
  const newTodo = todoForm.querySelector('input');
  if (newTodo.value.trim() === '') return;
  tasks = _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__.createTask(newTodo.value, tasks);
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.notify('success', 'Todo added successfully!');
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks(tasks);
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.clearField(newTodo);
  _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasks(tasks);
};

// Handle task editing functionality
const taskClickHandler = (e) => {
  const inputDesc = e.target;
  const currTask = inputDesc.closest('li');
  const taskForm = currTask.querySelector('form');
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.focusUpdate(currTask, 'focus');

  // Separate function to prevent adding a listener every time
  const taskSubmitHandler = (e) => {
    e.preventDefault();
    const newDesc = inputDesc.value;

    if (newDesc.trim() === '') {
      tasks = _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__.removeTask(+currTask.id, tasks);
      _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.notify('danger', 'Todo removed successfully!');
    } else {
      tasks = _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__.updateTask(+currTask.id, newDesc, tasks);
      _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.notify('success', 'Todo updated successfully!');
    }

    _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.focusUpdate(currTask, 'blur');
    _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks(tasks);
    _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasks(tasks);

    // Cleanup
    return inputDesc.removeEventListener('blur', taskSubmitHandler);
  };

  // Revert changes if form is not submited
  const revertChanges = () => {
    // To allow for deleting before trashIcon is removed from DOM
    setTimeout(() => {
      _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks(tasks);

      // Cleanup
      return inputDesc.removeEventListener('blur', revertChanges);
    }, 500);
  };

  taskForm.addEventListener('submit', taskSubmitHandler);
  inputDesc.addEventListener('blur', revertChanges);
};

window.addEventListener('DOMContentLoaded', () => {
  tasks = _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.getTasks();
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks(tasks);
});

// Create Todo
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  createTodo();
});

todoFormSubmitBtn.addEventListener('click', createTodo);

// Mark task as completed
listContainer.addEventListener('click', (e) => {
  if (e.target.name === 'check') {
    _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.markCompleted(e.target, tasks);
    _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasks(tasks);
    return;
  }

  if (e.target.name === 'task') {
    taskClickHandler(e);
    return;
  }

  if (e.target.title === 'Delete todo') {
    const currTask = e.target.closest('li');
    tasks = _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__.removeTask(+currTask.id, tasks);
    _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.focusUpdate(currTask, 'blur');
    _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.notify('danger', 'Todo deleted successfully!');
    _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks(tasks);
    _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasks(tasks);
  }
});

// Clear completed tasks
clearBtn.addEventListener('click', () => {
  tasks = _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__.deleteTasks(tasks);
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.notify('success', 'Cleared completed todos!');
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks(tasks);
  _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasks(tasks);
});

listContainer.addEventListener('dragstart', (e) => {
  dragTask = e.target.closest('li');
  dragTask.classList.add('dragging');
});

listContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  const dragPosition = e.y;
  taskBelow = _modules_dragDrop_js__WEBPACK_IMPORTED_MODULE_3__.getTaskBelow(dragPosition);

  return !taskBelow
    ? listContainer.appendChild(dragTask)
    : listContainer.insertBefore(dragTask, taskBelow);
});

listContainer.addEventListener('dragend', () => {
  dragTask.classList.remove('dragging');
});

listContainer.addEventListener('drop', () => {
  const droppedTaskId = dragTask.id;
  const taskBelowId = taskBelow === null ? tasks.length + 1 : taskBelow.id;

  tasks = _modules_dragDrop_js__WEBPACK_IMPORTED_MODULE_3__.reorderTasks(+droppedTaskId, +taskBelowId, tasks);
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.notify('success', 'Todos reordered');
  _modules_view_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks(tasks);
  _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveTasks(tasks);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFB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QUFXO0FBQ2IsRUFBRSx5REFBZ0I7QUFDbEIsRUFBRSwwREFBaUI7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXNldHVwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC8uL3NyYy9tb2R1bGVzL2NydWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC8uL3NyYy9tb2R1bGVzL2RyYWdEcm9wLmpzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvLi9zcmMvbW9kdWxlcy90aGVtZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC8uL3NyYy9tb2R1bGVzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXNldHVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXNldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stc2V0dXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1zZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tcHJpLWJhY2tncm91bmQ6ICMxMjEyMTI7XHJcbiAgLS1zZWMtYmFja2dyb3VuZDogIzI5MjkyOTtcclxuICAtLXRleHQtY29sb3I6ICNmZmY7XHJcbiAgLS1ob3Zlci1jb2xvcjogIzMwMzAzMDtcclxuICAtLWZvY3VzLWNvbG9yOiAjMzgzODM4O1xyXG4gIC0tYnRuLWJhY2tncm91bmQ6ICMyNmIxM2Q7XHJcbiAgLS1idG4taG92ZXI6ICMzZWM1NTQ7XHJcbiAgLS1idG4tY29sb3I6ICMwMDA7XHJcbiAgLS1oZWFkZXItY29sb3I6ICMzY2ZmNWM7XHJcbn1cclxuXHJcbi5saWdodC1tb2RlIHtcclxuICAtLXByaS1iYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gIC0tc2VjLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgLS10ZXh0LWNvbG9yOiAjMDAwO1xyXG4gIC0taG92ZXItY29sb3I6ICNmMGYwZjA7XHJcbiAgLS1mb2N1cy1jb2xvcjogI2M4ZmZkODtcclxuICAtLWJ0bi1iYWNrZ3JvdW5kOiAjMWQxNmU0O1xyXG4gIC0tYnRuLWhvdmVyOiAjNDAzOWZmO1xyXG4gIC0tYnRuLWNvbG9yOiAjZmZmO1xyXG4gIC0taGVhZGVyLWNvbG9yOiAjMWQxNmU0O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmktYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHZoIDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1iYWNrZ3JvdW5kKTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDI0cHggMCAwIDA7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxubWFpbiAudGl0bGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2sgaW1nIHtcclxuICBjdXJzb3I6IG1vdmU7XHJcbn1cclxuXHJcbmltZzpob3ZlciB7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcclxufVxyXG5cclxuLnRpdGxlIC50aGVtZXIgaW1nIHtcclxuICB3aWR0aDogMzBweDtcclxufVxyXG5cclxuLmxpZ2h0LW1vZGUgaW1nOmhvdmVyIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XHJcbn1cclxuXHJcbi50aGVtZXIgI2Rhcmsge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbm1haW4gdWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaS1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpLWJhY2tncm91bmQpO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1iYWNrZ3JvdW5kKTtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbmxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XHJcbn1cclxuXHJcbmxpOmZvY3VzLXdpdGhpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9jdXMtY29sb3IpO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG5saSBmb3JtI3Rhc2tzIHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbn1cclxuXHJcbmZvcm0gaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXByaS1iYWNrZ3JvdW5kKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGZvcm0gaW5wdXQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuI2NsZWFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmktYmFja2dyb3VuZCk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuI2NsZWFyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWhvdmVyKTtcclxufVxyXG5cclxuLmRyYWdnaW5nIHtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi5ub3RpZi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDE4cHg7XHJcbiAgbGVmdDogMzB2dztcclxuICB3aWR0aDogNDB2dztcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAlKTtcclxufVxyXG5cclxuLnNob3ctbm90aWZpY2F0aW9uIHtcclxuICB0cmFuc2Zvcm06IHVuc2V0O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1wcmktYmFja2dyb3VuZDogIzEyMTIxMjtcXHJcXG4gIC0tc2VjLWJhY2tncm91bmQ6ICMyOTI5Mjk7XFxyXFxuICAtLXRleHQtY29sb3I6ICNmZmY7XFxyXFxuICAtLWhvdmVyLWNvbG9yOiAjMzAzMDMwO1xcclxcbiAgLS1mb2N1cy1jb2xvcjogIzM4MzgzODtcXHJcXG4gIC0tYnRuLWJhY2tncm91bmQ6ICMyNmIxM2Q7XFxyXFxuICAtLWJ0bi1ob3ZlcjogIzNlYzU1NDtcXHJcXG4gIC0tYnRuLWNvbG9yOiAjMDAwO1xcclxcbiAgLS1oZWFkZXItY29sb3I6ICMzY2ZmNWM7XFxyXFxufVxcclxcblxcclxcbi5saWdodC1tb2RlIHtcXHJcXG4gIC0tcHJpLWJhY2tncm91bmQ6ICNlN2U3ZTc7XFxyXFxuICAtLXNlYy1iYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgLS10ZXh0LWNvbG9yOiAjMDAwO1xcclxcbiAgLS1ob3Zlci1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIC0tZm9jdXMtY29sb3I6ICNjOGZmZDg7XFxyXFxuICAtLWJ0bi1iYWNrZ3JvdW5kOiAjMWQxNmU0O1xcclxcbiAgLS1idG4taG92ZXI6ICM0MDM5ZmY7XFxyXFxuICAtLWJ0bi1jb2xvcjogI2ZmZjtcXHJcXG4gIC0taGVhZGVyLWNvbG9yOiAjMWQxNmU0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTB2aCAwO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWJhY2tncm91bmQpO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIHBhZGRpbmc6IDI0cHggMCAwIDA7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIC50aXRsZSB7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGltZyB7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbmltZzpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgLnRoZW1lciBpbWcge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWdodC1tb2RlIGltZzpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XFxyXFxufVxcclxcblxcclxcbi50aGVtZXIgI2Rhcmsge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmktYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbnVsIGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWJhY2tncm91bmQpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmxpOmZvY3VzLXdpdGhpbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb2N1cy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxubGkgZm9ybSN0YXNrcyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1wcmktYmFja2dyb3VuZCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGZvcm0gaW5wdXQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbiNjbGVhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tYmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tYnRuLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXI6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4taG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubm90aWYtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMThweDtcXHJcXG4gIGxlZnQ6IDMwdnc7XFxyXFxuICB3aWR0aDogNDB2dztcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ub3RpZmljYXRpb24ge1xcclxcbiAgcGFkZGluZzogNnB4IDEycHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1ub3RpZmljYXRpb24ge1xcclxcbiAgdHJhbnNmb3JtOiB1bnNldDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZVRhc2sgPSAoZGVzY3JpcHRpb24sIHRhc2tzKSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2tzID0gW1xuICAgIC4uLnRhc2tzLFxuICAgIHsgaW5kZXg6IHRhc2tzLmxlbmd0aCArIDEsIGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQ6IGZhbHNlIH0sXG4gIF07XG4gIHJldHVybiBuZXdUYXNrcztcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUYXNrcyA9ICh0YXNrcykgPT4ge1xuICAvLyBSZW1vdmUgY29tcGxldGVkXG4gIGNvbnN0IG5ld1Rhc2tzID0gWy4uLnRhc2tzXS5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG5cbiAgLy8gVXBkYXRlIGluZGljZXNcbiAgbmV3VGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICB0YXNrLmluZGV4ID0gaW5kZXggKyAxO1xuICB9KTtcbiAgcmV0dXJuIG5ld1Rhc2tzO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVRhc2sgPSAoaW5kZXgsIGRlc2MsIHRhc2tzKSA9PiB7XG4gIGNvbnN0IG5ld1Rhc2tzID0gWy4uLnRhc2tzXS5tYXAoKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pbmRleCA9PT0gaW5kZXgpIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjO1xuICAgIHJldHVybiB0YXNrO1xuICB9KTtcbiAgcmV0dXJuIG5ld1Rhc2tzO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2sgPSAoaW5kZXgsIHRhc2tzKSA9PiB7XG4gIC8vIFJlbW92ZSBjb21wbGV0ZWRcbiAgY29uc3QgbmV3VGFza3MgPSBbLi4udGFza3NdLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCAhPT0gaW5kZXgpO1xuXG4gIC8vIFVwZGF0ZSBpbmRpY2VzXG4gIG5ld1Rhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgdGFzay5pbmRleCA9IGluZGV4ICsgMTtcbiAgfSk7XG4gIHJldHVybiBuZXdUYXNrcztcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0VGFza0JlbG93ID0gKG1vdXNlUG9zaXRpb24pID0+IHtcclxuICBjb25zdCBjdXJyVGFza3MgPSBbXHJcbiAgICAuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzazpub3QoLmRyYWdnaW5nKScpLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHRhcmdldFRhc2sgPSBjdXJyVGFza3MucmVkdWNlKFxyXG4gICAgKGNsb3Nlc3RFbCwgY3VyclRhc2spID0+IHtcclxuICAgICAgY29uc3QgeyBoZWlnaHQsIHRvcCB9ID0gY3VyclRhc2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IG1pZFBvaW50ID0gdG9wIC0gaGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3QgY3Vyck9mZnNldCA9IG1vdXNlUG9zaXRpb24gLSBtaWRQb2ludCAtIGhlaWdodDtcclxuXHJcbiAgICAgIHJldHVybiBjdXJyT2Zmc2V0IDwgMCAmJiBjdXJyT2Zmc2V0ID4gY2xvc2VzdEVsLm9mZnNldFxyXG4gICAgICAgID8geyB0YXNrOiBjdXJyVGFzaywgb2Zmc2V0OiBjdXJyT2Zmc2V0IH1cclxuICAgICAgICA6IGNsb3Nlc3RFbDtcclxuICAgIH0sXHJcbiAgICB7IHRhc2s6IG51bGwsIG9mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIH0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHRhcmdldFRhc2sudGFzaztcclxufTtcclxuXHJcbmNvbnN0IG9yZGVyVGFza3NJbkFzY2VuZGluZyA9ICh0YXNrcykgPT4ge1xyXG4gIGNvbnN0IG9yZGVyZWRUYXNrcyA9IFtdO1xyXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIG9yZGVyZWRUYXNrc1t0YXNrLmluZGV4IC0gMV0gPSB0YXNrO1xyXG4gIH0pO1xyXG4gIHJldHVybiBvcmRlcmVkVGFza3M7XHJcbn07XHJcblxyXG4vLyBEcmFnZ2luZyBmcm9tIHRvcCBnb2luZyBkb3duIHRoZSBsaXN0XHJcbmNvbnN0IHJlb3JkZXJUb3BEb3duID0gKGlkMSwgaWQyLCB0YXNrcykgPT4ge1xyXG4gIGNvbnN0IG5ld1Rhc2tzID0gWy4uLnRhc2tzXTtcclxuICBmb3IgKGxldCBpID0gaWQxOyBpIDwgaWQyIC0gMTsgaSArPSAxKSB7XHJcbiAgICBuZXdUYXNrc1tpXS5pbmRleCAtPSAxO1xyXG4gIH1cclxuICBuZXdUYXNrc1tpZDEgLSAxXS5pbmRleCA9IGlkMiAtIDE7XHJcbiAgY29uc3Qgb3JkZXJlZFRhc2tzID0gb3JkZXJUYXNrc0luQXNjZW5kaW5nKG5ld1Rhc2tzKTtcclxuICByZXR1cm4gb3JkZXJlZFRhc2tzO1xyXG59O1xyXG5cclxuLy8gRHJhZ2dpbmcgZnJvbSBib3R0b20gZ29pbmcgdXAgdGhlIGxpc3RcclxuY29uc3QgcmVvcmRlckJvdHRvbVVwID0gKGlkMSwgaWQyLCB0YXNrcykgPT4ge1xyXG4gIGNvbnN0IG5ld1Rhc2tzID0gWy4uLnRhc2tzXTtcclxuICBuZXdUYXNrc1tpZDEgLSAxXS5pbmRleCA9IGlkMjtcclxuICBmb3IgKGxldCBpID0gaWQyIC0gMTsgaSA8IGlkMSAtIDE7IGkgKz0gMSkge1xyXG4gICAgbmV3VGFza3NbaV0uaW5kZXggKz0gMTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9yZGVyZWRUYXNrcyA9IG9yZGVyVGFza3NJbkFzY2VuZGluZyhuZXdUYXNrcyk7XHJcbiAgcmV0dXJuIG9yZGVyZWRUYXNrcztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW9yZGVyVGFza3MgPSAoZHJvcHBlZFRhc2tJZCwgdGFza0JlbG93SWQsIHRhc2tzKSA9PiB7XHJcbiAgLy8gSXRlbSB3YXMgZHJvcHBlZCBpbiBvcmlnaW5hbCBwb3NpdGlvblxyXG4gIGlmIChkcm9wcGVkVGFza0lkID09PSB0YXNrQmVsb3dJZCAtIDEpIHJldHVybiB0YXNrcztcclxuICBjb25zdCBuZXdUYXNrcyA9IGRyb3BwZWRUYXNrSWQgPCB0YXNrQmVsb3dJZFxyXG4gICAgPyByZW9yZGVyVG9wRG93bihkcm9wcGVkVGFza0lkLCB0YXNrQmVsb3dJZCwgdGFza3MpXHJcbiAgICA6IHJlb3JkZXJCb3R0b21VcChkcm9wcGVkVGFza0lkLCB0YXNrQmVsb3dJZCwgdGFza3MpO1xyXG5cclxuICByZXR1cm4gbmV3VGFza3M7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBnZXRUYXNrcyA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuXG5leHBvcnQgY29uc3Qgc2F2ZVRhc2tzID0gKHRhc2tzKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG59O1xuIiwiY29uc3QgdGhlbWVDaGFuZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lcicpO1xyXG5jb25zdCBkYXJrVGhlbWVJY29uID0gdGhlbWVDaGFuZ2VyLnF1ZXJ5U2VsZWN0b3IoJyNkYXJrJyk7XHJcbmNvbnN0IGxpZ2h0VGhlbWVJY29uID0gdGhlbWVDaGFuZ2VyLnF1ZXJ5U2VsZWN0b3IoJyNsaWdodCcpO1xyXG5cclxudGhlbWVDaGFuZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJUaGVtZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3Q7XHJcbiAgY29uc3QgbGlnaHRUaGVtZSA9IGN1cnJUaGVtZS5jb250YWlucygnbGlnaHQtbW9kZScpO1xyXG4gIGlmICghbGlnaHRUaGVtZSkge1xyXG4gICAgbGlnaHRUaGVtZUljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRhcmtUaGVtZUljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhcmtUaGVtZUljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGxpZ2h0VGhlbWVJY29uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgY3VyclRoZW1lLnRvZ2dsZSgnbGlnaHQtbW9kZScpO1xyXG59KTtcclxuIiwiaW1wb3J0IGRyYWdJY29uIGZyb20gJy4uLy4uL2ltYWdlcy9pY29uLnBuZyc7XHJcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi4vLi4vaW1hZ2VzL3RyYXNoLnN2Zyc7XHJcblxyXG5jb25zdCBub3RpZmllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RpZmljYXRpb24nKTtcclxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCBkaXYnKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJUYXNrcyA9ICh0YXNrcykgPT4ge1xyXG4gIGNvbnN0IHRhc2tzTWFya3VwID0gdGFza3NcclxuICAgIC5tYXAoXHJcbiAgICAgICh0YXNrKSA9PiBgXHJcbiAgPGxpIGNsYXNzPSd0YXNrJyBpZD0ke3Rhc2suaW5kZXh9IGRyYWdnYWJsZT1cInRydWVcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke1xyXG4gIHRhc2suY29tcGxldGVkICYmICdjaGVja2VkJ1xyXG59IG5hbWU9XCJjaGVja1wiIGlkPVwiY2hlY2tcIiAvPlxyXG4gICAgPGZvcm0gaWQ9XCJ0YXNrc1wiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cInRhc2tcIlxyXG4gICAgICAgIGlkPVwidGFza1wiXHJcbiAgICAgICAgdmFsdWU9XCIke3Rhc2suZGVzY3JpcHRpb259XCJcclxuICAgICAgLz5cclxuICAgIDwvZm9ybT5cclxuICAgIDxpbWcgc3JjPVwiJHtkcmFnSWNvbn1cIiBhbHQ9XCJkcmFnIGljb25cIiAvPlxyXG4gIDwvbGk+XHJcbmAsXHJcbiAgICApXHJcbiAgICAuam9pbignJyk7XHJcblxyXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gIHRhc2tMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza3NNYXJrdXApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFyRmllbGQgPSAoaW5wdXRFbCkgPT4ge1xyXG4gIGlucHV0RWwudmFsdWUgPSAnJztcclxuICBpbnB1dEVsLmJsdXIoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYXJrQ29tcGxldGVkID0gKGNoZWNrQm94LCB0YXNrcykgPT4ge1xyXG4gIGNvbnN0IHRhc2tJZCA9IGNoZWNrQm94LmNsb3Nlc3QoJ2xpJykuaWQ7XHJcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgaWYgKHRhc2suaW5kZXggIT09ICt0YXNrSWQpIHJldHVybjtcclxuICAgIC8vIGNvbXBsZXRlZCBzZXQgdG8gdHJ1ZSBvciBmYWxzZSBiYXNlZCBvbiBjaGVja2JveCBzdGF0dXNcclxuICAgIHRhc2suY29tcGxldGVkID0gY2hlY2tCb3guY2hlY2tlZDtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb2N1c1VwZGF0ZSA9IChjdXJyVGFzaywgc3RhdGUpID0+IHtcclxuICBjb25zdCBmb2N1c0ljb24gPSBjdXJyVGFzay5sYXN0RWxlbWVudENoaWxkO1xyXG4gIGlmIChzdGF0ZSA9PT0gJ2ZvY3VzJykge1xyXG4gICAgZm9jdXNJY29uLnNyYyA9IHRyYXNoSWNvbjtcclxuICAgIGZvY3VzSWNvbi50aXRsZSA9ICdEZWxldGUgdG9kbyc7XHJcbiAgICBmb2N1c0ljb24uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmb2N1c0ljb24uc3JjID0gZHJhZ0ljb247XHJcbiAgICBmb2N1c0ljb24uc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3RpZnkgPSAodHlwZSwgbWVzc2FnZSkgPT4ge1xyXG4gIG5vdGlmaWVyLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICBub3RpZmllci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0eXBlID09PSAnZGFuZ2VyJyA/ICdyZWQnIDogJ2dyZWVuJztcclxuICBub3RpZmllci5jbGFzc0xpc3QuYWRkKCdzaG93LW5vdGlmaWNhdGlvbicpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgbm90aWZpZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1ub3RpZmljYXRpb24nKTtcclxuICB9LCAzMDAwKTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyB2aWV3IGZyb20gJy4vbW9kdWxlcy92aWV3LmpzJztcclxuaW1wb3J0ICogYXMgbXlUb2RvcyBmcm9tICcuL21vZHVsZXMvY3J1ZC5qcyc7XHJcbmltcG9ydCAqIGFzIHN0b3JhZ2UgZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UuanMnO1xyXG5pbXBvcnQgKiBhcyBkcmFnRHJvcCBmcm9tICcuL21vZHVsZXMvZHJhZ0Ryb3AuanMnO1xyXG5pbXBvcnQgJy4vbW9kdWxlcy90aGVtZXIuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xyXG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QgZGl2Jyk7XHJcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyJyk7XHJcbmNvbnN0IHRvZG9Gb3JtU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybSArIGltZycpO1xyXG5cclxubGV0IHRhc2tzO1xyXG5sZXQgZHJhZ1Rhc2s7XHJcbmxldCB0YXNrQmVsb3c7XHJcblxyXG5jb25zdCBjcmVhdGVUb2RvID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG8gPSB0b2RvRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gIGlmIChuZXdUb2RvLnZhbHVlLnRyaW0oKSA9PT0gJycpIHJldHVybjtcclxuICB0YXNrcyA9IG15VG9kb3MuY3JlYXRlVGFzayhuZXdUb2RvLnZhbHVlLCB0YXNrcyk7XHJcbiAgdmlldy5ub3RpZnkoJ3N1Y2Nlc3MnLCAnVG9kbyBhZGRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgdmlldy5yZW5kZXJUYXNrcyh0YXNrcyk7XHJcbiAgdmlldy5jbGVhckZpZWxkKG5ld1RvZG8pO1xyXG4gIHN0b3JhZ2Uuc2F2ZVRhc2tzKHRhc2tzKTtcclxufTtcclxuXHJcbi8vIEhhbmRsZSB0YXNrIGVkaXRpbmcgZnVuY3Rpb25hbGl0eVxyXG5jb25zdCB0YXNrQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICBjb25zdCBpbnB1dERlc2MgPSBlLnRhcmdldDtcclxuICBjb25zdCBjdXJyVGFzayA9IGlucHV0RGVzYy5jbG9zZXN0KCdsaScpO1xyXG4gIGNvbnN0IHRhc2tGb3JtID0gY3VyclRhc2sucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gIHZpZXcuZm9jdXNVcGRhdGUoY3VyclRhc2ssICdmb2N1cycpO1xyXG5cclxuICAvLyBTZXBhcmF0ZSBmdW5jdGlvbiB0byBwcmV2ZW50IGFkZGluZyBhIGxpc3RlbmVyIGV2ZXJ5IHRpbWVcclxuICBjb25zdCB0YXNrU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdEZXNjID0gaW5wdXREZXNjLnZhbHVlO1xyXG5cclxuICAgIGlmIChuZXdEZXNjLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgdGFza3MgPSBteVRvZG9zLnJlbW92ZVRhc2soK2N1cnJUYXNrLmlkLCB0YXNrcyk7XHJcbiAgICAgIHZpZXcubm90aWZ5KCdkYW5nZXInLCAnVG9kbyByZW1vdmVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2tzID0gbXlUb2Rvcy51cGRhdGVUYXNrKCtjdXJyVGFzay5pZCwgbmV3RGVzYywgdGFza3MpO1xyXG4gICAgICB2aWV3Lm5vdGlmeSgnc3VjY2VzcycsICdUb2RvIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXcuZm9jdXNVcGRhdGUoY3VyclRhc2ssICdibHVyJyk7XHJcbiAgICB2aWV3LnJlbmRlclRhc2tzKHRhc2tzKTtcclxuICAgIHN0b3JhZ2Uuc2F2ZVRhc2tzKHRhc2tzKTtcclxuXHJcbiAgICAvLyBDbGVhbnVwXHJcbiAgICByZXR1cm4gaW5wdXREZXNjLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0YXNrU3VibWl0SGFuZGxlcik7XHJcbiAgfTtcclxuXHJcbiAgLy8gUmV2ZXJ0IGNoYW5nZXMgaWYgZm9ybSBpcyBub3Qgc3VibWl0ZWRcclxuICBjb25zdCByZXZlcnRDaGFuZ2VzID0gKCkgPT4ge1xyXG4gICAgLy8gVG8gYWxsb3cgZm9yIGRlbGV0aW5nIGJlZm9yZSB0cmFzaEljb24gaXMgcmVtb3ZlZCBmcm9tIERPTVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHZpZXcucmVuZGVyVGFza3ModGFza3MpO1xyXG5cclxuICAgICAgLy8gQ2xlYW51cFxyXG4gICAgICByZXR1cm4gaW5wdXREZXNjLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCByZXZlcnRDaGFuZ2VzKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGFza1N1Ym1pdEhhbmRsZXIpO1xyXG4gIGlucHV0RGVzYy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgcmV2ZXJ0Q2hhbmdlcyk7XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICB0YXNrcyA9IHN0b3JhZ2UuZ2V0VGFza3MoKTtcclxuICB2aWV3LnJlbmRlclRhc2tzKHRhc2tzKTtcclxufSk7XHJcblxyXG4vLyBDcmVhdGUgVG9kb1xyXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjcmVhdGVUb2RvKCk7XHJcbn0pO1xyXG5cclxudG9kb0Zvcm1TdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2RvKTtcclxuXHJcbi8vIE1hcmsgdGFzayBhcyBjb21wbGV0ZWRcclxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdjaGVjaycpIHtcclxuICAgIHZpZXcubWFya0NvbXBsZXRlZChlLnRhcmdldCwgdGFza3MpO1xyXG4gICAgc3RvcmFnZS5zYXZlVGFza3ModGFza3MpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICd0YXNrJykge1xyXG4gICAgdGFza0NsaWNrSGFuZGxlcihlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlLnRhcmdldC50aXRsZSA9PT0gJ0RlbGV0ZSB0b2RvJykge1xyXG4gICAgY29uc3QgY3VyclRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG4gICAgdGFza3MgPSBteVRvZG9zLnJlbW92ZVRhc2soK2N1cnJUYXNrLmlkLCB0YXNrcyk7XHJcbiAgICB2aWV3LmZvY3VzVXBkYXRlKGN1cnJUYXNrLCAnYmx1cicpO1xyXG4gICAgdmlldy5ub3RpZnkoJ2RhbmdlcicsICdUb2RvIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgdmlldy5yZW5kZXJUYXNrcyh0YXNrcyk7XHJcbiAgICBzdG9yYWdlLnNhdmVUYXNrcyh0YXNrcyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIENsZWFyIGNvbXBsZXRlZCB0YXNrc1xyXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICB0YXNrcyA9IG15VG9kb3MuZGVsZXRlVGFza3ModGFza3MpO1xyXG4gIHZpZXcubm90aWZ5KCdzdWNjZXNzJywgJ0NsZWFyZWQgY29tcGxldGVkIHRvZG9zIScpO1xyXG4gIHZpZXcucmVuZGVyVGFza3ModGFza3MpO1xyXG4gIHN0b3JhZ2Uuc2F2ZVRhc2tzKHRhc2tzKTtcclxufSk7XHJcblxyXG5saXN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChlKSA9PiB7XHJcbiAgZHJhZ1Rhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG4gIGRyYWdUYXNrLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XHJcbn0pO1xyXG5cclxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGRyYWdQb3NpdGlvbiA9IGUueTtcclxuICB0YXNrQmVsb3cgPSBkcmFnRHJvcC5nZXRUYXNrQmVsb3coZHJhZ1Bvc2l0aW9uKTtcclxuXHJcbiAgcmV0dXJuICF0YXNrQmVsb3dcclxuICAgID8gbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChkcmFnVGFzaylcclxuICAgIDogbGlzdENvbnRhaW5lci5pbnNlcnRCZWZvcmUoZHJhZ1Rhc2ssIHRhc2tCZWxvdyk7XHJcbn0pO1xyXG5cclxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xyXG4gIGRyYWdUYXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XHJcbn0pO1xyXG5cclxubGlzdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKCkgPT4ge1xyXG4gIGNvbnN0IGRyb3BwZWRUYXNrSWQgPSBkcmFnVGFzay5pZDtcclxuICBjb25zdCB0YXNrQmVsb3dJZCA9IHRhc2tCZWxvdyA9PT0gbnVsbCA/IHRhc2tzLmxlbmd0aCArIDEgOiB0YXNrQmVsb3cuaWQ7XHJcblxyXG4gIHRhc2tzID0gZHJhZ0Ryb3AucmVvcmRlclRhc2tzKCtkcm9wcGVkVGFza0lkLCArdGFza0JlbG93SWQsIHRhc2tzKTtcclxuICB2aWV3Lm5vdGlmeSgnc3VjY2VzcycsICdUb2RvcyByZW9yZGVyZWQnKTtcclxuICB2aWV3LnJlbmRlclRhc2tzKHRhc2tzKTtcclxuICBzdG9yYWdlLnNhdmVUYXNrcyh0YXNrcyk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=