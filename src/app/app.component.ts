import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  welcome = 'Bendiciones este es tu primer programa';
  tasks = [
    'Instalar Angular CLI',
    'Crear Proyecto',
    'Crear Componentes',
    'Crear Servicios'
  ];
}
