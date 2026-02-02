/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnalysisRequest } from '../models/AnalysisRequest';
import type { AnalysisResponse } from '../models/AnalysisResponse';
import type { AutoAnalysisRequest } from '../models/AutoAnalysisRequest';
import type { AutoAnalysisResponse } from '../models/AutoAnalysisResponse';
import type { Body_analyze_file_endpoint_ai_business_analyst_analyze_file_post } from '../models/Body_analyze_file_endpoint_ai_business_analyst_analyze_file_post';
import type { DatabaseQueryAnalysisRequest } from '../models/DatabaseQueryAnalysisRequest';
import type { HealthCheck } from '../models/HealthCheck';
import type { TableAnalysisResponse } from '../models/TableAnalysisResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiBusinessAnalystService {
    /**
     * Health Check
     * Health check endpoint
     * @returns HealthCheck Successful Response
     * @throws ApiError
     */
    public static healthCheckAiBusinessAnalystHealthGet(): CancelablePromise<HealthCheck> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai_business_analyst/health',
        });
    }
    /**
     * Get Schema
     * Get database schema information
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getSchemaAiBusinessAnalystSchemaGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ai_business_analyst/schema',
        });
    }
    /**
     * Analyze
     * Main endpoint for business analysis
     *
     * This endpoint accepts a natural language question and returns:
     * - Intent interpretation
     * - Generated SQL query
     * - Query results
     * - Natural language explanation
     * - Business insights
     *
     * If database_url is provided in the request, it will be used instead of the default connection.
     * @param requestBody
     * @returns AnalysisResponse Successful Response
     * @throws ApiError
     */
    public static analyzeAiBusinessAnalystAnalyzePost(
        requestBody: AnalysisRequest,
    ): CancelablePromise<AnalysisResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai_business_analyst/analyze',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Auto Analyze
     * Automatic Database Analysis Endpoint
     *
     * This endpoint automatically:
     * - Analyzes the database schema and infers relationships
     * - Generates relevant KPIs based on the data
     * - Executes queries to calculate each KPI
     * - Recommends optimal chart types for visualization
     * - Provides natural language insights for each KPI
     * - Delivers an overall summary of findings
     *
     * If database_url is provided in the request, it will be used instead of the default connection.
     * @param requestBody
     * @returns AutoAnalysisResponse Successful Response
     * @throws ApiError
     */
    public static autoAnalyzeAiBusinessAnalystAutoAnalyzePost(
        requestBody?: AutoAnalysisRequest,
    ): CancelablePromise<AutoAnalysisResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai_business_analyst/auto-analyze',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Analyze Database Query Endpoint
     * Analyze data from a database query
     *
     * This endpoint:
     * - Connects to a database using the provided connection string
     * - Executes the SQL query
     * - Converts results to a pandas DataFrame
     * - Performs advanced analysis using AI
     * - Returns analysis results, graph suggestions, and insights
     *
     * Supported databases: SQLite, PostgreSQL, MySQL, and others supported by SQLAlchemy
     * @param requestBody
     * @returns TableAnalysisResponse Successful Response
     * @throws ApiError
     */
    public static analyzeDatabaseQueryEndpointAiBusinessAnalystAnalyzeDatabaseQueryPost(
        requestBody: DatabaseQueryAnalysisRequest,
    ): CancelablePromise<TableAnalysisResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai_business_analyst/analyze-database-query',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * Analyze File Endpoint
     * Analyze data from an uploaded file
     *
     * This endpoint:
     * - Accepts file uploads in various formats (CSV, Excel, JSON, Parquet, TSV)
     * - Loads the file into a pandas DataFrame
     * - Performs advanced analysis using AI
     * - Returns analysis results, graph suggestions, and insights
     *
     * Supported formats:
     * - CSV (.csv)
     * - Excel (.xlsx, .xls)
     * - JSON (.json)
     * - Parquet (.parquet)
     * - TSV (.tsv, .txt)
     * @param formData
     * @returns TableAnalysisResponse Successful Response
     * @throws ApiError
     */
    public static analyzeFileEndpointAiBusinessAnalystAnalyzeFilePost(
        formData: Body_analyze_file_endpoint_ai_business_analyst_analyze_file_post,
    ): CancelablePromise<TableAnalysisResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ai_business_analyst/analyze-file',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
                500: `Internal Server Error`,
            },
        });
    }
}
