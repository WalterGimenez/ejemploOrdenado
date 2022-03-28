import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona/persona';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  modelPersona = new Persona();
  

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    if(id !=null){
      this.service.getPersonaId(+id)
      .subscribe(data =>{
        this.modelPersona = data;
      })
    }
  }

  Actualizar(persona: Persona){
    this.service.updatePersona(persona)
    .subscribe(data =>{
    this.modelPersona = data;
    alert("Se actualizó con éxito ..!!!");
    this.router.navigate(["listar"]);
    })
  }
}
