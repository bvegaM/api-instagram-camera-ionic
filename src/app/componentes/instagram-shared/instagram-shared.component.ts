import { Component, OnInit, Input } from '@angular/core';
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
