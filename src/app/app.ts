// Registra i dati di localizzazione italiani (separatori decimali,
// formato valuta, ecc.) necessari per le pipe come currency e date.
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { Component } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail/product-detail';
import { ProductListComponent } from './components/product-list/product-list';
import { Product } from './models/product';

// Attiva i dati della localizzazione italiana a livello globale.
// Senza questa chiamata, le pipe userebbero il locale di default (en-US).
registerLocaleData(localeIt);

// Componente radice dell'applicazione (standalone).
// Coordina la comunicazione tra ProductListComponent e ProductDetailComponent:
//   - riceve l'evento di selezione prodotto dalla lista
//   - passa il prodotto selezionato al componente di dettaglio tramite @Input
@Component({
  selector: 'app-root',
  imports: [ProductListComponent, ProductDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Prodotto attualmente selezionato dall'utente; null se nessuno è selezionato.
  selectedProduct: Product | null = null;

  // Callback invocata quando ProductListComponent emette l'evento selectProduct.
  // Aggiorna selectedProduct con il prodotto scelto (o null se deselezionato).
  onSelectProduct(product: Product | null): void {
    this.selectedProduct = product;
  }
}
