export interface IOrder {
    id: string,
    date_creation: Date,
    date_updated: Date,
    date_deleted: Date | null,
    date: Date,
    user_id: string,
    company_id: string,
    items: string[],
    status: string,
}