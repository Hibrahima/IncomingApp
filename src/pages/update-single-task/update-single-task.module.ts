import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateSingleTaskPage } from './update-single-task';

@NgModule({
  declarations: [
    UpdateSingleTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateSingleTaskPage),
  ],
})
export class UpdateSingleTaskPageModule {}
