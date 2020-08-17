//dqwdfqefqefeqf
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _sections_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/login/login.component */ "./src/app/sections/login/login.component.ts");
/* harmony import */ var _sections_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/register/register.component */ "./src/app/sections/register/register.component.ts");
/* harmony import */ var _sections_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/about/about.component */ "./src/app/sections/about/about.component.ts");
/* harmony import */ var _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/choose-language/choose-language.component */ "./src/app/sections/choose-language/choose-language.component.ts");
/* harmony import */ var _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/regulations/regulations.component */ "./src/app/sections/regulations/regulations.component.ts");
/* harmony import */ var _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/abstract-selctor/abstract-selctor.component */ "./src/app/sections/abstract-selctor/abstract-selctor.component.ts");
/* harmony import */ var _commun_navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./commun/navbar/main-navbar-selector/main-navbar-selector.component */ "./src/app/commun/navbar/main-navbar-selector/main-navbar-selector.component.ts");
/* harmony import */ var _commun_footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./commun/footer/main-footer-selctor/main-footer-selctor.component */ "./src/app/commun/footer/main-footer-selctor/main-footer-selctor.component.ts");
/* harmony import */ var _commun_navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./commun/navbar/login-navbar/login-navbar.component */ "./src/app/commun/navbar/login-navbar/login-navbar.component.ts");
/* harmony import */ var _commun_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./commun/navbar/main-navbar/main-navbar.component */ "./src/app/commun/navbar/main-navbar/main-navbar.component.ts");
/* harmony import */ var _commun_footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./commun/footer/footer-nologin/footer-nologin.component */ "./src/app/commun/footer/footer-nologin/footer-nologin.component.ts");
/* harmony import */ var _commun_footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./commun/footer/footer-mian/footer-mian.component */ "./src/app/commun/footer/footer-mian/footer-mian.component.ts");
/* harmony import */ var _commun_footer_abstrac_footer_abstrac_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./commun/footer/abstrac-footer/abstrac-footer.component */ "./src/app/commun/footer/abstrac-footer/abstrac-footer.component.ts");


























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
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _sections_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _sections_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _sections_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _sections_choose_language_choose_language_component__WEBPACK_IMPORTED_MODULE_13__["ChooseLanguageComponent"], _sections_regulations_regulations_component__WEBPACK_IMPORTED_MODULE_14__["RegulationsComponent"], _sections_abstract_selctor_abstract_selctor_component__WEBPACK_IMPORTED_MODULE_15__["AbstractSelctorComponent"], _commun_navbar_main_navbar_selector_main_navbar_selector_component__WEBPACK_IMPORTED_MODULE_16__["MainNavbarSelectorComponent"], _commun_footer_main_footer_selctor_main_footer_selctor_component__WEBPACK_IMPORTED_MODULE_17__["MainFooterSelctorComponent"], _commun_navbar_login_navbar_login_navbar_component__WEBPACK_IMPORTED_MODULE_18__["LoginNavbarComponent"], _commun_navbar_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_19__["MainNavbarComponent"], _commun_footer_footer_nologin_footer_nologin_component__WEBPACK_IMPORTED_MODULE_20__["FooterNologinComponent"], _commun_footer_footer_mian_footer_mian_component__WEBPACK_IMPORTED_MODULE_21__["FooterMianComponent"], _commun_footer_abstrac_footer_abstrac_footer_component__WEBPACK_IMPORTED_MODULE_22__["AbstracFooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();
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
                    }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
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
LoginNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginNavbarComponent, selectors: [["app-login-navbar"]], decls: 14, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "navbar-base", "navbar-auth", "text-right", "navbar-login"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], [3, "src"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLinkActive", "active", 1, "nav-item"], [1, "nav-link", 3, "routerLink"]], template: function LoginNavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".navbar-login[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n.navbar-login[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuL25hdmJhci9sb2dpbi1uYXZiYXIvbG9naW4tbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdZO0VBQ0ksaUJBQUE7QUFGaEI7QUFLZ0I7RUFDSSxnQkFBQTtBQUhwQiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bi9uYXZiYXIvbG9naW4tbmF2YmFyL2xvZ2luLW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItbG9naW57XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"] });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




class LoginComponent {
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 44, vars: 30, consts: [[1, "section-center"], [1, "center-this", "auth-section"], [1, "section-name"], [1, "login-section"], [1, "validError"], [1, "form-elment"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control", "is-invalid"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control", "is-invalid"], [1, "row"], [1, "col-1"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], [1, "col-11"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "btn-block"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block"], ["type", "button", 1, "btn", "btn-warning", "btn-lg", "btn-block"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, "LOGIN.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "LOGINVALID.invalidData"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, "LOGINVALID.isNotActive"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, "LOGIN.emailaddressField"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 18, "LOGIN.emailHelp"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 20, "LOGIN.passwordField"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 22, "LOGIN.rememborButton"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 24, "LOGIN.loginButton"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 26, "LOGIN.IdonthaveAccount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 28, "LOGIN.paswordForget"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".section-center[_ngcontent-%COMP%] {\n  margin-top: 29px;\n  margin-bottom: 29px;\n}\n.section-center[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%] {\n  margin: 50px;\n}\n.section-center[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%]   .validError[_ngcontent-%COMP%] {\n  background-color: red;\n  color: white;\n  text-align: left;\n  border-radius: 10px;\n}\n.section-center[_ngcontent-%COMP%]   .login-section[_ngcontent-%COMP%]   .validError[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7QUFFUjtBQURRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdaO0FBRlk7RUFDSSxhQUFBO0FBSWhCIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1jZW50ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOjI5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOXB4O1xyXG4gICAgLmxvZ2luLXNlY3Rpb257XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgICAgIC52YWxpZEVycm9ye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_validator_register_dataPassed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/validator/register/dataPassed */ "./src/app/validator/register/dataPassed.ts");
/* harmony import */ var src_app_validator_register_posswordStrenght__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/validator/register/posswordStrenght */ "./src/app/validator/register/posswordStrenght.ts");
/* harmony import */ var src_app_validator_register_posswordMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/validator/register/posswordMatch */ "./src/app/validator/register/posswordMatch.ts");
/* harmony import */ var src_app_service_register_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/register/register.service */ "./src/app/service/register/register.service.ts");
/* harmony import */ var src_app_service_password_password_valid_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/password/password-valid.service */ "./src/app/service/password/password-valid.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");












function RegisterComponent_div_12_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.emptyEmail"), " ");
} }
function RegisterComponent_div_12_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.invalidEmail"), " ");
} }
function RegisterComponent_div_12_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.notaverible"), " ");
} }
function RegisterComponent_div_12_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.banedword"), " ");
} }
function RegisterComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_12_li_1_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_12_li_2_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_div_12_li_3_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_div_12_li_4_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.register.controls.email.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.emailSection.isNotavailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.emailSection.isBanned);
} }
function RegisterComponent_div_28_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.inValidbirthday"), " ");
} }
function RegisterComponent_div_28_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.emptyBirthday"), " ");
} }
function RegisterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_28_li_1_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_28_li_2_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.register.controls.birthday.errors.dataPassed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.register.controls.birthday.errors.required);
} }
function RegisterComponent_div_35_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.emptyPassword"), " ");
} }
function RegisterComponent_div_35_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.passtoWeek"), " ");
} }
function RegisterComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_35_li_1_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_35_li_2_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.register.controls.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.register.controls.password.errors.posswordStrenght);
} }
function RegisterComponent_div_47_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.emptyPassword"), " ");
} }
function RegisterComponent_div_47_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "REGESTRERVALID.passNotthesame"), " ");
} }
function RegisterComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_div_47_li_1_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_div_47_li_2_Template, 3, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.register.controls.passwordRepeat.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.register.controls.passwordRepeat.errors.passwordNotMatch);
} }
function RegisterComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "REGESTRERVALID.emptySex"));
} }
class RegisterComponent {
    constructor(RegisterService, elementRef, PasswordValid) {
        this.RegisterService = RegisterService;
        this.elementRef = elementRef;
        this.PasswordValid = PasswordValid;
        this.register = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('stelmaszv@gmail.com', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ]),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                Object(src_app_validator_register_dataPassed__WEBPACK_IMPORTED_MODULE_2__["dataPassed"])()
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Saf!eeqe$1', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                Object(src_app_validator_register_posswordStrenght__WEBPACK_IMPORTED_MODULE_3__["posswordStrenght"])(),
                Object(src_app_validator_register_posswordMatch__WEBPACK_IMPORTED_MODULE_4__["passwordMatch"])('passwordRepeat')
            ]),
            passwordRepeat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Saf!eeqe$1', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                Object(src_app_validator_register_posswordMatch__WEBPACK_IMPORTED_MODULE_4__["passwordMatch"])('password')
            ]),
            sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            regulations: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
        });
    }
    onSubmit() {
        if (this.register.valid) {
            if (this.regulationsTrue()) {
                this.registerStart();
            }
            else {
                this.regulationSwich();
            }
        }
        else {
            console.log(this.register.errors);
        }
    }
    ngOnInit() {
        this.emailSection = this.RegisterService.getEmialErrorSection();
    }
    ngAfterViewInit() {
        this.passwordValid();
        this.emailEvants();
        this.birthdayEvants();
        this.repeatPassword();
        this.sexEvant();
        this.regulationsEvants();
    }
    registerStart() {
        console.log('add api in this place');
    }
    regulationsEvants() {
        let obj = this;
        let elementRefRegulations = this.elementRef.nativeElement.querySelector('.regulationsValid');
        elementRefRegulations.addEventListener('change', function () {
            obj.regulationSwich();
        });
    }
    regulationSwich() {
        let elementRefRegulations = this.elementRef.nativeElement.querySelector('.regulationsValid');
        if (this.regulationsTrue()) {
            elementRefRegulations.classList.remove('is-invalid');
            elementRefRegulations.classList.add('is-valid');
        }
        else {
            elementRefRegulations.classList.add('is-invalid');
            elementRefRegulations.classList.remove('is-valid');
        }
    }
    regulationsTrue() {
        if (this.register.controls.regulations.value) {
            return true;
        }
    }
    sexEvant() {
        let obj = this;
        let elementRef = this.elementRef;
        let elementRefSex = this.elementRef.nativeElement.querySelector('.sex');
        elementRefSex.addEventListener('focusout', function () {
            if (!obj.register.controls.sex.value) {
                elementRefSex.classList.add('is-invalid');
                obj.showErrorsList(elementRefSex, elementRef, '.SexValid');
            }
            else {
                elementRefSex.classList.remove('is-invalid');
                elementRefSex.classList.add('is-valid');
            }
            obj.showErrorsList(elementRefSex, elementRef, '.SexValid');
        });
    }
    repeatPassword() {
        let obj = this;
        let elementRef = this.elementRef;
        let elementRefRepeatPassword = this.elementRef.nativeElement.querySelector('.Password-repeat');
        elementRefRepeatPassword.addEventListener('keyup', function () {
            matchPasswords(this.value);
        });
        function matchPasswords(value) {
            let password = elementRef.nativeElement.querySelector('.password');
            if (value != password.value) {
                elementRefRepeatPassword.classList.add('is-invalid');
                elementRefRepeatPassword.classList.remove('is-valid');
                switchPassword(password, true);
            }
            else {
                elementRefRepeatPassword.classList.add('is-valid');
                elementRefRepeatPassword.classList.remove('is-invalid');
                switchPassword(password, false);
            }
            obj.showErrorsList(elementRefRepeatPassword, elementRef, '.PasswordRepeatValid');
            function switchPassword(password, passwordMatch) {
                if (passwordMatch) {
                    if (password.classList.contains('is-valid')) {
                        password.classList.remove('is-valid');
                        password.classList.add('is-invalid');
                    }
                    else {
                        password.classList.add('is-invalid');
                    }
                }
                else {
                    if (password.classList.contains('is-invalid')) {
                        password.classList.remove('is-invalid');
                        password.classList.add('is-valid');
                    }
                    else {
                        password.classList.add('is-valid');
                    }
                }
            }
        }
    }
    passwordValid() {
        let obj = this;
        let elementRef = this.elementRef;
        let elementRefPassword = this.elementRef.nativeElement.querySelector('.password');
        elementRefPassword.addEventListener('keyup', function () {
            moveIn(elementRefPassword);
            posswordStrenght(this.value);
            obj.showErrorsList(elementRefPassword, elementRef, '.passwordValidErrors');
        });
        elementRefPassword.addEventListener('focusout', function () {
            moveOut(elementRefPassword);
        });
        function posswordStrenght(value) {
            let progresBarStatus = elementRef.nativeElement.querySelector('.progress-bar');
            progresBarStatus.style.width = obj.PasswordValid.validate(value) + "%";
            setPasswordStyle(progresBarStatus, obj.PasswordValid.validate(value));
        }
        function setPasswordStyle(progresBarStatus, procent) {
            let className = 'bg-danger';
            elementRefPassword.classList.remove("is-valid");
            elementRefPassword.classList.remove("is-invalid");
            elementRefPassword.classList.add("is-invalid");
            if (procent > 50) {
                elementRefPassword.classList.remove("is-invalid");
                className = 'bg-warning';
            }
            if (procent > 75) {
                elementRefPassword.classList.remove("is-invalid");
                elementRefPassword.classList.add("is-valid");
                className = 'bg-success';
            }
            progresBarStatus.classList.remove('bg-danger');
            progresBarStatus.classList.remove('bg-warning');
            progresBarStatus.classList.remove('bg-success');
            progresBarStatus.classList.add(className);
        }
        function moveIn(eR) {
            progresSwich('visible');
            eR.style.borderRadius = '0px 0px 10px 10px';
        }
        function moveOut(eR) {
            if (!elementRefPassword.classList.contains('is-invalid')) {
                progresSwich('hidden');
                eR.style.borderRadius = '10px';
            }
        }
        function progresSwich(swich) {
            let progressBar = elementRef.nativeElement.querySelector('.progress');
            progressBar.style.visibility = swich;
        }
    }
    birthdayEvants() {
        let obj = this;
        let elementRef = this.elementRef;
        let elementRefBirthday = this.elementRef.nativeElement.querySelector('.birthday');
        elementRefBirthday.addEventListener('focusout', function () {
            obj.addClassEmailValid(obj.register.controls.birthday.errors, elementRefBirthday);
            obj.showErrorsList(elementRefBirthday, elementRef, '.birthdayValidErrors');
        });
    }
    emailEvants() {
        let obj = this;
        let elementRef = this.elementRef;
        let elementRefEmail = this.elementRef.nativeElement.querySelector('.email');
        elementRefEmail.addEventListener('keyup', function () {
            obj.addClassEmailValid(obj.register.controls.email.errors, elementRefEmail);
            obj.showErrorsList(elementRefEmail, elementRef, '.emailValidErrors');
        });
    }
    showErrorsList(elementRefID, elementRef, classValid) {
        let el = elementRef.nativeElement.querySelector(classValid);
        let logError = elementRef.nativeElement.querySelector('.input-group-text');
        if (elementRefID.classList.contains('is-invalid')) {
            logError.classList.add("invalidErrorsListLogo");
            elementRefID.classList.add("invalidErrorsList");
            el.classList.add("show-Error");
        }
        else {
            logError.classList.remove("invalidErrorsListLogo");
            elementRefID.classList.remove("invalidErrorsList");
            el.classList.remove("show-Error");
        }
    }
    addClassEmailValid(formItem, el) {
        el.classList.add("is-invalid");
        if (!formItem) {
            el.classList.remove("is-invalid");
            el.classList.add("is-valid");
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_register_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_password_password_valid_service__WEBPACK_IMPORTED_MODULE_6__["PasswordValidService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 77, vars: 49, consts: [[1, "section-center"], [1, "auth-section"], [1, "section-name"], [1, "register-section", "center-this"], [3, "formGroup", "ngSubmit"], [1, "form-elment", "email-form"], ["for", "email"], [1, "validError", "bg-danger", "text-white", "emailValidErrors"], [4, "ngIf"], [1, "row"], [1, "col-1"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "col-11"], ["for", "email", "type", "text", "placeholder", "cos@domek.pl", "formControlName", "email", 1, "form-control", "email"], ["id", "emailHelp", 1, "form-text", "text-muted"], [1, "form-elment", "data-form"], ["for", "birthday"], [1, "validError", "bg-danger", "text-white", "birthdayValidErrors"], ["type", "date", "id", "Password", "formControlName", "birthday", 1, "form-control", "birthday"], [1, "form-elment", "Password-form"], ["for", "Password"], [1, "validError", "bg-danger", "text-white", "passwordValidErrors"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "0", "ria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "0"], ["type", "password", "id", "Password", "formControlName", "password", 1, "form-control", "password"], ["id", "passwordHelp", 1, "form-text", "text-muted"], [1, "form-elment", "Password-repeat-form"], ["for", "exampleInputPassword1"], [1, "validError", "bg-danger", "text-white", "PasswordRepeatValid"], ["type", "password", "id", "exampleInputPassword1", "formControlName", "passwordRepeat", 1, "form-control", "Password-repeat"], [1, "form-elment", "sex-form"], ["for", "exampleInputEmail1"], [1, "validError", "bg-danger", "text-white", "SexValid"], ["formControlName", "sex", "placeholder", "wybierz p\u0142ec", 1, "form-control", "sex"], ["value", "male"], ["value", "female"], [1, "form-elment"], [1, "custom-control", "custom-checkbox", "mb-3"], ["type", "checkbox", "id", "customControlValidation1", "formControlName", "regulations", 1, "custom-control-input", "regulationsValid"], ["for", "customControlValidation1", 1, "custom-control-label"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], ["type", "button", 1, "btn", "btn-warning", "btn-lg", "btn-block"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegisterComponent_div_12_Template, 5, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_div_35_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RegisterComponent_div_47_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RegisterComponent_div_54_Template, 4, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 21, "REGESTRER.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 23, "REGESTRER.emailaddressField"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 25, "REGESTRER.emailHelp"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 27, "REGESTRER.birthday"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.controls.birthday.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 29, "REGESTRER.passwordField"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.controls.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 31, "REGESTRER.passwordhelp"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 33, "REGESTRER.passwordRepeat"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.controls.passwordRepeat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 35, "REGESTRER.sexField"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register.controls.sex.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 37, "REGESTRER.sexFirst"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 39, "REGESTRER.sexSecund"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 41, "REGESTRER.regulations"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 43, "REGESTRERVALID.regulationsNotacept"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.register.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 45, "REGESTRER.registerButton"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 47, "REGESTRER.iarledyhaveAccountButton"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%] {\n  margin: 50px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.regulations[_ngcontent-%COMP%] {\n  margin-left: -80%;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.email-form[_ngcontent-%COMP%]   .invalidErrorsListLogo[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 10px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.email-form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  margin-left: -2px;\n  border-radius: 0px 10px 10px 0px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.email-form[_ngcontent-%COMP%]   .email.error[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 0px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.email-form[_ngcontent-%COMP%]   .email.invalidErrorsList[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 0px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.Password-form[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  visibility: hidden;\n  border-radius: 0px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.Password-form[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  border-radius: 0px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.Password-form[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment.regulations-form[_ngcontent-%COMP%]   .validError[_ngcontent-%COMP%] {\n  background-color: #67b8fa;\n  color: red;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin-left: -2px;\n  margin-top: 0.5px;\n  border-radius: 10px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment[_ngcontent-%COMP%]   .form-control.error[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 10px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment[_ngcontent-%COMP%]   .form-control.invalidErrorsList[_ngcontent-%COMP%] {\n  border-radius: 0px 0px 10px 10px;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment[_ngcontent-%COMP%]   .validError[_ngcontent-%COMP%] {\n  display: none;\n  padding-left: 10%;\n  text-align: left;\n  border-radius: 10px 10px 0px 0px;\n  width: 99.5%;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment[_ngcontent-%COMP%]   .validError.show-Error[_ngcontent-%COMP%] {\n  display: block;\n}\n.section-center[_ngcontent-%COMP%]   .register-section[_ngcontent-%COMP%]   .form-elment[_ngcontent-%COMP%]   .validError[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0FBQVI7QUFFWTtFQUNJLGlCQUFBO0FBQWhCO0FBR2dCO0VBQ0ksZ0NBQUE7QUFEcEI7QUFHZ0I7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0FBRHBCO0FBRW9CO0VBQ0ksK0JBQUE7QUFBeEI7QUFFb0I7RUFDSSwrQkFBQTtBQUF4QjtBQUtnQjtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFIcEI7QUFJb0I7RUFDSSxrQkFBQTtBQUZ4QjtBQUtnQjtFQUNJLGdCQUFBO0FBSHBCO0FBT2dCO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0FBTHBCO0FBU1k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFQaEI7QUFRZ0I7RUFDSSxnQ0FBQTtBQU5wQjtBQVFnQjtFQUNJLGdDQUFBO0FBTnBCO0FBU1k7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQVBoQjtBQVFnQjtFQUNJLGNBQUE7QUFOcEI7QUFRZ0I7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBTnBCIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1jZW50ZXJ7XHJcbiAgICAucmVnaXN0ZXItc2VjdGlvbntcclxuICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgLmZvcm0tZWxtZW50e1xyXG4gICAgICAgICAgICAmLnJlZ3VsYXRpb25ze1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC04MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5lbWFpbC1mb3Jte1xyXG4gICAgICAgICAgICAgICAgLmludmFsaWRFcnJvcnNMaXN0TG9nb3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5lbWFpbHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAmLmVycm9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5pbnZhbGlkRXJyb3JzTGlzdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDBweDsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuUGFzc3dvcmQtZm9ybXtcclxuICAgICAgICAgICAgICAgIC5wcm9ncmVzc3tcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9ncmVzcy1iYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBhc3N3b3Jke1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5yZWd1bGF0aW9ucy1mb3Jte1xyXG4gICAgICAgICAgICAgICAgLnZhbGlkRXJyb3J7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMywgMTg0LCAyNTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9se1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjAuNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICYuZXJyb3J7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5pbnZhbGlkRXJyb3JzTGlzdHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZhbGlkRXJyb3J7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk5LjUlO1xyXG4gICAgICAgICAgICAgICAgJi5zaG93LUVycm9ye1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIFxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: src_app_service_register_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_service_password_password_valid_service__WEBPACK_IMPORTED_MODULE_6__["PasswordValidService"] }]; }, null); })();


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
RegulationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegulationsComponent, selectors: [["app-regulations"]], decls: 4, vars: 3, consts: [[1, "section-center"], [1, "auth-section"]], template: function RegulationsComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ "./src/app/service/password/password-valid.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/password/password-valid.service.ts ***!
  \************************************************************/
/*! exports provided: PasswordValidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidService", function() { return PasswordValidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PasswordValidService {
    validate(value) {
        return this.setScore(value);
    }
    setScore(pass) {
        let score = 0;
        if (!pass)
            return score;
        // award every unique letter until 5 repetitions
        let letters = new Object();
        for (let i = 0; i < pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 5.0 / letters[pass[i]];
        }
        // bonus points for mixing it up
        let variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        };
        let variationCount = 0;
        for (let check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;
        return score;
    }
}
PasswordValidService.ɵfac = function PasswordValidService_Factory(t) { return new (t || PasswordValidService)(); };
PasswordValidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordValidService, factory: PasswordValidService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordValidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/register/register.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/register/register.service.ts ***!
  \******************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _time_time_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../time/time.service */ "./src/app/service/time/time.service.ts");
/* harmony import */ var _validator_email_valid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator/email-valid.service */ "./src/app/service/validator/email-valid.service.ts");




class RegisterService {
    constructor(Time, EmailValid) {
        this.Time = Time;
        this.EmailValid = EmailValid;
    }
    ifDataPassedRegister(data) {
        return this.Time.ifDataPassed(data);
    }
    checkAge() {
    }
    emailValid(email) {
        return this.EmailValid.validate(email);
    }
    getEmialErrorSection() {
        return this.EmailValid.getErros();
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_time_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_validator_email_valid_service__WEBPACK_IMPORTED_MODULE_2__["EmailValidService"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _time_time_service__WEBPACK_IMPORTED_MODULE_1__["TimeService"] }, { type: _validator_email_valid_service__WEBPACK_IMPORTED_MODULE_2__["EmailValidService"] }]; }, null); })();


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
    ifDataPassed(data) {
        return (Date.now() > this.setDataTime(data)) ? true : false;
    }
    setDataTime(data) {
        var theBigDay = new Date(data);
        var sameAsBigDay = new Date();
        return sameAsBigDay.setTime(theBigDay.getTime());
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

/***/ "./src/app/service/validator/baned.ts":
/*!********************************************!*\
  !*** ./src/app/service/validator/baned.ts ***!
  \********************************************/
/*! exports provided: banedEmails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banedEmails", function() { return banedEmails; });
const banedEmails = [
    "badword@gmail.pl"
];


/***/ }),

