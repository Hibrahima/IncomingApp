import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TasksService} from "../../providers/tasks-service/tasks-service";
import {Task} from '../../models/Tasks';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-show-tasks',
  templateUrl: 'show-tasks.html',
})
export class ShowTasksPage {

    allTasks: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TasksService, private alertCtrl: AlertController) {
      this.getTasksByScope();

  }

  ionViewDidLoad() {

  }

  getTasksByScope(){
      let scope = this.navParams.data.scope;
      this.taskService.getTasksByScope(scope).then((data) =>{
          this.allTasks = data;
          this.allTasks.sort(this.sortTasks);
      });
        this.allTasks = [];
  }

  sortTasks(task1: Task, task2: Task){
      return task1.priority - task2.priority;
  }

  showSingleTask(id: number){
    this.navCtrl.push("ShowSingleTaskPage", {id: id});
  }

  deleteTask(task: Task){
      this.presentDeleteAlert(task);
  }

  updateTaskStatus(task: Task){
      this.presentUpdateTaskStatusAlert(task);
  }

  updateTask(task: Task){
   this.navCtrl.push("UpdateSingleTaskPage", {task: task});
  }

  refresh(){
      this.getTasksByScope();
  }

  PullToRefresh(refresher){
    this.getTasksByScope();
    refresher.complete();
  }

  presentDeleteAlert(task) {
        let alert = this.alertCtrl.create({
            title: 'Confirm deletion',
            message: 'Are you sure, you want to delete this task?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.taskService.deleteTask(task);
                        this.refresh();
                        this.presentBasicAlert("Task deleted", "The tasl has been successfully deleted");
                    }
                }
            ]
        });
        alert.present();
  }

  presentUpdateTaskStatusAlert(task) {
      let taskStatus = (task.status == 0) ? 1 : 0;
      let message = (taskStatus == 0) ? "The task will be marked as incomplete, do you confirm the task status change?" : "The task will be marked as complete, do you confirm the task status change?";
      let buttonText = (taskStatus == 0) ? "Mark as incomplete" : "Mark as complete";
      let alert = this.alertCtrl.create({
          title: "Confirm task status change",
          message: message,
          buttons: [
              {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                      this.refresh();
                  }
              },

              {
                    text: buttonText,
                    handler: () => {
                        this.taskService.updateTaskStatus(task);
                        this.refresh();
                        this.presentBasicAlert("Task status updated", "The status of the task has been updated.")
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
