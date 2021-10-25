import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { AlertController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/Usuario';

import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { $ } from 'protractor';



import { createAnimation } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  @ViewChild('titulo', { read: ElementRef, static: true}) titulo: ElementRef;
  @ViewChild('titulo2', { read: ElementRef, static: true}) titulo2: ElementRef;


  public usuario: Usuario;

  constructor(private router: Router, private toastController: ToastController, private activeroute: ActivatedRoute
    , private alertController: AlertController
    , private animationController: AnimationController) {
    this.usuario = new Usuario();
    this.usuario.nombreUsuario = '';
    this.usuario.password = '';
  }

  public ngAfterViewInit(): void {
    // eslint-disable-next-line prefer-const
    let animation = this.animationController.create()
      .addElement(this.titulo.nativeElement)
      .addElement(this.titulo2.nativeElement)

      .duration(1500)
      .fromTo('transform', 'translate(0px)', 'translate(100px)')
      .fromTo('opacity', 0.10, 1);

      document.querySelector('#limpiar1').addEventListener('click', () => {
        animation.play();
      });

  }
  public ngOnInit(): void {

  }

  public ingresar(): void {

    if(!this.validarUsuario(this.usuario)) {
      return;
    }

    this.mostrarMensaje('¡Bienvenido!');


    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.usuario.nombreUsuario
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }


  public validarUsuario(usuario: Usuario): boolean {

    const mensajeError = usuario.validarUsuario();

    if (mensajeError) {
      this.mostrarMensaje(mensajeError);
      return false;
    }

    return true;
  }

  /**
   * Muestra un toast al usuario
   *
   * @param mensaje Mensaje a presentar al usuario
   * @param duracion Duración el toast, este es opcional
   */
  async mostrarMensaje(mensaje: string, duracion?: number) {
    const toast = await this.toastController.create({
        message: mensaje,
        duration: duracion? duracion: 2000
      });
    toast.present();
  }
  public limpiarFormulario(): void{
    for (const [key, value] of Object.entries(this.usuario)) {
      Object.defineProperty(this.usuario, key, {value: ''});
  }

}
}