/***/ "./src/app/service/validator/email-valid.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/validator/email-valid.service.ts ***!
  \**********************************************************/
/*! exports provided: EmailValidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidService", function() { return EmailValidService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_validator_baned__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/validator/baned */ "./src/app/service/validator/baned.ts");



class EmailValidService {
    constructor() {
        this.lenghtLimit = 3;
        this.erros = {
            'isInvalid': false,
            'isBanned': false,
            'isNotavailable': false
        };
    }
    getErros() {
        return this.erros;
    }
    validate(email) {
        if (this.ifEmailIsValid(email)) {
            this.erros.isInvalid = false;
            if (this.isNotBanned(email)) {
                this.erros.isBanned = false;
                if (!this.isAvailable) {
                    this.erros.isNotavailable = true;
                }
                else {
                    this.erros.isNotavailable = false;
                }
            }
            else {
                this.erros.isBanned = true;
            }
        }
        else {
            this.erros.isInvalid = true;
        }
        return this.erros;
    }
    isAvailable(email) {
        return (email == "test@123.pl") ? true : false;
    }
    isNotBanned(email) {
        let found = false;
        src_app_service_validator_baned__WEBPACK_IMPORTED_MODULE_1__["banedEmails"].forEach(element => {
            if (email != element) {
                found = true;
            }
        });
        return found;
    }
    ifEmailIsValid(email) {
        if (email.length > this.lenghtLimit) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    }
}
EmailValidService.ɵfac = function EmailValidService_Factory(t) { return new (t || EmailValidService)(); };
EmailValidService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailValidService, factory: EmailValidService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailValidService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/validator/register/dataPassed.ts":
/*!**************************************************!*\
  !*** ./src/app/validator/register/dataPassed.ts ***!
  \**************************************************/
