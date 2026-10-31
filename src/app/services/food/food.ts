import { Service } from '@angular/core';
import {FoodModel } from '../../shared/models/food';

@Service()
export class Food {
    

    getAll():FoodModel[]{
         return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        deliveryTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageURL: '/assets/images/food/food_1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        deliveryTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageURL: '/assets/images/food/food_2.webp',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        deliveryTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageURL: '/assets/images/food/food_3.webp',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        deliveryTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageURL: '/assets/images/food/food_4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        deliveryTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageURL: '/assets/images/food/food_5.jpg',
        tags: ['SlowFood', 'Soup'],
      }
    ]
    }
}
