import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreguntaClaveComponent } from './components/pregunta-clave/pregunta-clave.component';
import { DatosBasicosComponent } from './components/datos-basicos/datos-basicos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DBTaskService } from './services/dbtask.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [AppComponent, DatosBasicosComponent, PreguntaClaveComponent],
  entryComponents: [],
  imports: [HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    BrowserAnimationsModule, FormsModule],
  providers: [
    SQLite,
    DBTaskService,
    AuthGuardService,
    AuthenticationService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

