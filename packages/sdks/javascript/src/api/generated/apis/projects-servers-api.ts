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
import { Server } from '../../generated/models';
import { ServerCreate } from '../../generated/models';
import { ServerRelation } from '../../generated/models';

/**
 * ProjectsServersApiService - Auto-generated
 */
export class ProjectsServersApiService extends ApiBaseService {
    /**
     * 
     * @summary Creates a server and link it to the given project
     * @param {number} projectId The ID of the project.
     * @param {ServerCreate} serverCreate A JSON object containing the resource data
     */
    public async addProjectServer(projectId: number, serverCreate: ServerCreate): Promise<ApiResponse<Server>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addProjectServer');
        }
        if (serverCreate === null || serverCreate === undefined) {
            throw new ArgumentNullException('serverCreate', 'addProjectServer');
        }
        
        let queryString = '';

        const requestUrl = '/projects/{project_id}/servers' + (queryString? `?${queryString}` : '');

        const response = await this.post <Server, ServerCreate>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), serverCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List all servers linked to a project
     * @param {number} projectId The ID of the project.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listProjectServers(projectId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<ServerRelation>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectServers');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/projects/{project_id}/servers' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ServerRelation>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
