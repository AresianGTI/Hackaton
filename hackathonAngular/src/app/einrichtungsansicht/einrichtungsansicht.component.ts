import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { einrichtung } from "../models/einrichtung";

@Component({
  selector: 'app-einrichtungsansicht',
  templateUrl: './einrichtungsansicht.component.html',
  styleUrls: ['./einrichtungsansicht.component.css']
})
export class EinrichtungsansichtComponent implements OnInit {

sendung = this.store.collection("test").valueChanges({idField: 'id'});

  constructor(private store: AngularFirestore){

  }

  solutionlabel:HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("solutionlabel");
  texti: string = "a";
  eingabetext: string;
  e1 : einrichtung = new einrichtung();

  
  ngOnInit(): void {
  }

  sendData(){
    this.e1.name = this.eingabetext;
    // this.texti = document.getElementById("eingabetext");
  }
}
