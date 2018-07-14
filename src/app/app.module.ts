import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
import { LecturesPage } from '../pages/lectures/lectures';
import { EventsPage } from '../pages/events/events';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import {AboutHelpPage} from "../pages/about-help/about-help";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { TasksService } from '../providers/tasks-service/tasks-service';
import { SettingsProvider } from '../providers/settings-service/settings';
import {LocalNotifications} from "@ionic-native/local-notifications";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TasksPage,
    LecturesPage,
    EventsPage,
    NotificationsPage,
    AboutHelpPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TasksPage,
    LecturesPage,
    EventsPage,
    NotificationsPage,
    AboutHelpPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      SQLite,
    DatabaseProvider,
      LocalNotifications,
    TasksService,
    SettingsProvider
  ]
})
export class AppModule {}