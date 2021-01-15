import { BaseTest } from './basetest';
describe('Slashing Tests', () => {
  // Not supported
  // describe('Query Params', () => {
  //   test(
  //     'query params',
  //     async () => {
  //       await client.slashing
  //         .queryParams()
  //         .then(res => {
  //           console.log(JSON.stringify(res));
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //     },
  //     timeout
  //   );
  // });

  describe('Query Signing Info', () => {
    test('query signing info', async () => {
      await BaseTest.getClient()
        .slashing.querySigningInfo('cosmosvaloper176dd0tgn38grpc8hpxfmwl6sl8jfmknec30jgp')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Unjail', () => {
    test('unjail', async () => {
      await BaseTest.getClient()
        .slashing.unjail(
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
});
