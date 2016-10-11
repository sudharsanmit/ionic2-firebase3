import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LightsPage} from '../lights/lights'
import {AngularFire} from 'angularfire2';
import {HomePage} from '../home/home';

@Component({
  templateUrl: 'controlpanel.html'
})
export class ControlPanel {
  constructor(private navCtrl: NavController, public af: AngularFire) {
  
  }
  gotoLights(){
  	this.navCtrl.push(LightsPage,{id:"123"});
  }
  doLogout() {
    this.af.auth.logout();
    this.gotoHome();
  }
  gotoHome(){
    this.navCtrl.setRoot(HomePage,{});
  }  
}
