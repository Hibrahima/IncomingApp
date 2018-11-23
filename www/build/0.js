webpackJsonp([0],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = /** @class */ (function () {
    function EventModalPageModule() {
    }
    EventModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
            ],
        })
    ], EventModalPageModule);
    return EventModalPageModule;
}());

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventModalPage = /** @class */ (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    EventModalPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-modal',template:/*ion-inline-start:"H:\Programme\IncomingApp\src\pages\event-modal\event-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Event Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <ion-list>\n   <ion-item>\n     <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n   </ion-item>\n\n   <ion-item>\n     <ion-label>Start</ion-label>\n     <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MM/DD/YYYY HH:mm" [(ngModel)]="event.startTime"></ion-datetime>\n   </ion-item>\n\n   <ion-item>\n     <ion-label>End</ion-label>\n     <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MM/DD/YYYY HH:mm" [(ngModel)]="event.endTime"></ion-datetime>\n   </ion-item>\n\n   <ion-item>\n     <ion-label>All Day</ion-label>\n     <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n   </ion-item>\n </ion-list>\n\n  <button ion-button full icon-left (click)="save()">\n    <ion-icon name="checkmark"></ion-icon> Add Event\n  </button>\n</ion-content>\n'/*ion-inline-end:"H:\Programme\IncomingApp\src\pages\event-modal\event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map