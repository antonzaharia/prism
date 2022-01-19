"use strict";
exports.id = 301;
exports.ids = [301];
exports.modules = {

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LJ": () => (/* binding */ contract),
  "rS": () => (/* binding */ sharedMessage),
  "rV": () => (/* binding */ web3)
});

// UNUSED EXPORTS: contractAddress

// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(409);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
;// CONCATENATED MODULE: ./lib/PrismSale.json
const PrismSale_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"charity","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"maxSales","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSales","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"canBuy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"hasAccess","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"buy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true}]}');
;// CONCATENATED MODULE: ./lib/web3.js


const web3 = new (external_web3_default())((external_web3_default()).givenProvider || "ws://127.0.0.1:7545");
const contractAddress = "0x434c9DeAd4E5F861c1bfbd1E14f00D6408Fc4689";
const contract = new web3.eth.Contract(PrismSale_namespaceObject.Mt, contractAddress);
const sharedMessage = "This is to confirm your account when downloading the limited edition album";


/***/ })

};
;