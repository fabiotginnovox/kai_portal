/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response model for table analysis
 */
export type TableAnalysisResponse = {
    /**
     * Original user query
     */
    user_query: string;
    /**
     * Python pandas code generated for analysis
     */
    analysis_code: string;
    /**
     * Results from the analysis
     */
    analysis_results: Array<Record<string, any>>;
    /**
     * Suggested graph configuration
     */
    suggested_graph: Record<string, any>;
    /**
     * Multiple suggested graphs for multi-KPI queries
     */
    suggested_graphs?: null;
    /**
     * Insights based on the analysis
     */
    insights: Array<string>;
    /**
     * Suggestions for further analysis
     */
    continuation_suggestions: Array<string>;
};

