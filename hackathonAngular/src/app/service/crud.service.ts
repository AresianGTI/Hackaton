import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(public fireservices:AngularFirestore) {

   }

  public create_NewAzubi(AzubiX){
      return this.fireservices.collection('Azubi').add(AzubiX);
  }

  public getAllAzubis(AzubiX) {
      return this.fireservices.collection('Azubi').get(AzubiX);
  }

}
