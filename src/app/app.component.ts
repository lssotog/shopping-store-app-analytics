import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from "@angular/common";
import { Product } from './product.model';
import { ProductService } from './product.service';
import { AnalyticsService } from './analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private productService = inject(ProductService);
  private analitycsService = inject(AnalyticsService);
  title = 'shopping-store-analytics-app';
  productList: Product[] = [];
  
  ngOnInit(): void {
    this.productService.getClothesCatalog().subscribe({
      next: (data)=> {
        this.productList = data;
      },
      error: (err) => console.error('Error al cargar el catalogo', err)
    });
  }

  clickOnCart(product: Product): void {
    this.analitycsService.sendViewItem(product);
    alert(`Ir a la pagina del producto: ${product.title}`);
  }
}