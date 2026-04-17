import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  @Output() selectProduct = new EventEmitter<Product | null>();

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

  newProduct: { name: string; price: number | null; description: string } = {
    name: '',
    price: null,
    description: '',
  };

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
    this.selectProduct.emit(product);
  }

  onAddProduct(form: NgForm): void {
    const name = this.newProduct.name.trim();
    const description = this.newProduct.description.trim();

    if (form.invalid || this.newProduct.price === null || !name || !description) {
      return;
    }

    const productToAdd: Product = {
      name,
      price: this.newProduct.price,
      description,
    };

    this.products = [...this.products, productToAdd];

    form.resetForm({
      name: '',
      price: null,
      description: '',
    });
  }

  onDeleteProduct(product: Product, event: MouseEvent): void {
    event.stopPropagation();
    this.products = this.products.filter((item) => item !== product);

    if (this.selectedProduct === product) {
      this.selectedProduct = null;
      this.selectProduct.emit(null);
    }
  }
}
