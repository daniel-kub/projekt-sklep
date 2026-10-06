import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../enviroments/enviroments';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private http = inject(HttpClient);

  createCheckoutSession(kwota:number) {
    const body = new HttpParams()
      .set('mode', 'payment')
      .set('line_items[0][price_data][currency]', 'pln')
      .set('line_items[0][price_data][product_data][name]', 'Zakupy w sklepie')
      .set('line_items[0][price_data][unit_amount]', (kwota * 100).toString())
      .set('line_items[0][quantity]', '1')
      .set('success_url', 'http://localhost:4200/sukces')
      .set('cancel_url', 'http://localhost:4200/anulowano');

    return this.http.post<{ url: string }>(
      'https://api.stripe.com/v1/checkout/sessions',
      body.toString(),
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${environment.stripeTestKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',  
        }),
      }
    );
  }
}