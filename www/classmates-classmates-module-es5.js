(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classmates-classmates-module"], {
    /***/
    "A8Oc":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/classmates/classmates.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function A8Oc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            Classmates\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n        <ion-toolbar>\n            <ion-title size=\"large\">Classmates</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <app-explore-container name=\"Classmates\"></app-explore-container>\n</ion-content>";
      /***/
    },

    /***/
    "ToLX":
    /*!*************************************************!*\
      !*** ./src/app/classmates/classmates.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ToLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzc21hdGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "f1Bo":
    /*!*************************************************!*\
      !*** ./src/app/classmates/classmates.module.ts ***!
      \*************************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function f1Bo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _classmates_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./classmates.page */
      "oB8H");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _classmates_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./classmates-routing.module */
      "sFaD");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _classmates_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_classmates_page__WEBPACK_IMPORTED_MODULE_5__["ClassmatesPage"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "oB8H":
    /*!***********************************************!*\
      !*** ./src/app/classmates/classmates.page.ts ***!
      \***********************************************/

    /*! exports provided: ClassmatesPage */

    /***/
    function oB8H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassmatesPage", function () {
        return ClassmatesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_classmates_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./classmates.page.html */
      "A8Oc");
      /* harmony import */


      var _classmates_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./classmates.page.scss */
      "ToLX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ClassmatesPage = function ClassmatesPage() {
        _classCallCheck(this, ClassmatesPage);
      };

      ClassmatesPage.ctorParameters = function () {
        return [];
      };

      ClassmatesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-classmates',
        template: _raw_loader_classmates_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_classmates_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ClassmatesPage);
      /***/
    },

    /***/
    "sFaD":
    /*!*********************************************************!*\
      !*** ./src/app/classmates/classmates-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function sFaD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _classmates_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./classmates.page */
      "oB8H");

      var routes = [{
        path: '',
        component: _classmates_page__WEBPACK_IMPORTED_MODULE_3__["ClassmatesPage"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=classmates-classmates-module-es5.js.map