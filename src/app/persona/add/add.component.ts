import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Persona } from 'src/app/model/persona/persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private route: Router, private service: ServiceService) { }
  modelPersona = new Persona();

  ngOnInit(): void {
  }

  Guardar(persona: Persona){
      
      this.service.createPersona(persona)
        .subscribe(data =>{
        alert("Se ha agregado con éxito!!!...");
        this.route.navigate(["listar"]);
      })
  }
}
