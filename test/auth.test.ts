import { BaseTest } from './basetest';

const timeout = 10000;

describe('Nft Tests', () => {

  describe('query', () => {
    test(
      'query Account',
      async () => {
        await BaseTest.getClient()
        .auth.queryAccount('cosmos176dd0tgn38grpc8hpxfmwl6sl8jfmknea9m8yj')
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
      'query Params',
      async () => {
        await BaseTest.getClient()
        .auth.queryParams()
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
