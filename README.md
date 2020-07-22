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
