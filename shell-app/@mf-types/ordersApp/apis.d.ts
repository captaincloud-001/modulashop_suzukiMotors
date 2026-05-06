
    export type RemoteKeys = 'ordersApp/OrdersPage';
    type PackageType<T> = T extends 'ordersApp/OrdersPage' ? typeof import('ordersApp/OrdersPage') :any;