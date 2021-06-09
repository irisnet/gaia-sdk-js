/**
 * Keystore struct
 * @hidden
 */
export interface Keystore {
    version: number;
    id: string;
    address: string;
    crypto: Crypto;
}
/**
 * Keystore header struct
 * @hidden
 */
export interface KeystoreHeader {
    kdf?: string;
    salt?: string;
    type?: string;
}
/**
 * Keystore struct
 * @hidden
 */
export interface KeystoreV1 {
    header: KeystoreHeader;
    data: string;
    type?: string;
    text?: string;
}
/**
 * Keys struct
 * @hidden
 */
export interface Key {
    address: string;
    privKey: string;
}
/**
 * Key struct
 * @hidden
 */
interface KeyPair {
    privateKey: string;
    publicKey: string;
}
/**
 * wallet struct
 */
export interface Wallet extends KeyPair {
    address: string;
    mnemonic?: string;
}
/**
 * Crypto struct
 * @hidden
 */
export interface Crypto {
    ciphertext: string;
    cipherparams: Cipherparams;
    cipher: string;
    kdf: string;
    kdfparams: Kdfparams;
    mac: string;
}
/**
 * Cipherparams struct
 * @hidden
 */
export interface Cipherparams {
    iv: string;
}
/**
 * Kdfparams struct
 * @hidden
 */
export interface Kdfparams {
    dklen: number;
    salt: string;
    c: number;
    prf: string;
}
/**
 * StoreType of a key
 * - Keystore: save the key as an encrypted keystore
 * - Key: save the key as a plaintext private key
 */
export declare enum StoreType {
    Keystore = 0,
    Key = 1
}
export {};
