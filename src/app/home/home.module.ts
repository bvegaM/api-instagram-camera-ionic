import { InstagramSharedComponent } from './../componentes/instagram-shared/instagram-shared.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ImageLoaderComponent} from '../componentes/image-loader/image-loader.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,ImageLoaderComponent,InstagramSharedComponent],
  exports: [ImageLoaderComponent,InstagramSharedComponent]
})
export class HomePageModule {}
