/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Question = {
    question_id: string;
    format: Question.format;
    prompt: string;
    options: (Array<string> | null);
    targets_concept: string;
    detects_misconception: string;
};
export namespace Question {
    export enum format {
        MULTIPLE_CHOICE = 'multiple_choice',
        SHORT_ANSWER = 'short_answer',
        TRUE_FALSE = 'true_false',
    }
}

