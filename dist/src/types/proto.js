"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.any_pb = exports.signing_signing_pb = exports.base_coin_pb = exports.crypto_sm2_keys_pb = exports.crypto_ed25519_keys_pb = exports.crypto_secp256k1_keys_pb = exports.auth_auth_pb = exports.upgrade_query_pb = exports.staking_query_pb = exports.slashing_query_pb = exports.params_query_pb = exports.mint_query_pb = exports.gov_query_pb = exports.evidence_query_pb = exports.distribution_query_pb = exports.bank_query_pb = exports.auth_query_pb = exports.base_query_pagination_pb = exports.vesting_tx_pb = exports.tx_tx_pb = exports.staking_tx_pb = exports.slashing_tx_pb = exports.gov_tx_pb = exports.evidence_tx_pb = exports.distribution_tx_pb = exports.crisis_tx_pb = exports.bank_tx_pb = void 0;

/***************TX*****************/
//cosmos tx
var bank_tx_pb = require('./proto-types/cosmos/bank/v1beta1/tx_pb');

exports.bank_tx_pb = bank_tx_pb;

var crisis_tx_pb = require('./proto-types/cosmos/crisis/v1beta1/tx_pb');

exports.crisis_tx_pb = crisis_tx_pb;

var distribution_tx_pb = require('./proto-types/cosmos/distribution/v1beta1/tx_pb');

exports.distribution_tx_pb = distribution_tx_pb;

var evidence_tx_pb = require('./proto-types/cosmos/evidence/v1beta1/tx_pb');

exports.evidence_tx_pb = evidence_tx_pb;

var gov_tx_pb = require('./proto-types/cosmos/gov/v1beta1/tx_pb');

exports.gov_tx_pb = gov_tx_pb;

var slashing_tx_pb = require('./proto-types/cosmos/slashing/v1beta1/tx_pb');

exports.slashing_tx_pb = slashing_tx_pb;

var staking_tx_pb = require('./proto-types/cosmos/staking/v1beta1/tx_pb');

exports.staking_tx_pb = staking_tx_pb;

var tx_tx_pb = require('./proto-types/cosmos/tx/v1beta1/tx_pb');

exports.tx_tx_pb = tx_tx_pb;

var vesting_tx_pb = require('./proto-types/cosmos/vesting/v1beta1/tx_pb');
/***************QUERY***************/


exports.vesting_tx_pb = vesting_tx_pb;

var base_query_pagination_pb = require('./proto-types/cosmos/base/query/v1beta1/pagination_pb'); //cosmos query


exports.base_query_pagination_pb = base_query_pagination_pb;

var auth_query_pb = require('./proto-types/cosmos/auth/v1beta1/query_pb');

exports.auth_query_pb = auth_query_pb;

var bank_query_pb = require('./proto-types/cosmos/bank/v1beta1/query_pb');

exports.bank_query_pb = bank_query_pb;

var distribution_query_pb = require('./proto-types/cosmos/distribution/v1beta1/query_pb');

exports.distribution_query_pb = distribution_query_pb;

var evidence_query_pb = require('./proto-types/cosmos/evidence/v1beta1/query_pb');

exports.evidence_query_pb = evidence_query_pb;

var gov_query_pb = require('./proto-types/cosmos/gov/v1beta1/query_pb');

exports.gov_query_pb = gov_query_pb;

var mint_query_pb = require('./proto-types/cosmos/mint/v1beta1/query_pb');

exports.mint_query_pb = mint_query_pb;

var params_query_pb = require('./proto-types/cosmos/params/v1beta1/query_pb');

exports.params_query_pb = params_query_pb;

var slashing_query_pb = require('./proto-types/cosmos/slashing/v1beta1/query_pb');

exports.slashing_query_pb = slashing_query_pb;

var staking_query_pb = require('./proto-types/cosmos/staking/v1beta1/query_pb');

exports.staking_query_pb = staking_query_pb;

var upgrade_query_pb = require('./proto-types/cosmos/upgrade/v1beta1/query_pb');
/***************MODULES***************/
//cosmos module


exports.upgrade_query_pb = upgrade_query_pb;

var auth_auth_pb = require('./proto-types/cosmos/auth/v1beta1/auth_pb');

exports.auth_auth_pb = auth_auth_pb;

var crypto_secp256k1_keys_pb = require('./proto-types/cosmos/crypto/secp256k1/keys_pb');

exports.crypto_secp256k1_keys_pb = crypto_secp256k1_keys_pb;

var crypto_ed25519_keys_pb = require('./proto-types/cosmos/crypto/ed25519/keys_pb');

exports.crypto_ed25519_keys_pb = crypto_ed25519_keys_pb;

var crypto_sm2_keys_pb = require('./proto-types/cosmos/crypto/sm2/keys_pb');

exports.crypto_sm2_keys_pb = crypto_sm2_keys_pb;

var base_coin_pb = require('./proto-types/cosmos/base/v1beta1/coin_pb');

exports.base_coin_pb = base_coin_pb;

var signing_signing_pb = require('./proto-types/cosmos/tx/signing/v1beta1/signing_pb'); //any


exports.signing_signing_pb = signing_signing_pb;

var any_pb = require('./proto-types/google/protobuf/any_pb');

exports.any_pb = any_pb;