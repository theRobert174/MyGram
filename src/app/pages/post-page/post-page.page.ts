import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {

  paramID:string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.paramID = this.route.snapshot.paramMap.get("id");
    console.log(this.paramID);
    
  }

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

}
