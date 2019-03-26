import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  information: String;
  constructor(public navCtrl: NavController,private storage: Storage) {

  }

  statusUpdate()
  {
    this.navCtrl.push('StatusPage');
    
  }
  ionViewWillEnter(){
    this.storage.get("status").then((val) => {
      this.information = val;
    }).catch((err) => {
      console.log(err);
    });
  
  }
}
