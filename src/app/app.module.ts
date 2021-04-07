import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AddProductComponent } from './features/add-product/add-product.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAmSZ1OeD4NfMNlTRdRglJbGsfVRy6oDEY",
    authDomain: "beautyfavs-1c038.firebaseapp.com",
    projectId: "beautyfavs-1c038",
    storageBucket: "beautyfavs-1c038.appspot.com",
    messagingSenderId: "697793655537",
    appId: "1:697793655537:web:d2014383f301068b09ef50",
    measurementId: "G-LYWD56HGCY"
};

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
