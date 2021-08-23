import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { CanloadGuard } from './emplyee-dashboard/_guards/canload.guard';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'contact' , component:ContactComponent},

  { path: 'products',
    loadChildren: () => import('./product-dashboard/product-dashboard.module').then(m => m.ProductDashboardModule)
  },
  { path: 'employee',
  loadChildren: () => import('./emplyee-dashboard/emplyee-dashboard.module').then(m => m.EmplyeeDashboardModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // RouterModule.forRoot(routes, { useHash: true })
  exports: [RouterModule]
})
export class AppRoutingModule { }
