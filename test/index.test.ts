import * as gaia from '../src';

test('Init Client', () => {
  const node = 'localhost:26657';

  const client = gaia.newClient({ node });

  const chainId = 'test';
  const fee = { amount: '3', denom: 'ubig' };
  const gas = '50000';
  const network = gaia.types.Network.Mainnet;

  client
    .withChainId(chainId)
    .withFee(fee)
    .withGas(gas)
    .withNetwork(network);
  expect(client.config.chainId).toBe(chainId);
  expect(client.config.fee).toBe(fee);
  expect(client.config.gas).toBe(gas);
  expect(client.config.network).toBe(network);
  expect(client.config.node).toBe(node);
});
