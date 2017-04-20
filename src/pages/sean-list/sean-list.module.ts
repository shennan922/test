import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeanList } from './sean-list';

@NgModule({
  declarations: [
    SeanList,
  ],
  imports: [
    IonicPageModule.forChild(SeanList),
  ],
  exports: [
    SeanList
  ]
})
export class SeanListModule {}
