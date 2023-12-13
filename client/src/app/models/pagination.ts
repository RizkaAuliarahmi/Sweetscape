export interface MetaData {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
}

// Kelas untuk merepresentasikan respons paginasi yang mengandung data dan metadata
export class PaginatedResponse<T> {
    items: T; // Data (item atau entitas) dalam respons
    metaData: MetaData; // Metadata paginasi terkait respons

    constructor(items: T, metaData: MetaData) {
        this.items = items;
        this.metaData = metaData;
    }
}