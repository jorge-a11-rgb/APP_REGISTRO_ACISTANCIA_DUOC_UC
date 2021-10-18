/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable prefer-const */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AfterViewInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

import { createAnimation } from '@ionic/angular';
import { Alumno } from 'src/app/model/Alumno';

@Component({
  selector: 'app-datos-basicos',
  templateUrl: './datos-basicos.component.html',
  styleUrls: ['./datos-basicos.component.scss'],
})
export class DatosBasicosComponent implements OnInit, AfterViewInit
{

  @ViewChild('titulo3', { read: ElementRef, static: true}) titulo3: ElementRef;

  public ngOnInit() {

    }




  public datos: Alumno = new Alumno();

  constructor(
    private animationController: AnimationController
    ,private activeroute: ActivatedRoute
    , private router: Router
    , private alertController: AlertController) {}
public ngAfterViewInit(): void {
  // eslint-disable-next-line prefer-const
  let animation = this.animationController.create()
    .addElement(this.titulo3.nativeElement)

    .duration(1500)
    .iterations(Infinity)

    .fromTo('transform', 'translate(0px)', 'translate(100px)')

    .fromTo('opacity', 1, 0.2);

  animation.play();
}
  /**
   * Metodo limpíar recorre un objeto y se define el
   * valor de su propiedad en ""
   */

   public limpiarFormulario(): void {
    /*
    El método limpiar recorre cada uno de los campos de la propiedad persona,
    de modo que la variable "key" va tomando el nombre de dichos campos (nombre,
    apellido, etc.) y "value" adopta el valor que tiene en ese momento el
    campo asociado a key.
    */
    for (const [key, value] of Object.entries(this.datos)) {
    /*
      Con la siguiente instrucción se cambia el valor de cada campo
      de la propiedad persona, y como los controles gráficos están
      asociados a dichos nombres de campos a través de ngModel, entonces
      al limpiar el valor del campo, también se limpia el control gráfico.
    */
      Object.defineProperty(this.datos, key, {value: ''});
    }
    }
  public mostrar(): void {

    // Mostrar un mensaje emergente con los datos de la persona
    const mensaje =
    '<br>RUT alumno: ' + this.datos.rut
       +'<br>Nombre alumno: ' + this.datos.nombre
      + '<br>Apellido paterno alumno: ' + this.datos.apelllidoPaterno
      + '<br>Apellido  materno alumno: ' + this.datos.apellidoMaterno;


    this.presentAlert('Datos de alumno', mensaje);
  }

  // Este método sirve para mostrar el mensaje emergente
  public async presentAlert(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}

