import { IPost } from "./post";

export interface IProduit {
    id:number;
    product_name:string;
    brands:string;
    category:string;
    tag:string;
    imageUrl:string;
    username: string;
    created_datetime:string;
    feed:IPost[];
    likes:number;
}

export class Produit implements IProduit{
    id:number;
    product_name:string;
    brands:string;
    category:string;
    tag:string;
    imageUrl:string;
    username: string;
    created_datetime:string;
    feed:IPost[];
    likes:number;
    
    constructor(params){
        Object.assign(this,params);
        //this.product_name
    }
}