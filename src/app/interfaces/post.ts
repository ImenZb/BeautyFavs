export interface IPost {
    id?: string;
    username?: string; //to delete after transfer to firebase
    uid?:string,
    productName?:string; //to delete after transfer to firebase
    productId?: string;
    body:string;
    date:Date;
}
