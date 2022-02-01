import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  public sidebar = false;
  cart: string;

  constructor() {}

  closeSidebar(): void {
    const checkbox = document.getElementById('check') as HTMLInputElement;
    checkbox.checked = false;
  }

  getCart(): string{
    if (localStorage.getItem('cart')) {
      return this.cart = localStorage.getItem('cart');
    } else {
      return this.cart = '0';
    }
  }

  ngOnInit(): void {
  }
}
