/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Base class for all message types.
 *
 * Messages are the fundamental units of communication in the system,
 * representing inputs to and outputs from language models.
 *
 * Attributes:
 * id: Unique identifier for the message (auto-generated if not provided)
 * content: The text content of the message
 * type: Message type identifier for serialization/deserialization
 * extra_info: Optional metadata or human-readable description
 * created_at: Timestamp when the message was created
 *
 * Examples:
 * >>> msg = BaseMessage(content="Hello, world!", type="text")
 * >>> print(msg.id)  # Auto-generated UUID
 */
export type BaseMessage = {
    /**
     * Unique identifier for the message
     */
    id?: (number | string | null);
    content: string;
    type?: BaseMessage.type;
    extra_info?: (string | null);
    created_at?: (string | null);
};
export namespace BaseMessage {
    export enum type {
        SYSTEM = 'system',
        TEXT = 'text',
        AI = 'ai',
        IMAGE = 'image',
        AUDIO = 'audio',
        FILE = 'file',
    }
}

