webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Tasks__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TasksService = /** @class */ (function () {
    function TasksService(dbProvider) {
        this.dbProvider = dbProvider;
        this.tableName = "tasks";
        console.log('Hello TasksServiceProvider Provider');
    }
    TasksService.prototype.addPredefindedTasks = function () {
        //name:string, deadline:Date, scope: string, status: boolean, description: string, priority: number, reqiiredness: string
        var task1 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Fill out appication form", "15/02/2018", "before", 0, "Connect to the registration server and fill out the application form", 1, "mandatory");
        var task2 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Apply for accomodation", new Date(), "before", 0, "Use the information that you received from the receiving institution or the International Office (RIO) to contact accomdation services", 2, "mandatory or optional");
        var task3 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Get health insurance", new Date(), "during", 0, "Get a valid student health insurance that covers your entire stay. Note This is not mandatory for EU students.", 1, "mandatory or optional");
        var task4 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Registration with the city", new Date(), "during", 0, "Contact the university or the RIO or your student4studnt buddy to help you in registering with the city. Note: A rental contract is needed for this step.", 2, "mandatory");
        var task5 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Cancellation of your city registartion", new Date(), "after", 0, "Contact the city registration office to cancel your registration. Note: This is a very very crucial step.", 1, "mandatory");
        var task6 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Cancel your rental contract", new Date(), "after", 0, "Contact your accomdation service for canceling your rental contract explicitly", 2, "mandatory");
        //Adding tasks
        this.addTask(task1);
        this.addTask(task2);
        this.addTask(task3);
        this.addTask(task4);
        this.addTask(task5);
        this.addTask(task6);
        console.log("Predefinded tasks were credated.");
    };
    TasksService.prototype.addTask = function (task) {
        var _this = this;
        this.dbProvider.getDB()
            .then(function (db) {
            //name:string, deadline:Date, scope: string, status: boolean, description: string, priority: number, reqiiredness: string
            var sql = 'insert into ' + _this.tableName + '(name, deadline, scope, status, description, priority, requiredness) values (?, ?, ?, ?, ?, ?, ?)';
            var data = [task.name, task.deadline, task.scope, task.status, task.description, task.priority, task.requiredness];
            // let sql = 'insert into tasks_3 (name, deadline, scope, status) values(?, ?, ?, ?)';
            //let data = ["name", "deadline", "scope", "status"];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    TasksService.prototype.getTaskById = function (id) {
        var _this = this;
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'select * from ' + _this.tableName + ' where id = ?';
            var data = [id];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var task = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]();
                    task.id = item.id;
                    task.name = item.name;
                    task.deadline = item.deadline;
                    task.scope = item.scope;
                    task.status = item.status;
                    task.description = item.description;
                    console.log("---------------------description " + task.description);
                    task.priority = item.priority;
                    task.requiredness = item.requiredness;
                    return task;
                }
                return null;
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    TasksService.prototype.getAllTasks = function () {
        var _this = this;
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * from ' + _this.tableName;
            var data = [];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var tasks = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var task = data.rows.item(i);
                        console.log("get all tasks task status type : " + typeof task.status);
                        tasks.push(task);
                    }
                    return tasks;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    TasksService.prototype.getTasksByScope = function (scope) {
        return this.getAllTasks().then(function (data) {
            console.log("get tasks by scope lenghth " + data.length);
            var tasks = [];
            for (var i = 0; i < data.length; i++) {
                var currentTask = data[i];
                console.log("---------------------------data[i].status : " + currentTask.status);
                if (currentTask.scope == scope)
                    tasks.push(currentTask);
            }
            return tasks;
        });
    };
    TasksService.prototype.updateTaskStatus = function (task) {
        var _this = this;
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update ' + _this.tableName + ' set status = ? where id = ?';
            console.log("task status  from the view : " + task.status + " task id : " + task.id);
            var taskStatus = (task.status == 0) ? 1 : 0;
            console.log("*****************************NEW STATUS " + taskStatus);
            var data = [taskStatus, task.id];
            return db.executeSql(sql, data).then(function (res) {
                console.log("update Task status : " + res);
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    TasksService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__database_database__["a" /* DatabaseProvider */]])
    ], TasksService);
    return TasksService;
}());

