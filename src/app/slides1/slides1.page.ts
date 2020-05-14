import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides1',
  templateUrl: './slides1.page.html',
  styleUrls: ['./slides1.page.scss'],
})
export class Slides1Page implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.navCtrl.navigateRoot('/');
  }
}
