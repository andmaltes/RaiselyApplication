(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\Repository\Raisely\Application\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2mQu":
    /*!******************************************************************************************!*\
      !*** ./src/app/modals/error-modals/error-modal/error-modal-b/error-modal-b.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ErrorModalBComponent */

    /***/
    function mQu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorModalBComponent", function () {
        return ErrorModalBComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ErrorModalBComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var error_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](error_r1);
        }
      }

      var ErrorModalBComponent = /*#__PURE__*/function () {
        function ErrorModalBComponent() {
          _classCallCheck(this, ErrorModalBComponent);

          this.errorList = [];
        }

        _createClass(ErrorModalBComponent, [{
          key: "errorListInput",
          set: function set(errorList) {
            this.errorList = Array.from(new Set(errorList));
          }
        }]);

        return ErrorModalBComponent;
      }();

      ErrorModalBComponent.ɵfac = function ErrorModalBComponent_Factory(t) {
        return new (t || ErrorModalBComponent)();
      };

      ErrorModalBComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorModalBComponent,
        selectors: [["app-error-modal-b"]],
        inputs: {
          close: "close",
          errorListInput: "errorListInput"
        },
        decls: 7,
        vars: 1,
        consts: [["mat-dialog-title", ""], [4, "ngFor", "ngForOf"], ["align", "end"], [1, "mat-raised-button", "mat-primary", 3, "click"]],
        template: function ErrorModalBComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Something has happened!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ErrorModalBComponent_ng_container_3_Template, 3, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorModalBComponent_Template_button_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.errorList);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9lcnJvci1tb2RhbHMvZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwtYi9lcnJvci1tb2RhbC1iLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorModalBComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error-modal-b',
            templateUrl: './error-modal-b.component.html',
            styleUrls: ['./error-modal-b.component.scss']
          }]
        }], null, {
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          errorListInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "7j/G":
    /*!******************************************!*\
      !*** ./src/app/mainStore/app.reducer.ts ***!
      \******************************************/

    /*! exports provided: reducers */

    /***/
    function jG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducers", function () {
        return reducers;
      });
      /* harmony import */


      var _modals_error_modals_store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../modals/error-modals/store/index */
      "9H6I");

      var reducers = {
        ErrorModal: _modals_error_modals_store_index__WEBPACK_IMPORTED_MODULE_0__["reducer"]
      };
      /***/
    },

    /***/
    "9H6I":
    /*!****************************************************!*\
      !*** ./src/app/modals/error-modals/store/index.ts ***!
      \****************************************************/

    /*! exports provided: SET_ERROR, CLEAR_ERRORS, SET_MODAL, setError, clearErrors, setModal, errorReducer, selectErrorModalState, selectModal, selectErrors, actions, initialErrorModalState, reducer, selectors */

    /***/
    function H6I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _error_modal_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error-modal.actions */
      "J+Fc");
      /* harmony reexport (module object) */


      __webpack_require__.d(__webpack_exports__, "actions", function () {
        return _error_modal_actions__WEBPACK_IMPORTED_MODULE_0__;
      });
      /* harmony import */


      var _error_modal_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-modal.reducers */
      "Vmel");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "initialErrorModalState", function () {
        return _error_modal_reducers__WEBPACK_IMPORTED_MODULE_1__["initialErrorModalState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return _error_modal_reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"];
      });
      /* harmony import */


      var _error_modal_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error-modal.selectors */
      "rC6s");
      /* harmony reexport (module object) */


      __webpack_require__.d(__webpack_exports__, "selectors", function () {
        return _error_modal_selectors__WEBPACK_IMPORTED_MODULE_2__;
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SET_ERROR", function () {
        return _error_modal_actions__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function () {
        return _error_modal_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SET_MODAL", function () {
        return _error_modal_actions__WEBPACK_IMPORTED_MODULE_0__["SET_MODAL"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setError", function () {
        return _error_modal_actions__WEBPACK_IMPORTED_MODULE_0__["setError"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "clearErrors", function () {
        return _error_modal_actions__WEBPACK_IMPORTED_MODULE_0__["clearErrors"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "setModal", function () {
        return _error_modal_actions__WEBPACK_IMPORTED_MODULE_0__["setModal"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "errorReducer", function () {
        return _error_modal_reducers__WEBPACK_IMPORTED_MODULE_1__["errorReducer"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "selectErrorModalState", function () {
        return _error_modal_selectors__WEBPACK_IMPORTED_MODULE_2__["selectErrorModalState"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "selectModal", function () {
        return _error_modal_selectors__WEBPACK_IMPORTED_MODULE_2__["selectModal"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "selectErrors", function () {
        return _error_modal_selectors__WEBPACK_IMPORTED_MODULE_2__["selectErrors"];
      });
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "HBvr":
    /*!************************************************************!*\
      !*** ./src/app/modals/error-modals/error-modals.module.ts ***!
      \************************************************************/

    /*! exports provided: ErrorModalsModule */

    /***/
    function HBvr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorModalsModule", function () {
        return ErrorModalsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _error_modal_error_modal_b_error_modal_b_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error-modal/error-modal-b/error-modal-b.component */
      "2mQu");
      /* harmony import */


      var _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error-modal/error-modal.component */
      "lc5s");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var ErrorModalsModule = function ErrorModalsModule() {
        _classCallCheck(this, ErrorModalsModule);
      };

      ErrorModalsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ErrorModalsModule
      });
      ErrorModalsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function ErrorModalsModule_Factory(t) {
          return new (t || ErrorModalsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErrorModalsModule, {
          declarations: [_error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_4__["ErrorModalComponent"], _error_modal_error_modal_b_error_modal_b_component__WEBPACK_IMPORTED_MODULE_3__["ErrorModalBComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorModalsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_4__["ErrorModalComponent"], _error_modal_error_modal_b_error_modal_b_component__WEBPACK_IMPORTED_MODULE_3__["ErrorModalBComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "J+Fc":
    /*!******************************************************************!*\
      !*** ./src/app/modals/error-modals/store/error-modal.actions.ts ***!
      \******************************************************************/

    /*! exports provided: SET_ERROR, CLEAR_ERRORS, SET_MODAL, setError, clearErrors, setModal */

    /***/
    function JFc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SET_ERROR", function () {
        return SET_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function () {
        return CLEAR_ERRORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SET_MODAL", function () {
        return SET_MODAL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setError", function () {
        return setError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clearErrors", function () {
        return clearErrors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setModal", function () {
        return setModal;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var SET_ERROR = '[ERROR] SET_ERROR';
      var CLEAR_ERRORS = '[ERROR] CLEAR_ERRORS';
      var SET_MODAL = '[ERROR] SET_MODAL';
      var setError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_ERROR, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var clearErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAR_ERRORS);
      var setModal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SET_MODAL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "Q+5x":
    /*!****************************************************************************!*\
      !*** ./src/app/modals/confirmation-moldal/confirmation-modal.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ConfirmationModalComponent */

    /***/
    function Q5x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmationModalComponent", function () {
        return ConfirmationModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var ConfirmationModalComponent = /*#__PURE__*/function () {
        function ConfirmationModalComponent(dialogRef) {
          _classCallCheck(this, ConfirmationModalComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(ConfirmationModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "close",
          value: function close() {
            this.dialogRef.close();
          }
        }]);

        return ConfirmationModalComponent;
      }();

      ConfirmationModalComponent.ɵfac = function ConfirmationModalComponent_Factory(t) {
        return new (t || ConfirmationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      ConfirmationModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmationModalComponent,
        selectors: [["app-confirmation-modal"]],
        decls: 7,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["align", "end"], [1, "mat-raised-button", "mat-primary", 3, "click"]],
        template: function ConfirmationModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thanks!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_5_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.message, "\n");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jb25maXJtYXRpb24tbW9sZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-confirmation-modal',
            templateUrl: './confirmation-modal.component.html',
            styleUrls: ['./confirmation-modal.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _modals_error_modals_error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./modals/error-modals/error-modal/error-modal.component */
      "lc5s");
      /* harmony import */


      var _modals_error_modals_services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modals/error-modals/services/error-modal.store.service */
      "aBuy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(errorModalStoreService, matDialog) {
          _classCallCheck(this, AppComponent);

          this.errorModalStoreService = errorModalStoreService;
          this.matDialog = matDialog;
          this.title = 'Application';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(AppComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true); // Now let's also unsubscribe from the subject itself:

            this.destroy$.unsubscribe();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.errorModalStoreService.selectModal().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(function (showErrorModal) {
              if (showErrorModal) {
                var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
                dialogConfig.disableClose = true;
                dialogConfig.autoFocus = true;

                _this.matDialog.open(_modals_error_modals_error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_4__["ErrorModalComponent"], dialogConfig);
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modals_error_modals_services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_5__["ErrorModalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _modals_error_modals_services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_5__["ErrorModalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Vmel":
    /*!*******************************************************************!*\
      !*** ./src/app/modals/error-modals/store/error-modal.reducers.ts ***!
      \*******************************************************************/

    /*! exports provided: initialErrorModalState, errorReducer, reducer */

    /***/
    function Vmel(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialErrorModalState", function () {
        return initialErrorModalState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorReducer", function () {
        return errorReducer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducer", function () {
        return reducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _error_modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-modal.actions */
      "J+Fc");

      var initialErrorModalState = {
        errors: [],
        modal: false
      };
      var errorReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialErrorModalState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_error_modal_actions__WEBPACK_IMPORTED_MODULE_1__["setError"], function (state, action) {
        var newState = Object.assign({}, state);

        var errors = _toConsumableArray(newState.errors);

        errors.push(action.error);
        newState.errors = _toConsumableArray(errors);
        return newState;
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_error_modal_actions__WEBPACK_IMPORTED_MODULE_1__["clearErrors"], function (state) {
        var newState = Object.assign({}, state);
        newState.errors = [].concat();
        return newState;
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_error_modal_actions__WEBPACK_IMPORTED_MODULE_1__["setModal"], function (state, action) {
        var newState = Object.assign({}, state);
        newState.modal = action.open;
        return newState;
      }));

      function reducer(state, action) {
        return errorReducer(state, action);
      }
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _modals_error_modals_error_modals_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modals/error-modals/error-modals.module */
      "HBvr");
      /* harmony import */


      var _mainStore_app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./mainStore/app.reducer */
      "7j/G");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/effects */
      "9jGm");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "agSv");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _modals_confirmation_moldal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./modals/confirmation-moldal/confirmation-modal.component */
      "Q+5x");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_mainStore_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
          maxAge: 25
        }), _modals_error_modals_error_modals_module__WEBPACK_IMPORTED_MODULE_6__["ErrorModalsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _modals_confirmation_moldal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"], _modals_error_modals_error_modals_module__WEBPACK_IMPORTED_MODULE_6__["ErrorModalsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _modals_confirmation_moldal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationModalComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_mainStore_app_reducer__WEBPACK_IMPORTED_MODULE_7__["reducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
              maxAge: 25
            }), _modals_error_modals_error_modals_module__WEBPACK_IMPORTED_MODULE_6__["ErrorModalsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aBuy":
    /*!***************************************************************************!*\
      !*** ./src/app/modals/error-modals/services/error-modal.store.service.ts ***!
      \***************************************************************************/

    /*! exports provided: ErrorModalStoreService */

    /***/
    function aBuy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorModalStoreService", function () {
        return ErrorModalStoreService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _store_error_modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../store/error-modal.actions */
      "J+Fc");
      /* harmony import */


      var _store_error_modal_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../store/error-modal.selectors */
      "rC6s");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var ErrorModalStoreService = /*#__PURE__*/function () {
        function ErrorModalStoreService(store) {
          _classCallCheck(this, ErrorModalStoreService);

          this.store = store;
        }

        _createClass(ErrorModalStoreService, [{
          key: "clearErrors",
          value: function clearErrors() {
            this.store.dispatch(_store_error_modal_actions__WEBPACK_IMPORTED_MODULE_1__["clearErrors"]());
          }
        }, {
          key: "selectErrors",
          value: function selectErrors() {
            return this.store.select(_store_error_modal_selectors__WEBPACK_IMPORTED_MODULE_2__["selectErrors"]);
          }
        }, {
          key: "selectModal",
          value: function selectModal() {
            return this.store.select(_store_error_modal_selectors__WEBPACK_IMPORTED_MODULE_2__["selectModal"]);
          }
        }, {
          key: "setError",
          value: function setError(error) {
            this.store.dispatch(_store_error_modal_actions__WEBPACK_IMPORTED_MODULE_1__["setError"]({
              error: error
            }));
            this.setModal(true);
          }
        }, {
          key: "setModal",
          value: function setModal(open) {
            this.store.dispatch(_store_error_modal_actions__WEBPACK_IMPORTED_MODULE_1__["setModal"]({
              open: open
            }));
          }
        }]);

        return ErrorModalStoreService;
      }();

      ErrorModalStoreService.ɵfac = function ErrorModalStoreService_Factory(t) {
        return new (t || ErrorModalStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      ErrorModalStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorModalStoreService,
        factory: ErrorModalStoreService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorModalStoreService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lc5s":
    /*!**************************************************************************!*\
      !*** ./src/app/modals/error-modals/error-modal/error-modal.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ErrorModalComponent */

    /***/
    function lc5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorModalComponent", function () {
        return ErrorModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/error-modal.store.service */
      "aBuy");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _error_modal_b_error_modal_b_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error-modal-b/error-modal-b.component */
      "2mQu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ErrorModalComponent = /*#__PURE__*/function () {
        function ErrorModalComponent(errorModalStoreService, dialogRef) {
          var _this2 = this;

          _classCallCheck(this, ErrorModalComponent);

          this.errorModalStoreService = errorModalStoreService;
          this.dialogRef = dialogRef;

          this.close = function () {
            _this2.errorModalStoreService.setModal(false);

            _this2.errorModalStoreService.clearErrors();

            _this2.dialogRef.close();
          };
        }

        _createClass(ErrorModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.errorList$ = this.errorModalStoreService.selectErrors();
          }
        }]);

        return ErrorModalComponent;
      }();

      ErrorModalComponent.ɵfac = function ErrorModalComponent_Factory(t) {
        return new (t || ErrorModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_1__["ErrorModalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
      };

      ErrorModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorModalComponent,
        selectors: [["app-error-modal"]],
        decls: 2,
        vars: 4,
        consts: [[3, "errorListInput", "close"]],
        template: function ErrorModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error-modal-b", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorListInput", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.errorList$))("close", ctx.close);
          }
        },
        directives: [_error_modal_b_error_modal_b_component__WEBPACK_IMPORTED_MODULE_3__["ErrorModalBComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9lcnJvci1tb2RhbHMvZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error-modal',
            templateUrl: './error-modal.component.html',
            styleUrls: ['./error-modal.component.scss']
          }]
        }], function () {
          return [{
            type: _services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_1__["ErrorModalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rC6s":
    /*!********************************************************************!*\
      !*** ./src/app/modals/error-modals/store/error-modal.selectors.ts ***!
      \********************************************************************/

    /*! exports provided: selectErrorModalState, selectModal, selectErrors */

    /***/
    function rC6s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectErrorModalState", function () {
        return selectErrorModalState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectModal", function () {
        return selectModal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectErrors", function () {
        return selectErrors;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var selectErrorModalState = function selectErrorModalState(state) {
        return state.ErrorModal;
      };

      var selectModal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectErrorModalState, function (errorModalState) {
        return errorModalState.modal;
      });
      var selectErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectErrorModalState, function (errorModalState) {
        return errorModalState.errors;
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'sign-up',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sign-up-sign-up-module */
          "sign-up-sign-up-module").then(__webpack_require__.bind(null,
          /*! ./sign-up/sign-up.module */
          "kEuc")).then(function (m) {
            return m.SignUpModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'sign-up'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map