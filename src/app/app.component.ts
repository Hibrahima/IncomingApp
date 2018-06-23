import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import { EventsPage } from '../pages/events/events';
import { LecturesPage } from '../pages/lectures/lectures';
import { TasksPage } from '../pages/tasks/tasks';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToNotifications(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NotificationsPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SettingsPage);
  }goToEvents(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventsPage);
  }goToLectures(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LecturesPage);
  }goToTasks(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TasksPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }
}
