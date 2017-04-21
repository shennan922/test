import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {SeanList} from '../sean-list/sean-list'
@Component({
  selector: 'page-sean',
  templateUrl: 'sean.html',
})
export class Sean {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController)  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sean');
  }

   presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '查看列表页面',
      buttons: [
        {
          text: '占位',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '查看',
          handler: () => {
            this.navCtrl.push(SeanList);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
