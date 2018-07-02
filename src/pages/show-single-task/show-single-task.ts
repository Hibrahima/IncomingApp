import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TasksService} from "../../providers/tasks-service/tasks-service";
import {Task} from '../../models/Tasks';
/**
 * Generated class for the ShowSingleTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-single-task',
  templateUrl: 'show-single-task.html',
})
export class ShowSingleTaskPage {

  model: Task;

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TasksService) {
    let id = this.navParams.data.id;
    this.model = new Task();
    this.taskService.getTaskById(id).then((data: any) =>{
      this.model = data;
    }).catch((e) =>{
      console.log(e);
    })
  }

  ionViewDidLoad() {
    console.log('----------------------------------------------------ionViewDidLoad ShowSingleTaskPage');
  }

}
