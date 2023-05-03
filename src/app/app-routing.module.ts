import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodProductsComponent } from './user/header/food-products/food-products.component';
import { HelpComponent } from './user/header/help/help.component';
import { DietPlanComponent } from './user/header/diet-plan/diet-plan.component';

const routes: Routes = [
    {path:"food",component: FoodProductsComponent},
    {path:"help", component: HelpComponent},
    {path:"diet",component: DietPlanComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
