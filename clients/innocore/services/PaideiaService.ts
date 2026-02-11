/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { apps__paideia__v2__schemas__Lesson } from '../models/apps__paideia__v2__schemas__Lesson';
import type { apps__paideia__v2__schemas__Module } from '../models/apps__paideia__v2__schemas__Module';
import type { apps__paideia__v2__schemas__Syllabus } from '../models/apps__paideia__v2__schemas__Syllabus';
import type { CompleteCourseResponse } from '../models/CompleteCourseResponse';
import type { Course } from '../models/Course';
import type { CourseCreationDetails } from '../models/CourseCreationDetails';
import type { CourseUpdate } from '../models/CourseUpdate';
import type { LessonUpdate } from '../models/LessonUpdate';
import type { MappingItem } from '../models/MappingItem';
import type { MappingItemUpdate } from '../models/MappingItemUpdate';
import type { ModuleUpdate } from '../models/ModuleUpdate';
import type { SyllabusUpdate } from '../models/SyllabusUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaideiaService {
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
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static listItemsPaideiaCoursesGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Course>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/courses/',
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
     * Get Item
     * Get a specific item by ID.
     *
     * Raises
     * ------
     * HTTPException
     * 404 if item is not found.
     * @param itemId
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static getItemPaideiaCoursesItemIdGet(
        itemId: string,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/courses/{item_id}',
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
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static updateItemPaideiaCoursesItemIdPut(
        itemId: string,
        requestBody: CourseUpdate,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/paideia/courses/{item_id}',
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
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static patchItemPaideiaCoursesItemIdPatch(
        itemId: string,
        requestBody: CourseUpdate,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/courses/{item_id}',
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
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static deleteItemPaideiaCoursesItemIdDelete(
        itemId: string,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/paideia/courses/{item_id}',
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
     * @returns apps__paideia__v2__schemas__Syllabus Successful Response
     * @throws ApiError
     */
    public static updateItemPaideiaSyllabusItemIdPut(
        itemId: string,
        requestBody: SyllabusUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Syllabus> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/paideia/syllabus/{item_id}',
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
     * @returns apps__paideia__v2__schemas__Syllabus Successful Response
     * @throws ApiError
     */
    public static patchItemPaideiaSyllabusItemIdPatch(
        itemId: string,
        requestBody: SyllabusUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Syllabus> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/syllabus/{item_id}',
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
     * @returns apps__paideia__v2__schemas__Syllabus Successful Response
     * @throws ApiError
     */
    public static deleteItemPaideiaSyllabusItemIdDelete(
        itemId: string,
    ): CancelablePromise<apps__paideia__v2__schemas__Syllabus> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/paideia/syllabus/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Item
     * @param courseId
     * @returns apps__paideia__v2__schemas__Syllabus Successful Response
     * @throws ApiError
     */
    public static getItemPaideiaSyllabusCourseIdGet(
        courseId: string,
    ): CancelablePromise<apps__paideia__v2__schemas__Syllabus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/syllabus/{course_id}',
            path: {
                'course_id': courseId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Item
     * @param courseId
     * @returns MappingItem Successful Response
     * @throws ApiError
     */
    public static getItemPaideiaSyllabusCreateMapCourseIdGet(
        courseId: string,
    ): CancelablePromise<MappingItem> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/syllabus/create_map/{course_id}',
            path: {
                'course_id': courseId,
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
     * @returns apps__paideia__v2__schemas__Module Successful Response
     * @throws ApiError
     */
    public static updateItemPaideiaModulesItemIdPut(
        itemId: string,
        requestBody: ModuleUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Module> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/paideia/modules/{item_id}',
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
     * @returns apps__paideia__v2__schemas__Module Successful Response
     * @throws ApiError
     */
    public static patchItemPaideiaModulesItemIdPatch(
        itemId: string,
        requestBody: ModuleUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Module> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/modules/{item_id}',
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
     * @returns apps__paideia__v2__schemas__Module Successful Response
     * @throws ApiError
     */
    public static deleteItemPaideiaModulesItemIdDelete(
        itemId: string,
    ): CancelablePromise<apps__paideia__v2__schemas__Module> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/paideia/modules/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Item
     * @param courseId
     * @returns apps__paideia__v2__schemas__Module Successful Response
     * @throws ApiError
     */
    public static getItemPaideiaModulesCourseIdGet(
        courseId: string,
    ): CancelablePromise<Array<apps__paideia__v2__schemas__Module>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/modules/{course_id}',
            path: {
                'course_id': courseId,
            },
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
     * @returns apps__paideia__v2__schemas__Lesson Successful Response
     * @throws ApiError
     */
    public static getItemPaideiaLessonsItemIdGet(
        itemId: string,
    ): CancelablePromise<apps__paideia__v2__schemas__Lesson> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/lessons/{item_id}',
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
     * @returns apps__paideia__v2__schemas__Lesson Successful Response
     * @throws ApiError
     */
    public static updateItemPaideiaLessonsItemIdPut(
        itemId: string,
        requestBody: LessonUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Lesson> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/paideia/lessons/{item_id}',
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
     * @returns apps__paideia__v2__schemas__Lesson Successful Response
     * @throws ApiError
     */
    public static patchItemPaideiaLessonsItemIdPatch(
        itemId: string,
        requestBody: LessonUpdate,
    ): CancelablePromise<apps__paideia__v2__schemas__Lesson> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/lessons/{item_id}',
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
     * @returns apps__paideia__v2__schemas__Lesson Successful Response
     * @throws ApiError
     */
    public static deleteItemPaideiaLessonsItemIdDelete(
        itemId: string,
    ): CancelablePromise<apps__paideia__v2__schemas__Lesson> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/paideia/lessons/{item_id}',
            path: {
                'item_id': itemId,
            },
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
     * @returns MappingItem Successful Response
     * @throws ApiError
     */
    public static listItemsPaideiaMappingitemsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<MappingItem>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/paideia/mappingitems/',
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
     * @returns MappingItem Successful Response
     * @throws ApiError
     */
    public static updateItemPaideiaMappingitemsItemIdPut(
        itemId: string,
        requestBody: MappingItemUpdate,
    ): CancelablePromise<MappingItem> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/paideia/mappingitems/{item_id}',
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
     * @returns MappingItem Successful Response
     * @throws ApiError
     */
    public static patchItemPaideiaMappingitemsItemIdPatch(
        itemId: string,
        requestBody: MappingItemUpdate,
    ): CancelablePromise<MappingItem> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/paideia/mappingitems/{item_id}',
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
     * @returns MappingItem Successful Response
     * @throws ApiError
     */
    public static deleteItemPaideiaMappingitemsItemIdDelete(
        itemId: string,
    ): CancelablePromise<MappingItem> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/paideia/mappingitems/{item_id}',
            path: {
                'item_id': itemId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Post Create Complete Course
     * @param requestBody
     * @returns CompleteCourseResponse Successful Response
     * @throws ApiError
     */
    public static postCreateCompleteCoursePaideiaCreateCompleteCoursePost(
        requestBody: CourseCreationDetails,
    ): CancelablePromise<CompleteCourseResponse> {
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
}
