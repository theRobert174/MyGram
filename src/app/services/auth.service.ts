import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, authState } from '@angular/fire/auth';
import { LogData } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  logIn({email,password} : LogData){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({email,password} : LogData){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  userLoggedData(){
    return this.auth.currentUser;
  }

  logOut(){
    return signOut(this.auth);
  }
}
