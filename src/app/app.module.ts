import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LightsPage } from '../pages/lights/lights';
import {ControlPanel} from '../pages/controlpanel/controlpanel';

import {  FormsModule, Validators,FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyCmhJCnwQppLXFlNsyJB6ItCt-i26pt_mk",
    authDomain: "ionic-d5673.firebaseapp.com",
    databaseURL: "https://ionic-d5673.firebaseio.com",
    storageBucket: ""  
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,   
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    MyApp,
    HomePage,
    LightsPage,
    ControlPanel
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LightsPage,
    ControlPanel
  ],
  providers: []
})
export class AppModule { }
