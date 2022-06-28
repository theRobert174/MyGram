import { Injectable } from '@angular/core';
import { Database, ref, push, get, child, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: Database) { }

  private dbRef = ref(this.db);

  //#region GET

  getFeedDB(){
    return get(child(this.dbRef, `Feed`));
  }

  getUserDB(uid:string){
    return get(child(this.dbRef, `Users/${uid}`));
  }

  getPostDB(id:string){
    return get(child(this.dbRef, `Posts/${id}`));
  }

  //#endregion

  //#region SAVE

  // UID : User
  savePostDB(UID: string, obj){
    set(ref(this.db, `Posts/`+obj.id), obj);
    let postFeed = {idPost: true };
    set(ref(this.db, `Feed/`+obj.id),true);
  }
  //add new User
  saveUserDB(UID: string, obj){
    set(ref(this.db, `Users/`+UID), obj);
  }

  //#endregion

}
