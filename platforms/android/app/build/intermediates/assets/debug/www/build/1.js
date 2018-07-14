webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTasksPageModule", function() { return ShowTasksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_tasks__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowTasksPageModule = /** @class */ (function () {
    function ShowTasksPageModule() {
    }
    ShowTasksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_tasks__["a" /* ShowTasksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_tasks__["a" /* ShowTasksPage */]),
            ],
        })
    ], ShowTasksPageModule);
    return ShowTasksPageModule;
}());

//# sourceMappingURL=show-tasks.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowTasksPage; });
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




var ShowTasksPage = /** @class */ (function () {
    function ShowTasksPage(navCtrl, navParams, taskService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.taskService = taskService;
        this.alertCtrl = alertCtrl;
        this.allTasks = [];
        this.getTasksByScope();
    }
    ShowTasksPage.prototype.ionViewDidLoad = function () {
    };
    ShowTasksPage.prototype.getTasksByScope = function () {
        var _this = this;
        var scope = this.navParams.data.scope;
        this.taskService.getTasksByScope(scope).then(function (data) {
            _this.allTasks = data;
            _this.allTasks.sort(_this.sortTasks);
        });
        this.allTasks = [];
    };
    ShowTasksPage.prototype.sortTasks = function (task1, task2) {
        return task1.priority - task2.priority;
    };
    ShowTasksPage.prototype.showSingleTask = function (id) {
        this.navCtrl.push("ShowSingleTaskPage", { id: id });
    };
    ShowTasksPage.prototype.deleteTask = function (task) {
        this.presentDeleteAlert(task);
    };
    ShowTasksPage.prototype.updateTaskStatus = function (task) {
        this.presentUpdateTaskStatusAlert(task);
    };
    ShowTasksPage.prototype.updateTask = function (task) {
        this.navCtrl.push("UpdateSingleTaskPage", { task: task });
    };
    ShowTasksPage.prototype.refresh = function () {
        this.getTasksByScope();
    };
    ShowTasksPage.prototype.PullToRefresh = function (refresher) {
        this.getTasksByScope();
        refresher.complete();
    };
    ShowTasksPage.prototype.presentDeleteAlert = function (task) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm deletion',
            message: 'Are you sure, you want to delete this task?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.taskService.deleteTask(task);
                        _this.refresh();
                        _this.presentBasicAlert("Task deleted", "The tasl has been successfully deleted");
                    }
                }
            ]
        });
        alert.present();
    };
    ShowTasksPage.prototype.presentUpdateTaskStatusAlert = function (task) {
        var _this = this;
        var taskStatus = (task.status == 0) ? 1 : 0;
        var message = (taskStatus == 0) ? "The task will be marked as incomplete, do you confirm the task status change?" : "The task will be marked as complete, do you confirm the task status change?";
        var buttonText = (taskStatus == 0) ? "Mark as incomplete" : "Mark as complete";
        var alert = this.alertCtrl.create({
            title: "Confirm task status change",
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.refresh();
                    }
                },
                {
                    text: buttonText,
                    handler: function () {
                        _this.taskService.updateTaskStatus(task);
                        _this.refresh();
                        _this.presentBasicAlert("Task status updated", "The status of the task has been updated.");
                    }
                }
            ]
        });
        alert.present();
    };
    ShowTasksPage.prototype.presentBasicAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ShowTasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-tasks',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/show-tasks/show-tasks.html"*/'<!--\n  Generated template for the ShowTasksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Tasks\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="PullToRefresh($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Pull to refresh"\n                refreshingSpinner="circles"\n                refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n  <ion-list text-wrap>\n    <ion-item *ngIf="allTasks.length == 0">\n      Empty\n    </ion-item>\n\n    <ion-item-sliding *ngFor="let task of allTasks">\n        <ion-item>\n          <ion-label color="{{task.labelColor}}">{{ task.name }}</ion-label>\n          <ion-checkbox (ionChange)="updateTaskStatus(task)" [checked]="task.status"></ion-checkbox>\n        </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button (click)="showSingleTask(task.id)">\n          <ion-icon name="eye"></ion-icon>\n          View\n        </button>\n\n        <button ion-button color="danger" (click)="deleteTask(task)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n\n        <button ion-button (click)="updateTask(task)">\n          <ion-icon name="sync"></ion-icon>\n           Update\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/show-tasks/show-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ShowTasksPage);
    return ShowTasksPage;
}());

//# sourceMappingURL=show-tasks.js.map

/***/ })

});
//# sourceMappingURL=1.js.map