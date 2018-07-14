import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings-service/settings";
import {Task} from "../../models/Tasks";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {

  allNotificationTasks: any[] = [];

  constructor(public navCtrl: NavController, private settingProvider: SettingsProvider) {
  }

  ionViewDidLoad(){
    this.buildNotifications();
  }

  async buildNotifications(){
      let isNotificationEnabled = false;

      await this.settingProvider.isNotificationEnabled().then((res) =>{
          isNotificationEnabled = res;
      });

      if(isNotificationEnabled) {
          this.settingProvider.getNotificationTasks().then((data) =>{
              this.allNotificationTasks = data;
              this.allNotificationTasks.sort(this.sortNotifications);
          });
      }

  }

  sortNotifications(task1: Task, task2: Task){
        return task1.priority - task2.priority;
  }

  showTask(id: number){
      this.navCtrl.push("ShowSingleTaskPage", {id: id});
  }


  
}
