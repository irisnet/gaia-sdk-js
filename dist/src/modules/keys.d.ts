import { Client } from '../client';
import * as types from '../types';
/**
 * This module allows you to manage your local tendermint keystore (wallets) for iris.
 *
 * **NOTE:** You need to implement the [[KeyDAO]] Interface first.
 *
 * @category Modules
 * @since v0.17
 */
export declare class Keys {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * Create a new key
     *
     * @param name Name of the key
     * @param password Password for encrypting the keystore
     * @param type Pubkey Type
     * @returns Bech32 address and mnemonic
     * @since v0.17
     */
    add(name: string, password: string, type?: types.PubkeyType): types.Wallet;
    /**
     * Recover a key
     *
     * @param name Name of the key
     * @param password Password for encrypting the keystore
     * @param mnemonic Mnemonic of the key
     * @param type Pubkey Type
     * @param index The bip44 address index (default: 0)
     * @param derive Derive a private key using the default HD path (default: true)
     * @param saltPassword A passphrase for generating the salt, according to bip39
     * @returns Bech32 address
     * @since v0.17
     */
    recover(name: string, password: string, mnemonic: string, type?: types.PubkeyType, index?: number, derive?: boolean, saltPassword?: string): types.Wallet;
    /**
     * Import a key from keystore
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param keystore Keystore json or object
     * @param type Pubkey Type
     * @returns types.Wallet
     * @since v0.17
     */
    import(name: string, password: string, keystore: string | types.Keystore, type?: types.PubkeyType): types.Wallet;
    /**
     * Import a key from keystore v1.0
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param keystore Keystore v1.0
     * @returns types.Wallet
     * @since v0.17
     */
    importKeystore(name: string, password: string, keystore: string): types.Wallet;
    /**
     * Import a PrivateKey
     *
     * @param name Name of the key
     * @param password Password of the keystore
     * @param privateKey privateKey hex
     * @param type Pubkey Type
     * @returns Bech32 address
     * @since v0.17
     */
    importPrivateKey(name: string, password: string, privateKey: string, type?: types.PubkeyType): types.Wallet;
    /**
     * Export keystore of a key
     *
     * @param name Name of the key
     * @param keyPassword Password of the key
     * @param keystorePassword Password for encrypting the keystore
     * @param iterations
     * @returns Keystore json
     * @since v0.17
     */
    export(name: string, keyPassword: string, keystorePassword: string, iterations?: number): string;
    /**
     * Delete a key
     *
     * @param name Name of the key
     * @param password Password of the key
     * @since v0.17
     */
    delete(name: string, password: string): void;
    /**
     * Gets address of a key
     *
     * @param name Name of the key
     * @returns Bech32 address
     * @since v0.17
     */
    show(name: string): string;
}
