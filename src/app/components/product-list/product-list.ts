import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() selectProduct = new EventEmitter<Product>();

  onSelectProduct(product: Product): void {
    this.selectProduct.emit(product);
  }
}
