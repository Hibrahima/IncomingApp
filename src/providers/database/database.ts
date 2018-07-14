import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
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
        })
        .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {
      db.sqlBatch([
          ['CREATE TABLE IF NOT EXISTS tasks (id integer primary key AUTOINCREMENT NOT NULL, name TEXT NOT NULL, deadline TEXT NOT NULL, scope TEXT NOT NULL, status integer NOT NULL, description TEXT NOT NULL, priority integer NOT NULL, requiredness TEXT NOT NULL)'],
          ['CREATE TABLE IF NOT EXISTS settings (id integer primary key AUTOINCREMENT NOT NULL, option_name TEXT UNIQUE NOT NULL, option_value integer NOT NULL)']
      ]).then(() => console.log('Tasks table created'))
          .catch(e => console.error('Error while creating tables', e));
  }

  public deleteDatabase(){
      let config = {
          name: 'data.db',
          location: 'default'
      };
      this.sqlite.deleteDatabase(config).then((res) =>{
          console.log("database deleted : "+res);
      }).catch((e) =>{
          console.log("Error while deleting database : "+e);
      })

  }


}
