import { Component } from '@angular/core';

import { Navbar } from '../../components/navbar/navbar';
import { FinancialCard } from '../../components/financial-card/financial-card';
@Component({
  selector: 'app-dashboard',
  imports: [
    Navbar,
    FinancialCard
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {}
