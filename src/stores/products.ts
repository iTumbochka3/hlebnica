import { makeAutoObservable } from "mobx";
import axios from 'axios';
import { IProduct } from "../models/IProduct";

class ProductStore {
    public products: IProduct[] = [
        {
            id: '1',
            code: 'bulochkassaharom',
            name: 'Булочка с сахаром',
            image: '../assets/products/bulochkassaharom.jpg',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '2',
            code: 'bulochkasyablokom',
            name: 'Булочка с яблоком',
            image: '../assets/products/bulochkasyablokom.jpg',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '3',
            code: 'pirogsbrusnikoi',
            name: 'Пирог с брусникой',
            image: '../assets/products/pirogsbrusnikoi.jpg',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '4',
            code: 'pirogskuriceiigribami',
            name: 'Пирог с курицей и грибами',
            image: '../assets/products/pirogskuriceiigribami.jpg',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '5',
            code: 'pirogstvorogom',
            name: 'Пирог с творогом',
            image: '../assets/products/pirogstvorogom.jpg',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '6',
            code: 'pirogscheremuhoi',
            name: 'Пирог с черемухой',
            image: '../assets/products/pirogscheremuhoi.jpg',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '7',
            code: '',
            name: 'Пирог со свининой',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '8',
            code: '',
            name: 'Пирожки печеные',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '9',
            code: '',
            name: 'Пирожок с вишней',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '10',
            code: '',
            name: 'Пирожок с курицей и грибами',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '11',
            code: '',
            name: 'Пицца с грибами',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '12',
            code: '',
            name: 'Пицца с колбасой',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '13',
            code: '',
            name: 'Рулет с ветчиной и сыром',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '14',
            code: '',
            name: 'Сосиска в тесте',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '15',
            code: '',
            name: 'Сосиска под сыром',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '16',
            code: '',
            name: 'Треугольник с фаршем',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
        {
            id: '17',
            code: '',
            name: 'Трубочка вафельная со сгущенкой',
            image: '',
            date_creation: new Date(),
            date_updated: new Date(),
            date_deleted: null,
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    public updateProductsFromServer(): void {
        axios.get<IProduct[]>(`/orders`)
            .then(response => {
                this.products = response.data;
            })
            .catch(e => console.log(e));
    }
}

export default ProductStore;