import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {monthlySalesSum} from './sales-summary-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid
} from 'ng-apexcharts';

export type salesChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  stroke: any;
  theme: ApexTheme | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
  legend: ApexLegend | any;
  colors: string[] | any;
  markers: any;
  grid: ApexGrid | any;
};

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html'
})
export class SalesSummaryComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public salesChartOptions: Partial<salesChartOptions>;
  constructor(private http: HttpClient) {
    this.salesChartOptions = {
      series: [
        {
          name: "Ventas",
          data: [],
        }
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        height: 250,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: '1',
      },
      grid: {
        strokeDashArray: 3,
      },

      xaxis: {
        categories: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sept",
          "Oct",
          "Nov",
          "Dic"
        ],
      },
      tooltip: {
        theme: 'dark'
      }
    };
  }

  ngOnInit(): void {
    this.getMonthlySalesSumYear().subscribe((data: monthlySalesSum[]) => {
      const seriesData = data.map(item => Number(item.sum));
      this.salesChartOptions.series = [{
        name: "Ventas",
        data: seriesData,
      }];
    });
  }




  getMonthlySalesSumYear(): Observable<monthlySalesSum[]> {
    const url = 'https://jvgcubzzmqcyhjqcyowc.supabase.co/rest/v1/rpc/get_monthly_sales_sum_year';
    const headers = {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z2N1Ynp6bXFjeWhqcWN5b3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDA1NzUsImV4cCI6MjAyMTExNjU3NX0.bFBoGoRCt10qZEtjmicr-3PvZqx__Q8vAQtJCMNxccs'
    };
    return this.http.post<monthlySalesSum[]>(url, {}, { headers });
  }

}
