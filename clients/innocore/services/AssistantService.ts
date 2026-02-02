/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Assistant } from '../models/Assistant';
import type { AssistantCreate } from '../models/AssistantCreate';
import type { AssistantUpdate } from '../models/AssistantUpdate';
import type { Business_Analysis_Message } from '../models/Business_Analysis_Message';
import type { Message } from '../models/Message';
import type { MessageCreate } from '../models/MessageCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AssistantService {
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
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static listItemsAssistantGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Assistant>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assistant/',
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
     * Assistant Create
     * @param requestBody
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static assistantCreateAssistantPost(
        requestBody: AssistantCreate,
    ): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assistant/',
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
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static getItemAssistantItemIdGet(
        itemId: string,
    ): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assistant/{item_id}',
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
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static updateItemAssistantItemIdPut(
        itemId: string,
        requestBody: AssistantUpdate,
    ): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/assistant/{item_id}',
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
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static patchItemAssistantItemIdPatch(
        itemId: string,
        requestBody: AssistantUpdate,
    ): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/assistant/{item_id}',
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
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static deleteItemAssistantItemIdDelete(
        itemId: string,
    ): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/assistant/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Assistant Iteration
     * @param assistantId
     * @param requestBody
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static assistantIterationAssistantAssistantIterationPost(
        assistantId: string,
        requestBody: Array<MessageCreate>,
    ): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assistant/assistant/iteration',
            query: {
                'assistant_id': assistantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Supported File Formats
     * Return the supported formats.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSupportedFileFormatsAssistantGetSupportedFileFormatsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assistant/get_supported_file_formats/',
        });
    }
    /**
     * Get Supported File Mime Types
     * Return the supported formats.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSupportedFileMimeTypesAssistantGetSupportedFileMimeTypesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/assistant/get_supported_file_mime_types/',
        });
    }
    /**
     * Create Business Automation Analysis
     * Return the supported formats.
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static createBusinessAutomationAnalysisAssistantCreateBusinessAutomationAnalysisPost(): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assistant/create_business_automation_analysis/',
        });
    }
    /**
     * Iterate Business Automation Analysis
     * @param assistantId
     * @param requestBody
     * @returns Business_Analysis_Message Successful Response
     * @throws ApiError
     */
    public static iterateBusinessAutomationAnalysisAssistantIterateBusinessAutomationAnalysisPost(
        assistantId: string,
        requestBody: Array<MessageCreate>,
    ): CancelablePromise<Business_Analysis_Message> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assistant/iterate_business_automation_analysis',
            query: {
                'assistant_id': assistantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
