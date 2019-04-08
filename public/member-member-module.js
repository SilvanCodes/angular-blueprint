(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["member-member-module"],{

/***/ "./src/app/member/member.component.html":
/*!**********************************************!*\
  !*** ./src/app/member/member.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  member works!\n</p>\n"

/***/ }),

/***/ "./src/app/member/member.component.scss":
/*!**********************************************!*\
  !*** ./src/app/member/member.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlci9tZW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/*!********************************************!*\
  !*** ./src/app/member/member.component.ts ***!
  \********************************************/
/*! exports provided: MemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberComponent", function() { return MemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MemberComponent = /** @class */ (function () {
    function MemberComponent() {
    }
    MemberComponent.prototype.ngOnInit = function () {
    };
    MemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(/*! ./member.component.html */ "./src/app/member/member.component.html"),
            styles: [__webpack_require__(/*! ./member.component.scss */ "./src/app/member/member.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/member/member.module.ts":
/*!*****************************************!*\
  !*** ./src/app/member/member.module.ts ***!
  \*****************************************/
/*! exports provided: MemberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberModule", function() { return MemberModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _member_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member.component */ "./src/app/member/member.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    { path: '', component: _member_component__WEBPACK_IMPORTED_MODULE_3__["MemberComponent"] }
];
var MemberModule = /** @class */ (function () {
    function MemberModule() {
    }
    MemberModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _member_component__WEBPACK_IMPORTED_MODULE_3__["MemberComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], MemberModule);
    return MemberModule;
}());



/***/ })

}]);
//# sourceMappingURL=member-member-module.js.map