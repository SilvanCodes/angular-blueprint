(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./member/member.module": [
		"./src/app/member/member.module.ts",
		"member-member-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n<div *ngIf=\"errors | async; let err;\">\n  {{ err | json }}\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/error.service */ "./src/app/core/services/error.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(error) {
        this.error = error;
        this.title = 'blueprint';
        this.errors = this.error.getAllErrors();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/public.module */ "./src/app/public/public.module.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _public_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/login/login.component */ "./src/app/public/login/login.component.ts");
/* harmony import */ var _public_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./public/signup/signup.component */ "./src/app/public/signup/signup.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _core_guards_user_present_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/guards/user-present.guard */ "./src/app/core/guards/user-present.guard.ts");














var routes = [
    { path: '', component: _public_public_component__WEBPACK_IMPORTED_MODULE_9__["PublicComponent"],
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _public_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
            { path: 'signup', component: _public_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] }
        ]
    },
    { path: 'member', canLoad: [_core_guards_user_present_guard__WEBPACK_IMPORTED_MODULE_13__["UserPresentGuard"]], loadChildren: './member/member.module#MemberModule' },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { enableTracing: true }),
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _public_public_module__WEBPACK_IMPORTED_MODULE_8__["PublicModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/user-present.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/core/guards/user-present.guard.ts ***!
  \***************************************************/
/*! exports provided: UserPresentGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPresentGuard", function() { return UserPresentGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");





var UserPresentGuard = /** @class */ (function () {
    function UserPresentGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserPresentGuard.prototype.canLoad = function () {
        var _this = this;
        console.log('in guard');
        return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), 
        // tap(console.log),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return !!user; }), //  && user.emailVerified
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (okay) { return !okay ? _this.router.navigate(['/login']) : null; })
        // redirect to login and pop/up with -verify email please-
        );
    };
    UserPresentGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserPresentGuard);
    return UserPresentGuard;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.service */ "./src/app/core/services/error.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, error, router) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.error = error;
        this.router = router;
        this.user$ = firebaseAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        // this subscription holds the user in correct place all the time
        // TODO: maybe dedup navigate to member on user-refresh
        this.userInPlace = this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.router.navigate([!!user ? '/member' : '/login']); })).subscribe();
    }
    AuthService_1 = AuthService;
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then() // result gets communicated over user$ observable
            .catch(function (err) { return _this.error.pushError(new _error_service__WEBPACK_IMPORTED_MODULE_3__["Error"](AuthService_1.name, 'Could not sign you up.', err)); });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then() // result gets communicated over user$ observable
            .catch(function (err) { return _this.error.pushError(new _error_service__WEBPACK_IMPORTED_MODULE_3__["Error"](AuthService_1.name, 'Could not log you in.', err)); });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.firebaseAuth
            .auth
            .signOut()
            .then() // result gets communicated over user$ observable
            .catch(function (err) { return _this.error.pushError(new _error_service__WEBPACK_IMPORTED_MODULE_3__["Error"](AuthService_1.name, 'Could not log you out.', err)); });
    };
    AuthService.prototype.ngOnDestroy = function () {
        this.userInPlace.unsubscribe();
    };
    var AuthService_1;
    AuthService = AuthService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/error.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/error.service.ts ***!
  \************************************************/
/*! exports provided: ErrorLevel, Error, ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLevel", function() { return ErrorLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ErrorLevel;
(function (ErrorLevel) {
    ErrorLevel[ErrorLevel["Warning"] = 0] = "Warning";
    ErrorLevel[ErrorLevel["Critical"] = 1] = "Critical";
})(ErrorLevel || (ErrorLevel = {}));
var Error = /** @class */ (function () {
    function Error(source, message, payload, type) {
        if (type === void 0) { type = ErrorLevel.Warning; }
        this.source = source;
        this.message = message;
        this.payload = payload;
        this.type = type;
    }
    return Error;
}());

