import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Ctest } from './ctest';
import { CommonModule } from 'angular/comm';

@NgModule({
  declarations: [
    Ctest,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    Ctest
  ]
})
export class CtestModule {}
