import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeanList } from './sean-list';
import { MemberListPopover } from './list-popover';
import { ProvidersModule } from '../../providers/providers.module';
import { UserEdit } from '../user-edit/user-edit';

@NgModule({
  declarations: [
    SeanList,
    UserEdit,
    
    MemberListPopover
  ],
  imports: [
    ProvidersModule,
    IonicPageModule.forChild(SeanList),
    IonicPageModule.forChild(UserEdit),
        IonicPageModule.forChild(MemberListPopover),
  ],
  exports: [
    SeanList,
    UserEdit,
    MemberListPopover
  ]
})
export class SeanListModule {}
