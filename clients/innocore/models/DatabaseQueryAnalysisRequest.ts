/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request model for database query analysis
 */
export type DatabaseQueryAnalysisRequest = {
    /**
     * Database connection string
     */
    connection_string: string;
    /**
     * SQL query to execute
     */
    sql_query: string;
    /**
     * User's analysis request in natural language
     */
    user_query: string;
};

