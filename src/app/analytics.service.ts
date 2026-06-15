import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  sendViewItem(product: Product): void {
    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      event: 'view_item',
      ecommerce: {
        currency: 'USD',
        value: product.price,
        items:[{
          item_id: product.id.toString(),
          item_name: product.title,
          price: product.price,
          item_category: product.category,
          quantity: 1
        }]
      }
    });
    console.log('Console: Click detectado en!', product.title);
  }
}
