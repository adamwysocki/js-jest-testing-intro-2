webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util/index.js":
/*!***********************!*\
  !*** ./util/index.js ***!
  \***********************/
/*! exports provided: properCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "properCase", function() { return properCase; });
/**
 * @function properCase
 * @description - function for proper casing names
 * @param {string} name - the name to be proper cased
 * @return {string} - the proper cased name
 */
var properCase = function properCase(name) {
  if (!name) return name;
  return name.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
};

/***/ })

})
//# sourceMappingURL=index.js.7ab14dfcbb32b2039e74.hot-update.js.map