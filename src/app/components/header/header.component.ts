import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  rutaActual: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.rutaActual = this.router.url;
    });
  }

  esRutaActiva(ruta: string): boolean {
    return this.rutaActual === ruta;
  }

}
