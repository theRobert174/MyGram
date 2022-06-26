import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  segment: string = 'posts';

  constructor() {}

  onClick(){
    console.log("icono presionado");
    
  }

  segmentChanged(event){
    this.segment = event.detail.value;
  }

}
