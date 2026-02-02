/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from '../models/Message';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HistoryService {
    /**
     * List Items
     * List all items with pagination.
     *
     * Parameters
     * ----------
     * skip : int
     * Number of items to skip (for pagination).
     * limit : int
     * Maximum number of items to return (1-1000).
     * @param assistantId
     * @param skip Number of items to skip
     * @param limit Maximum number of items to return
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static listItemsHistoryAssistantIdGet(
        assistantId: string,
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Message>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/history/{assistant_id}',
            path: {
                'assistant_id': assistantId,
            },
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
