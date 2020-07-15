(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents, Ruter_Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruter_Data", function() { return Ruter_Data; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sections_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/login/login.component */ "./src/app/sections/login/login.component.ts");
/* harmony import */ var _sections_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/register/register.component */ "./src/app/sections/register/register.component.ts");
/* harmony import */ var _sections_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/main-page/main-page.component */ "./src/app/sections/main-page/main-page.component.ts");
/* harmony import */ var _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/choose-language/choose-language.component */ "./src/app/sections/choose-language/choose-language.component.ts");
/* harmony import */ var _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/regulations/regulations.component */ "./src/app/sections/regulations/regulations.component.ts");
/* harmony import */ var src_app_gards_auth_gard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/gards/auth-gard/auth.guard */ "./src/app/gards/auth-gard/auth.guard.ts");










const routes = [
    {
        path: '',
        component: _sections_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        canActivate: [src_app_gards_auth_gard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["Auth_Guard"]],
        data: { Route_Name: "Main Page" }
    },
    {
        path: 'login',
        component: _sections_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        data: { Route_Name: "Login" }
    },
    {
        path: 'register',
        component: _sections_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        data: { Route_Name: "Register" }
    },
    {
        path: 'chooseLanguage',
        component: _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_5__["ChooseLanguageComponent"],
        data: { Route_Name: "chooseLanguage" }
    },
    {
        path: 'regulations',
        component: _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_6__["RegulationsComponent"],
        data: { Route_Name: "regulations" }
    }
];
;
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routingComponents = [
    _sections_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    _sections_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
    _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_5__["ChooseLanguageComponent"],
    _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_6__["RegulationsComponent"]
];
const Ruter_Data = [
    routes
];


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
/* harmony import */ var _commun_navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commun/navbar/main-navbar-selector/main-navbar-selector.component */ "./src/app/commun/navbar/main-navbar-selector/main-navbar-selector.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _commun_footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commun/footer/main-footer-selctor/main-footer-selctor.component */ "./src/app/commun/footer/main-footer-selctor/main-footer-selctor.component.ts");





class AppComponent {
    constructor() {
        this.title = 'In Touch';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-navbar-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main-footer-selctor");
    } }, directives: [_commun_navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_1__["MainNavbarSelectorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _commun_footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_3__["MainFooterSelctorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
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
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _commun_commom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commun/commom */ "./src/app/commun/commom.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _commun_navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commun/navbar/login-navbar/login-navbar.component */ "./src/app/commun/navbar/login-navbar/login-navbar.component.ts");
/* harmony import */ var _commun_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commun/navbar/main-navbar/main-navbar.component */ "./src/app/commun/navbar/main-navbar/main-navbar.component.ts");
/* harmony import */ var _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/abstract-selctor/abstract-selctor.component */ "./src/app/sections/abstract-selctor/abstract-selctor.component.ts");
/* harmony import */ var _commun_footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./commun/footer/footer-nologin/footer-nologin.component */ "./src/app/commun/footer/footer-nologin/footer-nologin.component.ts");
/* harmony import */ var _commun_footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./commun/footer/footer-mian/footer-mian.component */ "./src/app/commun/footer/footer-mian/footer-mian.component.ts");
/* harmony import */ var _sections_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/login/login.component */ "./src/app/sections/login/login.component.ts");
/* harmony import */ var _sections_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/register/register.component */ "./src/app/sections/register/register.component.ts");
/* harmony import */ var _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/choose-language/choose-language.component */ "./src/app/sections/choose-language/choose-language.component.ts");
/* harmony import */ var _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/regulations/regulations.component */ "./src/app/sections/regulations/regulations.component.ts");
/* harmony import */ var _commun_navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./commun/navbar/main-navbar-selector/main-navbar-selector.component */ "./src/app/commun/navbar/main-navbar-selector/main-navbar-selector.component.ts");
/* harmony import */ var _commun_footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./commun/footer/main-footer-selctor/main-footer-selctor.component */ "./src/app/commun/footer/main-footer-selctor/main-footer-selctor.component.ts");






















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _sections_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _sections_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_15__["ChooseLanguageComponent"], _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_16__["RegulationsComponent"], _commun_navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_17__["MainNavbarSelectorComponent"], _commun_footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_18__["MainFooterSelctorComponent"], _commun_navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_8__["LoginNavbarComponent"],
        _commun_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_9__["MainNavbarComponent"],
        _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_10__["AbstractSelctorComponent"],
        _commun_footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_11__["FooterNologinComponent"],
        _commun_footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_12__["FooterMianComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                    _commun_commom__WEBPACK_IMPORTED_MODULE_5__["Commom_Components"],
                    _commun_navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_8__["LoginNavbarComponent"],
                    _commun_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_9__["MainNavbarComponent"],
                    _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_10__["AbstractSelctorComponent"],
                    _commun_footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_11__["FooterNologinComponent"],
                    _commun_footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_12__["FooterMianComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                        }
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/commun/commom.ts":
/*!**********************************!*\
  !*** ./src/app/commun/commom.ts ***!
  \**********************************/
/*! exports provided: Commom_Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commom_Components", function() { return Commom_Components; });
/* harmony import */ var _navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/main-navbar-selector/main-navbar-selector.component */ "./src/app/commun/navbar/main-navbar-selector/main-navbar-selector.component.ts");
/* harmony import */ var _footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/main-footer-selctor/main-footer-selctor.component */ "./src/app/commun/footer/main-footer-selctor/main-footer-selctor.component.ts");


