import { IPost } from "./post";

export interface IProduit {
    id?:string;
    product_name:string;
    brand:string;
    category:string;
    tag:string;
    image_url?:string;
    username?: string;
    created_datetime:Date;
    likes?:number;
}

export class Produit implements IProduit{
    id?:string;
    product_name:string;
    brand:string;
    category:string;
    tag:string;
    image_url?:string;
    username?: string;
    created_datetime:Date;
    likes?:number;
    
    constructor(params){
        Object.assign(this,params);
        //this.product_name
    }
}