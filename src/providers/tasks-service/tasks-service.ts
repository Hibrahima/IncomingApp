import { Injectable } from '@angular/core';
import {Task} from '../../models/Tasks';

//Database layer
import { SQLiteObject } from '@ionic-native/sqlite';
import {DatabaseProvider} from '../database/database';


@Injectable()
export class TasksService {

    private tableName = "tasks";

  constructor(private dbProvider: DatabaseProvider) {
  }


  private createDateInstance(day:number, month:number, year:number, hours:number, minutes:number){
      let date = new Date(year, month-1, day, hours, minutes);
      date.setUTCHours(hours);
      //return day+"/"+month+"/"+year+" - "+hours+":"+minutes;
      return date.toISOString();
  }

  public addPredefindedTasks(){
      let task1_date = this.createDateInstance(15, 7, 2018, 23, 59);
      let task1 = new Task().createSimpleTask("Fill out appication form", task1_date, "before", 0, "Connect to the registration server and fill out the application form.", 1,  "mandatory");
      let task2 =  new Task().createSimpleTask("Apply for accomodation", task1_date, "before", 0, "Use the information that you received from the receiving institution or the International Office (RIO) to contact accomdation services.", 2,  "mandatory or optional");
      let task3: Task =  new Task().createSimpleTask("Get health insurance", task1_date, "during", 0, "Get a valid student health insurance that covers your entire stay. Note This is not mandatory for EU students.", 1,  "mandatory or optional");
      let task4: Task =  new Task().createSimpleTask("Registration with the city", task1_date, "during", 0, "Contact the university or the RIO or your student4studnt buddy to help you in registering with the city. Note: A rental contract is needed for this step.", 2,  "mandatory");
      let task5: Task =  new Task().createSimpleTask("Cancellation of your city registartion", task1_date, "after", 0, "Contact the city registration office to cancel your registration. Note: This is a very very crucial step.", 1,  "mandatory");
      let task6: Task =  new Task().createSimpleTask("Cancel your rental contract", task1_date, "after", 0, "Contact your accomdation service for canceling your rental contract explicitly.", 2,  "mandatory");

        //Adding tasks
      this.addTask(task1);
      this.addTask(task2);
      this.addTask(task3);
      this.addTask(task4);
      this.addTask(task5);
      this.addTask(task6);
  }


  public addTask(task: Task){
      this.dbProvider.getDB()
          .then((db: SQLiteObject) => {
              let sql = 'insert into '+this.tableName+'(name, deadline, scope, status, description, priority, requiredness) values (?, ?, ?, ?, ?, ?, ?)';
              let data = [task.name, task.deadline, task.scope, task.status, task.description, task.priority, task.requiredness];
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
              let data: any[] = [];

              return db.executeSql(sql, data)
                  .then((data: any) => {
                      if (data.rows.length > 0) {
                          let tasks: any[] = [];
                          for (let i = 0; i < data.rows.length; i++) {
                              let task = data.rows.item(i);
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

  public  getTasksByScope(scope: string):any{
      return this.getAllTasks().then((data: any) => {
           let tasks: any[] = [];
           for(let i=0; i<data.length; i++){
               let currentTask = data[i];
               if(currentTask.scope == scope)
                   tasks.push(currentTask);

           }

           return tasks;
      });
  }

  public getTasksByStatus(status: number):any{
        return this.getAllTasks().then((data: any) => {
            let tasks:Task[] = [];
            for(let i=0; i<data.length; i++){
                let currentTask = data[i];
                if(currentTask.status == status)
                    tasks.push(currentTask);
            }

            return tasks;
        });
  }


  public updateTaskStatus(task: Task) {
      return this.dbProvider.getDB()
          .then((db: SQLiteObject) => {
              let sql = 'update '+this.tableName+' set status = ? where id = ?';
              let taskStatus = (task.status == 0) ? 1 : 0;

              let data = [taskStatus, task.id];
              return db.executeSql(sql, data)
                  .catch((e) => console.error(e));
          }).catch((e) => console.error(e));
  }

  public updateTask(task : Task) {
        return this.dbProvider.getDB()
            .then((db: SQLiteObject) => {
                let sql = 'update '+this.tableName+' set name = ?, deadline = ?, scope = ?, status = ?, description = ?, priority = ?, requiredness = ? where id = ?';
                let data = [task.name, task.deadline, task.scope, task.status, task.description, task.priority, task.requiredness, task.id];

                return db.executeSql(sql, data)
                    .catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
  }

   public  deleteTask(task: Task){
       return this.dbProvider.getDB()
           .then((db: SQLiteObject) => {
               let sql = 'delete from '+this.tableName+' where id = ?';
               let data = [task.id];

               return db.executeSql(sql, data)
                   .catch((e) => console.error(e));
           })
           .catch((e) => console.error(e));
   }


}



