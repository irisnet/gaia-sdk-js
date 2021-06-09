"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WsClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _events = _interopRequireDefault(require("events"));

var _isomorphicWs = _interopRequireDefault(require("isomorphic-ws"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Gaia Websocket Client
 * @since v0.17
 */
var WsClient = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */

  /** Event emitter */
  function WsClient(url) {
    (0, _classCallCheck2["default"])(this, WsClient);
    (0, _defineProperty2["default"])(this, "url", void 0);
    (0, _defineProperty2["default"])(this, "ws", void 0);
    (0, _defineProperty2["default"])(this, "eventEmitter", void 0);
    this.url = url;
    this.eventEmitter = new _events["default"]();
  }
  /**
   * Initialize ws client
   * @since v0.17
   */


  (0, _createClass2["default"])(WsClient, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.ws = new _isomorphicWs["default"](this.url + '/websocket');

      if (!this.ws) {
        throw new _errors.SdkError('Websocket client not initialized', _errors.CODES.Internal); // Should not happen
      }

      this.ws.onopen = function () {
        console.log('Websocket connected');

        _this.eventEmitter.emit('open');
      };

      this.ws.onclose = function () {
        console.log('Websocket disconnected');

        _this.eventEmitter.emit('close');
      };

      this.ws.onmessage = function (resp) {
        var data = JSON.parse(resp.data.toString());

        if (!data.id) {
          _this.eventEmitter.emit('error', 'Unexpected response: ' + JSON.stringify(data));
        } // Route the data to the specified subscriber based on the request ID


        _this.eventEmitter.emit(data.id, data.error, data.result);
      };

      this.ws.onerror = function (err) {
        console.log('Websocket error');

        _this.eventEmitter.emit('error', err);
      };
    }
    /**
     * Disconnect from server
     * @since v0.17
     */

  }, {
    key: "disconnect",
    value: function () {
      var _disconnect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (reslove) {
                  // Unsubscribe all from server
                  var id = 'unsubscribe_all';

                  _this2.send(types.RpcMethods.UnsubscribeAll, id);

                  _this2.eventEmitter.on(id, function (error) {
                    if (error) {
                      throw new _errors.SdkError(error.message, _errors.CODES.Internal);
                    }

                    if (!_this2.ws) {
                      throw new _errors.SdkError('Websocket client not initialized', _errors.CODES.Internal); // Should not happen
                    } // Remove all listeners


                    // Remove all listeners
                    _this2.eventEmitter.removeAllListeners(); // Destroy ws instance


                    // Destroy ws instance
                    _this2.ws.terminate();

                    reslove();
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function disconnect() {
        return _disconnect.apply(this, arguments);
      }

      return disconnect;
    }()
    /**
     * Check if the ws client is connected or not
     * @since v0.17
     */

  }, {
    key: "isReady",
    value: function isReady() {
      var _this$ws;

      return ((_this$ws = this.ws) === null || _this$ws === void 0 ? void 0 : _this$ws.readyState) === 1;
    }
    /**
     * Send subscription to tendermint
     * @param method The tendermint rpc method
     * @param id The request id which is the same as the incoming response
     * @param query The tendermint query string
     * @since v0.17
     */

  }, {
    key: "send",
    value: function send(method, id, query) {
      if (!this.ws) {
        throw new _errors.SdkError('Websocket client not initialized', _errors.CODES.Internal); // Should not happen
      }

      this.ws.send(JSON.stringify({
        jsonrpc: '2.0',
        method: method,
        id: id,
        params: {
          query: query
        }
      }));
    }
  }]);
  return WsClient;
}();

exports.WsClient = WsClient;