import { Service } from '@angular/core';

@Service()
export class Food {
    

    getAll():String[]{
        return [
            '/assets/images/food/food_1.jpg',
            '/assets/images/food/food_2.webp',
            '/assets/images/food/food_3.webp',
            '/assets/images/food/food_4.jpg',
            '/assets/images/food/food_5.jpg'
        ]
    }
}
