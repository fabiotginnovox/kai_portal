/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apps__paideia__v2__schemas__Lesson } from '../models/apps__paideia__v2__schemas__Lesson';
import type { apps__paideia__v2__schemas__Module } from '../models/apps__paideia__v2__schemas__Module';
import type { apps__paideia__v2__schemas__Syllabus } from '../models/apps__paideia__v2__schemas__Syllabus';
import type { Assistant } from '../models/Assistant';
import type { Course } from '../models/Course';
import type { CourseAccessLog } from '../models/CourseAccessLog';
import type { CourseAccessLogCreate } from '../models/CourseAccessLogCreate';
import type { CourseAccessLogUpdate } from '../models/CourseAccessLogUpdate';
import type { CourseCreate } from '../models/CourseCreate';
import type { CourseCreationDetails } from '../models/CourseCreationDetails';
import type { CourseSummary } from '../models/CourseSummary';
import type { CourseUpdate } from '../models/CourseUpdate';
import type { LessonCreate } from '../models/LessonCreate';
import type { LessonUpdate } from '../models/LessonUpdate';
import type { MessageCreate } from '../models/MessageCreate';
import type { ModuleCreate } from '../models/ModuleCreate';
import type { ModuleUpdate } from '../models/ModuleUpdate';
import type { SyllabusCreate } from '../models/SyllabusCreate';
import type { SyllabusUpdate } from '../models/SyllabusUpdate';
import type { UserCourseEnrollment } from '../models/UserCourseEnrollment';
import type { UserCourseEnrollmentUpdate } from '../models/UserCourseEnrollmentUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaideiaService {
    /**
     * Create Course
     * @param requestBody
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static createCoursePaideiaCreateCoursePost(
        requestBody: CourseCreate,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/create_course',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Course
     * @param courseId
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static getCoursePaideiaGetCourseCourseIdGet(
        courseId: string,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/get_course/{course_id}',
            path: {
                'course_id': courseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Courses
     * @param skip
     * @param limit
     * @returns CourseSummary Successful Response
     * @throws ApiError
     */
    public static getCoursesPaideiaGetCoursesGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<CourseSummary>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/get_courses',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Post Publish Course
     * @param courseId
     * @param publish
     * @returns string Successful Response
     * @throws ApiError
     */
    public static postPublishCoursePaideiaPublishCoursePost(
        courseId: string,
        publish: boolean,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/publish_course',
            query: {
                'course_id': courseId,
                'publish': publish,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Course
     * @param courseId
     * @param requestBody
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static patchCoursePaideiaPatchCoursePost(
        courseId: string,
        requestBody: CourseUpdate,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/patch_course',
            query: {
                'course_id': courseId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Course
     * Delete a course.
     *
     * Raises
     * ------
     * HTTPException
     * 404 if course is not found.
     * @param courseId
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static deleteCoursePaideiaDeleteCourseCourseIdDelete(
        courseId: string,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/paideia/delete_course/{course_id}',
            path: {
                'course_id': courseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Post Create Complete Course
     * @param requestBody
     * @returns string Successful Response
     * @throws ApiError
     */
    public static postCreateCompleteCoursePaideiaCreateCompleteCoursePost(
        requestBody: CourseCreationDetails,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/create_complete_course',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Syllabus
     * @param requestBody
     * @returns apps__paideia__v2__schemas__Syllabus Successful Response
     * @throws ApiError
     */
    public static createSyllabusPaideiaCreateSyllabusPost(
        requestBody: SyllabusCreate,
    ): CancelablePromise<apps__paideia__v2__schemas__Syllabus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/create_syllabus',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Syllabus By Course Id
     * @param courseId
     * @returns apps__paideia__v2__schemas__Syllabus Successful Response
     * @throws ApiError
     */
    public static getSyllabusByCourseIdPaideiaGetSyllabusCourseIdGet(
        courseId: string,
    ): CancelablePromise<apps__paideia__v2__schemas__Syllabus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/get_syllabus/{course_id}',
            path: {
                'course_id': courseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Syllabus
     * Partially update a syllabus.
     *
     * This updates only the fields that are provided (non-null values).
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param syllabusId
     * @param requestBody
     * @returns apps__paideia__v2__schemas__Syllabus Successful Response
     * @throws ApiError
     */
    public static patchSyllabusPaideiaSyllabusSyllabusIdPatch(
        syllabusId: string,
        requestBody: SyllabusUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Syllabus> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/syllabus/{syllabus_id}',
            path: {
                'syllabus_id': syllabusId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Module
     * @param requestBody
     * @returns apps__paideia__v2__schemas__Module Successful Response
     * @throws ApiError
     */
    public static createModulePaideiaCreateModulePost(
        requestBody: ModuleCreate,
    ): CancelablePromise<apps__paideia__v2__schemas__Module> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/create_module',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Module
     * @param moduleId
     * @returns apps__paideia__v2__schemas__Module Successful Response
     * @throws ApiError
     */
    public static getModulePaideiaGetModuleModuleIdGet(
        moduleId: string,
    ): CancelablePromise<apps__paideia__v2__schemas__Module> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/get_module/{module_id}',
            path: {
                'module_id': moduleId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Module
     * Partially update a module.
     *
     * This updates only the fields that are provided (non-null values).
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param moduleId
     * @param requestBody
     * @returns apps__paideia__v2__schemas__Module Successful Response
     * @throws ApiError
     */
    public static patchModulePaideiaModuleModuleIdPatch(
        moduleId: string,
        requestBody: ModuleUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Module> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/module/{module_id}',
            path: {
                'module_id': moduleId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Lesson
     * @param requestBody
     * @returns apps__paideia__v2__schemas__Lesson Successful Response
     * @throws ApiError
     */
    public static createLessonPaideiaCreateLessonPost(
        requestBody: LessonCreate,
    ): CancelablePromise<apps__paideia__v2__schemas__Lesson> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/create_lesson',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Lesson By Lesson Id
     * @param lessonId
     * @returns apps__paideia__v2__schemas__Lesson Successful Response
     * @throws ApiError
     */
    public static getLessonByLessonIdPaideiaGetLessonLessonIdGet(
        lessonId: string,
    ): CancelablePromise<apps__paideia__v2__schemas__Lesson> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/get_lesson/{lesson_id}',
            path: {
                'lesson_id': lessonId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Lesson
     * Partially update a lesson.
     *
     * This updates only the fields that are provided (non-null values).
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param lessonId
     * @param requestBody
     * @returns apps__paideia__v2__schemas__Lesson Successful Response
     * @throws ApiError
     */
    public static patchLessonPaideiaLessonLessonIdPatch(
        lessonId: string,
        requestBody: LessonUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Lesson> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/lesson/{lesson_id}',
            path: {
                'lesson_id': lessonId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Map
     * @param courseId
     * @param syllabusId
     * @returns string Successful Response
     * @throws ApiError
     */
    public static createMapPaideiaCreateMapCourseIdGet(
        courseId: string,
        syllabusId: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/create_map/{course_id}',
            path: {
                'course_id': courseId,
            },
            query: {
                'syllabus_id': syllabusId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Enroll Course
     * @param courseId
     * @returns UserCourseEnrollment Successful Response
     * @throws ApiError
     */
    public static enrollCoursePaideiaEnrollCourseCourseIdPost(
        courseId: string,
    ): CancelablePromise<UserCourseEnrollment> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/enroll_course/{course_id}',
            path: {
                'course_id': courseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Enrolled Courses
     * @returns UserCourseEnrollment Successful Response
     * @throws ApiError
     */
    public static getEnrolledCoursesPaideiaGetEnrolledCoursesGet(): CancelablePromise<Array<UserCourseEnrollment>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/get_enrolled_courses',
        });
    }
    /**
     * Get Enrollement By Course Id
     * @param courseId
     * @returns UserCourseEnrollment Successful Response
     * @throws ApiError
     */
    public static getEnrollementByCourseIdPaideiaGetEnrollementByCourseIdCourseIdGet(
        courseId: string,
    ): CancelablePromise<UserCourseEnrollment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/get_enrollement_by_course_id/{course_id}',
            path: {
                'course_id': courseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Enrollment
     * Partially update an enrollment.
     *
     * This updates only the fields that are provided (non-null values).
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param enrollmentId
     * @param requestBody
     * @returns UserCourseEnrollment Successful Response
     * @throws ApiError
     */
    public static patchEnrollmentPaideiaEnrollmentEnrollmentIdPatch(
        enrollmentId: string,
        requestBody: UserCourseEnrollmentUpdate,
    ): CancelablePromise<UserCourseEnrollment> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/enrollment/{enrollment_id}',
            path: {
                'enrollment_id': enrollmentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * List Items
     * List all items with pagination.
     *
     * Parameters
     * ----------
     * skip : int
     * Number of items to skip (for pagination).
     * limit : int
     * Maximum number of items to return (1-1000).
     * @param skip Number of items to skip
     * @param limit Maximum number of items to return
     * @returns CourseAccessLog Successful Response
     * @throws ApiError
     */
    public static listItemsPaideiaLogCourseAccessGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<CourseAccessLog>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/log_course_access/',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Log Course Access
     * @param requestBody
     * @returns CourseAccessLog Successful Response
     * @throws ApiError
     */
    public static logCourseAccessPaideiaLogCourseAccessPost(
        requestBody: CourseAccessLogCreate,
    ): CancelablePromise<CourseAccessLog> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/log_course_access/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Item
     * Get a specific item by ID.
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @returns CourseAccessLog Successful Response
     * @throws ApiError
     */
    public static getItemPaideiaLogCourseAccessItemIdGet(
        itemId: string,
    ): CancelablePromise<CourseAccessLog> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/log_course_access/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Item
     * Full update (replace) an item.
     *
     * This replaces all fields of the item with the provided values.
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @param requestBody
     * @returns CourseAccessLog Successful Response
     * @throws ApiError
     */
    public static updateItemPaideiaLogCourseAccessItemIdPut(
        itemId: string,
        requestBody: CourseAccessLogUpdate,
    ): CancelablePromise<CourseAccessLog> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/paideia/log_course_access/{item_id}',
            path: {
                'item_id': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Patch Item
     * Partially update an item.
     *
     * This updates only the fields that are provided (non-null values).
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @param requestBody
     * @returns CourseAccessLog Successful Response
     * @throws ApiError
     */
    public static patchItemPaideiaLogCourseAccessItemIdPatch(
        itemId: string,
        requestBody: CourseAccessLogUpdate,
    ): CancelablePromise<CourseAccessLog> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/log_course_access/{item_id}',
            path: {
                'item_id': itemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Item
     * Delete an item.
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @returns CourseAccessLog Successful Response
     * @throws ApiError
     */
    public static deleteItemPaideiaLogCourseAccessItemIdDelete(
        itemId: string,
    ): CancelablePromise<CourseAccessLog> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/paideia/log_course_access/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Assist Course Creation
     * Return the supported formats.
     * @returns Assistant Successful Response
     * @throws ApiError
     */
    public static assistCourseCreationPaideiaCreateAssistCourseCreationPost(): CancelablePromise<Assistant> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/create_assist_course_creation/',
        });
    }
    /**
     * Iterate Assist Course Creation
     * @param assistantId
     * @param requestBody
     * @returns any[] Successful Response
     * @throws ApiError
     */
    public static iterateAssistCourseCreationPaideiaIterateAssistCourseCreationPost(
        assistantId: string,
        requestBody: Array<MessageCreate>,
    ): CancelablePromise<any[]> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/paideia/iterate_assist_course_creation',
            query: {
                'assistant_id': assistantId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
