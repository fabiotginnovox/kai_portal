/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SocraticGradient } from './SocraticGradient';
export type innocore__aurora__v2__agent_schemas__Lesson = {
    id: string;
    title: string;
    lesson_type: innocore__aurora__v2__agent_schemas__Lesson.lesson_type;
    core_concepts: Array<string>;
    learning_objectives: Array<string>;
    depends_on: Array<string>;
    common_misconceptions: Array<string>;
    socratic_gradient: SocraticGradient;
};
export namespace innocore__aurora__v2__agent_schemas__Lesson {
    export enum lesson_type {
        THEORY = 'theory',
        METHOD = 'method',
        FRAMEWORK = 'framework',
        CASE = 'case',
        SYNTHESIS = 'synthesis',
    }
}

