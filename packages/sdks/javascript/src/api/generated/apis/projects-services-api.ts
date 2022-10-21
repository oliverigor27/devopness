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
import { Service } from '../../generated/models';
import { ServiceCreate } from '../../generated/models';
import { ServiceRelation } from '../../generated/models';

/**
 * ProjectsServicesApiService - Auto-generated
 */
export class ProjectsServicesApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a service to a project and trigger its setup in each linked server
     * @param {number} projectId The ID of the project.
     * @param {ServiceCreate} serviceCreate A JSON object containing the resource data
     */
    public async addProjectService(projectId: number, serviceCreate: ServiceCreate): Promise<ApiResponse<Service>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addProjectService');
        }
        if (serviceCreate === null || serviceCreate === undefined) {
            throw new ArgumentNullException('serviceCreate', 'addProjectService');
        }
        
        let queryString = '';

        const requestUrl = '/projects/{project_id}/services' + (queryString? `?${queryString}` : '');

        const response = await this.post <Service, ServiceCreate>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), serviceCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List all services in a project
     * @param {number} projectId The ID of the project.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listProjectServices(projectId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<ServiceRelation>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectServices');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/projects/{project_id}/services' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ServiceRelation>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
