import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      CommonModule,
      RouterModule.forRoot([
        {
          path:"",
          loadComponent:()=> import("../app/c2/c2.component").then(c=>c.C2Component)
        },
        {
          path:"",
          loadComponent:() => import("../app/c1/c1.component").then(c=>c.C1Component)
        },
      ])
    )
  ]
};
