export class Usuario {
  public id= 0;
  public nombreUsuario = '';
  public password = '';
  public password2= '';

  public validarNombreUsuario(): string {
    if (this.nombreUsuario.trim() === '') {
      return 'Para ingresar al sistema debe ingresar un nombre de usuario.';
    }
    if (this.nombreUsuario.trim() !== 'Jorge12') {
      return 'El nombre de usuario es incorrecto';
    }
    return '';
  }

  public validarPassword(): string {
    if (this.password.trim() === '') {
      return 'Para entrar al sistema debe ingresar la contraseña';
    }
    for(let i = 0; i < this.password.length; i++) {
      if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
        return 'La contraseña debe ser numérica';
      }
    }
    if (this.password.trim() !== '1234') {
      return 'La contraseña es incorrecta';
    }
    return '';
    if(this.password2.trim() !== this.password.trim()){
      return 'Las claves deben ser iguales';
    }
  }

  public validarUsuario(): string {
    return this.validarNombreUsuario()
      || this.validarPassword();
  }
}
