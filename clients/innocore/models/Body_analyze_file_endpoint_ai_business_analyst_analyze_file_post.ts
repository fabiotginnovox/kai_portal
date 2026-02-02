/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Body_analyze_file_endpoint_ai_business_analyst_analyze_file_post = {
    /**
     * File to analyze (CSV, Excel, JSON, Parquet)
     */
    file: Blob;
    /**
     * Analysis request in natural language
     */
    user_query: string;
};

