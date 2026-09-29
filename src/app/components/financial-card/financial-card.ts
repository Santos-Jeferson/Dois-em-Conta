import { Component, input } from '@angular/core';

@Component({
  selector: 'app-financial-card',
  imports: [],
  templateUrl: './financial-card.html',
  styleUrl: './financial-card.css'
})
export class FinancialCard {
  
  title = input.required<string>();

  value = input.required<string>();

  detail = input<string>('');

  tone = input<'positive' | 'negative' | 'neutral'>('neutral');

}