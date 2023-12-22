export interface Product {
    id: number;
    name: string;
    allergenInformation: string;
    shelfLife: string;
    price: number;
    pictureUrl: string;
    quantityInStock?: number;
    date: Date;
    productCategoryId: number;
    productCategory: ProductCategory;
}

export interface ProductCategory {
    id: number;
    name: string;
    pictureUrl: string;
}

export interface ProductParams {
    orderBy: string;
    searchTerm?: string;
    types: string[];
    pageNumber: number;
    pageSize: number;
}