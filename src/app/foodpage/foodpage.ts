import { Component } from '@angular/core';
import { FoodModel } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import {Food} from '../services/food/food';
import { Tags } from '../tags/tags';
import { CurrencyPipe } from '@angular/common';
@Component({
  imports: [Tags, CurrencyPipe],
  selector: 'app-foodpage',
  styleUrl: './foodpage.css',
  templateUrl: './foodpage.html',
})
export class Foodpage {

  food!: FoodModel;
   constructor(private activatedRoute: ActivatedRoute , private Food : Food){
      activatedRoute.params.subscribe((params)=> {
        if(params['id']){
          this.food = Food.getFoodbyid(params['id']);
        }
      })


   }


  }
