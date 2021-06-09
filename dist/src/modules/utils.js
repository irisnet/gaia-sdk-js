"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mathjs = _interopRequireWildcard(require("mathjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Utils for the Gaia SDK
 * @category Modules
 * @since v0.17
 */
var Utils =
/** @hidden */

/** @hidden */
// private tokenMap: Map<string, types.Token>;

/** @hidden */

/** @hidden */

/** @hidden */
function Utils(client) {
  (0, _classCallCheck2["default"])(this, Utils);
  (0, _defineProperty2["default"])(this, "client", void 0);
  (0, _defineProperty2["default"])(this, "mathConfig", {
    number: 'BigNumber',
    // Choose 'number' (default), 'BigNumber', or 'Fraction'
    precision: 64 // 64 by default, only applicable for BigNumbers

  });
  (0, _defineProperty2["default"])(this, "math", void 0);
  this.client = client; // this.tokenMap = new Map<string, types.Token>();

  this.math = mathjs.create(mathjs.all, this.mathConfig);
}
/**
 * Convert the coin object to min unit
 *
 * @param coin Coin object to be converted
 * @returns
 * @since v0.17
 */
// async toMinCoin(coin: types.Coin): Promise<types.Coin> {
//   const amt = this.math.bignumber!(coin.amount);
//   const token = this.tokenMap.get(coin.denom);
//   if (token) {
//     if (coin.denom === token.min_unit) return coin;
//     return {
//       denom: token.min_unit,
//       amount: this.math.multiply!(
//         amt,
//         this.math.pow!(10, token.scale)
//       ).toString(),
//     };
//   }
//   // If token not found in local memory, then query from the blockchain
//   return this.client.token.queryToken(coin.denom).then(token => {
//     if (token) {
//       this.tokenMap.set(coin.denom, token!);
//     }
//     return this.toMinCoin(coin);
//   });
// }

/**
 * Convert the coin array to min unit
 * @param coins Coin array to be converted
 * @returns
 * @since v0.17
 */
// async toMinCoins(coins: types.Coin[]): Promise<types.Coin[]> {
//   const promises = new Array<Promise<types.Coin>>();
//   coins.forEach(amt => {
//     const promise = this.toMinCoin(amt);
//     promises.push(promise);
//   });
//   return Promise.all(promises).then(coins => {
//     return coins;
//   });
// }

/**
 * Convert the coin object to main unit
 *
 * @returns
 * @since v0.17
 */
// async toMainCoin(coin: types.Coin): Promise<types.Coin> {
//   const amt = this.math.bignumber!(coin.amount);
//   const token = this.tokenMap.get(coin.denom);
//   if (token) {
//     if (coin.denom === token.symbol) return coin;
//     return {
//       denom: token.symbol,
//       amount: this.math.divide!(
//         amt,
//         this.math.pow!(10, token.scale)
//       ).toString(),
//     };
//   }
//   // If token not found in local memory, then query from the blockchain
//   return this.client.token.queryToken(coin.denom).then(token => {
//     if (token) {
//       this.tokenMap.set(coin.denom, token!);
//     }
//     return this.toMainCoin(coin);
//   });
// }

/**
 * Convert the coin array to main unit
 * @param coins Coin array to be converted
 * @returns
 * @since v0.17
 */
// async toMainCoins(coins: types.Coin[]): Promise<types.Coin[]> {
//   const promises = new Array<Promise<types.Coin>>();
//   coins.forEach(amt => {
//     const promise = this.toMainCoin(amt);
//     promises.push(promise);
//   });
//   return Promise.all(promises).then(coins => {
//     return coins;
//   });
// }
;

exports.Utils = Utils;