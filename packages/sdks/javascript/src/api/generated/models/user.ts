/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Language } from './language';
import { SocialAccount } from './social-account';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * The unique ID of the given user
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * User\'s full name
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * The e-mail that will uniquely identify the user on the system and become its login credential
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {Language}
     * @memberof User
     */
    language: Language | null;
    /**
     * Tells if the user is active or not
     * @type {boolean}
     * @memberof User
     */
    active: boolean;
    /**
     * 
     * @type {Array<SocialAccount>}
     * @memberof User
     */
    social_accounts: Array<SocialAccount>;
    /**
     * The code of current billing plan
     * @type {string}
     * @memberof User
     */
    current_billing_plan: string;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof User
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof User
     */
    updated_at: string;
}

