import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowTasksPage } from './show-tasks';

@NgModule({
  declarations: [
    ShowTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowTasksPage),
  ],
})
export class ShowTasksPageModule {}
