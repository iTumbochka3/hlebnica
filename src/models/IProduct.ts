export interface IProduct {
    id: string,
    name: string,
    image: string,
    date_creation: Date,
    date_updated: Date,
    date_deleted: Date | null,
}