import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from './places.service';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private placeService: PlacesService
  ) { }
  formulario = new FormGroup({
    mensaje: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required),

  }
  );
  ingresoUsuarios(form: any){
    const usuarios: Usuario = {
      
      nombre: form.nombre,
      correo: form.correo,
      mensaje:form.mensaje,

    }
    this.placeService.addPlace(usuarios)
    alert("registro exitoso")
  }
}
