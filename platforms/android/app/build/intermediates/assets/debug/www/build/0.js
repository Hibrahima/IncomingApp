webpackJsonp([0],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSingleTaskPageModule", function() { return UpdateSingleTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_single_task__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateSingleTaskPageModule = /** @class */ (function () {
    function UpdateSingleTaskPageModule() {
    }
    UpdateSingleTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_single_task__["a" /* UpdateSingleTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_single_task__["a" /* UpdateSingleTaskPage */]),
            ],
        })
    ], UpdateSingleTaskPageModule);
    return UpdateSingleTaskPageModule;
}());

//# sourceMappingURL=update-single-task.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateSingleTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateSingleTaskPage = /** @class */ (function () {
    function UpdateSingleTaskPage(navCtrl, navParams, taskService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.taskService = taskService;
        this.alertCtrl = alertCtrl;
        this.scopes = [];
        this.statuses = [];
        this.priorites = [];
        this.requirednessArray = [];
        this.model = this.navParams.data.task;
    }
    UpdateSingleTaskPage.prototype.ionViewDidLoad = function () {
        this.buildViewElements();
    };
    UpdateSingleTaskPage.prototype.buildViewElements = function () {
        this.scopes = [
            {
                value: "before",
                text: "Before"
            },
            {
                value: "during",
                text: "During"
            },
            {
                value: "after",
                text: "After"
            }
        ];
        this.statuses = [
            {
                value: 0,
                text: "Incomplete"
            },
            {
                value: 1,
                text: "Complete"
            }
        ];
        for (var i = 1; i <= 5; i++) {
            this.priorites.push(i);
        }
        this.requirednessArray = ["mandatory", "not mandatory", "mandatory for non EU"];
    };
    UpdateSingleTaskPage.prototype.updateTask = function () {
        this.presentUpdateTaskAlert();
    };
    UpdateSingleTaskPage.prototype.presentUpdateTaskAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirm task update",
            message: 'This task will be updated according to the provided information',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                },
                {
                    text: "Update",
                    handler: function () {
                        _this.taskService.updateTask(_this.model);
                        _this.presentBasicAlert("Task status updated", "The status of the task has been updated.");
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    UpdateSingleTaskPage.prototype.presentBasicAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    UpdateSingleTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-single-task',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/update-single-task/update-single-task.html"*/'<!--\n  Generated template for the UpdateSingleTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      View Single Task\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="eye"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Name</ion-label>\n      <ion-input type="text" name="name" [(ngModel)]="model.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Deadline</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY - HH:mm" name="deadline" min="2017" [(ngModel)]="model.deadline"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Scope</ion-label>\n      <ion-select [(ngModel)]="model.scope">\n        <ion-option *ngFor="let scope of scopes" value="{{scope.value}}">{{scope.text}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Status</ion-label>\n      <ion-select name="status" [(ngModel)]="model.status">\n        <ion-option *ngFor="let status of statuses" value="{{ status.value }}">{{ status.text}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Priority</ion-label>\n      <ion-select name="priority" [(ngModel)]="model.priority">\n        <ion-option *ngFor="let p of priorites" value="{{p}}">{{p}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Requiredness</ion-label>\n      <ion-select name="requiredness" [(ngModel)]="model.requiredness">\n        <ion-option *ngFor="let r of requirednessArray" value="{{r}}">{{r}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked="">Description</ion-label>\n      <ion-textarea [(ngModel)]="model.description"rows="5"></ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block (click)="updateTask()">Update</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/update-single-task/update-single-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UpdateSingleTaskPage);
    return UpdateSingleTaskPage;
}());

//# sourceMappingURL=update-single-task.js.map

/***/ })

});
//# sourceMappingURL=0.js.map