/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OneShotPrompt } from '../models/OneShotPrompt';
import type { OneShotResponse } from '../models/OneShotResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AssistantSessionService {
    /**
     * Zero Shot
     * Retrieve Chabots Sessions by user.
     * @param requestBody
     * @returns OneShotResponse Successful Response
     * @throws ApiError
     */
    public static zeroShotAssistantSessionZeroShotPost(
        requestBody: OneShotPrompt,
    ): CancelablePromise<OneShotResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/assistant_session/zero_shot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
