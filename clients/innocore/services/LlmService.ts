/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LLMModel } from '../models/LLMModel';
import type { LLMModelCreate } from '../models/LLMModelCreate';
import type { LLMModelUpdate } from '../models/LLMModelUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LlmService {
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
     * @returns LLMModel Successful Response
     * @throws ApiError
     */
    public static listItemsLlmGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<LLMModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/llm/',
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
     * @returns LLMModel Successful Response
     * @throws ApiError
     */
    public static createItemLlmPost(
        requestBody: LLMModelCreate,
    ): CancelablePromise<LLMModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/llm/',
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
     * @returns LLMModel Successful Response
     * @throws ApiError
     */
    public static getItemLlmItemIdGet(
        itemId: string,
    ): CancelablePromise<LLMModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/llm/{item_id}',
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
     * @returns LLMModel Successful Response
     * @throws ApiError
     */
    public static updateItemLlmItemIdPut(
        itemId: string,
        requestBody: LLMModelUpdate,
    ): CancelablePromise<LLMModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/llm/{item_id}',
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
     * @returns LLMModel Successful Response
     * @throws ApiError
     */
    public static patchItemLlmItemIdPatch(
        itemId: string,
        requestBody: LLMModelUpdate,
    ): CancelablePromise<LLMModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/llm/{item_id}',
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
     * @returns LLMModel Successful Response
     * @throws ApiError
     */
    public static deleteItemLlmItemIdDelete(
        itemId: string,
    ): CancelablePromise<LLMModel> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/llm/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
