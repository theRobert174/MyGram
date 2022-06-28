import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { Post, User } from '../../interfaces/index';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.page.html',
  styleUrls: ['./post-page.page.scss'],
})
export class PostPagePage implements OnInit {

  paramID:string = '';

  constructor(private route: ActivatedRoute, private serDB: DatabaseService) { }

  ngOnInit() {
    this.paramID = this.route.snapshot.paramMap.get("id");
    console.log(this.paramID);
    
    this.serDB.getFeedDB().then(resp => {console.log(resp.val())});
    this.serDB.getUserDB("dfgh").then(resp => {console.log(resp.val())});
    this.serDB.getPostDB("123456789").then(resp => {console.log(resp.val())});
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

  post(){
    const post: Post = {
      caption: 'CAPTION',
      date: '25-06-2022',
      id: '987654321',
      likes: '25',
      pImg: 'DDSFDSFDS',
      time: '11:42',
      uid: 'rtyu'
    };
    this.serDB.savePostDB(post.uid,post);
  }

  getter(){
    this.serDB.getFeedDB().then(resp => {console.log(resp.val())});
  }

  newUser(){
    const user: User ={
      bio: 'LOREM IPSUM',
      followers: '123',
      following: '12',
      posts: '2',
      uPic: 'fodfidhfid',
      uid: 'rtyu',
      userName: 'FreeOfLyce'
    }
    this.serDB.saveUserDB(user.uid, user);
  }

}
