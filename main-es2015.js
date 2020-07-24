(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _event_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-utils */ "./src/app/event-utils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");





function AppComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r2.startStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r2.title);
} }
function AppComponent_full_calendar_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "full-calendar", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r1.calendarOptions);
} }
class AppComponent {
    constructor() {
        this.calendarVisible = true;
        this.calendarOptions = {
            expandRows: true,
            height: '100%',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridFourDay,dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            initialView: 'dayGridMonth',
            views: {
                timeGridFourDay: {
                    type: 'dayGrid',
                    duration: { months: 2 },
                    buttonText: '2 month'
                }
            },
            initialEvents: _event_utils__WEBPACK_IMPORTED_MODULE_1__["INITIAL_EVENTS"],
            weekends: true,
            editable: false,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            select: this.handleDateSelect.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventsSet: this.handleEvents.bind(this)
            /* you can update a remote database when these fire:
            eventAdd:
            eventChange:
            eventRemove:
            */
        };
        this.currentEvents = [];
    }
    handleCalendarToggle() {
        this.calendarVisible = !this.calendarVisible;
    }
    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }
    handleDateSelect(selectInfo) {
        const title = prompt('Please enter a new title for your event');
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        if (title) {
            calendarApi.addEvent({
                id: Object(_event_utils__WEBPACK_IMPORTED_MODULE_1__["createEventId"])(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            });
        }
    }
    handleEventClick(clickInfo) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    }
    handleEvents(events) {
        this.currentEvents = events;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 5, consts: [[1, "demo-app"], [1, "demo-app-sidebar"], [1, "demo-app-sidebar-section"], ["type", "checkbox", 3, "checked", "change"], [4, "ngFor", "ngForOf"], [1, "demo-app-main"], [3, "options", 4, "ngIf"], [3, "options"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select dates and you will be prompted to create a new event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Drag, drop, and resize events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Click an event to delete it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_14_listener() { return ctx.handleCalendarToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " toggle whole calendar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_18_listener() { return ctx.handleWeekendsToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " toggle weekends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_li_24_Template, 5, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_full_calendar_26_Template, 1, 1, "full-calendar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.calendarVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.calendarOptions.weekends);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("All Events (", ctx.currentEvents.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.calendarVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__["FullCalendarComponent"]], styles: ["h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0 0 1.5em;\n}\n\nli[_ngcontent-%COMP%] {\n  margin: 1.5em 0;\n  padding: 0;\n}\n\nb[_ngcontent-%COMP%] {\n  \n  margin-right: 3px;\n}\n\n.demo-app[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100%;\n  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;\n  font-size: 14px;\n}\n\n.demo-app-sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  line-height: 1.5;\n  background: #eaf9ff;\n  border-right: 1px solid #d3e2e8;\n}\n\n.demo-app-sidebar-section[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n\n.demo-app-main[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 3em;\n}\n\n.fc[_ngcontent-%COMP%] {\n  \n  max-width: 1100px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BheGEvU2l0ZXNOb1ZhbGV0L3NvdW5kLWNhbGVuZGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQUksK0JBQUE7RUFDRixpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseURBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQU0sc0JBQUE7RUFDSixpQkFBQTtFQUNBLGNBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDEuNWVtO1xufVxuXG5saSB7XG4gIG1hcmdpbjogMS41ZW0gMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYiB7IC8qIHVzZWQgZm9yIGV2ZW50IGRhdGVzL3RpbWVzICovXG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4uZGVtby1hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlbW8tYXBwLXNpZGViYXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQ6ICNlYWY5ZmY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkM2UyZTg7XG59XG5cbi5kZW1vLWFwcC1zaWRlYmFyLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyZW07XG59XG5cbi5kZW1vLWFwcC1tYWluIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAzZW07XG59XG5cbi5mYyB7IC8qIHRoZSBjYWxlbmRhciByb290ICovXG4gIG1heC13aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiIsImgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMCAxLjVlbTtcbn1cblxubGkge1xuICBtYXJnaW46IDEuNWVtIDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmIge1xuICAvKiB1c2VkIGZvciBldmVudCBkYXRlcy90aW1lcyAqL1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLmRlbW8tYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kZW1vLWFwcC1zaWRlYmFyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBiYWNrZ3JvdW5kOiAjZWFmOWZmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNlMmU4O1xufVxuXG4uZGVtby1hcHAtc2lkZWJhci1zZWN0aW9uIHtcbiAgcGFkZGluZzogMmVtO1xufVxuXG4uZGVtby1hcHAtbWFpbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogM2VtO1xufVxuXG4uZmMge1xuICAvKiB0aGUgY2FsZW5kYXIgcm9vdCAqL1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");









_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__["FullCalendarModule"].registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__["default"],
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__["default"],
    _fullcalendar_list__WEBPACK_IMPORTED_MODULE_5__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__["default"]
]);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__["FullCalendarModule"] // import the FullCalendar module! will make the FullCalendar component available
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__["FullCalendarModule"] // import the FullCalendar module! will make the FullCalendar component available
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__["FullCalendarModule"] // import the FullCalendar module! will make the FullCalendar component available
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/event-utils.ts":
/*!********************************!*\
  !*** ./src/app/event-utils.ts ***!
  \********************************/
/*! exports provided: INITIAL_EVENTS, createEventId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_EVENTS", function() { return INITIAL_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventId", function() { return createEventId; });
let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: '2 месяца',
        start: '2020-06-20',
        end: '2020-08-20',
        color: 'red'
    },
    {
        id: createEventId(),
        title: '1.5 месяца',
        start: '2020-06-20',
        end: '2020-07-20',
        color: 'green',
    },
    {
        id: createEventId(),
        title: '2772 месяца',
        start: '2020-07-10',
        end: '2020-08-20'
    }
];
function createEventId() {
    return String(eventGuid++);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/proposals/reflect-metadata */ "./node_modules/core-js/proposals/reflect-metadata.js");
/* harmony import */ var core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
// hack to get demo working in codepen
// https://github.com/codesandbox/codesandbox-client/issues/2634#issuecomment-598104535





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/paxa/SitesNoValet/sound-calendar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map