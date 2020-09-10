import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  public title:any;
  public description:any;

  constructor(public navCtrl: NavController, public storage:Storage) {

  }


  goToPage(){
    this.navCtrl.push('NewTaskPage')
  }

  ionViewWillEnter(){

    this.storage.get('key').then((val)=>{
      console.log("Data is: ",val)

      this.title = val['title'];
      this.description = val['description'];
    })
  
  }

}
