/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Key Performance Indicator model
 */
export type KPI = {
    /**
     * KPI name
     */
    name: string;
    /**
     * What this KPI measures
     */
    description: string;
    /**
     * SQL query to calculate the KPI
     */
    sql_query: string;
    /**
     * Recommended chart type for visualization
     */
    chart_type: string;
    /**
     * Why this KPI matters
     */
    importance: string;
    /**
     * Query results
     */
    results?: null;
    /**
     * Business insight from the data
     */
    insight?: (string | null);
};

