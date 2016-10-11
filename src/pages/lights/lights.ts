import {Component} from '@angular/core';
import {NavController, NavParams, Toggle} from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  templateUrl: 'lights.html'
})
export class LightsPage {
  id:any;
  drawingRoom: FirebaseObjectObservable<any>;
  item: FirebaseObjectObservable<any>;
  constructor(private navCtrl: NavController, private navParams: NavParams, af: AngularFire) {
  	this.drawingRoom=af.database.object('/lights');
  }
  toggleLights(toggle: Toggle){
  	//console.log(toggle, this['status']);
  	this.drawingRoom.update({"status":toggle.checked});
  }
}
