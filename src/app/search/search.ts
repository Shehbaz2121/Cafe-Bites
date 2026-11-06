import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  imports: [],
  selector: 'app-search',
  standalone: true,
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search {

  searchTerm = signal('');
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute, private router: Router) {
    this.route = route;
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
      }
    });
  }
   search():void {
    if(this.searchTerm)
    this.router.navigateByUrl('/search/:' + this.searchTerm);
    }

}
