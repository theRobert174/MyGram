import { Injectable } from '@angular/core';
import { Database, ref, push, get, child, set } from '@angular/fire/database';
import { Firestore, doc, updateDoc} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: Database, private fs: Firestore, private afs: AngularFirestore) { }

  private dbRef = ref(this.db);

  //#region GET

  getFeedDB(){
    return get(child(this.dbRef, `Feed`));
  }

  getUserDB(uid:string){
    return get(child(this.dbRef, `Users/${uid}`));
  }

  getUsersDB(){
    return get(child(this.dbRef, `Users`));
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

  //#region GETfromFIRESTORE

  async getFeedFS(){

   
    //const feedRef = collection(this.fs, "feed");
    //let resp = await collectionData(feedRef, {idField: "id"});
    //let resp = await collectionData(query(feedRef));
    //resp.subscribe(console.log)
    
    /*const feedContent = this.afs.collection<any>("feed").snapshotChanges().pipe(map(posts => { 
      return posts.map(p => ({
        //idDoc: p.payload.doc.id,
        ...p.payload.doc.data()
      }) )
    }))
    feedContent.subscribe(resp => {
      console.log(resp[0].ListPosts)
    });*/

  }

  async savePostFs(){
    let post = {
      caption: "Lorem IPSUM",
      comments: null,
      date: "17/10/2022",
      pImg: "ddddddd",
      likes: 0,
      time: "08:29:33",
      uid: "person"
    }
    /*const newRef = await setDoc(doc(this.fs, "posts", "fechahoraminsegid"), post);
    await updateDoc(doc(this.fs, "feed", "posts"), { ListPosts: arrayUnion(doc(this.fs, "posts/fechahoraminsegid") ) });
    console.log(newRef);*/
    this.afs.collection("posts").add(post).then(resp => console.log);
  }

  async updatePostFs(){
    const postRef = doc(this.fs, "posts", "fechahoraminsegid");
    await updateDoc(postRef, {comments: doc(this.fs, "comments/UyZ7Ve2UJDl8UkMOrGFW")});
  }

  //#endregion
}
