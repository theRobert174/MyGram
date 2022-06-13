import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild('itabs') tabs : IonTabs;
  selected : boolean = false;

  constructor() {}

  Change(){
    //console.log(this.tabs.getSelected());
    if(this.tabs.getSelected() === 'Feed') this.selected = true;
    if(this.tabs.getSelected() === 'Profile') this.selected = false;
  }

}
