import { Component } from '@angular/core';
import { FoodModel } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import {Food} from '../services/food/food';
import { Tags } from '../tags/tags';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart/cart';
import { NotFound } from '../not-found/not-found';
@Component({
  imports: [Tags, CurrencyPipe, NotFound],
  selector: 'app-foodpage',
  styleUrl: './foodpage.css',
  templateUrl: './foodpage.html',
})
export class Foodpage {

  food!: FoodModel;
   constructor(private activatedRoute: ActivatedRoute , private Food : Food,
    private cartService: CartService,
    private router: Router
   ){
      activatedRoute.params.subscribe((params)=> {
        if(params['id']){
          this.food = Food.getFoodbyid(params['id']);
        }
      })


   }

    addToCart(){
      this.cartService.addToCart(this.food);
      this.router.navigateByUrl('/cart-page');
    }
  }
