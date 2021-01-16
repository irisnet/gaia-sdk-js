export * as types from './types';
export * as utils from './utils';
export { Client, ClientConfig, KeyDAO } from './client';
export { Crypto } from "./utils";
import { Client, ClientConfig } from './client';
/**
 * Initialize Gaia SDK
 *
 * @param config Gaia SDK [[ClientConfig]]
 *
 * @returns New Gaia SDK Instance
 */
export declare function newClient(config: ClientConfig): Client;
