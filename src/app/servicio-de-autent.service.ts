import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {

  constructor(public miauth: AngularFireAuth) { }

  user = this.miauth.authState;
 // Usuario ya autenticado
  authUser = null;
  login() {
    console.log('Github login!');

    this.miauth.auth.signInWithPopup( new auth.GithubAuthProvider())
      .then( user => {
        console.log('user logado: ', user);
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en github login: ', error);
      })
      .catch(error => console.log(error));
  }
  glogin() {
    console.log('google login!');

    this.miauth.auth.signInWithPopup( new auth.GoogleAuthProvider() )
      .then( user => {
        console.log('user logado: ', user);
        this.authUser = user.user;
      })
      .catch( error => {
        console.log('error en google login: ', error);
      })
      .catch(error => console.log(error));
  }
  logout() {
    console.log('logout!');
    this.miauth.auth.signOut();
  }
}
