import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';

@Component({
  selector: 'page-lectures',
  templateUrl: 'lectures.html'
})
export class LecturesPage {

    eventSource = [];
    monthTitle: string;
    selectedDay = new Date();
    //viewMode: string;

    calendar = {
        mode: 'month',
        currentDate: this.selectedDay
    };

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) {
  }
    addEvent(){
      let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
      modal.present();

      modal.onDidDismiss(data => {
          if(data){
              let eventData = data;
              eventData.startTime = new Date(data.startTime);
              eventData.endTime = new Date(data.endTime);

              let events = this.eventSource;
              events.push(eventData);
              this.eventSource = [];
              setTimeout(() => {this.eventSource = events;})
          }});
    }

    onTimeSelected(ev) {
        this.selectedDay = ev.selectedTime;
    }

    onViewTitleChanged(title){
      this.monthTitle = title;
    }

    radioChecked(viewMode){
        console.log(viewMode);
        if (viewMode==1)
        {
            this.calendar.mode = "month";
        }
        else {
            this.calendar.mode = "week";
        }
    }

    onEventSelected(event){
      let start = moment(event.startTime).format('LLLL');
      let end = moment(event.endTime).format('LLLL');

      let alert = this.alertCtrl.create({
          title: ''+ event.title,
          subTitle: 'From: ' + start + '<br>To: ' + end, buttons: ['OK']
      })
        alert.present();
    }
}
