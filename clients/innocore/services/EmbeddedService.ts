/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmbeddedModel } from '../models/EmbeddedModel';
import type { EmbeddedModelCreate } from '../models/EmbeddedModelCreate';
import type { EmbeddedModelUpdate } from '../models/EmbeddedModelUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EmbeddedService {
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
     * @returns EmbeddedModel Successful Response
     * @throws ApiError
     */
    public static listItemsEmbeddedGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<EmbeddedModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/embedded/',
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
     * @returns EmbeddedModel Successful Response
     * @throws ApiError
     */
    public static createItemEmbeddedPost(
        requestBody: EmbeddedModelCreate,
    ): CancelablePromise<EmbeddedModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/embedded/',
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
     * @returns EmbeddedModel Successful Response
     * @throws ApiError
     */
    public static getItemEmbeddedItemIdGet(
        itemId: string,
    ): CancelablePromise<EmbeddedModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/embedded/{item_id}',
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
     * @returns EmbeddedModel Successful Response
     * @throws ApiError
     */
    public static updateItemEmbeddedItemIdPut(
        itemId: string,
        requestBody: EmbeddedModelUpdate,
    ): CancelablePromise<EmbeddedModel> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/embedded/{item_id}',
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
     * @returns EmbeddedModel Successful Response
     * @throws ApiError
     */
    public static patchItemEmbeddedItemIdPatch(
        itemId: string,
        requestBody: EmbeddedModelUpdate,
    ): CancelablePromise<EmbeddedModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/embedded/{item_id}',
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
     * @returns EmbeddedModel Successful Response
     * @throws ApiError
     */
    public static deleteItemEmbeddedItemIdDelete(
        itemId: string,
    ): CancelablePromise<EmbeddedModel> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/embedded/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
