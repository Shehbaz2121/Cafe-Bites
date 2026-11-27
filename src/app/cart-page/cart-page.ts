import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartitem';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Food } from '../services/food/food';
import { NotFound } from '../not-found/not-found';
@Component({
  imports: [RouterLink, CurrencyPipe, NotFound],
  selector: 'app-cart-page',
  styleUrl: './cart-page.css',
  templateUrl: './cart-page.html',
})
export class CartPage {
  cart!:Cart;
  constructor(private cartService: CartService,
  ) {
    this.setCart();
  }

  ngOnInit(): void {

  }
 
  removeFromCart(cartItem:CartItem){
    this.cartService.RemoveFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }



}
