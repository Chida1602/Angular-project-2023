import { Component } from '@angular/core';
import { DisplayallService } from 'src/app/services/displayall.service';

@Component({
  selector: 'app-food-products',
  templateUrl: './food-products.component.html',
  styleUrls: ['./food-products.component.css']
})
export class FoodProductsComponent {
  names:any;

  constructor(private ns:DisplayallService){
    this.ns.getdisplayall().subscribe({
      next: (data :any)=>this.names=data,
      error: () => this.names=[]
    })
  }
}
