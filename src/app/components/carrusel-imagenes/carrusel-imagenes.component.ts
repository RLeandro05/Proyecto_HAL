import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-imagenes',
  standalone: false,
  templateUrl: './carrusel-imagenes.component.html',
  styleUrl: './carrusel-imagenes.component.css'
})
export class CarruselImagenesComponent {


  constructor() {}

  ngOnInit(): void {
    this.startImageSlider();
  }

  startImageSlider(): void {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function changeSlide() {
      // Quitar la clase 'active' de la imagen actual
      slides[currentSlide]?.classList.remove('active');

      // Generar un índice aleatorio para la siguiente imagen
      do {
        currentSlide = Math.floor(Math.random() * slides.length);
      } while (slides[currentSlide]?.classList.contains('active')); // Evitar repetir la misma imagen

      // Agregar la clase 'active' a la nueva imagen
      slides[currentSlide]?.classList.add('active');
    }

    // Cambiar la imagen cada 2 segundos
    setInterval(changeSlide, 2000);
  }

}
