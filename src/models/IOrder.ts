import { IProduct } from "./IProduct";

export interface IOrder {
    id: string,
    date_creation: Date,
    date_updated: Date,
    date_deleted: Date | null,
    user_id: string,
    company_id: string,
    items: IProduct[],
}