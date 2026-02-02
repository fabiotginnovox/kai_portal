/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WaitList } from '../models/WaitList';
import type { WaitListCreate } from '../models/WaitListCreate';
import type { WaitListUpdate } from '../models/WaitListUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WaitListsService {
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
     * @returns WaitList Successful Response
     * @throws ApiError
     */
    public static listItemsWaitlistGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<WaitList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/waitlist/',
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
     * @returns WaitList Successful Response
     * @throws ApiError
     */
    public static createItemWaitlistPost(
        requestBody: WaitListCreate,
    ): CancelablePromise<WaitList> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/waitlist/',
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
     * @returns WaitList Successful Response
     * @throws ApiError
     */
    public static getItemWaitlistItemIdGet(
        itemId: string,
    ): CancelablePromise<WaitList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/waitlist/{item_id}',
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
     * @returns WaitList Successful Response
     * @throws ApiError
     */
    public static updateItemWaitlistItemIdPut(
        itemId: string,
        requestBody: WaitListUpdate,
    ): CancelablePromise<WaitList> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/waitlist/{item_id}',
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
     * @returns WaitList Successful Response
     * @throws ApiError
     */
    public static patchItemWaitlistItemIdPatch(
        itemId: string,
        requestBody: WaitListUpdate,
    ): CancelablePromise<WaitList> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/waitlist/{item_id}',
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
     * @returns WaitList Successful Response
     * @throws ApiError
     */
    public static deleteItemWaitlistItemIdDelete(
        itemId: string,
    ): CancelablePromise<WaitList> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/waitlist/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
