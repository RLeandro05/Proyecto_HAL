import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-graficos',
  standalone: false,
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {

  constructor() { }

  ngOnInit(): void {
    // Gráfico de barras
    const barChart = new Chart('barChart', {
      type: 'bar',  // Tipo de gráfico
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], // Etiquetas del eje X
        datasets: [{
          label: 'Ventas',
          data: [12, 19, 3, 5, 2],  // Datos del gráfico
          backgroundColor: 'rgba(54, 162, 235, 0.6)',  // Color de las barras
          borderColor: 'rgba(54, 162, 235, 1)',  // Color del borde
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,  // Asegura que el gráfico sea adaptable a diferentes tamaños de pantalla
        scales: {
          y: {
            beginAtZero: true  // La escala del eje Y comienza desde 0
          }
        }
      }
    });

    // Gráfico de líneas
    const lineChart = new Chart('lineChart', {
      type: 'line',  // Tipo de gráfico
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],  // Etiquetas del eje X
        datasets: [{
          label: 'Usuarios Activos',
          data: [65, 59, 80, 81, 56],  // Datos del gráfico
          fill: false,  // No llenar el área debajo de la línea
          borderColor: 'rgba(75, 192, 192, 1)',  // Color de la línea
          tension: 0.1  // Suaviza la línea
        }]
      },
      options: {
        responsive: true  // Asegura que el gráfico sea adaptable
      }
    });
  }
}


