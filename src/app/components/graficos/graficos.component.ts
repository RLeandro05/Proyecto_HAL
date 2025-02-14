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
        labels: ['18-25 años', '26-35 años', '36-45 años', '46-60 años', '60+ años'],  // Grupos de edad
        datasets: [
          {
            label: 'Hidratos de carbono (g)',
            data: [220, 250, 270, 230, 210],  // Datos inventados para el consumo de hidratos de carbono por grupo de edad
            backgroundColor: 'rgba(255, 99, 132, 0.6)',  // Color de las barras
            borderColor: 'rgba(255, 99, 132, 1)',  // Color del borde
            borderWidth: 1
          },
          {
            label: 'Proteínas (g)',
            data: [80, 90, 100, 85, 70],  // Datos inventados para el consumo de proteínas
            backgroundColor: 'rgba(54, 162, 235, 0.6)',  // Color de las barras
            borderColor: 'rgba(54, 162, 235, 1)',  // Color del borde
            borderWidth: 1
          },
          {
            label: 'Grasas (g)',
            data: [50, 55, 60, 45, 40],  // Datos inventados para el consumo de grasas
            backgroundColor: 'rgba(255, 159, 64, 0.6)',  // Color de las barras
            borderColor: 'rgba(255, 159, 64, 1)',  // Color del borde
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,  // Asegura que el gráfico sea adaptable a diferentes tamaños de pantalla
        scales: {
          y: {
            beginAtZero: true  // La escala del eje Y comienza desde 0
          }
        },
        plugins: {
          legend: {
            position: 'top',  // Ubicación de la leyenda
          },
          title: {
            display: true,
            text: 'Consumo de Macronutrientes por Edad (Andalucía)',  // Título del gráfico
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


