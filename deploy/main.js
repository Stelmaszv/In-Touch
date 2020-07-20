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
/* harmony import */ var _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/abstract-selctor/abstract-selctor.component */ "./src/app/sections/abstract-selctor/abstract-selctor.component.ts");
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/about/about.component */ "./src/app/sections/about/about.component.ts");
/* harmony import */ var src_app_gards_auth_gard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/gards/auth-gard/auth.guard */ "./src/app/gards/auth-gard/auth.guard.ts");












const routes = [
    {
        path: '',
        component: _sections_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        canActivate: [src_app_gards_auth_gard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        data: { Route_Name: "Main Page" }
    },
    {
        path: 'login',
        component: _sections_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        data: { Route_Name: "Login" }
    },
    {
        path: 'about',
        component: _sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        data: { Route_Name: "About" }
    },
    {
        path: 'register',
        component: _sections_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        data: { Route_Name: "Register" }
    },
    {
        path: 'chooseLanguage',
        component: _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_5__["ChooseLanguageComponent"],
        data: { Route_Name: "ChooseLanguage" }
    },
    {
        path: 'regulations',
        component: _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_6__["RegulationsComponent"],
        data: { Route_Name: "Regulations" }
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
    _sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
    _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_5__["ChooseLanguageComponent"],
    _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_6__["RegulationsComponent"],
    _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_7__["AbstractSelctorComponent"],
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
/* harmony import */ var _sections_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/login/login.component */ "./src/app/sections/login/login.component.ts");
/* harmony import */ var _sections_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/register/register.component */ "./src/app/sections/register/register.component.ts");
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/about/about.component */ "./src/app/sections/about/about.component.ts");
/* harmony import */ var _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/choose-language/choose-language.component */ "./src/app/sections/choose-language/choose-language.component.ts");
/* harmony import */ var _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/regulations/regulations.component */ "./src/app/sections/regulations/regulations.component.ts");
/* harmony import */ var _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/abstract-selctor/abstract-selctor.component */ "./src/app/sections/abstract-selctor/abstract-selctor.component.ts");
/* harmony import */ var _commun_navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./commun/navbar/main-navbar-selector/main-navbar-selector.component */ "./src/app/commun/navbar/main-navbar-selector/main-navbar-selector.component.ts");
/* harmony import */ var _commun_footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./commun/footer/main-footer-selctor/main-footer-selctor.component */ "./src/app/commun/footer/main-footer-selctor/main-footer-selctor.component.ts");
/* harmony import */ var _commun_navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./commun/navbar/login-navbar/login-navbar.component */ "./src/app/commun/navbar/login-navbar/login-navbar.component.ts");
/* harmony import */ var _commun_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./commun/navbar/main-navbar/main-navbar.component */ "./src/app/commun/navbar/main-navbar/main-navbar.component.ts");
/* harmony import */ var _commun_footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./commun/footer/footer-nologin/footer-nologin.component */ "./src/app/commun/footer/footer-nologin/footer-nologin.component.ts");
/* harmony import */ var _commun_footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./commun/footer/footer-mian/footer-mian.component */ "./src/app/commun/footer/footer-mian/footer-mian.component.ts");
/* harmony import */ var _commun_footer_abstrac_footer_abstrac_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./commun/footer/abstrac-footer/abstrac-footer.component */ "./src/app/commun/footer/abstrac-footer/abstrac-footer.component.ts");
























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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _sections_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _sections_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _sections_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_11__["ChooseLanguageComponent"], _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_12__["RegulationsComponent"], _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_13__["AbstractSelctorComponent"], _commun_navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_14__["MainNavbarSelectorComponent"], _commun_footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_15__["MainFooterSelctorComponent"], _commun_navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_16__["LoginNavbarComponent"], _commun_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_17__["MainNavbarComponent"], _commun_footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_18__["FooterNologinComponent"], _commun_footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_19__["FooterMianComponent"], _commun_footer_abstrac_footer_abstrac_footer_component__WEBPACK_IMPORTED_MODULE_20__["AbstracFooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                    _commun_commom__WEBPACK_IMPORTED_MODULE_5__["Commom_Components"]
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
/* harmony import */ var _navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/login-navbar/login-navbar.component */ "./src/app/commun/navbar/login-navbar/login-navbar.component.ts");
/* harmony import */ var _navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/main-navbar/main-navbar.component */ "./src/app/commun/navbar/main-navbar/main-navbar.component.ts");
/* harmony import */ var _footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer-nologin/footer-nologin.component */ "./src/app/commun/footer/footer-nologin/footer-nologin.component.ts");
/* harmony import */ var _footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer-mian/footer-mian.component */ "./src/app/commun/footer/footer-mian/footer-mian.component.ts");
/* harmony import */ var _footer_abstrac_footer_abstrac_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/abstrac-footer/abstrac-footer.component */ "./src/app/commun/footer/abstrac-footer/abstrac-footer.component.ts");







