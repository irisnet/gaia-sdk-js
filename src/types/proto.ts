/***************TX*****************/
//cosmos tx
export const bank_tx_pb = require( './proto-types/cosmos/bank/v1beta1/tx_pb');
export const crisis_tx_pb = require( './proto-types/cosmos/crisis/v1beta1/tx_pb');
export const distribution_tx_pb = require( './proto-types/cosmos/distribution/v1beta1/tx_pb');
export const evidence_tx_pb = require( './proto-types/cosmos/evidence/v1beta1/tx_pb');
export const gov_tx_pb = require( './proto-types/cosmos/gov/v1beta1/tx_pb');
export const slashing_tx_pb = require( './proto-types/cosmos/slashing/v1beta1/tx_pb');
export const staking_tx_pb = require( './proto-types/cosmos/staking/v1beta1/tx_pb');
export const tx_tx_pb = require( './proto-types/cosmos/tx/v1beta1/tx_pb');
export const vesting_tx_pb = require( './proto-types/cosmos/vesting/v1beta1/tx_pb');

//ibc tx
export const ibc_transfer_tx_pb= require( './proto-types/ibc/applications/transfer/v1/tx_pb');

/***************QUERY***************/
export const base_query_pagination_pb = require( './proto-types/cosmos/base/query/v1beta1/pagination_pb');
//cosmos query
export const auth_query_pb = require( './proto-types/cosmos/auth/v1beta1/query_pb');
export const bank_query_pb = require( './proto-types/cosmos/bank/v1beta1/query_pb');
export const distribution_query_pb = require( './proto-types/cosmos/distribution/v1beta1/query_pb');
export const evidence_query_pb = require( './proto-types/cosmos/evidence/v1beta1/query_pb');
export const gov_query_pb = require( './proto-types/cosmos/gov/v1beta1/query_pb');
export const mint_query_pb = require( './proto-types/cosmos/mint/v1beta1/query_pb');
export const params_query_pb = require( './proto-types/cosmos/params/v1beta1/query_pb');
export const slashing_query_pb = require( './proto-types/cosmos/slashing/v1beta1/query_pb');
export const staking_query_pb = require( './proto-types/cosmos/staking/v1beta1/query_pb');
export const upgrade_query_pb = require( './proto-types/cosmos/upgrade/v1beta1/query_pb');

//ibc query
export const ibc_transfer_query_pb= require( './proto-types/ibc/applications/transfer/v1/query_pb');
export const ibc_channel_query_pb= require( './proto-types/ibc/core/channel/v1/query_pb');

/***************MODULES***************/
//cosmos module
export const auth_auth_pb = require( './proto-types/cosmos/auth/v1beta1/auth_pb');
export const crypto_secp256k1_keys_pb = require( './proto-types/cosmos/crypto/secp256k1/keys_pb');
export const crypto_ed25519_keys_pb = require( './proto-types/cosmos/crypto/ed25519/keys_pb');
export const crypto_sm2_keys_pb = require( './proto-types/cosmos/crypto/sm2/keys_pb');
export const base_coin_pb = require('./proto-types/cosmos/base/v1beta1/coin_pb');
export const signing_signing_pb = require('./proto-types/cosmos/tx/signing/v1beta1/signing_pb');
export const gov_gov_pb = require( './proto-types/cosmos/gov/v1beta1/gov_pb');
export const distribution_distribution_pb = require( './proto-types/cosmos/distribution/v1beta1/distribution_pb');
export const params_params_pb = require( './proto-types/cosmos/params/v1beta1/params_pb');
export const upgrade_upgrade_pb = require( './proto-types/cosmos/upgrade/v1beta1/upgrade_pb');
export const slashing_slashing_pb = require('./proto-types/cosmos/slashing/v1beta1/slashing_pb');

// ibc module
export const ibc_core_client_pb= require( './proto-types/ibc/core/client/v1/client_pb');
// export const lightclients_tendermint_tendermint_pb = require( './proto-types/ibc/lightclients/tendermint/v1/tendermint_pb');

//confio module
// export const confio_proofs_pb = require( './proto-types/confio/proofs_pb');

// google module
export const google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
// export const google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

//any
export const any_pb = require( './proto-types/google/protobuf/any_pb');
