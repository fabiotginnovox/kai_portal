/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Request to search documents
 */
export type SearchRequest = {
    /**
     * Name of the index to search
     */
    index_name: string;
    /**
     * Search query
     */
    query: string;
    /**
     * Number of results
     */
    top_k?: number;
    /**
     * Pagination offset
     */
    offset?: number;
    /**
     * Field filters
     */
    filters?: (Record<string, any> | null);
    /**
     * Enable fuzzy matching
     */
    fuzzy?: boolean;
    /**
     * Enable phrase matching
     */
    phrase_match?: boolean;
    /**
     * Highlight matches
     */
    highlight?: boolean;
};

