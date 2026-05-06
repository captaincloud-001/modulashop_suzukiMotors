
    export type RemoteKeys = 'productsApp/ProductsPage';
    type PackageType<T> = T extends 'productsApp/ProductsPage' ? typeof import('productsApp/ProductsPage') :any;