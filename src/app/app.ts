import { Component } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { ProductListComponent } from './components/product-list/product-list';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, ProductDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: Product[] = [
    {
      name: 'Laptop Lenovo IdeaPad',
      price: 799.99,
      description: 'Notebook da studio e lavoro con 16GB RAM e SSD da 512GB.',
    },
    {
      name: 'Mouse Logitech M185',
      price: 14.9,
      description: 'Mouse wireless compatto, ideale per uso quotidiano.',
    },
    {
      name: 'Monitor Samsung 24"',
      price: 159.0,
      description: 'Monitor Full HD da 24 pollici con pannello IPS.',
    },
    {
      name: 'Tastiera meccanica Redragon',
      price: 49.5,
      description: 'Tastiera meccanica con retroilluminazione RGB.',
    },
    {
      name: 'Cuffie Sony WH-CH520',
      price: 59.99,
      description: 'Cuffie Bluetooth leggere con autonomia fino a 50 ore.',
    },
  ];

  selectedProduct: Product | null = null;

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  addProduct(product: Product): void {
    this.products = [...this.products, product];
  }

  deleteProduct(productToDelete: Product): void {
    this.products = this.products.filter((product) => product !== productToDelete);

    if (this.selectedProduct === productToDelete) {
      this.selectedProduct = null;
    }
  }
}
