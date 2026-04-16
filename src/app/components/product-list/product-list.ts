import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() selectProduct = new EventEmitter<Product>();
  @Output() addProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();

  newProduct: { name: string; price: number | null; description: string } = {
    name: '',
    price: null,
    description: '',
  };

  onSelectProduct(product: Product): void {
    this.selectProduct.emit(product);
  }

  onAddProduct(form: NgForm): void {
    const name = this.newProduct.name.trim();
    const description = this.newProduct.description.trim();

    if (form.invalid || this.newProduct.price === null || !name || !description) {
      return;
    }

    this.addProduct.emit({
      name,
      price: this.newProduct.price,
      description,
    });

    form.resetForm({
      name: '',
      price: null,
      description: '',
    });
  }

  onDeleteProduct(product: Product, event: MouseEvent): void {
    event.stopPropagation();
    this.deleteProduct.emit(product);
  }
}
