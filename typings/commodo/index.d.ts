export type pipe = Function;
export type compose = Function;

declare module "@webiny/commodo" {
    export const withStorage: any;
    export const withStorageName: any;
    export const withCrudLogs: any;
    export const withSoftDelete: any;
    export const withFields: any;
    export const withHooks: any;
    export const withName: any;
    export const boolean: any;
    export const string: any;
    export const onSet: any;
    export const onGet: any;
    export const object: any;
    export const number: any;
    export const int: any;
    export const float: any;
    export const date: any;
    export const ref: any;
    export const skipOnPopulate: any;
    export const withProps: any;
    export const WithFieldsError: any;
    export const setOnce: any;
    export const fields: any;
    export const withStaticProps: any;
    export const createPaginationMeta: any;
    export const createField: any;
    export const Collection: any;
    export const getName: any;
}

declare module "@webiny/commodo/fields" {
    export const withFields: any;
    export const boolean: any;
    export const number: any;
    export const string: any;
    export const fields: any;
    export const skipOnPopulate: any;
}

declare module "@webiny/commodo/fields-storage" {
    export const withStorage: any;
    export const withStorageName: any;
}

declare module "@webiny/commodo/hooks" {
    export const withHooks: any;
}

declare module "@webiny/commodo/repropose" {
    export const withProps: any;
    export const withStaticProps: any;
}

declare module "@webiny/commodo/fields-date" {
    export const date: any;
}

declare module "@webiny/commodo/fields-int" {
    export const int: any;
}

declare module "@webiny/commodo/fields-float" {
    export const float: any;
}

declare module "@webiny/commodo/fields-object" {
    export const object: any;
}

declare module "@webiny/commodo/name" {
    export const withName: any;
}
