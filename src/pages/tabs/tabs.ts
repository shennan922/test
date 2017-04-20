import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Home } from '../home/home';
import { Sean } from '../sean/sean';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Sean;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  // tab4Root = Sean;
  constructor() {

  }
}
