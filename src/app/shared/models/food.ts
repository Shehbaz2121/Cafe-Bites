export class FoodModel{
    id!:number;
    name!:string;
    price!:number;
    tags!:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageURL!:string;
    origins!:string[];
    deliveryTime!:string;
}