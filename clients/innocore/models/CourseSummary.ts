/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apps__paideia__v2__agent_schemas__Syllabus } from './apps__paideia__v2__agent_schemas__Syllabus';
export type CourseSummary = {
    subject: string;
    target_audience: string;
    language: string;
    extra_info?: (string | null);
    owner_id?: (string | null);
    short_course?: boolean;
    is_published?: boolean;
    idempotency_key?: (string | null);
    created_at?: (string | null);
    updated_at?: (string | null);
    id?: (string | null);
    syllabus_summary?: (apps__paideia__v2__agent_schemas__Syllabus | null);
    number_of_modules?: number;
};

