"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var types = _interopRequireWildcard(require("../types"));

var _helper = require("../helper");

var _errors = require("../errors");

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
   * submit Proposal
   * @param proposal_id 
   * @param option
   * @param baseTx { types.BaseTx }
   * @returns
   * @since v0.17
   */


  (0, _createClass2["default"])(Gov, [{
<<<<<<< HEAD
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

=======
    key: "submitProposal",
    value: function () {
      var _submitProposal = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(content, initial_deposit, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                from = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgSubmitProposal,
                  value: {
                    content: content,
                    initial_deposit: initial_deposit,
                    proposer: from
                  }
                }];
                return _context.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submitProposal(_x, _x2, _x3) {
        return _submitProposal.apply(this, arguments);
      }

      return submitProposal;
    }()
>>>>>>> develop
    /**
     * vote
     * @param proposal_id 
     * @param option
     * @param baseTx { types.BaseTx }
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

<<<<<<< HEAD
=======
  }, {
    key: "vote",
    value: function () {
      var _vote = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(proposal_id, option, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                from = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgVote,
                  value: {
                    proposal_id: proposal_id,
                    voter: from,
                    option: option
                  }
                }];
                return _context2.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function vote(_x4, _x5, _x6) {
        return _vote.apply(this, arguments);
      }

      return vote;
    }()
>>>>>>> develop
    /**
     * deposit
     * @param proposal_id 
     * @param amount
     * @param baseTx { types.BaseTx }
     * @returns
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

<<<<<<< HEAD
=======
  }, {
    key: "deposit",
    value: function () {
      var _deposit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(proposal_id, amount, baseTx) {
        var from, msgs;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                from = this.client.keys.show(baseTx.from);
                msgs = [{
                  type: types.TxType.MsgDeposit,
                  value: {
                    proposal_id: proposal_id,
                    depositor: from,
                    amount: amount
                  }
                }];
                return _context3.abrupt("return", this.client.tx.buildAndSend(msgs, baseTx));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deposit(_x7, _x8, _x9) {
        return _deposit.apply(this, arguments);
      }

      return deposit;
    }()
>>>>>>> develop
    /**
     * Proposal queries proposal details based on ProposalID.
     * @param proposal_id defines the unique id of the proposal.
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

<<<<<<< HEAD
=======
  }, {
    key: "queryProposal",
    value: function queryProposal(proposal_id) {
      var _this = this;

      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }

      var request = new types.gov_query_pb.QueryProposalRequest();
      request.setProposalId(proposal_id);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Proposal', request, types.gov_query_pb.QueryProposalResponse).then(function (res) {
        if (res && res.proposal && res.proposal.content && res.proposal.content.typeUrl && res.proposal.content.value) {
          res.proposal.content = _this.client.protobuf.unpackProposalContent(res.proposal.content);
        }

        return res;
      });
    }
    /**
     * Proposals queries all proposals based on given status.
     * @param proposal_id defines the unique id of the proposal.
     */

  }, {
    key: "queryProposals",
    value: function queryProposals(option) {
      var _this2 = this;

      var page_number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var page_size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.gov_query_pb.QueryProposalsRequest();

      if (typeof option.proposal_status != 'undefined') {
        request.setProposalStatus(option.proposal_status);
      }

      if (option.voter) {
        request.setVoter(option.voter);
      }

      if (option.depositor) {
        request.setDepositor(option.depositor);
      }

      request.setPagination(pagination);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Proposals', request, types.gov_query_pb.QueryProposalsResponse).then(function (res) {
        if (res && res.proposalsList) {
          res.proposalsList = res.proposalsList.map(function (item) {
            if (item.content && item.content.typeUrl && item.content.value) {
              item.content = _this2.client.protobuf.unpackProposalContent(item.content);
            }

            return item;
          });
        }

        return res;
      });
    }
    /**
     * Vote queries voted information based on proposalID, voterAddr.
     * @param proposal_id defines the unique id of the proposal.
     * @param voter defines the oter address for the proposals.
     */

  }, {
    key: "queryVote",
    value: function queryVote(proposal_id, voter) {
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }

      if (!voter) {
        throw new _errors.SdkError("voter can ont be empty");
      }

      var request = new types.gov_query_pb.QueryVoteRequest();
      request.setProposalId(proposal_id);
      request.setVoter(voter);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Vote', request, types.gov_query_pb.QueryVoteResponse);
    }
>>>>>>> develop
    /**
     * Votes queries votes of a given proposal.
     * @param proposal_id defines the unique id of the proposal.
     */

  }, {
<<<<<<< HEAD
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
=======
    key: "queryVotes",
    value: function queryVotes(proposal_id) {
      var page_number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var page_size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.gov_query_pb.QueryVotesRequest();
      request.setProposalId(proposal_id);
      request.setPagination(pagination);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Votes', request, types.gov_query_pb.QueryVotesResponse);
    }
    /**
     * Params queries all parameters of the gov module.
     * @param params_type defines which parameters to query for, can be one of "voting", "tallying" or "deposit".
     */

  }, {
    key: "queryParams",
    value: function queryParams(params_type) {
      if (!params_type) {
        throw new _errors.SdkError("params_type can be one of 'voting', 'tallying' or 'deposit'");
>>>>>>> develop
      }

      var request = new types.gov_query_pb.QueryParamsRequest();
      request.setParamsType(params_type);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Params', request, types.gov_query_pb.QueryParamsResponse);
    }
    /**
     * Deposit queries single deposit information based proposalID, depositAddr.
     * @param proposal_id defines the unique id of the proposal.
     * @param depositor defines the deposit addresses from the proposals.
     */

  }, {
    key: "queryDeposit",
    value: function queryDeposit(proposal_id, depositor) {
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }

      if (!depositor) {
        throw new _errors.SdkError("depositor can ont be empty");
      }

      var request = new types.gov_query_pb.QueryDepositRequest();
      request.setProposalId(proposal_id);
      request.setDepositor(depositor);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Deposit', request, types.gov_query_pb.QueryDepositResponse);
    }
    /**
     * Deposits queries all deposits of a single proposal.
     * @param proposal_id defines the unique id of the proposal.
     */

  }, {
    key: "queryDeposits",
    value: function queryDeposits(proposal_id) {
      var page_number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var page_size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }

      var pagination = _helper.ModelCreator.createPaginationModel(page_number, page_size, true);

      var request = new types.gov_query_pb.QueryDepositsRequest();
      request.setProposalId(proposal_id);
      request.setPagination(pagination);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/Deposits', request, types.gov_query_pb.QueryDepositsResponse);
    }
    /**
     * TallyResult queries the tally of a proposal vote.
     * @param proposal_id defines the unique id of the proposal.
     */

  }, {
    key: "queryTallyResult",
    value: function queryTallyResult(proposal_id) {
      if (!proposal_id) {
        throw new _errors.SdkError("proposal_id can ont be empty");
      }

      var request = new types.gov_query_pb.QueryTallyResultRequest();
      request.setProposalId(proposal_id);
      return this.client.rpcClient.protoQuery('/cosmos.gov.v1beta1.Query/TallyResult', request, types.gov_query_pb.QueryTallyResultResponse);
    }
  }]);
  return Gov;
}();

exports.Gov = Gov;