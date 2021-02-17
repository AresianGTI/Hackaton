import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { azubi } from '../models/azubi';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-azubiansicht',
  templateUrl: './azubiansicht.component.html',
  styleUrls: ['./azubiansicht.component.css']
})

export class AzubiansichtComponent implements OnInit {

  azu: azubi = new azubi();
  db: any[] = [];



  constructor(public crudservice: CrudService, public fireservices: AngularFirestore) { 

  }

  createAzubi(){
    let AzubiX = {};
    AzubiX['name'] = this.azu.name;
    AzubiX['vorname'] = this.azu.vorname;
    AzubiX['stammeinrichtung'] = this.azu.stammeinrichtung;


    this.crudservice.create_NewAzubi(AzubiX).then(res =>{
      // this.fireservices.collection('Azubi').add(AzubiX).then(res => {
      this.azu.name = "";
      this.azu.vorname = "";
      this.azu.stammeinrichtung = "";
      console.log(res);
      alert("Der Azubi wurde erstellt!");
    }).catch(error =>{
      console.log(error);
    });
  }

  getAzubi(){
    this.crudservice.getAllAzubis
  }

  // fetchDAta: function(){
    
  // }

  ngOnInit(): void {

  }

}
