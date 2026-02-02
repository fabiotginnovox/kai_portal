import { OpenAPI, User } from "../clients/innocore";

const TOKEN_KEY = 'token';
const ANONYMOUS_TOKEN_KEY = 'anonymous_token';
const USER_KEY = 'user';

export function saveUserToken(access_token: string): void {
    localStorage.setItem(TOKEN_KEY, access_token);
    OpenAPI.TOKEN = access_token;
}

export function getUserToken(): string | null {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        OpenAPI.TOKEN = token;
    }
    return token;
}

export function saveAnonymousUserToken(access_token: string): void {
    localStorage.setItem(ANONYMOUS_TOKEN_KEY, access_token);
    OpenAPI.TOKEN = access_token;
}

export function getAnonymousUserToken(): string | null {
    const token = localStorage.getItem(ANONYMOUS_TOKEN_KEY);
    if (token) {
        OpenAPI.TOKEN = token;
    }
    return token;
}

export function saveAssistantSessionId(sessionId: string): void {
    localStorage.setItem('assistant_session_id', sessionId);
}

export function getAssistantSessionId(): string | null {
    const sessionId = localStorage.getItem('assistant_session_id');
    return sessionId;
}

export function deleteAssistantSessionId(): void {
    localStorage.removeItem('assistant_session_id');
}


export function deleteUserToken(): void {
    localStorage.removeItem(TOKEN_KEY);
    OpenAPI.TOKEN = undefined;
}

export function deleteAnonymousUserToken(): void {
    localStorage.removeItem(ANONYMOUS_TOKEN_KEY);
    OpenAPI.TOKEN = undefined;
}

export function saveUserData(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUserData(): User | null {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
}

export function deleteUserData(): void {
    localStorage.removeItem(USER_KEY);
}

export function clearAllUserData(): void {
    deleteUserToken();
    deleteUserData();
    deleteAnonymousUserToken();
}
