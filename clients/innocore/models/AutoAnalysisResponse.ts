/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KPI } from './KPI';
import type { SchemaAnalysis } from './SchemaAnalysis';
/**
 * Response model for auto-analysis endpoint
 */
export type AutoAnalysisResponse = {
    /**
     * Analysis of the database schema
     */
    schema_analysis: SchemaAnalysis;
    /**
     * Generated KPIs with results and insights
     */
    kpis: Array<KPI>;
    /**
     * Overall summary of the analysis
     */
    summary: string;
};

