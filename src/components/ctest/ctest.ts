import { Component } from '@angular/core';

/**
 * Generated class for the Ctest component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ctest',
  templateUrl: 'ctest.html'
})
export class Ctest {

  text: string;

  constructor() {
    console.log('Hello Ctest Component');
    this.text = 'Hello World';
  }

}
