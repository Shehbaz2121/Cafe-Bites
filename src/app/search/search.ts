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
        // ✅ FIX 1: Use .set() to update a signal's value. Do not use '=' 
        this.searchTerm.set(params['searchTerm']);
      }
    });
  }

  search(): void {
    // ✅ FIX 2: Call the signal as a function () to read its current value
    if (this.searchTerm()) {
      // ✅ FIX 3: Remove the ':' from your URL path so it routes cleanly
      this.router.navigateByUrl('/search/' + this.searchTerm());
    }
  }
}
