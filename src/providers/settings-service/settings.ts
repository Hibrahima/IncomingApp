import { Injectable } from '@angular/core';
import {SQLiteObject} from "@ionic-native/sqlite";
import {DatabaseProvider} from '../database/database';
import {TasksService} from "../../providers/tasks-service/tasks-service";

@Injectable()
export class SettingsProvider {

  tableName = "settings";

  constructor(private dbProvider: DatabaseProvider, private tasksService: TasksService,) {
  }

  public  addPredefinedSettings(){
    let s1 = {
      option_name: "is_notification_enabled",
      option_value: 0
    };

    let s2 = {
          option_name: "is_alert_notification_enabled",
          option_value: 0
    };

    let s3 = {
          option_name: "number_days_before_deadline",
          option_value: 0
    };

    this.addSetting(s1); this.addSetting(s2); this.addSetting(s3);
  }

  public addSetting(setting: any){
        this.dbProvider.getDB()
            .then((db: SQLiteObject) => {
                let sql = 'insert into '+this.tableName+'(option_name, option_value) values (?, ?)';
                let data = [setting.option_name, setting.option_value];
                return db.executeSql(sql, data)
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
  }

  public updateSettingOptionValue(setting : any) {
        return this.dbProvider.getDB()
            .then((db: SQLiteObject) => {
                let sql = 'update '+this.tableName+' set option_value = ? where option_name = ?';
                let data = [setting.option_value, setting.option_name];

                return db.executeSql(sql, data)
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
  }

  public getSettingByOptionName(optionName: string){
        return this.dbProvider.getDB()
            .then((db: SQLiteObject) => {
                let sql = 'SELECT * from '+this.tableName+" where option_name = ?";
                let data = [optionName];

                return db.executeSql(sql, data)
                    .then((data: any) => {
                        if (data.rows.length > 0) {
                            let setting: any;
                            setting = data.rows.item(0);

                            return setting;
                        } else {
                            return null;
                        }
                    })
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
  }


  public isNotificationEnabled(){
         return  this.getSettingByOptionName("is_notification_enabled").then((res) =>{
            if(res.option_value == 1)
                return true;
            else
                return false;
        });

  }

  public isAlertNotificationEnabled(){
        return this.getSettingByOptionName("is_alert_notification_enabled").then((res) =>{
            if(res.option_value == 1)
                return true;
            else
                return false;
        });

  }

  public getNumberOfDaysBeforeDeadline(){
        return this.getSettingByOptionName("number_days_before_deadline").then((res) =>{
            return res.option_value;
        });

  }

  isMatchingNotificationTask(task, numberOfDaysBeforeDeadline){
      let today = new Date();
      let taskDay = parseInt(task.deadline.substring(8, 10));
      let taskMonth = parseInt(task.deadline.substring(5, 7));
      let taskYear = parseInt(task.deadline.substring(0, 4));
      let taskHour = parseInt(task.deadline.substring(11, 13));
      let taskMinutes = parseInt(task.deadline.substring(14, 16));
      let taskDate = new Date(taskYear, taskMonth - 1, taskDay, taskHour, taskMinutes);
      let formattedTaskDeadline = taskDay + "/" + taskMonth + "/" + taskYear + " - " + taskHour + ":" + taskMinutes;

      today.setHours(0);
      taskDate.setHours(0);
      today.setMinutes(0);
      taskDate.setMinutes(0);
      today.setSeconds(0);
      taskDate.setSeconds(0);
      today.setMilliseconds(0);
      taskDate.setMilliseconds(0);

      //make comparison based n timestamp ignorinh hours, minutes, seconds and ms
      if (today.getTime() + numberOfDaysBeforeDeadline * 24 * 60 * 60 * 1000 >= taskDate.getTime()) {

          //If the deadline has passed or is today
          if(today.getTime() >= taskDate.getTime())
              return JSON.stringify({match: true, deadline: formattedTaskDeadline, deadlineHasPassed:true});
          else
            return JSON.stringify({match: true, deadline: formattedTaskDeadline});
      }


      return JSON.stringify({match:false});
  }

  public async getNotificationTasks(){
      let numberOfDaysBeforeDeadline = 0;
      let result : any[] = [];

      await this.getNumberOfDaysBeforeDeadline().then((days) =>{
          numberOfDaysBeforeDeadline = days;
      });

      //get tasks that have not been performed yet ===> status = 0
      return  this.tasksService.getTasksByStatus(0).then((data) =>{
          for (let i = 0; i < data.length; i++) {
              let task = data[i];
              let parsedMatchingResult = JSON.parse(this.isMatchingNotificationTask(task, numberOfDaysBeforeDeadline));
              let isMatching = parsedMatchingResult.match;
              if(isMatching){
                  task.iconName = "warning";
                  task.formattedDeadline = parsedMatchingResult.deadline;

                  //Making notification icon in red color if the deadline has passed or is today
                  if(parsedMatchingResult.deadlineHasPassed)
                      task.iconColor = "red";

                  //Making notification text in red color in case the number of days prior to deadline is <= 7
                  //7 is just a random number, can be ajusted as needed
                  if(numberOfDaysBeforeDeadline <= 7)
                      task.labelColor = "red";
                  result.push(task);
              }
          }

          return result;
      }).catch((e) =>{
          console.log("Error while getting tasks for notifications : "+e);
      });

  }

  public getAllSettings(){
        return this.dbProvider.getDB()
            .then((db: SQLiteObject) => {
                let sql = 'SELECT * from '+this.tableName;
                let data: any[] = [];

                return db.executeSql(sql, data)
                    .then((data: any) => {
                        if (data.rows.length > 0) {
                            let settings: any[] = [];
                            for (let i = 0; i < data.rows.length; i++) {
                                let s = data.rows.item(i);
                                settings.push(s);
                            }
                            return settings;
                        } else {
                            return [];
                        }
                    })
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));

  }

}
