import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SeanUser } from "../../providers/seanuser"
import { PopoverController } from 'ionic-angular';
import { MemberListPopover } from './list-popover';
import { UserEdit } from '../user-edit/user-edit';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sean-list',
  templateUrl: 'sean-list.html',
})
export class SeanList {
  members:Array<any>
  ids:Array<Number>
    memberEditPage:any = UserEdit
  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
    public modalCtrl:ModalController,
   public popCtrl:PopoverController,
   public alertCtrl:AlertController,          

  private seanuser:SeanUser
  ) {
      this.seanuser.findClasses("seandemo").then(data=>{
        if(data&&data.json().results){
          console.log(data)
          this.members = data.json().results
        }
    })

   
   
  }

       delete123(member)
       {
        let opts = {
      title: '删除学员',
      message: `请问您要删除当前学员${member.name}吗?`,
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
            return
          }
        },
        {
          text: '确认',
          handler: () => {
                if(member&&member.objectId){
                  this.seanuser.deleteClassById("seandemo",member.objectId).then(data=>{
                    this.members.filter((item,index)=>{
                      if(item.objectId == member.objectId){
                        this.members.splice(index,1)
                      }
                      })
                  })
                }
          }
        }
      ]
    }
    let deleteConfirm = this.alertCtrl.create(opts)
    deleteConfirm.present()
       }
 
  up()
  {
      this.members.sort(function (a, b) {
       return a.id - b.id
      });
  }

      presentUserEditModal(member?){
      let opts:any = {}
      if(member){
        opts.member = member
      }
          let userAdd = this.modalCtrl.create(this.memberEditPage,opts)
          userAdd.onDidDismiss(data=>{
            if(data){
              this.members.push(data)
            }
          })
          userAdd.present()
    }
  presentPopover(myEvent){
    let popover = this.popCtrl.create(MemberListPopover);
    popover.onDidDismiss(data=>{
      console.log(data)
      if(data){
        if(data == "user") {
          this.presentUserEditModal()
        }
        if(data == "top") {
          return
        }
      }
    })
    popover.present({
      ev: myEvent
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
