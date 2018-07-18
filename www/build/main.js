webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutHelpPage = /** @class */ (function () {
    function AboutHelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutHelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutHelpPage');
    };
    AboutHelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-help',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/about-help/about-help.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      About - Help\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 id="home-heading1" style="color:#000000;">\n    How to use this app\n  </h3>\n  <div>\n    <p style="color:#000000;">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices augue. Aenean rutrum odio elit, a aliquam nulla luctus quis. Praesent elementum lobortis cursus. Aliquam at mauris consequat, vehicula lacus eu, congue sapien. Quisque varius eleifend\n      libero ut tincidunt. Cras auctor porta sagittis. Duis eu mattis arcu, eget porta diam. Curabitur efficitur molestie dui ac aliquam. Etiam ut vehicula ligula. Nulla pretium et nunc et vehicula. Fusce vitae efficitur mi. Vestibulum et tortor vel ligula\n      bibendum auctor vel non mi. Suspendisse potenti. Vivamus porta ullamcorper hendrerit. In et lorem ut ligula sollicitudin ornare.\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/about-help/about-help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutHelpPage);
    return AboutHelpPage;
}());

//# sourceMappingURL=about-help.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-help/about-help.module": [
		281,
		3
	],
	"../pages/show-single-task/show-single-task.module": [
		282,
		2
	],
	"../pages/show-tasks/show-tasks.module": [
		283,
		1
	],
	"../pages/update-single-task/update-single-task.module": [
		284,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_service_settings__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, settingProvider) {
        this.navCtrl = navCtrl;
        this.settingProvider = settingProvider;
        this.allNotificationTasks = [];
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        this.buildNotifications();
    };
    NotificationsPage.prototype.buildNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isNotificationEnabled;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isNotificationEnabled = false;
                        return [4 /*yield*/, this.settingProvider.isNotificationEnabled().then(function (res) {
                                isNotificationEnabled = res;
                            })];
                    case 1:
                        _a.sent();
                        if (isNotificationEnabled) {
                            this.settingProvider.getNotificationTasks().then(function (data) {
                                _this.allNotificationTasks = data;
                                _this.allNotificationTasks.sort(_this.sortNotifications);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationsPage.prototype.sortNotifications = function (task1, task2) {
        return task1.priority - task2.priority;
    };
    NotificationsPage.prototype.showTask = function (id) {
        this.navCtrl.push("ShowSingleTaskPage", { id: id });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Notifications\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page5">\n\n  <ion-list text-wrap="">\n\n    <ion-item *ngIf="allNotificationTasks.length == 0">\n      Empty\n    </ion-item>\n\n    <ion-item-sliding *ngFor="let task of allNotificationTasks">\n      <ion-item>\n        <ion-icon name="{{task.iconName}}" color="{{task.iconColor}}" item-left></ion-icon>\n        <ion-label color="{{task.labelColor}}">{{task.name}} - {{task.formattedDeadline}}</ion-label>\n      </ion-item>\n\n\n      <ion-item-options side="right">\n        <button ion-button (click)="showTask(task.id)">\n          <ion-icon name="eye"></ion-icon>\n          View\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_settings_service_settings__["a" /* SettingsProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_service_settings__ = __webpack_require__(40);
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
    function SettingsPage(navCtrl, settingProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.settingProvider = settingProvider;
        this.days = []; //Array to hold number of days prior to deadline to be defined by the user (used in the view as well)
        this.settingProvider.getSettingByOptionName("is_notification_enabled").then(function (res) {
            _this.isNotificationEnabled = res.option_value;
        });
        this.settingProvider.getSettingByOptionName("is_alert_notification_enabled").then(function (res) {
            _this.isAlertNotificationEnabled = res.option_value;
        });
        this.settingProvider.getSettingByOptionName("number_days_before_deadline").then(function (res) {
            _this.numberOfDaysBeforeDeadline = res.option_value;
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        for (var i = 0; i <= 31; i++) {
            var text = (i > 1) ? i + " days" : i + " day";
            var day = {
                value: i,
                text: text
            };
            this.days.push(day);
        }
    };
    SettingsPage.prototype.updateNotificationStatus = function () {
        var value = (this.isNotificationEnabled == true) ? 1 : 0;
        var setting = {
            option_name: "is_notification_enabled",
            option_value: value
        };
        this.settingProvider.updateSettingOptionValue(setting);
    };
    SettingsPage.prototype.updateAlertNotificationStatus = function () {
        var value = (this.isAlertNotificationEnabled == true) ? 1 : 0;
        var setting = {
            option_name: "is_alert_notification_enabled",
            option_value: value
        };
        this.settingProvider.updateSettingOptionValue(setting);
    };
    SettingsPage.prototype.updateNumberOfDaysBeforeDeadline = function () {
        var setting = {
            option_name: "number_days_before_deadline",
            option_value: this.numberOfDaysBeforeDeadline
        };
        this.settingProvider.updateSettingOptionValue(setting);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Settings\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page6">\n\n  <ion-list text-wrap="">\n    <ion-item>\n      <ion-label>Enable notifications</ion-label>\n      <ion-toggle [(ngModel)]="isNotificationEnabled" (ionChange)="updateNotificationStatus()"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Enable alert noifications</ion-label>\n      <ion-toggle [(ngModel)]="isAlertNotificationEnabled" (ionChange)="updateAlertNotificationStatus()"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>How many days prior to task deadline?</ion-label>\n      <ion-select [(ngModel)]="numberOfDaysBeforeDeadline" (ionChange)="updateNumberOfDaysBeforeDeadline()">\n        <ion-option *ngFor="let d of days" value="{{d.value}}">{{d.text}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_settings_service_settings__["a" /* SettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LecturesPage);
    return LecturesPage;
}());

//# sourceMappingURL=lectures.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
    function TasksPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TasksPage.prototype.showTasks = function (scope) {
        this.navCtrl.push("ShowTasksPage", { scope: scope });
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/tasks/tasks.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Tasks\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img src="assets/img/before_you_arrive.png" (click)="showTasks(\'before\')" style="width: 100%;" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <img src="assets/img/during_your_stay.png" (click)="showTasks(\'during\')" style="width: 100%;" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n    <ion-col>\n      <img src="assets/img/at_the_end_of_your_stay.png" (click)="showTasks(\'after\')" style="width: 100%;" />\n    </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/tasks/tasks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_service_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var counter = 0;
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, localNotifications, alertCtrl, platform, settingProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.localNotifications = localNotifications;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.settingProvider = settingProvider;
        this.platform.ready().then(function (readySource) {
            _this.localNotifications.on('click').subscribe(function (notif) {
                var task = JSON.parse(notif.data);
                _this.presentBasicAlert(task.name, task.message);
            });
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        if (counter < 1) {
            this.buildAllAlertNotifications();
            counter++;
        }
    };
    HomePage.prototype.formatDate = function (task) {
        var taskDay = parseInt(task.deadline.substring(8, 10));
        var taskMonth = parseInt(task.deadline.substring(5, 7));
        var taskYear = parseInt(task.deadline.substring(0, 4));
        var taskHour = parseInt(task.deadline.substring(11, 13));
        var taskMinutes = parseInt(task.deadline.substring(14, 16));
        var newTaskMonth = (taskMonth < 10) ? "0" + taskMonth : taskMonth;
        return taskDay + "/" + newTaskMonth + "/" + taskYear + " - " + taskHour + ":" + taskMinutes;
    };
    HomePage.prototype.buildSingleAlertNotifications = function (task, badge) {
        this.localNotifications.schedule({
            id: task.id,
            title: task.name,
            text: "Deadline : " + this.formatDate(task),
            data: JSON.stringify(task),
            vibrate: true,
            badge: badge,
        });
    };
    HomePage.prototype.buildAllAlertNotifications = function () {
        var _this = this;
        this.settingProvider.isAlertNotificationEnabled().then(function (res) {
            if (res) {
                _this.settingProvider.getNotificationTasks().then(function (data) {
                    _this.settingProvider.getNumberOfDaysBeforeDeadline().then(function (numberOfDays) {
                        for (var i = 0; i < data.length; i++) {
                            var parsedMatchingResult = JSON.parse(_this.settingProvider.isMatchingNotificationTask(data[i], numberOfDays));
                            if (parsedMatchingResult.deadlineHasPassed)
                                data[i].message = "The deadline (" + _this.formatDate(data[i]) + ") of this task has already passed or is today! Please urgently contact the receiving institution.";
                            else
                                data[i].message = "Please complete this task before " + _this.formatDate(data[i]);
                            _this.buildSingleAlertNotifications(data[i], i + 1);
                        }
                    });
                });
            }
        });
    };
    HomePage.prototype.presentBasicAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Close']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page1">\n\n  <img src="assets/img/RIO.jpg" style="display:block;width:100%;height:120px;margin-left:auto;margin-right:auto;" />\n  <h3 id="home-heading1" style="color:#000000;">\n    Welcome to Reutlingen University - RIO\n  </h3>\n  <div id="home-markdown1" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ultrices augue. Aenean rutrum odio elit, a aliquam nulla luctus quis. Praesent elementum lobortis cursus. Aliquam at mauris consequat, vehicula lacus eu, congue sapien. Quisque varius eleifend\n      libero ut tincidunt. Cras auctor porta sagittis. Duis eu mattis arcu, eget porta diam. Curabitur efficitur molestie dui ac aliquam. Etiam ut vehicula ligula. Nulla pretium et nunc et vehicula. Fusce vitae efficitur mi. Vestibulum et tortor vel ligula\n      bibendum auctor vel non mi. Suspendisse potenti. Vivamus porta ullamcorper hendrerit. In et lorem ut ligula sollicitudin ornare.\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_settings_service_settings__["a" /* SettingsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
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

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_lectures_lectures__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_events_events__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_help_about_help__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_database_database__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_tasks_service_tasks_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_settings_service_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















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
                __WEBPACK_IMPORTED_MODULE_10__pages_about_help_about_help__["a" /* AboutHelpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-help/about-help.module#AboutHelpPageModule', name: 'AboutHelpPage', segment: 'about-help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-single-task/show-single-task.module#ShowSingleTaskPageModule', name: 'ShowSingleTaskPage', segment: 'show-single-task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-tasks/show-tasks.module#ShowTasksPageModule', name: 'ShowTasksPage', segment: 'show-tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-single-task/update-single-task.module#UpdateSingleTaskPageModule', name: 'UpdateSingleTaskPage', segment: 'update-single-task', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_lectures_lectures__["a" /* LecturesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_help_about_help__["a" /* AboutHelpPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_14__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_15__providers_tasks_service_tasks_service__["a" /* TasksService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_settings_service_settings__["a" /* SettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_notifications_notifications__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_events_events__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lectures_lectures__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tasks_tasks__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_tasks_service_tasks_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_settings_service_settings__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_help_about_help__ = __webpack_require__(103);
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
    function MyApp(platform, statusBar, splashScreen, dbProvider, taskService, settingProvider) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //dbProvider.deleteDatabase();
            //Create database
            dbProvider.createDatabase().then(function () {
                console.log("Database successfully created!");
                taskService.getAllTasks().then(function (data) {
                    if (data.length == 0)
                        taskService.addPredefindedTasks();
                });
                settingProvider.getAllSettings().then(function (data) {
                    if (data.length == 0)
                        settingProvider.addPredefinedSettings();
                });
            }).catch(function (e) {
                console.log("Error while creating database main class");
            });
        });
    }
    MyApp.prototype.goToNotifications = function () {
        this.resetColors();
        this.notificationsColor = "brown";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_notifications_notifications__["a" /* NotificationsPage */]);
    };
    MyApp.prototype.goToSettings = function () {
        this.resetColors();
        this.settingsColor = "orange";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.goToEvents = function () {
        this.resetColors();
        this.eventsColor = "purple";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_events_events__["a" /* EventsPage */]);
    };
    MyApp.prototype.goToLectures = function () {
        this.resetColors();
        this.lecturesColor = "blue";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_lectures_lectures__["a" /* LecturesPage */]);
    };
    MyApp.prototype.goToTasks = function () {
        this.resetColors();
        this.tasksColor = "pink";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tasks_tasks__["a" /* TasksPage */]);
    };
    MyApp.prototype.goToHome = function () {
        this.resetColors();
        this.homeColor = "green";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToAboutHelp = function () {
        this.resetColors();
        this.aboutHelpColor = "indigo";
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_about_help_about_help__["a" /* AboutHelpPage */]);
    };
    MyApp.prototype.resetColors = function () {
        this.homeColor = "";
        this.tasksColor = "";
        this.lecturesColor = "";
        this.eventsColor = "";
        this.notificationsColor = "";
        this.settingsColor = "";
        this.aboutHelpColor = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content id="side-menu21">\n\n    <ion-list id="menu-list1" color="danger">\n\n      <ion-item color="{{homeColor}}" menuClose="" on-click="goToHome()" id="menu-list-item1">\n        <ion-icon name="home"  item-left></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-item>\n\n      <ion-item color="{{tasksColor}}" menuClose="" on-click="goToTasks()" id="menu-list-item2">\n        <ion-icon name="list" item-left></ion-icon>\n        <ion-label>Tasks</ion-label>\n      </ion-item>\n\n      <ion-item color="{{lecturesColor}}" menuClose="" on-click="goToLectures()" id="menu-list-item3">\n        <ion-icon name="book" item-left></ion-icon>\n        <ion-label>Lectures</ion-label>\n      </ion-item>\n\n      <ion-item  menuClose="" color="{{eventsColor}}" on-click="goToEvents()" id="menu-list-item10">\n        <ion-icon name="people" item-left></ion-icon>\n        <ion-label>Events</ion-label>\n      </ion-item>\n\n      <ion-item color="{{notificationsColor}}" menuClose="" on-click="goToNotifications()" id="menu-list-item11">\n        <ion-icon name="notifications" item-left></ion-icon>\n        <ion-label>Notifications</ion-label>\n      </ion-item>\n\n      <ion-item color="{{aboutHelpColor}}" menuClose="" on-click="goToAboutHelp()" id="menu-list-item12">\n        <ion-icon name="help" item-left></ion-icon>\n        <ion-label>About/Help</ion-label>\n      </ion-item>\n\n      <ion-item color="{{settingsColor}}" menuClose="" on-click="goToSettings()" id="menu-list-item13">\n        <ion-icon name="settings" item-left ></ion-icon>\n        <ion-label>Settings</ion-label>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/ibrahima/Bureau/RT SS18/Mobile Computing/Incoming App/Apps/IncomingApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_tasks_service_tasks_service__["a" /* TasksService */], __WEBPACK_IMPORTED_MODULE_12__providers_settings_service_settings__["a" /* SettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_database__ = __webpack_require__(47);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(dbProvider, tasksService) {
        this.dbProvider = dbProvider;
        this.tasksService = tasksService;
        this.tableName = "settings";
    }
    SettingsProvider.prototype.addPredefinedSettings = function () {
        var s1 = {
            option_name: "is_notification_enabled",
            option_value: 1 // 0 = not enabled
        };
        var s2 = {
            option_name: "is_alert_notification_enabled",
            option_value: 0 // 0 = not enabled
        };
        var s3 = {
            option_name: "number_days_before_deadline",
            option_value: 0 // by default 0 day
        };
        this.addSetting(s1);
        this.addSetting(s2);
        this.addSetting(s3);
    };
    SettingsProvider.prototype.addSetting = function (setting) {
        var _this = this;
        this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'insert into ' + _this.tableName + '(option_name, option_value) values (?, ?)';
            var data = [setting.option_name, setting.option_value];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    SettingsProvider.prototype.updateSettingOptionValue = function (setting) {
        var _this = this;
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update ' + _this.tableName + ' set option_value = ? where option_name = ?';
            var data = [setting.option_value, setting.option_name];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    SettingsProvider.prototype.getSettingByOptionName = function (optionName) {
        var _this = this;
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * from ' + _this.tableName + " where option_name = ?";
            var data = [optionName];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var setting = void 0;
                    setting = data.rows.item(0);
                    return setting;
                }
                else {
                    return null;
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    SettingsProvider.prototype.isNotificationEnabled = function () {
        return this.getSettingByOptionName("is_notification_enabled").then(function (res) {
            if (res.option_value == 1)
                return true;
            else
                return false;
        });
    };
    SettingsProvider.prototype.isAlertNotificationEnabled = function () {
        return this.getSettingByOptionName("is_alert_notification_enabled").then(function (res) {
            if (res.option_value == 1)
                return true;
            else
                return false;
        });
    };
    SettingsProvider.prototype.getNumberOfDaysBeforeDeadline = function () {
        return this.getSettingByOptionName("number_days_before_deadline").then(function (res) {
            return res.option_value;
        });
    };
    SettingsProvider.prototype.isMatchingNotificationTask = function (task, numberOfDaysBeforeDeadline) {
        var today = new Date();
        var taskDay = parseInt(task.deadline.substring(8, 10));
        var taskMonth = parseInt(task.deadline.substring(5, 7));
        var taskYear = parseInt(task.deadline.substring(0, 4));
        var taskHour = parseInt(task.deadline.substring(11, 13));
        var taskMinutes = parseInt(task.deadline.substring(14, 16));
        var taskDate = new Date(taskYear, taskMonth - 1, taskDay, taskHour, taskMinutes);
        var formattedTaskDeadline = taskDay + "/" + taskMonth + "/" + taskYear + " - " + taskHour + ":" + taskMinutes;
        today.setHours(0);
        taskDate.setHours(0);
        today.setMinutes(0);
        taskDate.setMinutes(0);
        today.setSeconds(0);
        taskDate.setSeconds(0);
        today.setMilliseconds(0);
        taskDate.setMilliseconds(0);
        //make comparison based n timestamp ignorinh hours, minutes, seconds and ms
        if (today.getTime() + numberOfDaysBeforeDeadline * 24 * 60 * 60 * 1000 >= taskDate.getTime()) {
            //If the deadline has passed or is today
            if (today.getTime() >= taskDate.getTime())
                return JSON.stringify({ match: true, deadline: formattedTaskDeadline, deadlineHasPassed: true });
            else
                return JSON.stringify({ match: true, deadline: formattedTaskDeadline });
        }
        return JSON.stringify({ match: false });
    };
    SettingsProvider.prototype.getNotificationTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var numberOfDaysBeforeDeadline, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numberOfDaysBeforeDeadline = 0;
                        result = [];
                        return [4 /*yield*/, this.getNumberOfDaysBeforeDeadline().then(function (days) {
                                numberOfDaysBeforeDeadline = days;
                            })];
                    case 1:
                        _a.sent();
                        //get tasks that have not been performed yet ===> status = 0
                        return [2 /*return*/, this.tasksService.getTasksByStatus(0).then(function (data) {
                                for (var i = 0; i < data.length; i++) {
                                    var task = data[i];
                                    var parsedMatchingResult = JSON.parse(_this.isMatchingNotificationTask(task, numberOfDaysBeforeDeadline));
                                    var isMatching = parsedMatchingResult.match;
                                    if (isMatching) {
                                        task.iconName = "warning";
                                        task.formattedDeadline = parsedMatchingResult.deadline;
                                        //Making notification icon in red color if the deadline has passed or is today
                                        if (parsedMatchingResult.deadlineHasPassed)
                                            task.iconColor = "red";
                                        //Making notification text in red color in case the number of days prior to deadline is <= 7
                                        //7 is just a random number, can be ajusted as needed
                                        if (numberOfDaysBeforeDeadline <= 7)
                                            task.labelColor = "red";
                                        result.push(task);
                                    }
                                }
                                return result;
                            }).catch(function (e) {
                                console.log("Error while getting tasks for notifications : " + e);
                            })];
                }
            });
        });
    };
    SettingsProvider.prototype.getAllSettings = function () {
        var _this = this;
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'SELECT * from ' + _this.tableName;
            var data = [];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var settings = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var s = data.rows.item(i);
                        settings.push(s);
                    }
                    return settings;
                }
                else {
                    return [];
                }
            })
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksService */]])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
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
        })
            .catch(function (e) { return console.log(e); });
    };
    DatabaseProvider.prototype.createTables = function (db) {
        db.sqlBatch([
            ['CREATE TABLE IF NOT EXISTS tasks (id integer primary key AUTOINCREMENT NOT NULL, name TEXT NOT NULL, deadline TEXT NOT NULL, scope TEXT NOT NULL, status integer NOT NULL, description TEXT NOT NULL, priority integer NOT NULL, requiredness TEXT NOT NULL)'],
            ['CREATE TABLE IF NOT EXISTS settings (id integer primary key AUTOINCREMENT NOT NULL, option_name TEXT UNIQUE NOT NULL, option_value integer NOT NULL)']
        ]).then(function () { return console.log('Tasks table created'); })
            .catch(function (e) { return console.error('Error while creating tables', e); });
    };
    DatabaseProvider.prototype.deleteDatabase = function () {
        var config = {
            name: 'data.db',
            location: 'default'
        };
        this.sqlite.deleteDatabase(config).then(function (res) {
            console.log("database deleted : " + res);
        }).catch(function (e) {
            console.log("Error while deleting database : " + e);
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Tasks__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksService = /** @class */ (function () {
    function TasksService(dbProvider) {
        this.dbProvider = dbProvider;
        this.tableName = "tasks";
    }
    TasksService.prototype.createDateInstance = function (day, month, year, hours, minutes) {
        var date = new Date(year, month - 1, day, hours, minutes);
        date.setUTCHours(hours);
        //return day+"/"+month+"/"+year+" - "+hours+":"+minutes;
        return date.toISOString();
    };
    TasksService.prototype.addPredefindedTasks = function () {
        var task1_date = this.createDateInstance(15, 7, 2018, 23, 59);
        var task1 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Fill out appication form", task1_date, "before", 0, "Connect to the registration server and fill out the application form.", 1, "mandatory");
        var task2 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Apply for accomodation", task1_date, "before", 0, "Use the information that you received from the receiving institution or the International Office (RIO) to contact accomdation services.", 2, "mandatory or optional");
        var task3 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Get health insurance", task1_date, "during", 0, "Get a valid student health insurance that covers your entire stay. Note This is not mandatory for EU students.", 1, "mandatory or optional");
        var task4 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Registration with the city", task1_date, "during", 0, "Contact the university or the RIO or your student4studnt buddy to help you in registering with the city. Note: A rental contract is needed for this step.", 2, "mandatory");
        var task5 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Cancellation of your city registartion", task1_date, "after", 0, "Contact the city registration office to cancel your registration. Note: This is a very very crucial step.", 1, "mandatory");
        var task6 = new __WEBPACK_IMPORTED_MODULE_1__models_Tasks__["a" /* Task */]().createSimpleTask("Cancel your rental contract", task1_date, "after", 0, "Contact your accomdation service for canceling your rental contract explicitly.", 2, "mandatory");
        //Adding tasks
        this.addTask(task1);
        this.addTask(task2);
        this.addTask(task3);
        this.addTask(task4);
        this.addTask(task5);
        this.addTask(task6);
    };
    TasksService.prototype.addTask = function (task) {
        var _this = this;
        this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'insert into ' + _this.tableName + '(name, deadline, scope, status, description, priority, requiredness) values (?, ?, ?, ?, ?, ?, ?)';
            var data = [task.name, task.deadline, task.scope, task.status, task.description, task.priority, task.requiredness];
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
            var tasks = [];
            for (var i = 0; i < data.length; i++) {
                var currentTask = data[i];
                if (currentTask.scope == scope)
                    tasks.push(currentTask);
            }
            return tasks;
        });
    };
    TasksService.prototype.getTasksByStatus = function (status) {
        return this.getAllTasks().then(function (data) {
            var tasks = [];
            for (var i = 0; i < data.length; i++) {
                var currentTask = data[i];
                if (currentTask.status == status)
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
            var taskStatus = (task.status == 0) ? 1 : 0;
            var data = [taskStatus, task.id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    TasksService.prototype.updateTask = function (task) {
        var _this = this;
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'update ' + _this.tableName + ' set name = ?, deadline = ?, scope = ?, status = ?, description = ?, priority = ?, requiredness = ? where id = ?';
            var data = [task.name, task.deadline, task.scope, task.status, task.description, task.priority, task.requiredness, task.id];
            return db.executeSql(sql, data)
                .catch(function (e) { return console.error(e); });
        })
            .catch(function (e) { return console.error(e); });
    };
    TasksService.prototype.deleteTask = function (task) {
        var _this = this;
        return this.dbProvider.getDB()
            .then(function (db) {
            var sql = 'delete from ' + _this.tableName + ' where id = ?';
            var data = [task.id];
            return db.executeSql(sql, data)
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

/***/ })

},[206]);
//# sourceMappingURL=main.js.map