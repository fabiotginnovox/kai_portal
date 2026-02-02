/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request model for business analysis endpoint
 */
export type AnalysisRequest = {
    /**
     * Business question to analyze
     */
    question: string;
    /**
     * Optional custom database URL
     */
    database_url?: (string | null);
};

