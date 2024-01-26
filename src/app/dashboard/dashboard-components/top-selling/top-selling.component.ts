import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from './top-selling-data';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {

  topSelling: Venta[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getVentas().subscribe((data: Venta[]) => {
      this.topSelling = data;
    });
  }

  //ULTIMAS 10 VENTAS
  getVentas(): Observable<Venta[]> {
    const url = 'https://jvgcubzzmqcyhjqcyowc.supabase.co/rest/v1/ventas?select=*&order=fecha.desc&limit=10';
    const headers = {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs'
    };
    return this.http.get<Venta[]>(url, { headers });
  }
}
