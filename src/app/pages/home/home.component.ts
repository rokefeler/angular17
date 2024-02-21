import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal([
    'Instalar Angular CLI',
    'Crear Proyecto',
    'Crear Componentes',
    'Crear Servicios'
  ]);
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.tasks.update((task)=> [...this.tasks(), newValue]);
    input.value = '';
  }
  deleteTask(index:number){
    this.tasks.update((tasks)=> tasks.filter((task, i)=> i !== index));
  }
}
