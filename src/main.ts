// Punto di ingresso dell'applicazione Angular.
// bootstrapApplication avvia l'app in modalità standalone,
// senza bisogno di un NgModule radice.

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // configurazione globale (provider, router…)
import { App } from './app/app'; // componente radice

// Avvia l'applicazione usando il componente App come radice
// e la configurazione definita in appConfig.
// In caso di errore di bootstrap, lo stampa in console.
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
