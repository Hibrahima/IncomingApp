import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Task} from '../../models/Tasks';
import {TasksService} from "../../providers/tasks-service/tasks-service";

@IonicPage()
@Component({
  selector: 'page-update-single-task',
  templateUrl: 'update-single-task.html',
})
export class UpdateSingleTaskPage {

  scopes: any[] = [];
  statuses: any[] = [];
  priorites: any[] = [];
  requirednessArray: any[] = [];
  model: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TasksService,
              private alertCtrl: AlertController) {
    this.model = this.navParams.data.task;
  }

  ionViewDidLoad() {
    this.buildViewElements();
  }

  buildViewElements(){
   this.scopes = [
        {
          value: "before",
            text: "Before"
        },
        {
          value: "during",
            text: "During"

        },
        {
          value: "after",
          text: "After"

        }
    ];

    this.statuses = [
        {
          value: 0,
          text: "Incomplete"
        },
        {
          value: 1,
          text: "Complete"

        }
    ];

    for(let i=1; i<=5; i++){
      this.priorites.push(i);
    }

    this.requirednessArray = ["mandatory", "not mandatory", "mandatory for non EU"];
  }

  updateTask(){
      this.presentUpdateTaskAlert();
  }


  presentUpdateTaskAlert() {
        let alert = this.alertCtrl.create({
            title: "Confirm task update",
            message: 'This task will be updated according to the provided information',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        this.navCtrl.pop();
                    }
                },

                {
                    text: "Update",
                    handler: () => {
                        this.taskService.updateTask(this.model);
                        this.presentBasicAlert("Task status updated", "The status of the task has been updated.");
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
  }


  presentBasicAlert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Dismiss']
        });
        alert.present();
    }


}
