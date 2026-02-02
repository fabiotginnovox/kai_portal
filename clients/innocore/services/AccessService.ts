/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_reset_password_access_reset_password_post } from '../models/Body_reset_password_access_reset_password_post';
import type { Body_token_access_access_token_post } from '../models/Body_token_access_access_token_post';
import type { Feedback } from '../models/Feedback';
import type { FeedbackResponse } from '../models/FeedbackResponse';
import type { Token } from '../models/Token';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AccessService {
    /**
     * Token
     * Login users.
     * @param formData
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static tokenAccessAccessTokenPost(
        formData: Body_token_access_access_token_post,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/access/access-token',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Recover Password
     * Password Recovery
     * @param email
     * @param language
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static recoverPasswordAccessPasswordRecoveryEmailPost(
        email: string,
        language?: ('en' | 'es' | 'pt' | null),
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/access/password-recovery/{email}',
            path: {
                'email': email,
            },
            query: {
                'language': language,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Reset Password
     * Reset password
     * @param requestBody
     * @returns Token Successful Response
     * @throws ApiError
     */
    public static resetPasswordAccessResetPasswordPost(
        requestBody: Body_reset_password_access_reset_password_post,
    ): CancelablePromise<Token> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/access/reset-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Send Feedback
     * @param requestBody
     * @returns FeedbackResponse Successful Response
     * @throws ApiError
     */
    public static sendFeedbackAccessFeedbackPost(
        requestBody: Feedback,
    ): CancelablePromise<FeedbackResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/access/feedback',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
