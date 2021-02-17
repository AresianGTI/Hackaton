import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-anmeldeansicht',
  templateUrl: './anmeldeansicht.component.html',
  styleUrls: ['./anmeldeansicht.component.css']
})
export class AnmeldeansichtComponent implements OnInit {

  constructor(public fireservices: AngularFirestore, private auth: AngularFireAuth) { }

  // auth.signInWithEmailAndPassword(email, pass); ----> Um sich mit Email und Passwort anzumelden
  
  txtEmail = document.getElementById('txtEmail');
  txtPassword = document.getElementById("txtPassword");
  btnLogin = document.getElementById("btnLogin");
  btnSignUp = document.getElementById("btnSignUp");
  btnLogout = document.getElementById("btnLogout");

  ngOnInit(): void {
  }

  Login(){
    let email = this.txtEmail.innerText;
    let pass = this.txtPassword.innerText;
    this.auth.signInWithEmailAndPassword(email, pass);
  }

  signUp(){
    let email = this.txtEmail.innerText;
    let pass = this.txtPassword.innerText;
    this.auth.createUserWithEmailAndPassword(email, pass);
    alert("Müsste funktioniert haben");
  }





}
