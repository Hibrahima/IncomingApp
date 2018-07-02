webpackJsonp([0],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTasksPageModule", function() { return ShowTasksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_tasks__ = __webpack_require__(281);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_tasks__["a" /* ShowTasksPage */]),
            ],
        })
    ], ShowTasksPageModule);
    return ShowTasksPageModule;
}());

//# sourceMappingURL=show-tasks.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowTasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ShowTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowTasksPage = /** @class */ (function () {
    function ShowTasksPage(navCtrl, navParams, taskService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.taskService = taskService;
        /*beforeTasks: any[] = [];
        duringTasks: any[] = [];
        afterTasks: any[] = [];*/
        this.allTasks = [];
        var scope = this.navParams.data.scope;
        this.taskService.getTasksByScope(scope).then(function (data) {
            _this.allTasks = data;
        });
        // this.allTasks = this.taskService.getTasksByScope(scope);
        console.log("Scope : " + scope + " tasks length : " + this.allTasks.length);
    }
    ShowTasksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowTasksPage');
    };
    ShowTasksPage.prototype.showSingleTask = function (id) {
        this.navCtrl.push("ShowSingleTaskPage", { id: id });
        console.log("Show single task id " + id);
    };
    ShowTasksPage.prototype.deleteTask = function (task) {
        //console.log("Delete task name "+task.getName());
    };
    ShowTasksPage.prototype.updateTaskStatus = function (task) {
        this.taskService.updateTaskStatus(task);
    };
    ShowTasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-tasks',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/show-tasks/show-tasks.html"*/'<!--\n  Generated template for the ShowTasksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Tasks\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list text-wrap>\n    <ion-item *ngIf="allTasks.length == 0">\n      Empty\n    </ion-item>\n\n    <ion-item-sliding *ngFor="let task of allTasks">\n        <ion-item>\n          <ion-label>{{ task.name }}</ion-label>\n          <ion-checkbox (ionChange)="updateTaskStatus(task)" [checked]="task.status"></ion-checkbox>\n          <h2>Deadline: {{ task.deadline }}</h2>\n          <h2>Priority: {{ task.priority }}</h2>\n        </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button (click)="showSingleTask(task.id)">\n          <ion-icon name="eye"></ion-icon>\n          View\n        </button>\n\n        <button ion-button color="danger" (click)="deleteTask(task)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/show-tasks/show-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksService */]])
    ], ShowTasksPage);
    return ShowTasksPage;
}());

//# sourceMappingURL=show-tasks.js.map

/***/ })

});
//# sourceMappingURL=0.js.map