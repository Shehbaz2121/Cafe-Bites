import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import {RouterLink} from '@angular/router';
import { Food } from '../services/food/food';
@Component({
  imports: [RouterLink],
  selector: 'app-tags',
  styleUrl: './tags.css',
  templateUrl: './tags.html',
})
export class Tags {

  @Input()  
  foodPageTags?:string[];
  tags?: Tag[];
  constructor(private Foodservice: Food) {}

  ngOnInit() {
    if(!this.foodPageTags){
    this.tags = this.Foodservice.getAllTags();
    }
  }

}
