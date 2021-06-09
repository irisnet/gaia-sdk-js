"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultKeyDAOImpl = exports.DefaultClientConfig = exports.Client = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var consts = _interopRequireWildcard(require("./types/constants"));

var modules = _interopRequireWildcard(require("./modules"));

var _rpcClient = require("./nets/rpc-client");

var types = _interopRequireWildcard(require("./types"));

var _errors = require("./errors");

var AES = _interopRequireWildcard(require("crypto-js/aes"));

var ENC = _interopRequireWildcard(require("crypto-js/enc-utf8"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** Gaia Client */
var Client = /*#__PURE__*/function () {
  /** Gaia SDK Constructor */
  function Client(config) {
    (0, _classCallCheck2["default"])(this, Client);
    (0, _defineProperty2["default"])(this, "config", void 0);
    (0, _defineProperty2["default"])(this, "_rpcClient", void 0);
    (0, _defineProperty2["default"])(this, "_auth", void 0);
    (0, _defineProperty2["default"])(this, "_bank", void 0);
    (0, _defineProperty2["default"])(this, "_keys", void 0);
    (0, _defineProperty2["default"])(this, "_protobuf", void 0);
    (0, _defineProperty2["default"])(this, "_staking", void 0);
    (0, _defineProperty2["default"])(this, "_tx", void 0);
    (0, _defineProperty2["default"])(this, "_gov", void 0);
    (0, _defineProperty2["default"])(this, "_slashing", void 0);
    (0, _defineProperty2["default"])(this, "_distribution", void 0);
    (0, _defineProperty2["default"])(this, "_utils", void 0);
    (0, _defineProperty2["default"])(this, "_tendermint", void 0);
    (0, _defineProperty2["default"])(this, "_ibc", void 0);
    this.config = config;
    if (!this.config.rpcConfig) this.config.rpcConfig = {};

    if (!this.config.bech32Prefix || !this.config.bech32Prefix.AccAddr) {
      switch (this.config.chainNetwork) {
        case consts.ChainNetwork.Cosmos:
          this.config.bech32Prefix = types.Bech32Prefix_Cosmos;
          break;

        case consts.ChainNetwork.Akash:
          this.config.bech32Prefix = types.Bech32Prefix_Akash;
          break;

        case consts.ChainNetwork.Iris:
        default:
          this.config.bech32Prefix = types.Bech32Prefix_Cosmos;
          break;
      }
    }

    this.config.rpcConfig.baseURL = this.config.node; // Set default encrypt/decrypt methods

    if (!this.config.keyDAO.encrypt || !this.config.keyDAO.decrypt) {
      var defaultKeyDAO = new DefaultKeyDAOImpl();
      this.config.keyDAO.encrypt = defaultKeyDAO.encrypt;
      this.config.keyDAO.decrypt = defaultKeyDAO.decrypt;
    }
  }
  /**
   * Set Key DAO Implemention
   *
   * @param keyDAO Key DAO Implemention
   * @returns The SDK itself
   */


  (0, _createClass2["default"])(Client, [{
    key: "rpcClient",
    get:
    /** Gaia Client Config */

    /** Axios client for tendermint rpc requests */
    function get() {
      if (!this._rpcClient) {
        this._rpcClient = new _rpcClient.RpcClient(this.config.rpcConfig);
      }

      return this._rpcClient;
    }
    /** Auth module */

  }, {
    key: "auth",
    get: function get() {
      if (!this._auth) {
        this._auth = new modules.Auth(this);
      }

      return this._auth;
    }
    /** Bank module */

  }, {
    key: "bank",
    get: function get() {
      if (!this._bank) {
        this._bank = new modules.Bank(this);
      }

      return this._bank;
    }
    /** Key management module */

  }, {
    key: "keys",
    get: function get() {
      if (!this._keys) {
        this._keys = new modules.Keys(this);
      }

      return this._keys;
    }
    /** Protobuf module */

  }, {
    key: "protobuf",
    get: function get() {
      if (!this._protobuf) {
        this._protobuf = new modules.Protobuf(this);
      }

      return this._protobuf;
    }
    /** Staking module */

  }, {
    key: "staking",
    get: function get() {
      if (!this._staking) {
        this._staking = new modules.Staking(this);
      }

      return this._staking;
    }
    /** Tx module */

  }, {
    key: "tx",
    get: function get() {
      if (!this._tx) {
        this._tx = new modules.Tx(this);
      }

      return this._tx;
    }
    /** Gov module */

  }, {
    key: "gov",
    get: function get() {
      if (!this._gov) {
        this._gov = new modules.Gov(this);
      }

      return this._gov;
    }
    /** Slashing module */

  }, {
    key: "slashing",
    get: function get() {
      if (!this._slashing) {
        this._slashing = new modules.Slashing(this);
      }

      return this._slashing;
    }
    /** Distribution module */

  }, {
    key: "distribution",
    get: function get() {
      if (!this._distribution) {
        this._distribution = new modules.Distribution(this);
      }

      return this._distribution;
    }
    /** Utils module */

  }, {
    key: "utils",
    get: function get() {
      if (!this._utils) {
        this._utils = new modules.Utils(this);
      }

      return this._utils;
    }
    /** Tendermint module */

  }, {
    key: "tendermint",
    get: function get() {
      if (!this._tendermint) {
        this._tendermint = new modules.Tendermint(this);
      }

      return this._tendermint;
    }
    /** Ibc module */

  }, {
    key: "ibc",
    get: function get() {
      if (!this._ibc) {
        this._ibc = new modules.Ibc(this);
      }

      return this._ibc;
    }
  }, {
    key: "withKeyDAO",
    value: function withKeyDAO(keyDAO) {
      // Set default encrypt/decrypt methods
      if (!keyDAO.encrypt || !keyDAO.decrypt) {
        var defaultKeyDAO = new DefaultKeyDAOImpl();
        keyDAO.encrypt = defaultKeyDAO.encrypt;
        keyDAO.decrypt = defaultKeyDAO.decrypt;
      }

      this.config.keyDAO = keyDAO;
      return this;
    }
    /**
     * Set Gaia network type
     *
     * @param network Gaia network type, mainnet / testnet
     * @returns The SDK itself
     */

  }, {
    key: "withNetwork",
    value: function withNetwork(network) {
      this.config.network = network;
      return this;
    }
    /**
     * Set Gaia chain-id
     * Set Gaia network type
     *
     * @param network Gaia network type, mainnet / testnet
     * @returns The SDK itself
     */

  }, {
    key: "withChainNetwork",
    value: function withChainNetwork(chainNetwork) {
      this.config.chainNetwork = chainNetwork;
      return this;
    }
    /**
     * Set Gaia chain-id
     *
     * @param chainId Gaia chain-id
     * @returns The SDK itself
     */

  }, {
    key: "withChainId",
    value: function withChainId(chainId) {
      this.config.chainId = chainId;
      return this;
    }
    /**
     * Set default gas limit
     *
     * @param gas Default gas limit
     * @returns The SDK itself
     */

  }, {
    key: "withGas",
    value: function withGas(gas) {
      this.config.gas = gas;
      return this;
    }
    /**
     * Set default fees
     *
     * @param fee Default fee amount
     * @returns The SDK itself
     */

  }, {
    key: "withFee",
    value: function withFee(fee) {
      this.config.fee = fee;
      return this;
    }
    /**
     * Set Axios config for tendermint rpc requests, refer to: https://github.com/axios/axios#request-config.
     *
     * Note the `baseURL` is set by `SdkConfig.node` and cannot be overwritten by this config
     *
     * @param rpcConfig Axios config for tendermint rpc requests
     * @returns The SDK itself
     */

  }, {
    key: "withRpcConfig",
    value: function withRpcConfig(rpcConfig) {
      rpcConfig.baseURL = this.config.node;
      this.config.rpcConfig = rpcConfig;
      this._rpcClient = new _rpcClient.RpcClient(this.config.rpcConfig);
      return this;
    }
  }]);
  return Client;
}();
/** Gaia SDK Config */


exports.Client = Client;

/** Default Gaia Client Config */
var DefaultClientConfig = function DefaultClientConfig() {
  (0, _classCallCheck2["default"])(this, DefaultClientConfig);
  (0, _defineProperty2["default"])(this, "node", void 0);
  (0, _defineProperty2["default"])(this, "chainNetwork", void 0);
  (0, _defineProperty2["default"])(this, "network", void 0);
  (0, _defineProperty2["default"])(this, "chainId", void 0);
  (0, _defineProperty2["default"])(this, "gas", void 0);
  (0, _defineProperty2["default"])(this, "fee", void 0);
  (0, _defineProperty2["default"])(this, "keyDAO", void 0);
  (0, _defineProperty2["default"])(this, "bech32Prefix", void 0);
  (0, _defineProperty2["default"])(this, "rpcConfig", void 0);
  this.node = '';
  this.network = types.Network.Mainnet;
  this.chainNetwork = types.ChainNetwork.Cosmos;
  this.chainId = '';
  this.gas = '100000';
  this.fee = {
    amount: '',
    denom: ''
  };
  this.keyDAO = new DefaultKeyDAOImpl();
  this.bech32Prefix = {};
  this.rpcConfig = {
    timeout: 2000
  };
};
/**
 * Key DAO Interface, to be implemented by apps if they need the key management.
 */


exports.DefaultClientConfig = DefaultClientConfig;

var DefaultKeyDAOImpl = /*#__PURE__*/function () {
  function DefaultKeyDAOImpl() {
    (0, _classCallCheck2["default"])(this, DefaultKeyDAOImpl);
  }

  (0, _createClass2["default"])(DefaultKeyDAOImpl, [{
    key: "write",
    value: function write(name, key) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.', _errors.CODES.Panic);
    }
  }, {
    key: "read",
    value: function read(name) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.', _errors.CODES.Panic);
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.', _errors.CODES.Panic);
    }
  }, {
    key: "encrypt",
    value: function encrypt(privKey, password) {
      var encrypted = AES.encrypt(privKey, password).toString();

      if (!encrypted) {
        throw new _errors.SdkError('Private key encrypt failed', _errors.CODES.Internal);
      }

      return encrypted;
    }
  }, {
    key: "decrypt",
    value: function decrypt(encrptedPrivKey, password) {
      var decrypted;

      try {
        decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);

        if (!decrypted) {
          throw new _errors.SdkError('Wrong password', _errors.CODES.InvalidPassword);
        }
      } catch (e) {
        throw new _errors.SdkError('Wrong password', _errors.CODES.InvalidPassword);
      }

      return decrypted;
    }
  }]);
  return DefaultKeyDAOImpl;
}();

exports.DefaultKeyDAOImpl = DefaultKeyDAOImpl;