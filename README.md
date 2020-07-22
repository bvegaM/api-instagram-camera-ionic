# api-instagram-camera-ionic

### Instalación de la API Camera utilizando capactior:

```bash
npm install cordova-plugin-camera
npm install @ionic-native/camera
ionic cap sync
```
### Instalación de la API Instagram utilizando capacitor:

```bash
npm install cordova-instagram-plugin
npm install @ionic-native/instagram
ionic cap sync
```

### Implementación de las API en el código
**Añadir los componentes**
Lo primero que debemos hacer es añadir los API en el module.ts, para ello lo añadimos en los campos de providers de la siguiente manera:

```bash
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera } from '@ionic-native/camera/ngx';
import { Instagram} from '@ionic-native/instagram/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Instagram,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
### Creación de componentes para cargar una imagen a la camara
Para realizar esto creamos un componente para poder reutilizar el código que vayamos a generar. A cotinuación mostramos el html del componente:
```bash
<ion-button size="full" (click)="cargar()">
  <ion-icon [name]="icono"></ion-icon> 
</ion-button>
```
Una vez creado el html, pasamos a crear los métodos del componente. A continuación explicamos las variables que necesitamos:
* currentImage: Esta varaible nos dara la dirección de la imagen a cargar 
* salida: Esta variable sera la salida del componente el cual sera un tipo **@Ouput()**
* icono: Una variable que pone el ícono del boton pero que es un dato de entrada del componente **@Input()**

El código se muestra a continuación:
```bash
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss'],
})
export class ImageLoaderComponent implements OnInit {

  currentImage = null;
  @Input()  icono:string;
  @Output() salida=new EventEmitter<any>();;

  constructor(private camera:Camera) { }

  ngOnInit() {}

  async cargar(){
    let options: CameraOptions = {
      quality         :100,
      destinationType :this.camera.DestinationType.DATA_URL,
      encodingType    : this.camera.EncodingType.JPEG,
      sourceType      : this.camera.PictureSourceType.PHOTOLIBRARY
    }

    await this.camera.getPicture(options).then(data=>{
      this.salida.emit(this.currentImage = 'data:image/jpeg;base64,'+data);
    });
    
    
  }

}
```
Como podemos ver tenemos el método cargar que lo que hace es obtener las opciones de la imagen que vamos a cargar y a la final hacemos un **getPicture()** para mandar como salida la dirección de la imagen cargada, es muy importante que el método sea **async**

### Creación de componentes para compartir la imagen a instagram
Primero mostramos el html para poder después realizar los métodos para el componente. A continuación el html
```bash
<ion-button size="full" (click)="compartir()">
  Compartir foto en Instagram
</ion-button>
```
Ahora procedemos a ver el componente el cual requiere de una variable:
* url: esta variable es la dirección de la imagen que necesitamos para poder obtener la imagen y compartirla, es de tipo **@Input()**
Presentamos el código del componente a continuación:
```bash
import { Instagram } from '@ionic-native/instagram/ngx';

@Component({
  selector: 'app-instagram-shared',
  templateUrl: './instagram-shared.component.html',
  styleUrls: ['./instagram-shared.component.scss'],
})
export class InstagramSharedComponent implements OnInit {

  @Input() url:string;

  constructor(private instagram:Instagram) { }

  ngOnInit() {}

  compartir(){
    this.instagram.share(this.url,'Compartiendo imagen').then(()=>{
      
    })
  }

}
```
Como podemos ver importamos el módulo de instagram, y a la misma utilizamos el método share el cual nos permite compartir la imagen utilizando el parametro la url o dirección de la imagen

### Código de la página inicial
**html**
```bash
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      API Instagram Share
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding>
  <img [src]="imagen" *ngIf="imagen">
  <app-instagram-shared [url]="imagen"></app-instagram-shared>
  <app-image-loader [icono]="'camera'" (salida)="respuesta($event)"></app-image-loader>
</ion-content>

```
En lo primero podemos ver como mandamos a la entrada del ícono el valor de camara en el componente de app-image-uploader, de la misma manera vemos como en el componente app-instagram-shared mandamos la variable url el cual esta en el componente .ts. A la final cargamos la variable url con el dato salida del componente app-image-loader.
**.ts**
```bash
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagen=null;

  constructor() {}

  respuesta(src){
    console.log(src)
    this.imagen=src
  }

}
```
En el ts lo único que se hace es obtener la dirección de la imagen y mandarla a la variable imagen.

### Resultados
A continuación veremos los resultados de lo realizado

<img alt="" src="uno.jpeg" width="150" height="150">

<img alt="" src="dos.jpeg" width="150" height="150">

<img alt="" src="tres.jpeg" width="150" height="150">

<img alt="" src="cuatro.jpeg" width="150" height="150">
