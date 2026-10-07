import { Component,inject,signal } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../payment.service';
import {MatInputModule} from '@angular/material/input';

@Component({
  imports: [ReactiveFormsModule, MatInputModule],
  selector: 'app-summary',
  styleUrl: './summary.scss',
  templateUrl: './summary.html',
})
export class Summary {
    orderForm!: FormGroup;

  constructor(private appService: AppService, private fb: FormBuilder) {}
  ngOnInit() {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9,}$')]],
      street: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{2}-[0-9]{3}$')]],
      city: ['', Validators.required]
    });
    if(this.appService.cartLength() === 0) {
      alert('Twój koszyk jest pusty. Dodaj produkty do koszyka przed przejściem do podsumowania.');
      window.location.href = '/';
    }
  }
  private payments = inject(PaymentService);

  loading = signal(false);
  error = signal<string | null>(null);

  pay() {
    this.loading.set(true);
    this.error.set(null);
    this.payments.createCheckoutSession(this.appService.cartTotal()).subscribe({
      next: ({ url }) => {
        window.location.href = url;
      },
      error: (err) => {
        console.error(err);
        this.error.set(
          err?.error?.error?.message ?? 'Nie udało się utworzyć płatności.'
        );
        this.loading.set(false);
      },
    });
  }

}
