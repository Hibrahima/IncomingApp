import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings-service/settings";
import {LocalNotifications} from "@ionic-native/local-notifications";

var counter = 0;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications, private alertCtrl: AlertController,
              private platform: Platform, private settingProvider: SettingsProvider) {


      this.platform.ready().then((readySource) => {

          this.localNotifications.on('click').subscribe(notif => {
              let task = JSON.parse(notif.data);
              this.presentBasicAlert(task.name, task.message);
          });
      });
  }


  ionViewDidLoad(){
      if(counter <1){
          this.buildAllAlertNotifications();
         counter++;
      }

  }

  formatDate(task){
      let taskDay = parseInt(task.deadline.substring(8, 10));
      let taskMonth = parseInt(task.deadline.substring(5, 7));
      let taskYear = parseInt(task.deadline.substring(0, 4));
      let taskHour = parseInt(task.deadline.substring(11, 13));
      let taskMinutes = parseInt(task.deadline.substring(14, 16));
      let newTaskMonth = (taskMonth < 10) ? "0"+taskMonth : taskMonth;
      return taskDay + "/" + newTaskMonth + "/" + taskYear + " - " + taskHour + ":" + taskMinutes;
  }

  buildSingleAlertNotifications(task, badge){
    this.localNotifications.schedule({
        id: task.id,
        title: task.name,
        text: "Deadline : "+this.formatDate(task),
        data: JSON.stringify(task),
        vibrate: true,
        badge: badge,
    })
  }


    buildAllAlertNotifications(){
       this.settingProvider.isAlertNotificationEnabled().then((res) =>{
          if(res){
                this.settingProvider.getNotificationTasks().then((data) =>{
                    this.settingProvider.getNumberOfDaysBeforeDeadline().then((numberOfDays) =>{
                        for(let i=0; i<data.length; i++){
                            let parsedMatchingResult = JSON.parse(this.settingProvider.isMatchingNotificationTask(data[i], numberOfDays));
                            if(parsedMatchingResult.deadlineHasPassed)
                                data[i].message = "The deadline ("+this.formatDate(data[i])+") of this task has already passed or is today! Please urgently contact the receiving institution.";
                            else
                                data[i].message = "Please complete this task before "+this.formatDate(data[i]);
                            this.buildSingleAlertNotifications(data[i], i+1);

                        }

                   })
              });
          }
      });
  }



  presentBasicAlert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Close']
        });
        alert.present();
  }
  
}