/*! exports provided: dataPassed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataPassed", function() { return dataPassed; });
/* harmony import */ var src_app_service_time_time_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/time/time.service */ "./src/app/service/time/time.service.ts");

function dataPassed() {
    return (control) => {
        let time = new src_app_service_time_time_service__WEBPACK_IMPORTED_MODULE_0__["TimeService"];
        const dataPassed = time.ifDataPassed(control.value);
        return !dataPassed ? { dataPassed: { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/validator/register/posswordMatch.ts":
/*!*****************************************************!*\
  !*** ./src/app/validator/register/posswordMatch.ts ***!
  \*****************************************************/
/*! exports provided: passwordMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatch", function() { return passwordMatch; });
function passwordMatch(otherControlName) {
    let thisControl;
    let otherControl;
    return function matchOtherValidate(control) {
        if (!control.parent) {
            return null;
        }
        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName);
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return {
                passwordNotMatch: true
            };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/validator/register/posswordStrenght.ts":
/*!********************************************************!*\
  !*** ./src/app/validator/register/posswordStrenght.ts ***!
  \********************************************************/
/*! exports provided: posswordStrenght */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posswordStrenght", function() { return posswordStrenght; });
/* harmony import */ var _service_password_password_valid_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/password/password-valid.service */ "./src/app/service/password/password-valid.service.ts");

function posswordStrenght() {
    return (control) => {
        let passwordService = new _service_password_password_valid_service__WEBPACK_IMPORTED_MODULE_0__["PasswordValidService"];
        let posswordStrenght = (passwordService.validate(control.value) > 50) ? true : false;
        return !posswordStrenght ? { posswordStrenght: { value: control.value } } : null;
    };
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