var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.errorStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ErrorService.prototype.pushError = function (error) {
        this.errorStream.next(error);
    };
    ErrorService.prototype.getAllErrors = function () {
        return this.errorStream.asObservable();
    };
    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/public/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/public/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n  <label>\n    Email\n    <input type=\"text\" formControlName=\"email\">\n  </label>\n\n  <label>\n    Password\n    <input type=\"password\" formControlName=\"password\">\n  </label>\n\n  <button type=\"submit\">Login</button>\n</form>\n\n<a routerLink=\"/signup\">Sign Up</a>"

/***/ }),

/***/ "./src/app/public/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/public/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/public/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _a = this.loginForm.value, email = _a.email, password = _a.password;
        this.auth.login(email, password);
    };
    LoginComponent.prototype.logout = function () {
        this.auth.logout();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/public/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/public/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/public/public.component.html":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  public works!\n</p>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/public/public.component.scss":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wdWJsaWMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/public.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicComponent = /** @class */ (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.scss */ "./src/app/public/public.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/public/public.module.ts":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/public/login/login.component.ts");
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/public/signup/signup.component.ts");








var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _public_component__WEBPACK_IMPORTED_MODULE_4__["PublicComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/public/signup/signup.component.html":
/*!*****************************************************!*\
  !*** ./src/app/public/signup/signup.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  signup works!\n</p>\n\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n  <label>\n    Email\n    <input type=\"text\" formControlName=\"email\">\n    <span *ngIf=\"email.errors?.email\">\n      Email is not valid.\n    </span>\n    <span *ngIf=\"email.errors?.required && !email.pristine\">\n      Email is required.\n    </span>\n  </label>\n\n  <form formGroupName=\"passwords\">\n    <label>\n      Password\n      <input type=\"password\" formControlName=\"password\">\n      <span *ngIf=\"password.errors?.minlength\">\n        Password needs to be {{ password.errors.minlength.requiredLength }} characters long.\n      </span>\n      <span *ngIf=\"password.errors?.required && !password.pristine\">\n          Password is required.\n      </span>\n    </label>\n    \n    <label>\n      Confirm Password\n      <input type=\"password\" formControlName=\"passwordConfirm\">\n    </label>\n\n    <span *ngIf=\"passwords.errors?.mismatch && !passwordConfirm.pristine\">\n      Passwords must match.\n    </span>\n    \n  </form>\n\n  <button type =\"submit\" [disabled]=\"!signupForm.valid\">Sign Up</button>\n</form>\n\n<p>\n  Form Status: {{ signupForm.status }}\n</p>\n"

/***/ }),

/***/ "./src/app/public/signup/signup.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/public/signup/signup.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/public/signup/signup.component.ts":
/*!***************************************************!*\
  !*** ./src/app/public/signup/signup.component.ts ***!
  \***************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, fb) {
        this.auth = auth;
        this.fb = fb;
        this.signupForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            passwords: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
                passwordConfirm: ['']
            }, { validators: this.matching })
        });
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.signup = function () {
        console.log('sigunup with', this.email.value, this.password.value);
        this.auth.signup(this.email.value, this.password.value);
    };
    SignupComponent.prototype.matching = function (group) {
        var valid = group.get('password').value === group.get('passwordConfirm').value;
        if (valid)
            return null;
        return {
            mismatch: true
        };
    };
    Object.defineProperty(SignupComponent.prototype, "email", {
        get: function () { return this.signupForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () { return this.signupForm.get('passwords').get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "passwords", {
        get: function () { return this.signupForm.get('passwords'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "passwordConfirm", {
        get: function () { return this.signupForm.get('passwords').get('passwordConfirm'); },
        enumerable: true,
        configurable: true
    });
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/public/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/public/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



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
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAf4-Hs5p5itR0LVR__Kg-iPQLYIWRKk6I',
        authDomain: 'test-firebase-6f780.firebaseapp.com',
        databaseURL: 'https://test-firebase-6f780.firebaseio.com',
        projectId: 'test-firebase-6f780',
        storageBucket: 'test-firebase-6f780.appspot.com',
        messagingSenderId: '988850458190'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/silvan/projects/angular/blueprint/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map