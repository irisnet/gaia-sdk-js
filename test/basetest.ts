import * as gaia from '../src';
import { Client } from '../src/client';

export class Consts {
  static timeout = 10000;
  static keyName = 'name';
  static keyPassword = 'password';
}

/** Test KeyDAO */
export class TestKeyDAO implements gaia.KeyDAO {
  keyMap: { [key: string]: gaia.types.Wallet } = {};
  write(name: string, key: gaia.types.Wallet) {
    this.keyMap[name] = key;
  }
  read(name: string): gaia.types.Wallet {
    return this.keyMap[name];
  }
  delete(name: string) {
    delete this.keyMap[name];
  }
}

export class BaseTest {
  static baseTx: gaia.types.BaseTx = {
    from: Consts.keyName,
    password: Consts.keyPassword,
    mode: gaia.types.BroadcastMode.Commit,
    // pubkeyType:types.PubkeyType.sm2
  };

  static getClient(): Client {
    let config = {
        node: 'http://192.168.150.41:26657',
        chainId: 'dev',
        gas: '2000000',
        fee: { denom: 'udev', amount: '1' },
    };
    let privateKey = '1E120611404C4B1B98FC899A8026A6A9823C35985DA3C5ED3FF57C170C822F60'

    // let config = {
    //     node: 'http://34.80.22.255:26657',
    //     network: gaia.types.Network.Mainnet,
    //     chainId: 'bifrost-1',
    //     gas: '200000',
    //     fee: { denom: 'ubif', amount: '5000' },
    // };
    // let privateKey = '80A69946ADD77EF0C17F43E72E759164F6F0A2A7E9D5D3E0966A3BCA8DE3D177'

    const client = gaia
      .newClient(config)
      .withKeyDAO(new TestKeyDAO())
      .withRpcConfig({ timeout: Consts.timeout });

    client.keys.recover(
      Consts.keyName,
      Consts.keyPassword,
      'razor educate ostrich pave permit comic collect square believe decade scan day frozen language make winter lyrics spice dawn deliver jaguar arrest decline success'
    );

    // client.keys.importPrivateKey(
    //   Consts.keyName,
    //   Consts.keyPassword,
    //   privateKey,
    //   types.PubkeyType.sm2
    // );
    return client;
  }
}
