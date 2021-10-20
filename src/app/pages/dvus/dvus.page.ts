import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { ToastController } from '@ionic/angular';

import { Usuario_pass } from 'src/app/model/Usuario_pass';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { $ } from 'protractor';
import { Usuario } from 'src/app/model/Usuario';
import { ValidacionUs } from 'src/app/model/ValidacionUs';
import { createAnimation } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-dvus',
  templateUrl: './dvus.page.html',
  styleUrls: ['./dvus.page.scss'],
})
export class DvusPage implements OnInit, AfterViewInit {
  @ViewChild('titulo3', { read: ElementRef, static: true }) titulo3: ElementRef;

  public validacionUs: ValidacionUs;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private activeroute: ActivatedRoute,
    private alertController: AlertController,
    private animationController: AnimationController
  ) {
    this.validacionUs = new ValidacionUs();
    this.validacionUs.nombreUsuario = '';
  }
  public ngAfterViewInit(): void {
    // eslint-disable-next-line prefer-const
    let animation = this.animationController
      .create()
      .addElement(this.titulo3.nativeElement)
      .duration(1500)

      .fromTo('opacity', 0.1, 1);

    document.querySelector('#limpiar2').addEventListener('click', () => {
      animation.play();
    });
  }

  public ngOnInit(): void {}

  public ingresar(): void {
    if (!this.validarUsuario(this.validacionUs)) {
      return;
    }

    this.mostrarMensaje('Usted a sido idenficado con exito');

    const navigationExtras: NavigationExtras = {
      state: {
        usuario: this.validacionUs,
      },
    };
    this.router.navigate(['/pass'], navigationExtras);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public validarUsuario(validacionUs: ValidacionUs): boolean {
    const mensajeError = validacionUs.validarUsuario();

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
      duration: duracion ? duracion : 2000,
    });
    toast.present();
  }
  public limpiarFormulario(): void {
    for (const [key, value] of Object.entries(this.validacionUs)) {
      Object.defineProperty(this.validacionUs, key, { value: '' });
    }
  }
}
