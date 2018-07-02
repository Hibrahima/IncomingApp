import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {TasksService} from "../../providers/tasks-service/tasks-service";
import {ShowTasksPage} from "../show-tasks/show-tasks";



@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {
  beforeTasks: any[] = [];
  duringTasks: any[] = [];
  afterTasks: any[] = [];

  /*constructor(public navCtrl: NavController, private taskService: TasksService) {
  }*/

  constructor(public navCtrl: NavController) {

  }

  /*addPageToNavController(pageName: string){
    this.navCtrl.push(pageName);
  }*/

  showTasks(scope: string){
    this.navCtrl.push("ShowTasksPage", {scope:scope});

  }
/*
  getDuringTasks(){
    this.duringTasks = this.taskService.getTasksByScope("during");
     console.log("Durng tasks length "+this.duringTasks.length);
  }

  getAfterTasks(){
    this.afterTasks = this.taskService.getTasksByScope("after");
    console.log("After tasks length "+this.afterTasks.length);
  }
*/

}
