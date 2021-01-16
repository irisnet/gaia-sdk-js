"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gov = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _gov = require("../types/gov");

/**
 * This module provides governance functionalities
 *
 * [More Details](https://www.irisnet.org/docs/features/governance.html)
 *
 * @category Modules
 * @since v0.17
 */
var Gov = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Gov(client) {
    (0, _classCallCheck2["default"])(this, Gov);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * Query details of a single proposal
   * @param proposalID Identity of a proposal
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Gov, [{
    key: "queryProposal",
    value: function queryProposal(proposalID) {
      return this.client.rpcClient.abciQuery('custom/gov/proposal', {
        ProposalID: String(proposalID)
      });
    }
    /**
     * Query proposals by conditions
     * @param params
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryProposals",
    value: function queryProposals(params) {
      var queryParams = {};

      if (params) {
        queryParams = {
          Voter: params.voter,
          Depositor: params.depositor,
          ProposalStatus: params.proposalStatus,
          Limit: String(params.limit)
        };
      }

      return this.client.rpcClient.abciQuery('custom/gov/proposals', queryParams);
    }
    /**
     * Query a vote
     * @param proposalID Identity of a proposal
     * @param voter Bech32 voter address
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryVote",
    value: function queryVote(proposalID, voter) {
      return this.client.rpcClient.abciQuery('custom/gov/vote', {
        ProposalID: String(proposalID),
        Voter: voter
      });
    }
    /**
     * Query all votes of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryVotes",
    value: function queryVotes(proposalID) {
      return this.client.rpcClient.abciQuery('custom/gov/votes', {
        ProposalID: String(proposalID)
      });
    }
    /**
     * Query a deposit of a proposal
     * @param proposalID Identity of a proposal
     * @param depositor Bech32 depositor address
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryDeposit",
    value: function queryDeposit(proposalID, depositor) {
      return this.client.rpcClient.abciQuery('custom/gov/deposit', {
        ProposalID: String(proposalID),
        Depositor: depositor
      });
    }
    /**
     * Query all deposits of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryDeposits",
    value: function queryDeposits(proposalID) {
      return this.client.rpcClient.abciQuery('custom/gov/deposits', {
        ProposalID: String(proposalID)
      });
    }
    /**
     * Query the statistics of a proposal
     * @param proposalID Identity of a proposal
     * @returns
     * @since v0.17
     */

  }, {
    key: "queryTally",
    value: function queryTally(proposalID) {
      return this.client.rpcClient.abciQuery('custom/gov/tally', {
        ProposalID: String(proposalID)
      });
    }
    /**
     * Submit a ParameterChangeProposal along with an initial deposit
     *
     * The proposer must deposit at least 30% of the [MinDeposit](https://www.irisnet.org/docs/features/governance.html#proposal-level) to submit a proposal.
     *
     * [Read about which parameters can be changed online](https://www.irisnet.org/docs/concepts/gov-params.html)
     *
     * @param title Title of the proposal
     * @param description Description of the proposal
     * @param initialDeposit Initial deposit of the proposal(at least 30% of minDeposit)
     * @param params On-chain Parameter to be changed, eg. `[{"subspace":"mint","key":"Inflation","value":"0.05"}]`
     * @param baseTx
     * @returns
     * @since v0.17
     */
    // async submitParameterChangeProposal(
    //   title: string,
    //   description: string,
    //   initialDeposit: types.Coin[],
    //   params: types.ChangeParameter[],
    //   baseTx: types.BaseTx
    // ): Promise<types.TxResult> {
    //   const proposer = this.client.keys.show(baseTx.from);
    //   const coins = await this.client.utils.toMinCoins(initialDeposit);
    //   const msgs: types.Msg[] = [
    //     new MsgSubmitParameterChangeProposal({
    //       title,
    //       description,
    //       proposer,
    //       initial_deposit: coins,
    //       params,
    //     }),
    //   ];
    //   return this.client.tx.buildAndSend(msgs, baseTx);
    // }

    /**
     * Submit a PlainTextProposal along with an initial deposit
     *
     * The proposer must deposit at least 30% of the [MinDeposit](https://www.irisnet.org/docs/features/governance.html#proposal-level) to submit a proposal.
     *
     * @param title Title of the proposal
     * @param description Description of the proposal
     * @param initialDeposit Initial deposit of the proposal(at least 30% of minDeposit)
     * @param baseTx
     * @returns
     * @since v0.17
     */
    // async submitPlainTextProposal(
    //   title: string,
    //   description: string,
    //   initialDeposit: types.Coin[],
    //   baseTx: types.BaseTx
    // ): Promise<types.TxResult> {
    //   const proposer = this.client.keys.show(baseTx.from);
    //   const coins = await this.client.utils.toMinCoins(initialDeposit);
    //   const msgs: types.Msg[] = [
    //     new MsgSubmitPlainTextProposal({
    //       title,
    //       description,
    //       proposer,
    //       initial_deposit: coins,
    //     }),
    //   ];
    //   return this.client.tx.buildAndSend(msgs, baseTx);
    // }

    /**
     * Submit a CommunityTaxUsageProposal along with an initial deposit
     *
     * There are three usages, Burn, Distribute and Grant. Burn means burning tokens from community funds.
     * Distribute and Grant will transfer tokens to the destination trustee's account from community funds.
     *
     * The proposer must deposit at least 30% of the [MinDeposit](https://www.irisnet.org/docs/features/governance.html#proposal-level) to submit a proposal.
     *
     * @param title Title of the proposal
     * @param description Description of the proposal
     * @param initialDeposit Initial deposit of the proposal(at least 30% of minDeposit)
     * @param usage Type of the CommunityTaxUsage
     * @param dest_address Bech32 destination address to receive the distributed or granted funds
     * @param percent Percentage of the current community pool to be used
     * @param baseTx
     * @since v0.17
     */
    // async submitCommunityTaxUsageProposal(
    //   title: string,
    //   description: string,
    //   initialDeposit: types.Coin[],
    //   usage: CommunityTaxUsageType,
    //   destAddress: string,
    //   percent: number,
    //   baseTx: types.BaseTx
    // ): Promise<types.TxResult> {
    //   const proposer = this.client.keys.show(baseTx.from);
    //   const coins = await this.client.utils.toMinCoins(initialDeposit);
    //   const msgs: types.Msg[] = [
    //     new MsgSubmitCommunityTaxUsageProposal({
    //       title,
    //       description,
    //       proposer,
    //       initial_deposit: coins,
    //       usage: CommunityTaxUsageType[usage],
    //       dest_address: destAddress,
    //       percent: String(percent),
    //     }),
    //   ];
    //   return this.client.tx.buildAndSend(msgs, baseTx);
    // }

    /**
     * Deposit tokens for an active proposal.
     *
     * When the total deposit amount exceeds the [MinDeposit](https://www.irisnet.org/docs/features/governance.html#proposal-level), the proposal will enter the voting procedure.
     *
     * @param proposalID Identity of a proposal
     * @param amount Amount to be deposited
     * @param baseTx
     * @returns
     * @since v0.17
     */
    // async deposit(
    //   proposalID: number,
    //   amount: types.Coin[],
    //   baseTx: types.BaseTx
    // ): Promise<types.TxResult> {
    //   const depositor = this.client.keys.show(baseTx.from);
    //   const coins = await this.client.utils.toMinCoins(amount);
    //   const msgs: types.Msg[] = [
    //     new MsgDeposit(String(proposalID), depositor, coins),
    //   ];
    //   return this.client.tx.buildAndSend(msgs, baseTx);
    // }

    /**
     * Vote for an active proposal, options: Yes/No/NoWithVeto/Abstain.
     * Only validators and delegators can vote for proposals in the voting period.
     *
     * @param proposalID Identity of a proposal
     * @param option Vote option
     * @param baseTx
     * @since v0.17
     */

  }, {
    key: "vote",
    value: function () {
      var _vote = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(proposalID, option, baseTx) {
        var voter, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                voter = this.client.keys.show(baseTx.from);
                msgs = [new _gov.MsgVote(String(proposalID), voter, option)];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function vote(_x, _x2, _x3) {
        return _vote.apply(this, arguments);
      }

      return vote;
    }() // =================== NOT SUPPORTED ==================== //
    // submitSoftwareUpgradeProposal;                         //
    // submitSystemHaltProposal;                              //
    // =================== NOT SUPPORTED ==================== //

  }]);
  return Gov;
}();

exports.Gov = Gov;