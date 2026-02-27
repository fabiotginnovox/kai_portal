/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Assistant } from '../models/Assistant';
import type { Business_Analysis_Message } from '../models/Business_Analysis_Message';
import type { MaturidadeResponse } from '../models/MaturidadeResponse';
import type { MessageCreate } from '../models/MessageCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class KaiAssistService {
    /**
     * Create Business Automation Analysis
     * Return the supported formats.
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static createBusinessAutomationAnalysisKaiAssistCreateBusinessAutomationAnalysisPost(): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/kai_assist/create_business_automation_analysis/',
        });
    }
    /**
     * Iterate Business Automation Analysis
     * @param assistantId
     * @param requestBody
     * @returns Business_Analysis_Message Successful Response
     * @throws ApiError
     */
    public static iterateBusinessAutomationAnalysisKaiAssistIterateBusinessAutomationAnalysisPost(
        assistantId: string,
        requestBody: Array<MessageCreate>,
    ): CancelablePromise<Business_Analysis_Message> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/kai_assist/iterate_business_automation_analysis',
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
     * Create Conversational Assessor
     * Return the supported formats.
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static createConversationalAssessorKaiAssistCreateConversationalAssessorPost(): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/kai_assist/create_conversational_assessor/',
        });
    }
    /**
     * Iterate Conversational Assessor
     * @param assistantId
     * @param requestBody
     * @returns MaturidadeResponse Successful Response
     * @throws ApiError
     */
    public static iterateConversationalAssessorKaiAssistIterateConversationalAssessorPost(
        assistantId: string,
        requestBody: Array<MessageCreate>,
    ): CancelablePromise<MaturidadeResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/kai_assist/iterate_conversational_assessor',
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
