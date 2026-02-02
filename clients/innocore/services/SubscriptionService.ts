/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Plan } from '../models/Plan';
import type { SetupPlan } from '../models/SetupPlan';
import type { StripeSubscriptionUpdate } from '../models/StripeSubscriptionUpdate';
import type { Subscription } from '../models/Subscription';
import type { SubscriptionDelete } from '../models/SubscriptionDelete';
import type { SubscriptionIntent } from '../models/SubscriptionIntent';
import type { SubscriptionPlanUpdate } from '../models/SubscriptionPlanUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubscriptionService {
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
     * @returns Subscription Successful Response
     * @throws ApiError
     */
    public static listItemsSubscriptionGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Subscription>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscription/',
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
     * Create Subscription
     * @param requestBody
     * @returns Subscription Successful Response
     * @throws ApiError
     */
    public static createSubscriptionSubscriptionPost(
        requestBody: SetupPlan,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscription/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Plan
     * @param requestBody
     * @returns StripeSubscriptionUpdate Successful Response
     * @throws ApiError
     */
    public static updatePlanSubscriptionPut(
        requestBody: SubscriptionPlanUpdate,
    ): CancelablePromise<StripeSubscriptionUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/subscription/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Subscription
     * @param requestBody
     * @returns StripeSubscriptionUpdate Successful Response
     * @throws ApiError
     */
    public static deleteSubscriptionSubscriptionDelete(
        requestBody: SubscriptionDelete,
    ): CancelablePromise<StripeSubscriptionUpdate> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/subscription/',
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
     * @returns Subscription Successful Response
     * @throws ApiError
     */
    public static getItemSubscriptionItemIdGet(
        itemId: string,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscription/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Plans
     * @returns Plan Successful Response
     * @throws ApiError
     */
    public static getPlansSubscriptionPlansGet(): CancelablePromise<Array<Plan>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/subscription/plans',
        });
    }
    /**
     * Create Intent
     * @returns SubscriptionIntent Successful Response
     * @throws ApiError
     */
    public static createIntentSubscriptionSetupPost(): CancelablePromise<SubscriptionIntent> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscription/setup',
        });
    }
    /**
     * Webhook
     * @returns any Successful Response
     * @throws ApiError
     */
    public static webhookSubscriptionWebhookPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subscription/webhook',
        });
    }
}
