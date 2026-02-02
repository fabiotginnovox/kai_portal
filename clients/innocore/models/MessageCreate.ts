/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MessageCreate = {
    /**
     * Unique identifier for the message
     */
    id?: (number | string | null);
    content: string;
    type?: MessageCreate.type;
    extra_info?: (string | null);
    created_at?: (string | null);
};
export namespace MessageCreate {
    export enum type {
        SYSTEM = 'system',
        TEXT = 'text',
        AI = 'ai',
        IMAGE = 'image',
        AUDIO = 'audio',
        FILE = 'file',
    }
}

