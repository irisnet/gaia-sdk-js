import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 10000;

describe('Bank Tests', () => {
  describe('Send', () => {
    test(
      'send coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'ubig',
            amount: '1',
          },
        ];

        await BaseTest.getClient()
          .bank.send(
            'cosmos186qhtc62cf6ejlt3erw6zk28mgw8ne7gmthzkc',
            amount,
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('multiSend', () => {
    test(
      'send coins',
      async () => {
        const amount: types.Coin[] = [
          {
            denom: 'ubif',
            amount: '1',
          },
        ];

        await BaseTest.getClient()
          .bank.multiSend(
            'cosmos186qhtc62cf6ejlt3erw6zk28mgw8ne7gmthzkc',
            amount,
            BaseTest.baseTx
          )
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });

  describe('Queries', () => {
    test(
      'query account',
      async () => {
        await BaseTest.getClient()
          .bank.queryAccount('cosmos186qhtc62cf6ejlt3erw6zk28mgw8ne7gmthzkc')
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query Balance',
      async () => {
        await BaseTest.getClient()
          .bank.queryBalance('cosmos186qhtc62cf6ejlt3erw6zk28mgw8ne7gmthzkc','ubig')
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query All Balances',
      async () => {
        await BaseTest.getClient()
          .bank.queryAllBalances('cosmos186qhtc62cf6ejlt3erw6zk28mgw8ne7gmthzkc')
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query Total Supply',
      async () => {
        await BaseTest.getClient()
          .bank.queryTotalSupply()
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
    
    test(
      'query Supply Of',
      async () => {
        await BaseTest.getClient()
          .bank.querySupplyOf('btc')
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );

    test(
      'query All Balances',
      async () => {
        await BaseTest.getClient()
          .bank.queryParams()
          .then(res => {
            console.log(JSON.stringify(res));
          })
          .catch(error => {
            console.log(error);
          });
      },
      timeout
    );
  });
});
