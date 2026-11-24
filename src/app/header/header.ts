import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  constructor(private router: Router) {}

  routerLink(){
    this.router.navigate(['/cart-page']);
  }
}
