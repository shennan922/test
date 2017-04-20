import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeanList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sean-list',
  templateUrl: 'sean-list.html',
})
export class SeanList {
  members:Array<any>
  ids:Array<Number>
  constructor(public navCtrl: NavController, public navParams: NavParams) {

   this.members=
   [
     {id:<number>1,name:1 ,text:"shang"},
     {id:<number>2,name:2 ,text:"shan"},
     {id:<number>4,name:4 ,text:"da"},
     {id:<number>3,name:3,text:"lao"},
     {id:<number>5,name:5 ,text:"hu"},
   ];

   
   
  }
  
  up()
  {
      this.members.sort(function (a, b) {
       return a.id - b.id
      });
  }

    down()
  {
      this.members.sort(function (a, b) {
       return b.id - a.id
      });
  }

    random()
  {
    let lintest : Array<any>
    let lintest2 : Array<any>
    lintest = []
     lintest2 = []
     this.members.forEach(item=>
     {
          if(Math.random()>0.5)
          {
             lintest.push(item);
          }
          else
          {
            lintest2.push(item);
          }
     })
    lintest.forEach(item1=>
    {
       lintest2.push(item1);
    })
    this.members=lintest2;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SeanList');
  }

}
