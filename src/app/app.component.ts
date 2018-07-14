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
import {DatabaseProvider} from "../providers/database/database";
import {TasksService} from "../providers/tasks-service/tasks-service";
import {SettingsProvider} from "../providers/settings-service/settings";
import {AboutHelpPage} from "../pages/about-help/about-help";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

    homeColor;
    tasksColor;
    lecturesColor;
    eventsColor;
    notificationsColor;
    settingsColor;
    aboutHelpColor;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider,
              taskService: TasksService, settingProvider: SettingsProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

     //dbProvider.deleteDatabase();

      //Create database
      dbProvider.createDatabase().then(() =>{
         console.log("Database successfully created!");
         taskService.getAllTasks().then((data:any) => {
           if(data.length == 0)
               taskService.addPredefindedTasks();
         });

         settingProvider.getAllSettings().then((data: any) => {
           if(data.length == 0)
             settingProvider.addPredefinedSettings();
         })

      }).catch((e) =>{
         console.log("Error while creating database main class");
      });
    });
  }


  goToNotifications(){
    this.resetColors();
    this.notificationsColor = "brown";
    this.navCtrl.setRoot(NotificationsPage);
  }

  goToSettings(){
    this.resetColors();
    this.settingsColor = "orange";
    this.navCtrl.setRoot(SettingsPage);
  }

  goToEvents(){
    this.resetColors();
    this.eventsColor = "purple";
    this.navCtrl.setRoot(EventsPage);
  }

  goToLectures(){
    this.resetColors();
    this.lecturesColor = "blue";
    this.navCtrl.setRoot(LecturesPage);
  }

  goToTasks(){
    this.resetColors();
    this.tasksColor = "pink";
    this.navCtrl.setRoot(TasksPage);
  }

  goToHome(){
    this.resetColors();
    this.homeColor = "green";
    this.navCtrl.setRoot(HomePage);
  }

  goToAboutHelp(){
    this.resetColors();
    this.aboutHelpColor = "indigo";
    this.navCtrl.setRoot(AboutHelpPage);
  }

  resetColors(){
    this.homeColor = "";
    this.tasksColor = "";
    this.lecturesColor = "";
    this.eventsColor = "";
    this.notificationsColor = "";
    this.settingsColor = "";
    this.aboutHelpColor = "";
  }
}
