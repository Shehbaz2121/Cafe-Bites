import { FoodModel } from './food';
export class CartItem {

 constructor (food: FoodModel){
    this.food = food;
}


 food:FoodModel;
 quantity:number = 1;

 get Price():number{
    return this.food.price * this.quantity;
 }


}