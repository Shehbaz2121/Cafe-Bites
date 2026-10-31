import { Component, inject } from '@angular/core';
import {Food} from '../services/food/food';

@Component({
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
