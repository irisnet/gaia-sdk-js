import * as types from '../src/types';
import { BaseTest } from './basetest';

const timeout = 90000;

describe('ibc Tests', () => {
  describe('Send', () => {
    test(
      'ibc transfer',
      async () => {
        const amount: types.Coin = {
          denom: 'udev',
          amount: '1',
        };
        await BaseTest.getClient()
          .ibc.transfer(
            {
              source_port: 'transfer',
              source_channel: 'channel-0',
              token: amount,
              receiver: 'iaa1n2vjjzquhmguuhd8svd46re6y9zwysyuqptl85',
              timeout_timestamp:1623238730033000000,
            },
            BaseTest.baseTx
          )
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      },
      90000
    );
  });

  describe('Queries', () => {
    test(
      'query denom trace',
      async () => {
        await BaseTest.getClient()
          .ibc.queryDenomTrace('BE92679ADBCA225EA3C8CB3AB22FAAFE5A43F7B08747C29A540A4CB88CE7670F')
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
      'queries all denomination traces',
      async () => {
        await BaseTest.getClient()
          .ibc.queryDenomTraces()
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
      'queries all parameters of the ibc-transfer module',
      async () => {
        await BaseTest.getClient()
          .ibc.queryParams()
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
      'queries all the IBC channels of a chain',
      async () => {
        await BaseTest.getClient()
          .ibc.queryChannels(1,100)
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
