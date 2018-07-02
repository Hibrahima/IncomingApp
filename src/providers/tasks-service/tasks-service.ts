import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Task} from '../../models/Tasks';

//Database layer
import { SQLiteObject } from '@ionic-native/sqlite';
import {DatabaseProvider} from '../database/database';
/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksService {

    private tableName = "tasks";

  constructor(private dbProvider: DatabaseProvider) {
    console.log('Hello TasksServiceProvider Provider');
  }



  public addPredefindedTasks(){
        //name:string, deadline:Date, scope: string, status: boolean, description: string, priority: number, reqiiredness: string
      let task1 = new Task().createSimpleTask("Fill out appication form", "15/02/2018", "before", 0, "Connect to the registration server and fill out the application form", 1,  "mandatory");
      let task2 =  new Task().createSimpleTask("Apply for accomodation", new Date(), "before", 0, "Use the information that you received from the receiving institution or the International Office (RIO) to contact accomdation services", 2,  "mandatory or optional");
      let task3: Task =  new Task().createSimpleTask("Get health insurance", new Date(), "during", 0, "Get a valid student health insurance that covers your entire stay. Note This is not mandatory for EU students.", 1,  "mandatory or optional");
      let task4: Task =  new Task().createSimpleTask("Registration with the city", new Date(), "during", 0, "Contact the university or the RIO or your student4studnt buddy to help you in registering with the city. Note: A rental contract is needed for this step.", 2,  "mandatory");
      let task5: Task =  new Task().createSimpleTask("Cancellation of your city registartion", new Date(), "after", 0, "Contact the city registration office to cancel your registration. Note: This is a very very crucial step.", 1,  "mandatory");
      let task6: Task =  new Task().createSimpleTask("Cancel your rental contract", new Date(), "after", 0, "Contact your accomdation service for canceling your rental contract explicitly", 2,  "mandatory");

        //Adding tasks
      this.addTask(task1);
      this.addTask(task2);
      this.addTask(task3);
      this.addTask(task4);
      this.addTask(task5);
      this.addTask(task6);
      console.log("Predefinded tasks were credated.");
  }


  public addTask(task: Task){
      this.dbProvider.getDB()
          .then((db: SQLiteObject) => {
              //name:string, deadline:Date, scope: string, status: boolean, description: string, priority: number, reqiiredness: string
              let sql = 'insert into '+this.tableName+'(name, deadline, scope, status, description, priority, requiredness) values (?, ?, ?, ?, ?, ?, ?)';
              let data = [task.name, task.deadline, task.scope, task.status, task.description, task.priority, task.requiredness];
             // let sql = 'insert into tasks_3 (name, deadline, scope, status) values(?, ?, ?, ?)';
              //let data = ["name", "deadline", "scope", "status"];
              return db.executeSql(sql, data)
                  .catch((e) => console.error(e));
          })
          .catch((e) => console.error(e));
  }

  public getTaskById(id: number) {
      return this.dbProvider.getDB()
          .then((db: SQLiteObject) => {
              let sql = 'select * from '+this.tableName+' where id = ?';
              let data = [id];

              return db.executeSql(sql, data)
                  .then((data: any) => {
                      if (data.rows.length > 0) {
                          let item = data.rows.item(0);
                          let task = new Task();
                          task.id = item.id;
                          task.name = item.name;
                          task.deadline = item.deadline;
                          task.scope = item.scope;
                          task.status = item.status;
                          task.description = item.description;
                          console.log("---------------------description "+task.description)
                          task.priority = item.priority;
                          task.requiredness = item.requiredness;

                            return task;
                        }

                        return null;
                    })
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
  }

  public getAllTasks(){
      return this.dbProvider.getDB()
          .then((db: SQLiteObject) => {
              let sql = 'SELECT * from '+this.tableName;
              var data: any[] = [];

              return db.executeSql(sql, data)
                  .then((data: any) => {
                      if (data.rows.length > 0) {
                          let tasks: any[] = [];
                          for (var i = 0; i < data.rows.length; i++) {
                              var task = data.rows.item(i);
                              console.log("get all tasks task status type : "+typeof task.status)
                              tasks.push(task);
                          }
                          return tasks;
                      } else {
                          return [];
                      }
                  })
                  .catch((e) => console.error(e));
          })
          .catch((e) => console.error(e));

  }

  public getTasksByScope(scope: string):any{
      return this.getAllTasks().then((data: any) => {
          console.log("get tasks by scope lenghth "+data.length);
           var tasks:Task[] = [];
           for(var i=0; i<data.length; i++){
               var currentTask = data[i];
               console.log("---------------------------data[i].name : "+currentTask.name);
               if(currentTask.scope == scope)
                   tasks.push(currentTask);
           }

           return tasks;
      });
  }


  public updateTaskStatus(task: Task) {
      return this.dbProvider.getDB()
          .then((db: SQLiteObject) => {
              let sql = 'update '+this.tableName+' set status = ? where id = ?';
              console.log("task status  from the view : "+task.status+" task id : "+task.id);
              let taskStatus = (task.status == 0) ? 1 : 0;

              console.log("*****************************NEW STATUS "+taskStatus)
              let data = [taskStatus, task.id];
              return db.executeSql(sql, data).then((res) =>{
                  console.log("update Task status : "+res);
              })
                  .catch((e) => console.error(e));
          })
          .catch((e) => console.error(e));
    }


}



