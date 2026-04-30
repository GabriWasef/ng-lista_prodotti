// Componente che visualizza la lista dei prodotti e permette
// di aggiungere nuovi prodotti o eliminarne di esistenti.
// Comunica il prodotto selezionato al componente padre (App)
// tramite l'evento @Output selectProduct.

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule], // CommonModule: ngIf/ngFor; FormsModule: ngModel/ngForm
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  // Evento emesso verso il componente padre ogni volta che l'utente
  // seleziona un prodotto oppure elimina quello correntemente selezionato.
  @Output() selectProduct = new EventEmitter<Product | null>();

  // Lista dei prodotti visualizzati. Inizializzata con dati di esempio.
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

  // Prodotto attualmente evidenziato nella lista (usato per applicare la classe CSS "selected").
  selectedProduct: Product | null = null;

  // Modello del form di aggiunta prodotto, legato ai campi del template tramite ngModel.
  // price è null di default per distinguere "non inserito" dallo 0.
  newProduct: { name: string; price: number | null; description: string } = {
    name: '',
    price: null,
    description: '',
  };

  // Seleziona un prodotto dalla lista:
  // aggiorna lo stato interno e notifica il componente padre tramite l'evento.
  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
    this.selectProduct.emit(product);
  }

  // Aggiunge un nuovo prodotto alla lista se il form è valido.
  // Dopo l'inserimento, resetta il form ai valori iniziali.
  onAddProduct(form: NgForm): void {
    const name = this.newProduct.name.trim();
    const description = this.newProduct.description.trim();

    // Validazione: esce se il form è invalido, il prezzo è null
    // o nome/descrizione sono stringhe vuote dopo il trim.
    if (form.invalid || this.newProduct.price === null || !name || !description) {
      return;
    }

    const productToAdd: Product = {
      name,
      price: this.newProduct.price,
      description,
    };

    // Crea un nuovo array immutabile per garantire la change detection di Angular.
    this.products = [...this.products, productToAdd];

    // Resetta il form ripristinando i valori iniziali e lo stato di validazione.
    form.resetForm({
      name: '',
      price: null,
      description: '',
    });
  }

  // Elimina un prodotto dalla lista.
  // event.stopPropagation() impedisce che il click sul pulsante
  // "Elimina" propaghi al <li> padre e selezioni il prodotto invece di eliminarlo.
  onDeleteProduct(product: Product, event: MouseEvent): void {
    event.stopPropagation();
    this.products = this.products.filter((item) => item !== product);

    // Se il prodotto eliminato era quello selezionato,
    // deseleziona e notifica il componente padre.
    if (this.selectedProduct === product) {
      this.selectedProduct = null;
      this.selectProduct.emit(null);
    }
  }
}
