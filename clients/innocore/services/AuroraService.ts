/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_make_new_course_aurora__post } from '../models/Body_make_new_course_aurora__post';
import type { CourseDetails } from '../models/CourseDetails';
import type { innocore__aurora__service__Syllabus } from '../models/innocore__aurora__service__Syllabus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuroraService {
    /**
     * User Courses
     * @returns CourseDetails Successful Response
     * @throws ApiError
     */
    public static userCoursesAuroraGet(): CancelablePromise<Array<CourseDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/aurora/',
        });
    }
    /**
     * Make New Course
     * @param requestBody
     * @returns string Successful Response
     * @throws ApiError
     */
    public static makeNewCourseAuroraPost(
        requestBody: Body_make_new_course_aurora__post,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/aurora/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Course Structure
     * @param course
     * @returns innocore__aurora__service__Syllabus Successful Response
     * @throws ApiError
     */
    public static courseStructureAuroraCourseGet(
        course: string,
    ): CancelablePromise<innocore__aurora__service__Syllabus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/aurora/{course}',
            path: {
                'course': course,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Course File Content
     * @param course
     * @param module
     * @param lesson
     * @returns string Successful Response
     * @throws ApiError
     */
    public static courseFileContentAuroraCourseModuleLessonGet(
        course: string,
        module: string,
        lesson: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/aurora/{course}/{module}/{lesson}',
            path: {
                'course': course,
                'module': module,
                'lesson': lesson,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Course File Content
     * @param course
     * @returns string Successful Response
     * @throws ApiError
     */
    public static courseFileContentAuroraOutlineCourseGet(
        course: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/aurora/outline/{course}',
            path: {
                'course': course,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
