import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {SeanUser} from "../../providers/seanuser"

/**
 * Generated class for the UserEdit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEdit {

  startTime:any
  object:any = {
    objectId:"",
    name:"",
    disname:"",
    dkp:"",
   
  }
  currentMember:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public userServ:SeanUser,public viewCtrl:ViewController) {
    this.startTime = new Date()
    this.currentMember = this.navParams.data.member
    if(this.currentMember){
      console.log(this.currentMember)
      this.object.name = this.currentMember.name
      this.object.disname = this.currentMember.disname
      this.object.dkp = this.currentMember.dkp
      this.object.objectId = this.currentMember.objectId
       console.log(this.object)
    }
  }

save(){
  if(!this.object.name||!this.object.disname){
    console.log("您的信息不完整，请重新填写")
  }

  if(this.currentMember){
    this.userServ.updateClass("seandemo",this.currentMember.objectId,this.object).then(data=>{
      Object.keys(this.object).forEach(key=>{
        this.currentMember[key] = this.object[key]
      })
      this.viewCtrl.dismiss()
    }).catch(err=>{
    console.log(err)
  })
  }else{
  this.userServ.saveClass("seandemo",this.object).then(data=>{
    console.log(data)
    this.object.objectId = data.json().objectId
    this.object.createdAt = data.json().createAt
    this.viewCtrl.dismiss(this.object)
  }).catch(err=>{
    console.log(err)
  })
 }

}
returnToHistory(){
   this.viewCtrl.dismiss()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberEdit');
  }
ngOnDestroy(){
  console.log("您访问该页面的时间：",this.startTime)
}

}
