import { Component, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

interface Menu {
  title: string;
  target: string;
}

const GIT_URL = 'https://github.com/johnwargo/ionic-slides-example';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonList, {static: true}) menuItems: IonList;

  menu: Menu[] = [{
    title: 'Slides (No Text)',
    target: 'slides1'
  }, {
    title: 'Slides (With Text)',
    target: 'slides2'
  }];

  constructor() {}

  openRepo() {
    console.log(`Opening: ${GIT_URL}`);
    window.open(GIT_URL);
  }

}
