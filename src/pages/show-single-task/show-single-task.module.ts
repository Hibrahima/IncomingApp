import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowSingleTaskPage } from './show-single-task';

@NgModule({
  declarations: [
    ShowSingleTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowSingleTaskPage),
  ],
})
export class ShowSingleTaskPageModule {}
