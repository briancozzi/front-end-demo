import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from '@interceptors';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeApp,
    //   deps: [FontLoaderService],
    //   multi: true
    // }
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthenticationInterceptor,
        multi: true,
    },
    provideAnimations()
],
};
