import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// import { firebaseConfig } from './firebaseInit';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';


import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { getMessaging, provideMessaging } from '@angular/fire/messaging';

import { hiddenFirebaseCredentials } from './hiddenFirebaseCredentials';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(
      () => initializeApp(hiddenFirebaseCredentials )
    ),
    provideDatabase(
      () => getDatabase()
    ),
    provideMessaging(
      () => getMessaging()
    ), provideAnimationsAsync()
  ],
};