const Commom_Components = [
    _navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_0__["MainNavbarSelectorComponent"],
    _footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_1__["MainFooterSelctorComponent"]
];


/***/ }),

/***/ "./src/app/commun/footer/footer-mian/footer-mian.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/commun/footer/footer-mian/footer-mian.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterMianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMianComponent", function() { return FooterMianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterMianComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterMianComponent.ɵfac = function FooterMianComponent_Factory(t) { return new (t || FooterMianComponent)(); };
FooterMianComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterMianComponent, selectors: [["app-footer-mian"]], decls: 2, vars: 0, template: function FooterMianComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer-mian works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9mb290ZXIvZm9vdGVyLW1pYW4vZm9vdGVyLW1pYW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterMianComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-mian',
                templateUrl: './footer-mian.component.html',
                styleUrls: ['./footer-mian.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/commun/footer/footer-nologin/footer-nologin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/commun/footer/footer-nologin/footer-nologin.component.ts ***!
  \**************************************************************************/
/*! exports provided: FooterNologinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNologinComponent", function() { return FooterNologinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/Router-Custum/router-custum.service */ "./src/app/service/Router-Custum/router-custum.service.ts");
/* harmony import */ var src_app_service_time_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/time/time.service */ "./src/app/service/time/time.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






class FooterNologinComponent {
    constructor(Router, Time) {
        this.Router = Router;
        this.Time = Time;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    getTime() {
        return this.Time.getData();
    }
}
FooterNologinComponent.ɵfac = function FooterNologinComponent_Factory(t) { return new (t || FooterNologinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["Router_Custum_Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_time_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"])); };
FooterNologinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterNologinComponent, selectors: [["app-footer-nologin"]], decls: 14, vars: 15, consts: [[3, "href"]], template: function FooterNologinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.Router.Get_Rout("chooseLanguage"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, "FOOTER.chooseLanguage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.Router.Get_Rout("regulations"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "FOOTER.regulations"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "FOOTER.createdby"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.environment.url.portfolio.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.environment.url.portfolio.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n", ctx.environment.name, " ", ctx.getTime(), "");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9mb290ZXIvZm9vdGVyLW5vbG9naW4vZm9vdGVyLW5vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterNologinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-nologin',
                templateUrl: './footer-nologin.component.html',
                styleUrls: ['./footer-nologin.component.scss']
            }]
    }], function () { return [{ type: src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["Router_Custum_Service"] }, { type: src_app_service_time_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/commun/footer/main-footer-selctor/main-footer-selctor.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/commun/footer/main-footer-selctor/main-footer-selctor.component.ts ***!
  \************************************************************************************/
/*! exports provided: MainFooterSelctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterSelctorComponent", function() { return MainFooterSelctorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sections/abstract-selctor/abstract-selctor.component */ "./src/app/sections/abstract-selctor/abstract-selctor.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer-nologin/footer-nologin.component */ "./src/app/commun/footer/footer-nologin/footer-nologin.component.ts");
/* harmony import */ var _footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer-mian/footer-mian.component */ "./src/app/commun/footer/footer-mian/footer-mian.component.ts");






function MainFooterSelctorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer-nologin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainFooterSelctorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer-mian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainFooterSelctorComponent extends _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_1__["AbstractSelctorComponent"] {
    ngOnInit() {
        this.setLang();
    }
}
MainFooterSelctorComponent.ɵfac = function MainFooterSelctorComponent_Factory(t) { return ɵMainFooterSelctorComponent_BaseFactory(t || MainFooterSelctorComponent); };
MainFooterSelctorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainFooterSelctorComponent, selectors: [["app-main-footer-selctor"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function MainFooterSelctorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainFooterSelctorComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainFooterSelctorComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.If_Auth());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.If_Auth());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_3__["FooterNologinComponent"], _footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_4__["FooterMianComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9mb290ZXIvbWFpbi1mb290ZXItc2VsY3Rvci9tYWluLWZvb3Rlci1zZWxjdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
const ɵMainFooterSelctorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MainFooterSelctorComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainFooterSelctorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-footer-selctor',
                templateUrl: './main-footer-selctor.component.html',
                styleUrls: ['./main-footer-selctor.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/commun/navbar/login-navbar/login-navbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/commun/navbar/login-navbar/login-navbar.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginNavbarComponent", function() { return LoginNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/Router-Custum/router-custum.service */ "./src/app/service/Router-Custum/router-custum.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class LoginNavbarComponent {
    constructor(router) {
        this.router = router;
        this.envarioment = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
}
LoginNavbarComponent.ɵfac = function LoginNavbarComponent_Factory(t) { return new (t || LoginNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["Router_Custum_Service"])); };
LoginNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginNavbarComponent, selectors: [["app-login-navbar"]], decls: 9, vars: 9, consts: [[3, "src"], [3, "href"]], template: function LoginNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.envarioment.photo.navLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.router.Get_Rout("Login"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "AUTHLOGIN.LOGIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.router.Get_Rout("Register"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "AUTHLOGIN.REGESTRER"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9uYXZiYXIvbG9naW4tbmF2YmFyL2xvZ2luLW5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-navbar',
                templateUrl: './login-navbar.component.html',
                styleUrls: ['./login-navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["Router_Custum_Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/commun/navbar/main-navbar-selector/main-navbar-selector.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/commun/navbar/main-navbar-selector/main-navbar-selector.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MainNavbarSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavbarSelectorComponent", function() { return MainNavbarSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sections/abstract-selctor/abstract-selctor.component */ "./src/app/sections/abstract-selctor/abstract-selctor.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-navbar/login-navbar.component */ "./src/app/commun/navbar/login-navbar/login-navbar.component.ts");
/* harmony import */ var _main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-navbar/main-navbar.component */ "./src/app/commun/navbar/main-navbar/main-navbar.component.ts");






function MainNavbarSelectorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavbarSelectorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainNavbarSelectorComponent extends _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_1__["AbstractSelctorComponent"] {
}
MainNavbarSelectorComponent.ɵfac = function MainNavbarSelectorComponent_Factory(t) { return ɵMainNavbarSelectorComponent_BaseFactory(t || MainNavbarSelectorComponent); };
MainNavbarSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavbarSelectorComponent, selectors: [["app-main-navbar-selector"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function MainNavbarSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainNavbarSelectorComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainNavbarSelectorComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.If_Auth());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.If_Auth());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_3__["LoginNavbarComponent"], _main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_4__["MainNavbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9uYXZiYXIvbWFpbi1uYXZiYXItc2VsZWN0b3IvbWFpbi1uYXZiYXItc2VsZWN0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });
const ɵMainNavbarSelectorComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MainNavbarSelectorComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavbarSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-navbar-selector',
                templateUrl: './main-navbar-selector.component.html',
                styleUrls: ['./main-navbar-selector.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/commun/navbar/main-navbar/main-navbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/commun/navbar/main-navbar/main-navbar.component.ts ***!
  \********************************************************************/
/*! exports provided: MainNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavbarComponent", function() { return MainNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MainNavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainNavbarComponent.ɵfac = function MainNavbarComponent_Factory(t) { return new (t || MainNavbarComponent)(); };
MainNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavbarComponent, selectors: [["app-main-navbar"]], decls: 2, vars: 0, template: function MainNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main-navbar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9uYXZiYXIvbWFpbi1uYXZiYXIvbWFpbi1uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-navbar',
                templateUrl: './main-navbar.component.html',
                styleUrls: ['./main-navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gards/auth-gard/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/gards/auth-gard/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: Auth_Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth_Guard", function() { return Auth_Guard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/Router-Custum/router-custum.service */ "./src/app/service/Router-Custum/router-custum.service.ts");




class Auth_Guard {
    constructor(Auth_Service, router) {
        this.Auth_Service = Auth_Service;
        this.router = router;
    }
    canActivate() {
        if (!this.Auth_Service.If_Auth()) {
            this.router.Navigate('Login');
            return false;
        }
        return true;
    }
}
Auth_Guard.ɵfac = function Auth_Guard_Factory(t) { return new (t || Auth_Guard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["Auth_Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["Router_Custum_Service"])); };
Auth_Guard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Auth_Guard, factory: Auth_Guard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Auth_Guard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["Auth_Service"] }, { type: src_app_service_Router_Custum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["Router_Custum_Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sections/abstract-selctor/abstract-selctor.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sections/abstract-selctor/abstract-selctor.component.ts ***!
  \*************************************************************************/
/*! exports provided: AbstractSelctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSelctorComponent", function() { return AbstractSelctorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class AbstractSelctorComponent {
    constructor(Auth, translate) {
        this.Auth = Auth;
        this.translate = translate;
    }
    setLang() {
        this.translate.addLangs(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].language.langs);
        this.translate.setDefaultLang(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].language.defult);
        this.translate.use(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].language.defult);
    }
    If_Auth() {
        return this.Auth.If_Auth();
    }
}
AbstractSelctorComponent.ɵfac = function AbstractSelctorComponent_Factory(t) { return new (t || AbstractSelctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["Auth_Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
AbstractSelctorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbstractSelctorComponent, selectors: [["app-abstract-selctor"]], decls: 2, vars: 0, template: function AbstractSelctorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "abstract-selctor works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Fic3RyYWN0LXNlbGN0b3IvYWJzdHJhY3Qtc2VsY3Rvci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractSelctorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-abstract-selctor',
                templateUrl: './abstract-selctor.component.html',
                styleUrls: ['./abstract-selctor.component.scss']
            }]
    }], function () { return [{ type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["Auth_Service"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sections/choose-language/choose-language.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/choose-language/choose-language.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChooseLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLanguageComponent", function() { return ChooseLanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ChooseLanguageComponent_div_0_b_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", lang_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1.fullname, " ");
} }
function ChooseLanguageComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", lang_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1.fullname, "");
} }
function ChooseLanguageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChooseLanguageComponent_div_0_b_1_Template, 3, 2, "b", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChooseLanguageComponent_div_0_ng_template_2_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ifChused(lang_r1))("ngIfElse", _r3);
} }
class ChooseLanguageComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    ifChused(index) {
        return (index.name == this.environment.language.use);
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.querySelectorAll('.langList').addEventListener('click', this.onClick.bind(this));
    }
    onClick(event) {
        console.log(event);
    }
}
ChooseLanguageComponent.ɵfac = function ChooseLanguageComponent_Factory(t) { return new (t || ChooseLanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ChooseLanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChooseLanguageComponent, selectors: [["app-choose-language"]], decls: 1, vars: 1, consts: [["class", "langList", 4, "ngFor", "ngForOf"], [1, "langList"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "src"]], template: function ChooseLanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChooseLanguageComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.environment.language.langList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Nob29zZS1sYW5ndWFnZS9jaG9vc2UtbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChooseLanguageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-choose-language',
                templateUrl: './choose-language.component.html',
                styleUrls: ['./choose-language.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sections/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoginComponent {
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "login section\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sections/main-page/main-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/sections/main-page/main-page.component.ts ***!
  \***********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 2, vars: 0, template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sections/register/register.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/sections/register/register.component.ts ***!
  \*********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 2, vars: 0, template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sections/regulations/regulations.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/sections/regulations/regulations.component.ts ***!
  \***************************************************************/
/*! exports provided: RegulationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegulationsComponent", function() { return RegulationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function RegulationsComponent_div_0_b_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", lang_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1.fullname, " ");
} }
function RegulationsComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", lang_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1.fullname, "");
} }
function RegulationsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegulationsComponent_div_0_b_2_Template, 3, 2, "b", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegulationsComponent_div_0_ng_template_3_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("data", lang_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ifChused(lang_r1))("ngIfElse", _r3);
} }
class RegulationsComponent {
    constructor(elementRef, translate) {
        this.elementRef = elementRef;
        this.translate = translate;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.langsClass = [];
    }
    ifChused(index) {
        return (index.name == this.environment.language.use);
    }
    ngAfterViewInit() {
        let obj = this;
        this.elementRef.nativeElement.querySelectorAll('.lang').forEach(function (item) {
            item.addEventListener('click', function (event) {
                obj.onClick(item);
            });
        });
    }
    onClick(item) {
        this.translate.use(item.data);
        this.translate.setDefaultLang(item.data);
    }
}
RegulationsComponent.ɵfac = function RegulationsComponent_Factory(t) { return new (t || RegulationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
RegulationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegulationsComponent, selectors: [["app-regulations"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "lang", 3, "data"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "src"]], template: function RegulationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RegulationsComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.environment.language.langList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3JlZ3VsYXRpb25zL3JlZ3VsYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegulationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-regulations',
                templateUrl: './regulations.component.html',
                styleUrls: ['./regulations.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/Router-Custum/router-custum.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/Router-Custum/router-custum.service.ts ***!
  \****************************************************************/
/*! exports provided: Router_Custum_Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router_Custum_Service", function() { return Router_Custum_Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class Router_Custum_Service {
    constructor(router) {
        this.router = router;
        this.routs = [];
        this.routs = src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["Ruter_Data"][0];
    }
    Navigate(name) {
        this.router.navigate([this.Faind_Rout(name)]);
    }
    Get_Rout(name) {
        return this.Faind_Rout(name);
    }
    Faind_Rout(name) {
        let found = false;
        let url;
        for (let item of this.routs) {
            if (name === item.data.Route_Name) {
                found = true;
                url = item.path;
            }
        }
        if (found) {
            return url = '/' + url;
        }
        try {
            throw new Error('Rout with name ' + name + ' not found');
        }
        catch (e) {
            console.log(e);
        }
    }
}
Router_Custum_Service.ɵfac = function Router_Custum_Service_Factory(t) { return new (t || Router_Custum_Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
Router_Custum_Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Router_Custum_Service, factory: Router_Custum_Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Router_Custum_Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: Auth_Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth_Service", function() { return Auth_Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Auth_Service {
    If_Auth() {
        return false;
    }
}
Auth_Service.ɵfac = function Auth_Service_Factory(t) { return new (t || Auth_Service)(); };
Auth_Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Auth_Service, factory: Auth_Service.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Auth_Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/time/time.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/time/time.service.ts ***!
  \**********************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TimeService {
    getData() {
        return 2020;
    }
}
TimeService.ɵfac = function TimeService_Factory(t) { return new (t || TimeService)(); };
TimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimeService, factory: TimeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


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
class languages {
    constructor() {
        this.assetsUrl = 'assets/flags/';
        this.langList = [{ 'img': 'assets/flags/en.gif', 'name': 'en', 'fullname': 'english' }, { 'img': 'assets/flags/pl.png', 'name': 'pl', 'fullname': 'polski' }];
        this.defult = 'en';
        this.use = 'en';
        this.langs = [];
        this.setLangs();
    }
    setLangs() {
        for (const lang in this.langList) {
            this.langs.push(this.langList[lang].name);
        }
    }
}
class urls {
    constructor() {
        this.portfolio = { 'href': 'http://piotrstelmaszv.byethost7.com/', 'text': 'stelmaszv' };
    }
}
class photos {
    constructor() {
        this.assetsUrl = 'assets/img/';
        this.navLogo = this.assetsUrl + 'icon.png';
    }
}
const environment = {
    production: false,
    name: 'In Touch',
    photo: new photos,
    url: new urls,
    language: new languages()
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\intouchpl\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map