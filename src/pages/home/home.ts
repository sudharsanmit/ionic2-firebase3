import { Component, OnInit } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState, FirebaseAuth } from 'angularfire2';

import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {ControlPanel} from '../controlpanel/controlpanel';

@Component({
  //selector: 'page-home',
  templateUrl: 'home.html',
  //directives: [REACTIVE_FORM_DIRECTIVES]
})

export class HomePage {

  currentUser;
  error;
  authState;
  authChecked = false
  submitted = false;
  loginForm: FormGroup;
  credentials: { email?: string, password?: string } = {};

  constructor(
    public af: AngularFire,
    private builder: FormBuilder,
    public navCtrl: NavController,
    public auth$: FirebaseAuth) {

  }

  gotoControlPanel(authData){
    this.navCtrl.setRoot(ControlPanel,{"id":authData});
  }

  ngOnInit() {

    // subscribe to the auth object to check for the login status
    // of the user, if logged in, save some user information and
    // execute the firebase query...
    // .. otherwise
    // show the login modal page


    /*this.auth$.subscribe((state: FirebaseAuthState) => {
      if (state) {
        console.log("in auth subscribe", state)
        this.currentUser = state;
        this.gotoControlPanel(state);      
      } else {
        this.currentUser = null
      }

      this.authChecked = true;
    });*/

  }

  doLogin(_credentials) {
    this.submitted = true;
    this.error = null

    if (_credentials.valid) {
      this.af.auth.login(_credentials.value, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        console.log("Logged In", authData)
        this.currentUser = authData;
        this.gotoControlPanel(authData);
      }).catch((error) => {
        this.error = error
        console.log(error)
      });
    }
  }
}
