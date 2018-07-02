import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TasksService} from "../../providers/tasks-service/tasks-service";
import {Task} from '../../models/Tasks';
import {ShowSingleTaskPage} from "../show-single-task/show-single-task";
/**
 * Generated class for the ShowTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-tasks',
  templateUrl: 'show-tasks.html',
})
export class ShowTasksPage {

    /*beforeTasks: any[] = [];
    duringTasks: any[] = [];
    afterTasks: any[] = [];*/
    allTasks: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TasksService) {
      var scope = this.navParams.data.scope;
      this.taskService.getTasksByScope(scope).then((data) =>{
        this.allTasks = data;
      })
     // this.allTasks = this.taskService.getTasksByScope(scope);
      console.log("Scope : "+scope+" tasks length : "+this.allTasks.length);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowTasksPage');

  }

  showSingleTask(id: number){
    this.navCtrl.push("ShowSingleTaskPage", {id: id});
    console.log("Show single task id "+id);
  }

  deleteTask(task: Task){
    //console.log("Delete task name "+task.getName());
  }

  updateTaskStatus(task: Task){
    this.taskService.updateTaskStatus(task);
  }

}
