import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-imagenes',
  standalone: false,
  templateUrl: './carrusel-imagenes.component.html',
  styleUrl: './carrusel-imagenes.component.css'
})
export class CarruselImagenesComponent {

  nextSlide() {
    const items = document.querySelectorAll('.item');
    const slideContainer = document.querySelector('.slide');
    if (slideContainer) {
      slideContainer.appendChild(items[0] as Node);
    }
  }

  prevSlide() {
    const items = document.querySelectorAll('.item');
    const slideContainer = document.querySelector('.slide');
    if (slideContainer && items.length > 0) {
      slideContainer.prepend(items[items.length - 1] as Node);
    }
  }


}
