import { Component, inject, } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {Food} from '../services/food/food';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  
   // 1. Modern functional dependency injection
  private foodService = inject(Food); 

  // 2. Reactivity with Signals (Replaces standard arrays/variables)
  // assuming getFoods() returns your items or a Signal
  foods = this.foodService.getAll(); 
}
