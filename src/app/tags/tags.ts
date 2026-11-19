import { Component } from '@angular/core';
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
  tags: Tag[] = [];

  constructor(private Foodservice: Food) {}

  ngOnInit() {
    this.tags = this.Foodservice.getAllTags();
  }

}
