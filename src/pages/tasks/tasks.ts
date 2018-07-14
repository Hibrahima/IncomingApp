import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  constructor(public navCtrl: NavController) {

  }


  showTasks(scope: string){
    this.navCtrl.push("ShowTasksPage", {scope:scope});

  }

}
