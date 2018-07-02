webpackJsonp([1],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSingleTaskPageModule", function() { return ShowSingleTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_single_task__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowSingleTaskPageModule = /** @class */ (function () {
    function ShowSingleTaskPageModule() {
    }
    ShowSingleTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_single_task__["a" /* ShowSingleTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_single_task__["a" /* ShowSingleTaskPage */]),
            ],
        })
    ], ShowSingleTaskPageModule);
    return ShowSingleTaskPageModule;
}());

//# sourceMappingURL=show-single-task.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowSingleTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Tasks__ = __webpack_require__(202);
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
 * Generated class for the ShowSingleTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowSingleTaskPage = /** @class */ (function () {
    function ShowSingleTaskPage(navCtrl, navParams, taskService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.taskService = taskService;
        var id = this.navParams.data.id;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_Tasks__["a" /* Task */]();
        this.taskService.getTaskById(id).then(function (data) {
            _this.model = data;
        }).catch(function (e) {
            console.log(e);
        });
    }
    ShowSingleTaskPage.prototype.ionViewDidLoad = function () {
        console.log('----------------------------------------------------ionViewDidLoad ShowSingleTaskPage');
    };
    ShowSingleTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-single-task',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/show-single-task/show-single-task.html"*/'<!--\n  Generated template for the ShowSingleTaskPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n  <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>\n    View Single Task\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only>\n      <ion-icon name="eye"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list text-wrap>\n\n    <ion-item>\n      <ion-label stacked>Name : {{model.name}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Deadline : {{model.deadline}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Priority : {{model.priority}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Scope: {{model.scope}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Status: {{model.status}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Requiredness {{model.requiredness}}</ion-label>\n    </ion-item>\n\n    <h3> Description </h3>\n    <ion-textarea [(ngModel)]="model.description" text-wrap rows="5"></ion-textarea>\n\n\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/show-single-task/show-single-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksService */]])
    ], ShowSingleTaskPage);
    return ShowSingleTaskPage;
}());

//# sourceMappingURL=show-single-task.js.map

/***/ })

});
//# sourceMappingURL=1.js.map