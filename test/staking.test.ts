import { BaseTest } from './basetest';

describe('Staking Tests', () => {
  describe('Query', () => {
    test('query delegation', async () => {
      await BaseTest.getClient()
        .staking.queryDelegation(
          'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj',
          'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t'
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
    
    test('query unbonding delegation', async () => {
      await BaseTest.getClient()
        .staking.queryUnbondingDelegation(
          'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj',
          'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t'
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query delegations of a delegator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegations({
          delegator_addr:'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj'
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query unbonding delegations of a delegator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegatorUnbondingDelegations(
          {
            delegator_addr:'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj',
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query redelegation', async () => {//TODO(lsc) there is only one node in current blockchain net, redelegate tx can not work properly
      await BaseTest.getClient()
        .staking.queryRedelegation(
          {
            delegator_addr:'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj',
            src_validator_addr:'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t',
            dst_validator_addr:'cosmosvaloper176dd0tgn38grpc8hpxfmwl6sl8jfmknec30jgp',
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query all validators info for given delegator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegatorValidators(
          {
            delegator_addr:'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj',
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('queries validator info for given delegator validator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegatorValidator(
          {
            delegator_addr:'cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj',
            validator_addr:'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t',
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('queries the historical info for given height', async () => {//TODO(lsc) what can this api do?
      await BaseTest.getClient()
        .staking.queryHistoricalInfo(
          {
            height:1000,
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query pool', async () => {
      await BaseTest.getClient()
        .staking.queryPool()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query params', async () => {
      await BaseTest.getClient()
        .staking.queryParams()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query delegations to a validator', async () => {
      await BaseTest.getClient()
        .staking.queryValidatorDelegations(
          {
            validator_addr:'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t'
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query undelegating delegations from a validator', async () => {
      await BaseTest.getClient()
        .staking.queryValidatorUnbondingDelegations(
          {
            validator_addr:'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t'
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query a validator', async () => {
      await BaseTest.getClient()
        .staking.queryValidator('cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t')
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query all validators', async () => {
      await BaseTest.getClient()
        .staking.queryValidators({
          page:1,
          size:100,
          count_total:true,
          //status:'Bonded',
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });

  describe('Delegate', () => {
    test('delegate', async () => {
      await BaseTest.getClient()
        .staking.delegate(
          'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t',
          { denom: 'ubig', amount: '50000' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Unbond', () => {
    test('unbond', async () => {
      await BaseTest.getClient()
        .staking.undelegate(
          'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t',
              { denom: 'ubig', amount: '1000' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Redelegate', () => {
    test('redelegate', async () => {
      await BaseTest.getClient()
        .staking.redelegate(
          'cosmosvaloper186qhtc62cf6ejlt3erw6zk28mgw8ne7g7lrh6t',
          'cosmosvaloper176dd0tgn38grpc8hpxfmwl6sl8jfmknec30jgp',
              { denom: 'ubig', amount: '100' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
});
