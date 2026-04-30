// Configurazione globale dell'applicazione Angular (standalone).
// Qui vengono registrati i provider disponibili in tutta l'app.

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Registra un listener globale per gli errori non gestiti nel browser
    provideBrowserGlobalErrorListeners(),
    // Fornisce il router Angular configurato con le rotte definite in app.routes.ts
    provideRouter(routes),
  ],
};
