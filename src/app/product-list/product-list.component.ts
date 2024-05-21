import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [
    CommonModule 
  ]
})
export class ProductListComponent {
  products = [
    { name: 'Remera 1',
     price: 118.000, 
     stock: 1, 
     img: '/assets/remera1.png'

    },
    { name: 'Short',
     price: 200,
      stock: 0,
      img: '/assets/remera1.png'

    },
    {
      name: 'Camieseta Facha', 
      price: 300, 
      stock: 3,
      img: '/assets/remera1.png'
      }
  ];
}
