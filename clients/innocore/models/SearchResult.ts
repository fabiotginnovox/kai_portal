/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Single search result with score and highlights
 */
export type SearchResult = {
    id: string;
    score: number;
    highlights?: (Record<string, Array<string>> | null);
    document?: (Record<string, any> | null);
};

