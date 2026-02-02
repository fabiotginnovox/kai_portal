/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Schema analysis result
 */
export type SchemaAnalysis = {
    /**
     * Business domain identified from schema
     */
    domain: string;
    /**
     * Main business entities
     */
    entities: Array<string>;
    /**
     * Key relationships between tables
     */
    relationships: Array<string>;
    /**
     * Date/time columns for trend analysis
     */
    time_columns: Array<string>;
    /**
     * Categorical columns for segmentation
     */
    categorical_columns: Array<string>;
    /**
     * Potential business metrics
     */
    potential_metrics: Array<string>;
};

