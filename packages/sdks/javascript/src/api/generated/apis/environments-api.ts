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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { Environment } from '../../generated/models';
import { EnvironmentUpdate } from '../../generated/models';

/**
 * EnvironmentsApiService - Auto-generated
 */
export class EnvironmentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Archive an environment
     * @param {number} environmentId The ID of the environment.
     */
    public async archiveEnvironment(environmentId: number): Promise<ApiResponse<void>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'archiveEnvironment');
        }
        
        let queryString = '';

        const requestUrl = '/environments/{environment_id}/archive' + (queryString? `?${queryString}` : '');

        const response = await this.post <void>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get an environment by ID
     * @param {number} environmentId The ID of the environment.
     */
    public async getEnvironment(environmentId: number): Promise<ApiResponse<Environment>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'getEnvironment');
        }
        
        let queryString = '';

        const requestUrl = '/environments/{environment_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Environment>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Unarchive an environment
     * @param {number} environmentId The ID of the environment.
     */
    public async unarchiveEnvironment(environmentId: number): Promise<ApiResponse<void>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'unarchiveEnvironment');
        }
        
        let queryString = '';

        const requestUrl = '/environments/{environment_id}/unarchive' + (queryString? `?${queryString}` : '');

        const response = await this.post <void>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update a given environment
     * @param {number} environmentId The ID of the environment.
     * @param {EnvironmentUpdate} environmentUpdate A JSON object containing the resource data
     */
    public async updateEnvironment(environmentId: number, environmentUpdate: EnvironmentUpdate): Promise<ApiResponse<void>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'updateEnvironment');
        }
        if (environmentUpdate === null || environmentUpdate === undefined) {
            throw new ArgumentNullException('environmentUpdate', 'updateEnvironment');
        }
        
        let queryString = '';

        const requestUrl = '/environments/{environment_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, EnvironmentUpdate>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))), environmentUpdate);
        return new ApiResponse(response);
    }
}
