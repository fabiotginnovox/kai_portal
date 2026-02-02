/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Message = {
    id?: (string | null);
    content: string;
    type?: Message.type;
    extra_info?: (string | null);
    created_at?: (string | null);
};
export namespace Message {
    export enum type {
        SYSTEM = 'system',
        TEXT = 'text',
        AI = 'ai',
        IMAGE = 'image',
        AUDIO = 'audio',
        FILE = 'file',
    }
}

