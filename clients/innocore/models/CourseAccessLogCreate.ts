/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CourseAccessLogCreate = {
    user_id?: (string | null);
    course_id: string;
    lesson_id: string;
    accessed_at?: (string | null);
    duration_seconds?: (number | null);
};

