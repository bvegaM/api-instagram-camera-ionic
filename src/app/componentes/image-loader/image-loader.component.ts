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
