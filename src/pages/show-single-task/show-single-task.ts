import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TasksService} from "../../providers/tasks-service/tasks-service";
import {Task} from '../../models/Tasks';

@IonicPage()
@Component({
  selector: 'page-show-single-task',
  templateUrl: 'show-single-task.html',
})
export class ShowSingleTaskPage {

  model: Task;
  status;

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TasksService) {
    let id = this.navParams.data.id;
    this.model = new Task();
    this.taskService.getTaskById(id).then((data: any) =>{
      this.model = data;
      this.status = (this.model.status == 0) ? "Incomplete" : "Complete";
    }).catch((e) =>{
      console.log(e);
    })
  }

  ionViewDidLoad() {
  }

}
