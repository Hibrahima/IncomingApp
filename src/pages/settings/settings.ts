import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings-service/settings";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

    isNotificationEnabled; //db_option_name : is_notification_enabled
    isAlertNotificationEnabled; //db_option_name : is_alert_notification_enabled
    numberOfDaysBeforeDeadline; //db_option_name : number_days_before_deadline
    days:any[] = []; //Array to hold number of days prior to deadline to be defined by the user (used in the view as well)

  constructor(public navCtrl: NavController, private settingProvider: SettingsProvider) {
     this.settingProvider.getSettingByOptionName("is_notification_enabled").then((res) =>{
        this.isNotificationEnabled = res.option_value;
     });

     this.settingProvider.getSettingByOptionName("is_alert_notification_enabled").then((res) =>{
          this.isAlertNotificationEnabled = res.option_value;
      });


      this.settingProvider.getSettingByOptionName("number_days_before_deadline").then((res) =>{
          this.numberOfDaysBeforeDeadline = res.option_value;
      });


  }

  ionViewDidLoad() {
    for(let i=0; i<=31; i++){
      let text = (i>1) ? i+" days" : i+" day";
      let day = {
        value: i,
        text: text
      };
      this.days.push(day);
    }
  }


  updateNotificationStatus(){
    let value = (this.isNotificationEnabled == true) ? 1 : 0;
    let setting = {
      option_name: "is_notification_enabled",
      option_value: value
    };
    this.settingProvider.updateSettingOptionValue(setting);
  }

  updateAlertNotificationStatus(){
    let value = (this.isAlertNotificationEnabled == true) ? 1 : 0;
    let setting = {
        option_name: "is_alert_notification_enabled",
        option_value: value
    };
      this.settingProvider.updateSettingOptionValue(setting);
  }


  updateNumberOfDaysBeforeDeadline(){
      let setting = {
          option_name: "number_days_before_deadline",
          option_value: this.numberOfDaysBeforeDeadline
      };
      this.settingProvider.updateSettingOptionValue(setting);
  }
}
