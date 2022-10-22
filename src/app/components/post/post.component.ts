import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  @Output()signal = new EventEmitter<string>();
  @Input()photo : string = '';

  constructor() { }

  ngOnInit() {}

  toggleBtn(ionicButton){
    if(ionicButton.color !== 'dark'){
      ionicButton.color='dark';
    }
    else{
      switch(ionicButton.el.id){
        case 'heart':
            ionicButton.color = 'danger'
          break;
        case 'comment':
          ionicButton.color='warning';
          break;
        case 'share':
          ionicButton.color='primary';
          break;
        case 'save':
          ionicButton.color='tertiary';
          break;
      }
    }
  }

  sendID(){
    this.signal.emit('123456789');
  }

}