//# sourceMappingURL=tasks-service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/show-single-task/show-single-task.module": [
		278,
		1
	],
	"../pages/show-tasks/show-tasks.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Notifications\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <div id="notifications-container2">\n    <ion-list id="notifications-list14">\n      <ion-item color="none" id="notifications-list-item14">\n        <ion-icon name="warning" item-left></ion-icon>\n        Task title / Task deadline - Hey, deadline is close\n      </ion-item>\n    </ion-list>\n    <button id="notifications-button5" ion-button color="positive" block icon-left>\n      <ion-icon name="arrow-dropright"></ion-icon>\n      Go to task\n    </button>\n  </div>\n  <div id="notifications-container7">\n    <ion-list id="notifications-list17">\n      <ion-item color="none" id="notifications-list-item16">\n        <ion-icon name="checkmark" item-left></ion-icon>\n        Task title / Task deadline - Job done\n      </ion-item>\n    </ion-list>\n    <button id="notifications-button7" ion-button color="positive" block icon-left>\n      <ion-icon name="arrow-dropright"></ion-icon>\n      Go to task\n    </button>\n  </div>\n  <div id="notifications-container4">\n    <ion-list id="notifications-list16">\n      <ion-item color="none" id="notifications-list-item15">\n        <ion-icon name="ionic" item-left></ion-icon>\n        Task title / Task deadline - Still awaiting\n      </ion-item>\n    </ion-list>\n    <button id="notifications-button4" ion-button color="positive" block icon-left>\n      <ion-icon name="arrow-dropright"></ion-icon>\n      Go to task\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Settings\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6"></ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/events/events.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Events\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="people"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="events-form3">\n    <ion-item id="events-select1">\n      <ion-label>\n        Event Channels\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          RIO\n        </ion-option>\n        <ion-option>\n          STUPA\n        </ion-option>\n        <ion-option>\n          ESB PARTY\n        </ion-option>\n        <ion-option>\n          INFORMATIK\n        </ion-option>\n        <ion-option>\n          ------\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="events-input3">\n      <ion-label>\n        The selected channel\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <button id="events-button2" ion-button color="positive" block icon-left>\n    <ion-icon name="add"></ion-icon>\n    Follow Channel\n  </button>\n  <h3 id="events-heading2" style="color:#000000;">\n    Followed Channels\n  </h3>\n  <div id="events-container1">\n    <form id="events-form5">\n      <ion-item id="events-input4">\n        <ion-label>\n          Channel 1\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="events-input5">\n        <ion-label>\n          Channel 2\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-searchbar placeholder="Search channel..." name="" id="events-search1"></ion-searchbar>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/events/events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LecturesPage = /** @class */ (function () {
    function LecturesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LecturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lectures',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/lectures/lectures.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Lectures\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="book"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="lectures-form2">\n    <ion-item id="lectures-radio1">\n      <ion-label>\n        Weekly View\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n    <ion-item id="lectures-radio2">\n      <ion-label>\n        Montly View\n      </ion-label>\n      <ion-radio></ion-radio>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/lectures/lectures.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LecturesPage);
    return LecturesPage;
}());

//# sourceMappingURL=lectures.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksPage = /** @class */ (function () {
    /*constructor(public navCtrl: NavController, private taskService: TasksService) {
    }*/
    function TasksPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.beforeTasks = [];
        this.duringTasks = [];
        this.afterTasks = [];
    }
    /*addPageToNavController(pageName: string){
      this.navCtrl.push(pageName);
    }*/
    TasksPage.prototype.showTasks = function (scope) {
        this.navCtrl.push("ShowTasksPage", { scope: scope });
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/tasks/tasks.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Tasks\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img src="assets/img/before_you_arrive.png" (click)="showTasks(\'before\')" style="width: 100%;" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="assets/img/during_your_stay.png" (click)="showTasks(\'during\')" style="width: 100%;" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n    <ion-col>\n      <img src="assets/img/at_the_end_of_your_stay.png" (click)="showTasks(\'after\')" style="width: 100%;" />\n    </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/tasks/tasks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <img src="assets/img/1FDveDIsRIapeoVUG9Yx_csm_41201_original_R_by_Huebers_pixelio.de_28cd9989a8.jpg" style="display:block;width:100%;height:120px;margin-left:auto;margin-right:auto;" />\n  <h3 id="home-heading1" style="color:#000000;">\n    Welcome to Reutlingen University - RIO\n  </h3>\n  <div id="home-markdown1" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices augue. Aenean rutrum odio elit, a aliquam nulla luctus quis. Praesent elementum lobortis cursus. Aliquam at mauris consequat, vehicula lacus eu, congue sapien. Quisque varius eleifend\n      libero ut tincidunt. Cras auctor porta sagittis. Duis eu mattis arcu, eget porta diam. Curabitur efficitur molestie dui ac aliquam. Etiam ut vehicula ligula. Nulla pretium et nunc et vehicula. Fusce vitae efficitur mi. Vestibulum et tortor vel ligula\n      bibendum auctor vel non mi. Suspendisse potenti. Vivamus porta ullamcorper hendrerit. In et lorem ut ligula sollicitudin ornare.\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    /* constructor(name){
         this._name = name;
     }*/
    function Task() {
    }
    Task.prototype.createSimpleTask = function (name, deadline, scope, status, description, priotity, requiredness) {
        var task = new Task();
        task.name = name;
        task.deadline = deadline;
        task.scope = scope;
        task.status = status;
        task.description = description;
        task.priority = priotity;
        task.requiredness = requiredness;
        return task;
    };
    return Task;
}());

