import { makeAutoObservable } from "mobx";
import axios from 'axios';
import { IOrder } from "../models/IOrder";

class OrderStore {
    public orders: IOrder[] = [];
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