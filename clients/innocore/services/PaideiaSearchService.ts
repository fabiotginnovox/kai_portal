/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCoursesIndexRequest } from '../models/CreateCoursesIndexRequest';
import type { IndexCoursesRequest } from '../models/IndexCoursesRequest';
import type { SearchRequest } from '../models/SearchRequest';
import type { SearchResponse } from '../models/SearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaideiaSearchService {
    /**
     * Create Courses Index
     * Create a new courses search index
     *
     * Example:
     * ```json
     * {
         * "index_name": "courses",
         * "language": "english"
         * }
         * ```
         * @param requestBody
         * @returns any Successful Response
         * @throws ApiError
         */
        public static createCoursesIndexPaideiaSearchCreateCoursesIndexPost(
            requestBody: CreateCoursesIndexRequest,
        ): CancelablePromise<any> {
            return __request(OpenAPI, {
                method: 'POST',
                url: '/paideia/search/create_courses_index',
                body: requestBody,
                mediaType: 'application/json',
                errors: {
                    422: `Validation Error`,
                },
            });
        }
        /**
         * Index Courses
         * Index documents into an existing index
         *
         * Example:
         * ```json
         * {
             * "index_name": "products"
             * }
             * ```
             * @param requestBody
             * @returns any Successful Response
             * @throws ApiError
             */
            public static indexCoursesPaideiaSearchIndexCoursesPost(
                requestBody: IndexCoursesRequest,
            ): CancelablePromise<any> {
                return __request(OpenAPI, {
                    method: 'POST',
                    url: '/paideia/search/index_courses',
                    body: requestBody,
                    mediaType: 'application/json',
                    errors: {
                        422: `Validation Error`,
                    },
                });
            }
            /**
             * Search Documents
             * Search documents in an index
             *
             * Example:
             * ```json
             * {
                 * "index_name": "products",
                 * "query": "laptop computer",
                 * "top_k": 10,
                 * "fuzzy": true,
                 * "highlight": true
                 * }
                 * ```
                 * @param requestBody
                 * @returns SearchResponse Successful Response
                 * @throws ApiError
                 */
                public static searchDocumentsPaideiaSearchQueryPost(
                    requestBody: SearchRequest,
                ): CancelablePromise<SearchResponse> {
                    return __request(OpenAPI, {
                        method: 'POST',
                        url: '/paideia/search/query',
                        body: requestBody,
                        mediaType: 'application/json',
                        errors: {
                            422: `Validation Error`,
                        },
                    });
                }
                /**
                 * Get Index Stats
                 * Get statistics for an index
                 * @param indexName
                 * @returns any Successful Response
                 * @throws ApiError
                 */
                public static getIndexStatsPaideiaSearchStatsIndexNameGet(
                    indexName: string,
                ): CancelablePromise<any> {
                    return __request(OpenAPI, {
                        method: 'GET',
                        url: '/paideia/search/stats/{index_name}',
                        path: {
                            'index_name': indexName,
                        },
                        errors: {
                            422: `Validation Error`,
                        },
                    });
                }
                /**
                 * List Indexes
                 * List all available indexes
                 * @returns any Successful Response
                 * @throws ApiError
                 */
                public static listIndexesPaideiaSearchListGet(): CancelablePromise<any> {
                    return __request(OpenAPI, {
                        method: 'GET',
                        url: '/paideia/search/list',
                    });
                }
                /**
                 * Delete Index
                 * Delete an index
                 * @param indexName
                 * @returns any Successful Response
                 * @throws ApiError
                 */
                public static deleteIndexPaideiaSearchIndexNameDelete(
                    indexName: string,
                ): CancelablePromise<any> {
                    return __request(OpenAPI, {
                        method: 'DELETE',
                        url: '/paideia/search/{index_name}',
                        path: {
                            'index_name': indexName,
                        },
                        errors: {
                            422: `Validation Error`,
                        },
                    });
                }
            }
