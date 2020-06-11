import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const routes: Routes = [{ 
  path: 'cars',
  loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) 
},

{
  path: "404",
  component: PageNotFoundComponent,
},
  { 
    path: 'cardetails', 
    loadChildren: () => import('./cardetails/cardetails.module').then(m => m.CardetailsModule) 
  },
  {
    path: "cardetails/:car",
    loadChildren: () =>
      import("./cardetails/cardetails.module").then(
        (m) => m.CardetailsModule
      ),
  },
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
