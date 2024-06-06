import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent: () => import("./c1/c1.component").then(c=>c.C1Component)
    },
    {
        path:"",
          loadComponent:()=> import("./c2/c2.component").then(c=>c.C2Component)
    }
];
