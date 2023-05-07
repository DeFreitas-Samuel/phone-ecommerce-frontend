import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services";
import {CartItem} from "../../interfaces/cart-item.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart$!: Observable<CartItem[]>;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.cartService.getCart;
  }

}