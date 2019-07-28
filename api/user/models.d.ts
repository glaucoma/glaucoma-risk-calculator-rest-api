import { AccessTokenType } from '@offscale/nodejs-utils/interfaces';
export declare const hash_password: (password: string, callback: any) => void;
export declare class User {
    static _omit: string[];
    email: string;
    password: string;
    title?: string;
    createdAt?: Date;
    updatedAt?: Date;
    roles: string[];
    access_token?: AccessTokenType;
    static rolesAsStr: (roles: string[]) => string;
    hashPassword?(): Promise<void>;
    setRoles?(): void;
}
