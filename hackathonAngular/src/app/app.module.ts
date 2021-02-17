import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {FormsModule} from'@angular/forms';
import {CrudService} from './service/crud.service'; //Crud Srevice Import. Der Ordner ist auf der selben Ebene
import {AngularFireAuthModule} from '@angular/fire/auth';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { EinrichtungsansichtComponent } from './einrichtungsansicht/einrichtungsansicht.component';
import { AzubiansichtComponent } from './azubiansicht/azubiansicht.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EinrichtungsansichtComponent,
    AzubiansichtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
   // CrudService muss bei providers rein
   AngularFireAuthModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