//# sourceMappingURL=Tasks.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lectures_lectures__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_database_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_tasks_service_tasks_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//Database layer



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lectures_lectures__["a" /* LecturesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/show-single-task/show-single-task.module#ShowSingleTaskPageModule', name: 'ShowSingleTaskPage', segment: 'show-single-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-tasks/show-tasks.module#ShowTasksPageModule', name: 'ShowTasksPage', segment: 'show-tasks', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lectures_lectures__["a" /* LecturesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_13__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_tasks_service_tasks_service__["a" /* TasksService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_notifications_notifications__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_events_events__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lectures_lectures__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tasks_tasks__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_tasks_service_tasks_service__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, dbProvider, taskService) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //Create database
            /*+dbProvider.createDatabase().then(() =>{
               console.log("Database successfully created!");
               taskService.getAllTasks().then((data:any) => {
                 if(data.length == 0)
                     taskService.addPredefindedTasks();
               })
      
            }).catch((e) =>{
               console.log("Error while creating database main class");
            })*/
        });
    }
    MyApp.prototype.goToNotifications = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_notifications_notifications__["a" /* NotificationsPage */]);
    };
    MyApp.prototype.goToSettings = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.goToEvents = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_events_events__["a" /* EventsPage */]);
    };
    MyApp.prototype.goToLectures = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_lectures_lectures__["a" /* LecturesPage */]);
    };
    MyApp.prototype.goToTasks = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tasks_tasks__["a" /* TasksPage */]);
    };
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item1">\n        <ion-icon name="home" item-left></ion-icon>\n        Home\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToTasks()" id="menu-list-item2">\n        <ion-icon name="list" item-left></ion-icon>\n        Tasks\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToLectures()" id="menu-list-item3">\n        <ion-icon name="book" item-left></ion-icon>\n        Lectures\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToEvents()" id="menu-list-item10">\n        <ion-icon name="people" item-left></ion-icon>\n        Events\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToNotifications()" id="menu-list-item11">\n        <ion-icon name="notifications" item-left></ion-icon>\n        Notifications\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToSettings()" id="menu-list-item12">\n        <ion-icon name="settings" item-left></ion-icon>\n        Settings\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_11__providers_tasks_service_tasks_service__["a" /* TasksService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
        console.log('Hello DatabaseProvider Provider');
    }
    // get the database instance
    DatabaseProvider.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'data.db',
            location: 'default'
        });
    };
    //create tables and insert predefinded data ===> tasks
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            _this.createTables(db);
            console.log("----------------------------------haha");
        })
            .catch(function (e) { return console.log(e); });
    };
    DatabaseProvider.prototype.createTables = function (db) {
        db.sqlBatch([
            //name:string, deadline:Date, scope: string, status: boolean, description: string, priority: number, reqiiredness: string
            ['CREATE TABLE IF NOT EXISTS tasks (id integer primary key AUTOINCREMENT NOT NULL, name TEXT NOT NULL, deadline TEXT NOT NULL, scope TEXT NOT NULL, status integer NOT NULL, description TEXT NOT NULL, priority integer NOT NULL, requiredness TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS tasks_3 (id integer primary key AUTOINCREMENT NOT NULL, name TEXT NOT NULL, deadline TEXT NOT NULL, scope TEXT NOT NULL, status boolean NOT NULL)']
        ]).then(function () { return console.log('Tasks table created'); })
            .catch(function (e) { return console.error('Error while creating tables', e); });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map