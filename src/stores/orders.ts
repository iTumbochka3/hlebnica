import { makeAutoObservable } from "mobx";
import axios from 'axios';
import { IOrder } from "../models/IOrder";

class OrderStore {
    public orders: IOrder[] = [
        {
            id: '1',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
            date: new Date(),
            user_id: '1',
            company_id: '1',
            items: [
                '1', '2', '3', '4',
            ],
            status: 'complete',
        },
        {
            id: '2',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: new Date(),
            date: new Date(),
            user_id: '1',
            company_id: '1',
            items: [],
            status: 'delete',
        },
        {
            id: '3',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
            date: new Date(),
            user_id: '1',
            company_id: '1',
            items: ['7', '8'],
            status: 'active',
        },
    ];
    public currentOrder: IOrder | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    public updateOrdersFromServer(): void {
        axios.get<IOrder[]>(`/orders`)
            .then(response => {
                this.orders = response.data;
            })
            .catch(e => console.log(e));
    }

    public updateCurrentOrderFromServer(id: string): void {
        axios.get<IOrder>(`/orders/${id}`)
            .then(response => {
                this.currentOrder = response.data;
            })
            .catch(e => console.log(e));
    }
}

export default OrderStore;