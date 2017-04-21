import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ctest } from './ctest';

@NgModule({
  declarations: [
    Ctest,
  ],
  imports: [
    IonicPageModule.forChild(Ctest),
  ],
  exports: [
    Ctest
  ]
})
export class CtestModule {}
