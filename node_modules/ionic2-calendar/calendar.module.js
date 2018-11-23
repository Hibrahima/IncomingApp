import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { MonthViewComponent } from './monthview';
import { WeekViewComponent } from './weekview';
import { DayViewComponent } from './dayview';
import { CalendarComponent } from './calendar';
import { initPositionScrollComponent } from './init-position-scroll';
var NgCalendarModule = (function () {
    function NgCalendarModule() {
    }
    NgCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MonthViewComponent, WeekViewComponent, DayViewComponent, CalendarComponent, initPositionScrollComponent
                    ],
                    imports: [IonicModule],
                    exports: [CalendarComponent],
                    entryComponents: [CalendarComponent]
                },] },
    ];
    NgCalendarModule.ctorParameters = function () { return []; };
    return NgCalendarModule;
}());
export { NgCalendarModule };
//# sourceMappingURL=calendar.module.js.map