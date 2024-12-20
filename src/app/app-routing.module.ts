import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { RegisterComponent } from './register/register.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'addresidence', component: AddResidenceComponent },
  { path: 'residences/:idR', component: ResidenceDetailsComponent },
  { path: 'update/:idR', component: AddResidenceComponent },

  { path: 'products/:id', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
