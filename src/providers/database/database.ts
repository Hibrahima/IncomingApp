import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Task} from '../../models/Tasks';
import {TasksService} from '../tasks-service/tasks-service';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello DatabaseProvider Provider');
  }

  // get the database instance
  public getDB() {
    return this.sqlite.create({
        name: 'data.db',
        location: 'default'
    });
  }

  //create tables and insert predefinded data ===> tasks
  public createDatabase() {
    return this.getDB()
        .then((db: SQLiteObject) => {
            this.createTables(db);
            console.log("----------------------------------haha");
        })
        .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
      db.sqlBatch([
          //name:string, deadline:Date, scope: string, status: boolean, description: string, priority: number, reqiiredness: string
          ['CREATE TABLE IF NOT EXISTS tasks (id integer primary key AUTOINCREMENT NOT NULL, name TEXT NOT NULL, deadline TEXT NOT NULL, scope TEXT NOT NULL, status integer NOT NULL, description TEXT NOT NULL, priority integer NOT NULL, requiredness TEXT NOT NULL)'],
          ['CREATE TABLE IF NOT EXISTS tasks_3 (id integer primary key AUTOINCREMENT NOT NULL, name TEXT NOT NULL, deadline TEXT NOT NULL, scope TEXT NOT NULL, status boolean NOT NULL)']
      ]).then(() => console.log('Tasks table created'))
          .catch(e => console.error('Error while creating tables', e));
  }


}
