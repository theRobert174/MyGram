import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PostPagePage } from '../pages/post-page/post-page.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router, private navCtrl: NavController) {}

  openPost(id: string){
    //console.log('openPost');
    this.navCtrl.navigateRoot(`Auth/MyGram/post/`+id);
    //this.router.navigate([`Auth/MyGram/post/`+id]);
  }
}
