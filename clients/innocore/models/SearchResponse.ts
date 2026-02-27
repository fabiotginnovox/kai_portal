/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchResult } from './SearchResult';
/**
 * Complete search response with metadata
 */
export type SearchResponse = {
    results: Array<SearchResult>;
    total: number;
    query: string;
    took_ms: number;
};

