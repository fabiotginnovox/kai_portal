/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LessionSectionDiagnostic } from './LessionSectionDiagnostic';
import type { LessionSectionInstruction } from './LessionSectionInstruction';
export type LessonContentResponse = {
    lesson_id: string;
    module_context: string;
    sections: Array<(LessionSectionInstruction | LessionSectionDiagnostic)>;
    conceptual_summary: string;
};