const Commom_Components = [
    _navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_0__["MainNavbarSelectorComponent"],
    _footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_1__["MainFooterSelctorComponent"],
    _navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_2__["LoginNavbarComponent"],
    _navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_3__["MainNavbarComponent"],
    _footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_4__["FooterNologinComponent"],
    _footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_5__["FooterMianComponent"],
    _footer_abstrac_footer_abstrac_footer_component__WEBPACK_IMPORTED_MODULE_6__["AbstracFooterComponent"]
];


/***/ }),

/***/ "./src/app/commun/footer/abstrac-footer/abstrac-footer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/commun/footer/abstrac-footer/abstrac-footer.component.ts ***!
  \**************************************************************************/
/*! exports provided: AbstracFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstracFooterComponent", function() { return AbstracFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/routerCustum/router-custum.service */ "./src/app/service/routerCustum/router-custum.service.ts");
/* harmony import */ var _service_time_time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/time/time.service */ "./src/app/service/time/time.service.ts");
/* harmony import */ var _service_translateMenager_translate_menager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/translateMenager/translate-menager.service */ "./src/app/service/translateMenager/translate-menager.service.ts");






class AbstracFooterComponent {
    constructor(Router, Time, translate) {
        this.Router = Router;
        this.Time = Time;
        this.translate = translate;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.setLang();
    }
    getTime() {
        return this.Time.getData();
    }
    setLang() {
        this.translate.setLang();
    }
}
AbstracFooterComponent.ɵfac = function AbstracFooterComponent_Factory(t) { return new (t || AbstracFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["RouterCustumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_time_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translateMenager_translate_menager_service__WEBPACK_IMPORTED_MODULE_4__["TranslateMenagerService"])); };
AbstracFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbstracFooterComponent, selectors: [["app-abstrac-footer"]], decls: 2, vars: 0, template: function AbstracFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "abstrac-footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9mb290ZXIvYWJzdHJhYy1mb290ZXIvYWJzdHJhYy1mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstracFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-abstrac-footer',
                templateUrl: './abstrac-footer.component.html',
                styleUrls: ['./abstrac-footer.component.scss']
            }]
    }], function () { return [{ type: _service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["RouterCustumService"] }, { type: _service_time_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"] }, { type: _service_translateMenager_translate_menager_service__WEBPACK_IMPORTED_MODULE_4__["TranslateMenagerService"] }]; }, null); })();


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
    }], null, null); })();


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
/* harmony import */ var _abstrac_footer_abstrac_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstrac-footer/abstrac-footer.component */ "./src/app/commun/footer/abstrac-footer/abstrac-footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class FooterNologinComponent extends _abstrac_footer_abstrac_footer_component__WEBPACK_IMPORTED_MODULE_1__["AbstracFooterComponent"] {
}
FooterNologinComponent.ɵfac = function FooterNologinComponent_Factory(t) { return ɵFooterNologinComponent_BaseFactory(t || FooterNologinComponent); };
FooterNologinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterNologinComponent, selectors: [["app-footer-nologin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 17, consts: [[1, "auth-footer"], [1, "navbar", "navbar-expand-lg", "navbar-base", "navbar-center", "footer-top", "text-right"], [1, "container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "center"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "nav-item"], [1, "nav-link", 3, "href"]], template: function FooterNologinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.Router.Get_Rout("ChooseLanguage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "FOOTER.chooseLanguage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.Router.Get_Rout("About"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "FOOTER.about"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.Router.Get_Rout("Regulations"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "FOOTER.regulations"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.environment.url.portfolio.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, "FOOTER.createdby"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.environment.url.portfolio.text, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".auth-footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top: 3px solid gold;\n}\n.auth-footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuL2Zvb3Rlci9mb290ZXItbm9sb2dpbi9mb290ZXItbm9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7QUFBUjtBQUVJO0VBQ0ksbUJBQUE7QUFBUiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9mb290ZXIvZm9vdGVyLW5vbG9naW4vZm9vdGVyLW5vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1mb290ZXJ7XHJcbiAgICAuZm9vdGVyLXRvcHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCBnb2xkO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1ib3R0b217XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"] });
const ɵFooterNologinComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FooterNologinComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterNologinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-nologin',
                templateUrl: './footer-nologin.component.html',
                styleUrls: ['./footer-nologin.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var src_app_service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/routerCustum/router-custum.service */ "./src/app/service/routerCustum/router-custum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






class LoginNavbarComponent {
    constructor(router) {
        this.router = router;
        this.envarioment = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
}
LoginNavbarComponent.ɵfac = function LoginNavbarComponent_Factory(t) { return new (t || LoginNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["RouterCustumService"])); };
LoginNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginNavbarComponent, selectors: [["app-login-navbar"]], decls: 14, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "navbar-base", "navbar-auth", "text-right"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], [3, "src"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"]], template: function LoginNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.router.Get_Rout("Main Page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.envarioment.photo.navLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.router.Get_Rout("Login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "AUTHLOGIN.LOGIN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.router.Get_Rout("Register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, "AUTHLOGIN.REGESTRER"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9uYXZiYXIvbG9naW4tbmF2YmFyL2xvZ2luLW5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-navbar',
                templateUrl: './login-navbar.component.html',
                styleUrls: ['./login-navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["RouterCustumService"] }]; }, null); })();


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
    }], null, null); })();


