import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { Component } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { ProductListComponent } from './components/product-list/product-list';
import { Product } from './models/product';

registerLocaleData(localeIt);

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, ProductDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedProduct: Product | null = null;

  onSelectProduct(product: Product | null): void {
    this.selectedProduct = product;
  }
}
