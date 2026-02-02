/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Prompt } from '../models/Prompt';
import type { PromptContextCreate } from '../models/PromptContextCreate';
import type { PromptContextUpdate } from '../models/PromptContextUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PromptContextService {
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
     * @returns Prompt Successful Response
     * @throws ApiError
     */
    public static listItemsPromptContextGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Prompt>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/prompt_context/',
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
     * @returns Prompt Successful Response
     * @throws ApiError
     */
    public static createItemPromptContextPost(
        requestBody: PromptContextCreate,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/prompt_context/',
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
     * @returns Prompt Successful Response
     * @throws ApiError
     */
    public static getItemPromptContextItemIdGet(
        itemId: string,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/prompt_context/{item_id}',
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
     * @returns Prompt Successful Response
     * @throws ApiError
     */
    public static updateItemPromptContextItemIdPut(
        itemId: string,
        requestBody: PromptContextUpdate,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/prompt_context/{item_id}',
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
     * @returns Prompt Successful Response
     * @throws ApiError
     */
    public static patchItemPromptContextItemIdPatch(
        itemId: string,
        requestBody: PromptContextUpdate,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/prompt_context/{item_id}',
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
     * @returns Prompt Successful Response
     * @throws ApiError
     */
    public static deleteItemPromptContextItemIdDelete(
        itemId: string,
    ): CancelablePromise<Prompt> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/prompt_context/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
