"use strict";
(() => {
var exports = {};
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(301);


const notOk = res => {
  res.status(403).json({
    url: null
  });
};

const ok = res => {
  res.status(200).json({
    url: "https://ipfs.io/ipfs/Qma399gy9xZg47shLuEtNmcfgyxh86e71dCMkQJ6gV418j/prism-download.zip"
  });
};

async function handler(req, res) {
  try {
    const body = JSON.parse(req.body);

    if (!body.signature) {
      notOk(res);
    }

    const account = _lib_web3__WEBPACK_IMPORTED_MODULE_0__/* .web3.eth.accounts.recover */ .rV.eth.accounts.recover(_lib_web3__WEBPACK_IMPORTED_MODULE_0__/* .sharedMessage */ .rS, body.signature);
    _lib_web3__WEBPACK_IMPORTED_MODULE_0__/* .contract.methods.hasAccess */ .LJ.methods.hasAccess().call({
      from: account
    }).then(function (data) {
      if (data) {
        ok(res);
      } else {
        notOk(res);
      }
    });
  } catch (e) {
    notOk(res);
  }
}

/***/ }),

/***/ 409:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [301], () => (__webpack_exec__(982)));
module.exports = __webpack_exports__;

})();