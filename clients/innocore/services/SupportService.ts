/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestForSupport } from '../models/RequestForSupport';
import type { RequestForSupportCreate } from '../models/RequestForSupportCreate';
import type { RequestForSupportUpdate } from '../models/RequestForSupportUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SupportService {
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
     * @param skip Number of items to skip
     * @param limit Maximum number of items to return
     * @returns RequestForSupport Successful Response
     * @throws ApiError
     */
    public static listItemsSupportGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<RequestForSupport>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/support/',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Item
     * Create a new item.
     *
     * Returns
     * -------
     * ResponseSchemaType
     * The newly created item.
     * @param requestBody
     * @returns RequestForSupport Successful Response
     * @throws ApiError
     */
    public static createItemSupportPost(
        requestBody: RequestForSupportCreate,
    ): CancelablePromise<RequestForSupport> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/support/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Item
     * Get a specific item by ID.
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @returns RequestForSupport Successful Response
     * @throws ApiError
     */
    public static getItemSupportItemIdGet(
        itemId: string,
    ): CancelablePromise<RequestForSupport> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/support/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Item
     * Full update (replace) an item.
     *
     * This replaces all fields of the item with the provided values.
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @param requestBody
     * @returns RequestForSupport Successful Response
     * @throws ApiError
     */
    public static updateItemSupportItemIdPut(
        itemId: string,
        requestBody: RequestForSupportUpdate,
    ): CancelablePromise<RequestForSupport> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/support/{item_id}',
            path: {
                'item_id': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Item
     * Partially update an item.
     *
     * This updates only the fields that are provided (non-null values).
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @param requestBody
     * @returns RequestForSupport Successful Response
     * @throws ApiError
     */
    public static patchItemSupportItemIdPatch(
        itemId: string,
        requestBody: RequestForSupportUpdate,
    ): CancelablePromise<RequestForSupport> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/support/{item_id}',
            path: {
                'item_id': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Item
     * Delete an item.
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @returns RequestForSupport Successful Response
     * @throws ApiError
     */
    public static deleteItemSupportItemIdDelete(
        itemId: string,
    ): CancelablePromise<RequestForSupport> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/support/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
