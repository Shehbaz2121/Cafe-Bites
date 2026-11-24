import { Service } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { FoodModel } from '../../shared/models/food';
import { CartItem } from '../../shared/models/cartitem';

@Service()
export class CartService {

    private cart:Cart = new Cart();

    addToCart(food:FoodModel):void{
        let cartItem = this.cart.items.find(item => item.food.id === food.id);
        
        if(cartItem){
            this.changeQuantity( food.id, cartItem.quantity + 1);
            return;
        }
        this.cart.items.push(new CartItem(food));
    }

    RemoveFromCart(foodId:number):void{
        this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    }

    changeQuantity(foodId:number, quantity:number):void{
        let cartItem = this.cart.items.find(item => item.food.id === foodId);
        if(!cartItem) return;
        cartItem.quantity = quantity;
    }
    getCart():Cart{
        return this.cart;
    }

}
