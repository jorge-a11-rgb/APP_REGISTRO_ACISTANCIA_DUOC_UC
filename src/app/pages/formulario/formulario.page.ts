import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
@Component({
  selector: 'app-formulario',
  templateUrl: 'formulario.page.html',
  styleUrls: ['formulario.page.scss'],
})
export class FormularioPage {

  public usuario: Usuario;
  constructor(private router: Router) {
    this.router.navigate(['formulario/datos-basicos']);
  }
  segmentChanged($event){
    console.log($event.detail.value);
    // eslint-disable-next-line prefer-const
    let direction=$event.detail.value;
        this.router.navigate(['formulario/'+direction]);
  }
}
