/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Language } from './Language';
/**
 * Request to create a new courses search index
 */
export type CreateCoursesIndexRequest = {
    /**
     * Unique name for this index
     */
    index_name: string;
    /**
     * Language for NLP
     */
    language?: Language;
};

