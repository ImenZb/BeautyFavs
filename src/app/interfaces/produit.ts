import { IPost } from "./post";

export interface IProduit {
    id:string;
    product_name:string;
    brands:string;
    category:string;
    tag:string;
    imageUrl:string;
    username: string;
    created_datetime:string;
    feed:[{postId:number,body:string}];
    likes:number;
}

export class Produit implements IProduit{
    id:string;
    product_name:string;
    brands:string;
    category:string;
    tag:string;
    imageUrl:string;
    username: string;
    created_datetime:string;
    feed:[{postId:number,body:string}];
    likes:number;
    
    constructor(params){
        Object.assign(this,params);
        //this.product_name
    }
}