/***/ }),

/***/ "./src/app/gards/auth-gard/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/gards/auth-gard/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");
/* harmony import */ var src_app_service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/routerCustum/router-custum.service */ "./src/app/service/routerCustum/router-custum.service.ts");




class AuthGuard {
    constructor(AuthService, router) {
        this.AuthService = AuthService;
        this.router = router;
    }
    canActivate() {
        if (!this.AuthService.ifAuth()) {
            this.router.Navigate('Login');
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["RouterCustumService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: src_app_service_routerCustum_router_custum_service__WEBPACK_IMPORTED_MODULE_2__["RouterCustumService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sections/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/sections/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class AboutComponent {
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 4, vars: 3, consts: [[1, "section-center"], [1, "center-this", "auth-section"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "ABOUT.title"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth/auth.service */ "./src/app/service/auth/auth.service.ts");



class AbstractSelctorComponent {
    constructor(Auth) {
        this.Auth = Auth;
    }
    If_Auth() {
        return this.Auth.ifAuth();
    }
}
AbstractSelctorComponent.ɵfac = function AbstractSelctorComponent_Factory(t) { return new (t || AbstractSelctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
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
    }], function () { return [{ type: src_app_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _service_translateMenager_translate_menager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/translateMenager/translate-menager.service */ "./src/app/service/translateMenager/translate-menager.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






function ChooseLanguageComponent_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", lang_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1.fullname, " ");
} }
function ChooseLanguageComponent_div_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", lang_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lang_r1.fullname, "");
} }
function ChooseLanguageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChooseLanguageComponent_div_5_span_2_Template, 4, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChooseLanguageComponent_div_5_ng_template_3_Template, 2, 2, "ng-template", 7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
class ChooseLanguageComponent {
    constructor(elementRef, translate) {
        this.elementRef = elementRef;
        this.translate = translate;
        this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    ifChused(index) {
        return (index.name == localStorage.getItem('lang'));
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
        this.translate.changeLang(item.data);
        window.location.href = '';
    }
}
ChooseLanguageComponent.ɵfac = function ChooseLanguageComponent_Factory(t) { return new (t || ChooseLanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translateMenager_translate_menager_service__WEBPACK_IMPORTED_MODULE_2__["TranslateMenagerService"])); };
ChooseLanguageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChooseLanguageComponent, selectors: [["app-choose-language"]], decls: 6, vars: 4, consts: [[1, "section-center"], [1, "center-this", "choose-language", "auth-section"], [1, "section-name"], ["class", "lang-elemnt", 4, "ngFor", "ngForOf"], [1, "lang-elemnt"], [1, "lang", 3, "data"], ["class", "lang-choosed", 4, "ngIf", "ngIfElse"], ["class", "normal"], ["elseBlock", ""], [1, "lang-choosed"], [1, "lang-img", 3, "src"], [1, "lang-fullname"], [3, "src"]], template: function ChooseLanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChooseLanguageComponent_div_5_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "CHOOSELANGUAGE.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.environment.language.langList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".section-center[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n.section-center[_ngcontent-%COMP%]   .choose-language[_ngcontent-%COMP%]   .lang-elemnt[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%] {\n  color: rgba(245, 245, 245, 0.335);\n}\n.section-center[_ngcontent-%COMP%]   .choose-language[_ngcontent-%COMP%]   .lang-elemnt[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   .lang-choosed[_ngcontent-%COMP%]   .lang-img[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 100px;\n  height: 100px;\n}\n.section-center[_ngcontent-%COMP%]   .choose-language[_ngcontent-%COMP%]   .lang-elemnt[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]   .lang-choosed[_ngcontent-%COMP%]   .lang-fullname[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-center[_ngcontent-%COMP%]   .choose-language[_ngcontent-%COMP%]   .lang-elemnt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 100px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvY2hvb3NlLWxhbmd1YWdlL2Nob29zZS1sYW5ndWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLGlCQUpBO0VBS0Esb0JBSkE7QUFISjtBQVVZO0VBQ0ksaUNBYko7QUFLWjtBQVVvQjtFQUNJLFlBZlA7RUFnQk8sWUFmVDtFQWdCUyxhQWZQO0FBT2pCO0FBVW9CO0VBQ0ksWUF0Qkw7QUFjbkI7QUFZWTtFQUNJLFlBekJDO0VBMEJELFlBekJEO0VBMEJDLGFBekJDO0FBZWpCIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvY2hvb3NlLWxhbmd1YWdlL2Nob29zZS1sYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsYW5nLWFjdGl2ZS1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRsYW5nLWNvbG9yOnJnYmEoMjQ1LCAyNDUsIDI0NSwgMC4zMzUpO1xyXG4kbGFuZy1pbWctbWFyZ2luOjIwcHg7XHJcbiRsYW5nLWltZy13aXRoOjEwMHB4O1xyXG4kbGFuZy1pbWctaGVpZ2h0OjEwMHB4O1xyXG4kTlQ6MTAwcHg7XHJcbiROQjoxMDBweDtcclxuXHJcbi5zZWN0aW9uLWNlbnRlcntcclxuICAgIG1hcmdpbi10b3A6JE5UO1xyXG4gICAgbWFyZ2luLWJvdHRvbTokTkI7XHJcbiAgICAuY2hvb3NlLWxhbmd1YWdle1xyXG4gICAgICAgIC5sYW5nLWVsZW1udHtcclxuICAgICAgICAgICAgLmxhbmd7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGxhbmctY29sb3I7XHJcbiAgICAgICAgICAgICAgICAubGFuZy1jaG9vc2Vke1xyXG4gICAgICAgICAgICAgICAgICAgIC5sYW5nLWltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiRsYW5nLWltZy1tYXJnaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkbGFuZy1pbWctd2l0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkbGFuZy1pbWctaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubGFuZy1mdWxsbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRsYW5nLWFjdGl2ZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiRsYW5nLWltZy1tYXJnaW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJGxhbmctaW1nLXdpdGg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRsYW5nLWltZy1oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChooseLanguageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-choose-language',
                templateUrl: './choose-language.component.html',
                styleUrls: ['./choose-language.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _service_translateMenager_translate_menager_service__WEBPACK_IMPORTED_MODULE_2__["TranslateMenagerService"] }]; }, null); })();


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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class LoginComponent {
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 4, vars: 3, consts: [[1, "section-center"], [1, "center-this", "auth-section"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "LOGIN.title"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
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
    }], null, null); })();


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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class RegisterComponent {
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 4, vars: 3, consts: [[1, "section-center"], [1, "center-this", "auth-section"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "REGESTRER.title"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class RegulationsComponent {
}
RegulationsComponent.ɵfac = function RegulationsComponent_Factory(t) { return new (t || RegulationsComponent)(); };
RegulationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegulationsComponent, selectors: [["app-regulations"]], decls: 4, vars: 3, consts: [[1, "section-center"], [1, "center-this", "auth-section"]], template: function RegulationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "REGULATIONS.title"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3JlZ3VsYXRpb25zL3JlZ3VsYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegulationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-regulations',
                templateUrl: './regulations.component.html',
                styleUrls: ['./regulations.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/auth/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthService {
    ifAuth() {
        return (this.getUser()) ? true : false;
    }
    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    createUser(data) {
        localStorage.setItem('user', data);
    }
    logOut() {
        localStorage.removeItem('user');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/routerCustum/router-custum.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/service/routerCustum/router-custum.service.ts ***!
  \***************************************************************/
/*! exports provided: RouterCustumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterCustumService", function() { return RouterCustumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class RouterCustumService {
    constructor(router) {
        this.router = router;
        this.routs = [];
        this.routs = src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["Ruter_Data"][0];
    }
    Navigate(name) {
        return this.router.navigate([this.Faind_Rout(name)]);
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
RouterCustumService.ɵfac = function RouterCustumService_Factory(t) { return new (t || RouterCustumService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RouterCustumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterCustumService, factory: RouterCustumService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterCustumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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

/***/ "./src/app/service/translateMenager/translate-menager.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/service/translateMenager/translate-menager.service.ts ***!
  \***********************************************************************/
/*! exports provided: TranslateMenagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateMenagerService", function() { return TranslateMenagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class TranslateMenagerService {
    constructor(translate) {
        this.translate = translate;
    }
    setLang() {
        this.translate.addLangs(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].language.langs);
        this.translate.setDefaultLang(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].language.defult);
        this.translate.use(this.getLang());
    }
    changeLang(data) {
        localStorage.setItem('lang', data);
    }
    getLang() {
        return (localStorage.getItem('lang')) ? localStorage.getItem('lang') : _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].language.defult;
    }
}
TranslateMenagerService.ɵfac = function TranslateMenagerService_Factory(t) { return new (t || TranslateMenagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
TranslateMenagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslateMenagerService, factory: TranslateMenagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateMenagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


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
        this.langList = [{ 'img': 'assets/flags/en.gif', 'name': 'en', 'fullname': 'English' }, { 'img': 'assets/flags/pl.png', 'name': 'pl', 'fullname': 'Polski' }];
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