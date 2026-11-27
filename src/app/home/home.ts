import { Component, inject, } from '@angular/core';
import { CurrencyPipe,AsyncPipe } from '@angular/common';
import {Food} from '../services/food/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
// import { map } from 'rxjs/operators';
import { About } from '../about/about';
import { Search } from '../search/search';
import { Tags } from '../tags/tags';
import { FoodModel } from '../shared/models/food';
import { NotFound } from '../not-found/not-found';
@Component({
  imports: [CurrencyPipe, AsyncPipe, About, Search, Tags, RouterLink, NotFound],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  
   // 1. Modern functional dependency injection
  foods: FoodModel[] = [];
  constructor(private foodService: Food, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']){
        this.foods = this.foodService.getAll().filter(food =>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    })
  }
}

 // Declarative stream that updates automatically whenever the route params change
  // foods$ = this.route.params.pipe( 
  //   map(params => {
  //     const allFoods = this.foodService.getAll();
  //     const searchTerm = params['searchTerm'];
  //     const tag = params['tag'];

  //     if (searchTerm) {
  //       return allFoods.filter(food =>
  //         food.name.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     } else if (tag) {
  //       return this.foodService.getAllFoodsByTag(tag);
  //     }
  //      else {
  //        return this.foodService.getAll();
  //      }
  //     return allFoods;
  //   })
  // );

