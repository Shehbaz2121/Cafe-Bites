import { Service } from '@angular/core';
import {FoodModel } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';

@Service()
export class Food {


  getFoodbyid(id: number) :FoodModel{
    return this.getAll().find(food => food.id == id)!;
  }

    getAllFoodsBySearchTerm(searchTerm:string) :FoodModel[]{
      return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

  getAllTags(): Tag[] {
  
    return [
    { name: 'All', count: 14 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
  ];
}
    
    getAllFoodsByTag(tag:string):FoodModel[]{
      //statement? Job1 : Job2

      //statement
      return tag == "All"?

        //    Job 1             Job 2
       //      |                 |  
       //      v                 v
      this.getAll() : this.getAll().filter(food=> food.tags?.includes(tag));
    }


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
