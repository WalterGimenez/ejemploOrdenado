import { Persona } from './../../model/persona/persona';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data =>{
      this.personas = data;
    })
  }

  Editar(persona: Persona): void{
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["editar"]);
  }
}
