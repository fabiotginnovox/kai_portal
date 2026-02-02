/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response model for business analysis endpoint
 */
export type AnalysisResponse = {
    /**
     * Original question
     */
    question: string;
    /**
     * Interpreted intent from the question
     */
    intent: string;
    /**
     * Generated SQL query
     */
    sql_query: string;
    /**
     * Explanation of the SQL query
     */
    sql_explanation: string;
    /**
     * Query execution results
     */
    results: Array<Record<string, any>>;
    /**
     * Natural language explanation of results
     */
    explanation: string;
    /**
     * Business insights derived from the data
     */
    insights: string;
};

