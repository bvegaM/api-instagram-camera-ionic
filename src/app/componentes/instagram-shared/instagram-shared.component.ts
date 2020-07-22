import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Instagram } from '@ionic-native/instagram/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-instagram-shared',
  templateUrl: './instagram-shared.component.html',
  styleUrls: ['./instagram-shared.component.scss'],
})
export class InstagramSharedComponent implements OnInit {

  @Input() url:string;
  @Output() salida=new EventEmitter<any>();

  constructor(private instagram:Instagram,private loadingCtrl: LoadingController) { }

  ngOnInit() {}

  compartir(){
    this.instagram.share(this.url,'Compartiendo imagen').then(()=>{
      this.salida.emit("imagen compartda satisfactoriamente")
    })
  }

}
