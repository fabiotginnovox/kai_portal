/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Token } from '../models/Token';
import type { User } from '../models/User';
import type { UserCreate } from '../models/UserCreate';
import type { UserInfo } from '../models/UserInfo';
import type { UserUpdate } from '../models/UserUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
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
     * @returns User Successful Response
     * @throws ApiError
     */
    public static listItemsUserGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/',
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
     * @returns User Successful Response
     * @throws ApiError
     */
    public static createItemUserPost(
        requestBody: UserCreate,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/',
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
     * @returns User Successful Response
     * @throws ApiError
     */
    public static getItemUserItemIdGet(
        itemId: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{item_id}',
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
     * @returns User Successful Response
     * @throws ApiError
     */
    public static updateItemUserItemIdPut(
        itemId: string,
        requestBody: UserUpdate,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{item_id}',
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
     * @returns User Successful Response
     * @throws ApiError
     */
    public static patchItemUserItemIdPatch(
        itemId: string,
        requestBody: UserUpdate,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/{item_id}',
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
     * @returns User Successful Response
     * @throws ApiError
     */
    public static deleteItemUserItemIdDelete(
        itemId: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Me
     * Get a specific user by id (Only for superuser).
     * @returns UserInfo Successful Response
     * @throws ApiError
     */
    public static meUserMeGet(): CancelablePromise<UserInfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/me/',
        });
    }
    /**
     * Create Login Anonymous User
     * Get a specific user by id (Only for superuser).
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static createLoginAnonymousUserUserCreateLoginAnonymousUserPost(): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/user/create_login_anonymous_user/',
        });
    }
}
