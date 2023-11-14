export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type?: string;
    quantityInStock?: number;
    date: string;
}

export interface ProductParams {
    orderBy: string;
    searchTerm?: string;
    types: string[];
    pageNumber: number;
    pageSize: number;
}