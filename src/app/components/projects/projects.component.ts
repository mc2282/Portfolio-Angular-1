import { Component, inject } from '@angular/core';
import { ProyectoService } from '../../service/proyecto.service';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})

export class ProjectsComponent {

  listaProyectos: Project[] = [
    {
      "id": "1",
      "titulo": "Encriptador de Texto",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS3",
      "tecnologia3": "NodeJS",
      "descripcion": "Aplicación Web del Proyecto ONE de Oracle+Alura LATAM desarrollada con tecnología HTML5, CSS3 y JavaScript, cuya función es encriptar y desencriptar un texto",
      "imagen": "images/proyecto_alura.webp",
      "linkCode": "https://github.com/mc2282/JuegoPPT",
      "linkPreview": "https://mc2282.github.io/JuegoPPT/"
    },
    {
      "id": "2",
      "titulo": "Juego Blackjack",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS3",
      "tecnologia3": "Vite",
      "descripcion": "Desarrollo del juego clásico de Blackjack utilizando JavaScript, con jugabilidad interactiva y seguimiento de puntajes en tiempo real. Empleo de funciones modulares de JavaScript para gestionar diferentes aspectos del juego, incluyendo la creación del mazo, el reparto de cartas, el cálculo del valor de las cartas, la creación de HTML para las cartas y la lógica del turno del computador.",
      "imagen": "images/proyecto_blackjack.webp",
      "linkCode": "https://github.com/mc2282/JS-Blackjack",
      "linkPreview": "https://blackjack-js-vite-app.netlify.app/"
    },
    {
      "id": "3",
      "titulo": "Juego Piedra, Papel o Tijera",
      "tecnologia1": "JavaScript",
      "tecnologia2": "CSS3",
      "tecnologia3": "HTML5",
      "descripcion": "Desarrollado con Javascript, CSS3 y HTML5",
      "imagen": "images/proyecto_ppt.webp",
      "linkCode": "https://github.com/mc2282/JuegoPPT",
      "linkPreview": "https://mc2282.github.io/JuegoPPT/"
    },
    {
      "id": "4",
      "titulo": "Tareas List",
      "tecnologia1": "JavaScript",
      "tecnologia2": "NodeJS",
      "tecnologia3": "Angular",
      "descripcion": "Aplicación desarrollada con HTML5, CSS3, JavaScript y Angular que permite la gestion de tareas y el almacenamiento de las mismas, simulando una base de datos con un servidor json",
      "imagen": "images/proyecto_tareas.webp",
      "linkCode": "https://github.com/mc2282/TareasList",
      "linkPreview": "https://mc2282.github.io/TareasList"
    }
  ]

  ngOnInit(): void {
    /*this.proyectoService.getProjects().subscribe(
      {
        next: (projects: Project[]) => {
          this.listaProyectos = projects
        }
      }
    )*/
  }

  proyectoService = inject(ProyectoService);

  //listaProyectos: Project[] = [];
}
