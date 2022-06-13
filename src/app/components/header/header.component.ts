import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'MyGram';

  constructor(public popCtrl: PopoverController) { }

  ngOnInit() {}

  notifications(){
  }

}
