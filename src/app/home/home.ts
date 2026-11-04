import { Component, inject, } from '@angular/core';
import { CurrencyPipe,AsyncPipe } from '@angular/common';
import {Food} from '../services/food/food';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  imports: [CurrencyPipe, AsyncPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  
   // 1. Modern functional dependency injection
  private foodService = inject(Food);
  private route = inject(ActivatedRoute); 


 // Declarative stream that updates automatically whenever the route params change
  foods$ = this.route.params.pipe(
    map(params => {
      const allFoods = this.foodService.getAll();
      const searchTerm = params['searchTerm'];

      if (searchTerm) {
        return allFoods.filter(food =>
          food.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return allFoods;
    })
  );
}
