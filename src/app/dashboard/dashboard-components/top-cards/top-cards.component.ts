import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {topcard, monto, ventasCount} from './top-cards-data';



@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  topcards:topcard[] = [
    {
      bgcolor: 'success',
      icon: 'bi bi-wallet',
      title: '',
      subtitle: 'Ganancias Anuales'
  },
  {
      bgcolor: 'danger',
      icon: 'bi bi-coin',
      title: '',
      subtitle: 'Ganancias Mensuales'
  },
  {
      bgcolor: 'warning',
      icon: 'bi bi-basket3',
      title: '',
      subtitle: 'Ventas Mensuales'
  },
  {
      bgcolor: 'info',
      icon: 'bi bi-bag',
      title: '',
      subtitle: 'Ventas Semanales'
  },
  ]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.getVentasSumYear().subscribe((data: monto[]) => {
      this.topcards[0].title = '$' + parseFloat(data[0].sum).toLocaleString('en-US', { minimumFractionDigits: 2 });
    });
    
    this.getVentasSumMonth().subscribe((data: monto[]) => {
      this.topcards[1].title = '$' + parseFloat(data[0].sum).toLocaleString('en-US', { minimumFractionDigits: 2 });
    });

    this.getCurrentMonthSalesCount().subscribe((data: ventasCount[]) => {
      this.topcards[2].title = data[0].count.toString();
    });

    this.getCurrentWeekSalesCount().subscribe((data: ventasCount[]) => {
      this.topcards[3].title = data[0].count.toString();
    });

  }

  getVentasSumYear(): Observable<monto[]> {
    const url = 'https://jvgcubzzmqcyhjqcyowc.supabase.co/rest/v1/rpc/get_current_year_sales_sum';
    const headers = {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs'
    };
    return this.http.post<monto[]>(url, {}, { headers });
  }

  getVentasSumMonth(): Observable<monto[]> {
    const url = 'https://jvgcubzzmqcyhjqcyowc.supabase.co/rest/v1/rpc/get_current_month_sales_sum';
    const headers = {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs'
    };
    return this.http.post<monto[]>(url, {}, { headers });
  }

  getCurrentMonthSalesCount(): Observable<ventasCount[]> {
    const url = 'https://jvgcubzzmqcyhjqcyowc.supabase.co/rest/v1/rpc/get_current_month_sales_count';
    const headers = {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs'
    };
    return this.http.post<ventasCount[]>(url, {}, { headers });
  }

  getCurrentWeekSalesCount(): Observable<ventasCount[]> {
    const url = 'https://jvgcubzzmqcyhjqcyowc.supabase.co/rest/v1/rpc/get_current_week_sales_count';
    const headers = {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs'
    };
    return this.http.post<ventasCount[]>(url, {}, { headers });
  }

}
