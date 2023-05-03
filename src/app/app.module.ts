import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { MenuBarComponent } from './user/menu-bar/menu-bar.component';
import { FoodProductsComponent } from './user/header/food-products/food-products.component';
import { DietPlanComponent } from './user/header/diet-plan/diet-plan.component';
import { HelpComponent } from './user/header/help/help.component';
import { HeadingComponent } from './user/heading/heading.component';
import { FoodChildComponent } from './user/header/food-products/food-child/food-child.component';
import { FiltertypePipe } from './pipes/filtertype.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    MenuBarComponent,
    FoodProductsComponent,
    DietPlanComponent,
    HelpComponent,
    HeadingComponent,
    FoodChildComponent,
    FiltertypePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
