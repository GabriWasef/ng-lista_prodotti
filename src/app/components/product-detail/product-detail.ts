// Componente di sola lettura che visualizza i dettagli di un prodotto.
// Riceve il prodotto da visualizzare tramite l'@Input product, passato dal componente padre (App).
// Se product è null (nessun prodotto selezionato), mostra un messaggio informativo.

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule], // CommonModule necessario per *ngIf nel template
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetailComponent {
  // Prodotto da visualizzare. Impostato dal componente padre tramite property binding [product].
  // null indica che nessun prodotto è selezionato.
  @Input() product: Product | null = null;
}
