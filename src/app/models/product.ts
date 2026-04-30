// Interfaccia che descrive la struttura di un prodotto nel catalogo.
// Viene usata come tipo condiviso tra tutti i componenti dell'app.
export interface Product {
  name: string;        // nome del prodotto
  price: number;       // prezzo in euro
  description: string; // descrizione testuale del prodotto
}