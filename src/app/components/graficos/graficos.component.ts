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
          },
          {
            label: 'Azúcares (g)',
            data: [30, 35, 40, 100, 200], // Aumento considerable
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
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
    // Gráfico de líneas con azúcares
    const lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [
          {
            label: 'Hidratos de carbono (g)',
            data: [220, 215, 230, 240, 250, 260, 270, 280, 290, 295, 300],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.3,
            fill: true
          },
          {
            label: 'Proteínas (g)',
            data: [80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.3,
            fill: true
          },
          {
            label: 'Grasas (g)',
            data: [50, 52, 55, 58, 60, 63, 65, 67, 70, 72, 75],
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            tension: 0.3,
            fill: true
          },
          {
            label: 'Azúcares (g)',
            data: [30, 35, 40, 50, 65, 80, 100, 120, 150, 180, 220], // Aumento considerable
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Evolución del Consumo de Macronutrientes (2015-2025)' }
        },
        scales: { y: { beginAtZero: true } }
      }
    });

    // Gráfico de "queso" (pie chart)
    const pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Hidratos de carbono', 'Proteínas', 'Grasas', 'Azúcares'],
        datasets: [{
          data: [300, 130, 75, 220], // Datos de 2025
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 206, 86, 0.6)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Distribución del Consumo de Macronutrientes en 2025' }
        }
      }
    });

    // Gráfico de radar
    const radarChart = new Chart('radarChart', {
      type: 'radar',
      data: {
        labels: ['Hidratos de carbono', 'Proteínas', 'Grasas', 'Azúcares'],
        datasets: [{
          label: 'Consumo de macronutrientes en 2025',
          data: [300, 130, 75, 220],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Comparación de Macronutrientes en 2025' }
        }
      }
    });
  }
}


