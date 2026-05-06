
    export type RemoteKeys = 'authApp/AuthPage';
    type PackageType<T> = T extends 'authApp/AuthPage' ? typeof import('authApp/AuthPage') :any;