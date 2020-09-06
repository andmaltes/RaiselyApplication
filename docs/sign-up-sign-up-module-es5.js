(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
    /***/
    "3Pt+":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
      \********************************************************************/

    /*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */

    /***/
    function Pt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractControl", function () {
        return AbstractControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () {
        return AbstractControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () {
        return AbstractFormGroupDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () {
        return COMPOSITION_BUFFER_MODE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () {
        return CheckboxControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () {
        return CheckboxRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlContainer", function () {
        return ControlContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
        return DefaultValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
        return EmailValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormArray", function () {
        return FormArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormArrayName", function () {
        return FormArrayName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormBuilder", function () {
        return FormBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControl", function () {
        return FormControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () {
        return FormControlDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormControlName", function () {
        return FormControlName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroup", function () {
        return FormGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
        return FormGroupDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormGroupName", function () {
        return FormGroupName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
        return FormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () {
        return MaxLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () {
        return MinLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () {
        return NG_ASYNC_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () {
        return NG_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () {
        return NG_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControl", function () {
        return NgControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () {
        return NgControlStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () {
        return NgControlStatusGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgForm", function () {
        return NgForm;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgModel", function () {
        return NgModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () {
        return NgModelGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () {
        return NgSelectOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () {
        return NumberValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatternValidator", function () {
        return PatternValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () {
        return RadioControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () {
        return RangeValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
        return ReactiveFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () {
        return RequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () {
        return SelectControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () {
        return SelectMultipleControlValueAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VERSION", function () {
        return VERSION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Validators", function () {
        return Validators;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () {
        return ɵInternalFormsSharedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () {
        return ɵNgNoValidate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () {
        return ɵNgSelectMultipleOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () {
        return SHARED_FORM_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () {
        return TEMPLATE_DRIVEN_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () {
        return CHECKBOX_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () {
        return EMAIL_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () {
        return MIN_LENGTH_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () {
        return MAX_LENGTH_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () {
        return PATTERN_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () {
        return REACTIVE_DRIVEN_DIRECTIVES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () {
        return ɵInternalFormsSharedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () {
        return CHECKBOX_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () {
        return DEFAULT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () {
        return AbstractControlStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () {
        return ngControlStatusHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () {
        return formDirectiveProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () {
        return formControlBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () {
        return modelGroupProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () {
        return NUMBER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () {
        return RADIO_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () {
        return RadioControlRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () {
        return RANGE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () {
        return NG_MODEL_WITH_FORM_CONTROL_WARNING;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () {
        return formControlBinding$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () {
        return controlNameBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () {
        return formDirectiveProvider$1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () {
        return formGroupNameProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () {
        return formArrayNameProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () {
        return SELECT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () {
        return SELECT_MULTIPLE_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () {
        return ɵNgSelectMultipleOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () {
        return ɵNgNoValidate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () {
        return REQUIRED_VALIDATOR;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @license Angular v10.1.0
       * (c) 2010-2020 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Used to provide a `ControlValueAccessor` for form controls.
       *
       * See `DefaultValueAccessor` for how to implement one.
       *
       * @publicApi
       */


      var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var CHECKBOX_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return CheckboxControlValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
       * element.
       *
       * @usageNotes
       *
       * ### Using a checkbox with a reactive form.
       *
       * The following example shows how to use a checkbox with a reactive form.
       *
       * ```ts
       * const rememberLoginControl = new FormControl();
       * ```
       *
       * ```
       * <input type="checkbox" [formControl]="rememberLoginControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var CheckboxControlValueAccessor = /*#__PURE__*/function () {
        function CheckboxControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, CheckboxControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "checked" property on the input element.
         * @nodoc
         */


        _createClass(CheckboxControlValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return CheckboxControlValueAccessor;
      }();

      CheckboxControlValueAccessor.ɵfac = function CheckboxControlValueAccessor_Factory(t) {
        return new (t || CheckboxControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      CheckboxControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CheckboxControlValueAccessor,
        selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
        hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.checked);
            })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR])]
      });

      CheckboxControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: {
              '(change)': 'onChange($event.target.checked)',
              '(blur)': 'onTouched()'
            },
            providers: [CHECKBOX_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DEFAULT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return DefaultValueAccessor;
        }),
        multi: true
      };
      /**
       * We must check whether the agent is Android because composition events
       * behave differently between iOS and Android.
       */

      function _isAndroid() {
        var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
        return /android (\d+)/.test(userAgent.toLowerCase());
      }
      /**
       * @description
       * Provide this token to control if form directives buffer IME input until
       * the "compositionend" event occurs.
       * @publicApi
       */


      var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
      /**
       * @description
       * The default `ControlValueAccessor` for writing a value and listening to changes on input
       * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using the default value accessor
       *
       * The following example shows how to use an input element that activates the default value accessor
       * (in this case, a text field).
       *
       * ```ts
       * const firstNameControl = new FormControl();
       * ```
       *
       * ```
       * <input type="text" [formControl]="firstNameControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var DefaultValueAccessor = /*#__PURE__*/function () {
        function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
          _classCallCheck(this, DefaultValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this._compositionMode = _compositionMode;
          /**
           * The registered callback function called when an input event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
          /** Whether the user is creating a composition string (IME events). */


          this._composing = false;

          if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
          }
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(DefaultValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            var normalizedValue = value == null ? '' : value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_handleInput",
          value: function _handleInput(value) {
            if (!this._compositionMode || this._compositionMode && !this._composing) {
              this.onChange(value);
            }
          }
          /** @internal */

        }, {
          key: "_compositionStart",
          value: function _compositionStart() {
            this._composing = true;
          }
          /** @internal */

        }, {
          key: "_compositionEnd",
          value: function _compositionEnd(value) {
            this._composing = false;
            this._compositionMode && this.onChange(value);
          }
        }]);

        return DefaultValueAccessor;
      }();

      DefaultValueAccessor.ɵfac = function DefaultValueAccessor_Factory(t) {
        return new (t || DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](COMPOSITION_BUFFER_MODE, 8));
      };

      DefaultValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DefaultValueAccessor,
        selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
        hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
              return ctx._handleInput($event.target.value);
            })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
              return ctx._compositionStart();
            })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
              return ctx._compositionEnd($event.target.value);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DEFAULT_VALUE_ACCESSOR])]
      });

      DefaultValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [COMPOSITION_BUFFER_MODE]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngModel],[formControl],[formControlName]',
            host: {
              '(input)': '$any(this)._handleInput($event.target.value)',
              '(blur)': 'onTouched()',
              '(compositionstart)': '$any(this)._compositionStart()',
              '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
            },
            providers: [DEFAULT_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [COMPOSITION_BUFFER_MODE]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * Base class for control directives.
       *
       * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
       *
       * @publicApi
       */


      var AbstractControlDirective = /*#__PURE__*/function () {
        function AbstractControlDirective() {
          _classCallCheck(this, AbstractControlDirective);
        }

        _createClass(AbstractControlDirective, [{
          key: "reset",

          /**
           * @description
           * Resets the control with the provided value if the control is present.
           */
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            if (this.control) this.control.reset(value);
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return this.control ? this.control.hasError(errorCode, path) : false;
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            return this.control ? this.control.getError(errorCode, path) : null;
          }
        }, {
          key: "value",

          /**
           * @description
           * Reports the value of the control if it is present, otherwise null.
           */
          get: function get() {
            return this.control ? this.control.value : null;
          }
          /**
           * @description
           * Reports whether the control is valid. A control is considered valid if no
           * validation errors exist with the current value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.control ? this.control.valid : null;
          }
          /**
           * @description
           * Reports whether the control is invalid, meaning that an error exists in the input value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.control ? this.control.invalid : null;
          }
          /**
           * @description
           * Reports whether a control is pending, meaning that that async validation is occurring and
           * errors are not yet available for the input value. If the control is not present, null is
           * returned.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.control ? this.control.pending : null;
          }
          /**
           * @description
           * Reports whether the control is disabled, meaning that the control is disabled
           * in the UI and is exempt from validation checks and excluded from aggregate
           * values of ancestor controls. If the control is not present, null is returned.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.control ? this.control.disabled : null;
          }
          /**
           * @description
           * Reports whether the control is enabled, meaning that the control is included in ancestor
           * calculations of validity or value. If the control is not present, null is returned.
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.control ? this.control.enabled : null;
          }
          /**
           * @description
           * Reports the control's validation errors. If the control is not present, null is returned.
           */

        }, {
          key: "errors",
          get: function get() {
            return this.control ? this.control.errors : null;
          }
          /**
           * @description
           * Reports whether the control is pristine, meaning that the user has not yet changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "pristine",
          get: function get() {
            return this.control ? this.control.pristine : null;
          }
          /**
           * @description
           * Reports whether the control is dirty, meaning that the user has changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "dirty",
          get: function get() {
            return this.control ? this.control.dirty : null;
          }
          /**
           * @description
           * Reports whether the control is touched, meaning that the user has triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "touched",
          get: function get() {
            return this.control ? this.control.touched : null;
          }
          /**
           * @description
           * Reports the validation status of the control. Possible values include:
           * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
           * If the control is not present, null is returned.
           */

        }, {
          key: "status",
          get: function get() {
            return this.control ? this.control.status : null;
          }
          /**
           * @description
           * Reports whether the control is untouched, meaning that the user has not yet triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "untouched",
          get: function get() {
            return this.control ? this.control.untouched : null;
          }
          /**
           * @description
           * Returns a multicasting observable that emits a validation status whenever it is
           * calculated for the control. If the control is not present, null is returned.
           */

        }, {
          key: "statusChanges",
          get: function get() {
            return this.control ? this.control.statusChanges : null;
          }
          /**
           * @description
           * Returns a multicasting observable of value changes for the control that emits every time the
           * value of the control changes in the UI or programmatically.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valueChanges",
          get: function get() {
            return this.control ? this.control.valueChanges : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
        }]);

        return AbstractControlDirective;
      }();

      AbstractControlDirective.ɵfac = function AbstractControlDirective_Factory(t) {
        return new (t || AbstractControlDirective)();
      };

      AbstractControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AbstractControlDirective
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for directives that contain multiple registered instances of `NgControl`.
       * Only used by the forms module.
       *
       * @publicApi
       */

      var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
        _inherits(ControlContainer, _AbstractControlDirec);

        var _super = _createSuper(ControlContainer);

        function ControlContainer() {
          _classCallCheck(this, ControlContainer);

          return _super.apply(this, arguments);
        }

        _createClass(ControlContainer, [{
          key: "formDirective",

          /**
           * @description
           * The top-level form directive for the control.
           */
          get: function get() {
            return null;
          }
          /**
           * @description
           * The path to this group.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
        }]);

        return ControlContainer;
      }(AbstractControlDirective);

      ControlContainer.ɵfac = function ControlContainer_Factory(t) {
        return ɵControlContainer_BaseFactory(t || ControlContainer);
      };

      ControlContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ControlContainer,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵControlContainer_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ControlContainer);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function unimplemented() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          throw new Error('unimplemented');
        }
      }
      /**
       * @description
       * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
       * object to a DOM element.
       *
       * @publicApi
       */


      var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
        _inherits(NgControl, _AbstractControlDirec2);

        var _super2 = _createSuper(NgControl);

        function NgControl() {
          var _this;

          _classCallCheck(this, NgControl);

          _this = _super2.apply(this, arguments);
          /**
           * @description
           * The parent form for the control.
           *
           * @internal
           */

          _this._parent = null;
          /**
           * @description
           * The name for the control
           */

          _this.name = null;
          /**
           * @description
           * The value accessor for the control
           */

          _this.valueAccessor = null;
          /**
           * @description
           * The uncomposed array of synchronous validators for the control
           *
           * @internal
           */

          _this._rawValidators = [];
          /**
           * @description
           * The uncomposed array of async validators for the control
           *
           * @internal
           */

          _this._rawAsyncValidators = [];
          return _this;
        }
        /**
         * @description
         * The registered synchronous validator function for the control
         *
         * @throws An exception that this method is not implemented
         */


        _createClass(NgControl, [{
          key: "validator",
          get: function get() {
            return unimplemented();
          }
          /**
           * @description
           * The registered async validator function for the control
           *
           * @throws An exception that this method is not implemented
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return unimplemented();
          }
        }]);

        return NgControl;
      }(AbstractControlDirective);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var AbstractControlStatus = /*#__PURE__*/function () {
        function AbstractControlStatus(cd) {
          _classCallCheck(this, AbstractControlStatus);

          this._cd = cd;
        }

        _createClass(AbstractControlStatus, [{
          key: "ngClassUntouched",
          get: function get() {
            return this._cd.control ? this._cd.control.untouched : false;
          }
        }, {
          key: "ngClassTouched",
          get: function get() {
            return this._cd.control ? this._cd.control.touched : false;
          }
        }, {
          key: "ngClassPristine",
          get: function get() {
            return this._cd.control ? this._cd.control.pristine : false;
          }
        }, {
          key: "ngClassDirty",
          get: function get() {
            return this._cd.control ? this._cd.control.dirty : false;
          }
        }, {
          key: "ngClassValid",
          get: function get() {
            return this._cd.control ? this._cd.control.valid : false;
          }
        }, {
          key: "ngClassInvalid",
          get: function get() {
            return this._cd.control ? this._cd.control.invalid : false;
          }
        }, {
          key: "ngClassPending",
          get: function get() {
            return this._cd.control ? this._cd.control.pending : false;
          }
        }]);

        return AbstractControlStatus;
      }();

      var ngControlStatusHost = {
        '[class.ng-untouched]': 'ngClassUntouched',
        '[class.ng-touched]': 'ngClassTouched',
        '[class.ng-pristine]': 'ngClassPristine',
        '[class.ng-dirty]': 'ngClassDirty',
        '[class.ng-valid]': 'ngClassValid',
        '[class.ng-invalid]': 'ngClassInvalid',
        '[class.ng-pending]': 'ngClassPending'
      };
      /**
       * @description
       * Directive automatically applied to Angular form controls that sets CSS classes
       * based on control status.
       *
       * @usageNotes
       *
       * ### CSS classes applied
       *
       * The following classes are applied as the properties become true:
       *
       * * ng-valid
       * * ng-invalid
       * * ng-pending
       * * ng-pristine
       * * ng-dirty
       * * ng-untouched
       * * ng-touched
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
        _inherits(NgControlStatus, _AbstractControlStatu);

        var _super3 = _createSuper(NgControlStatus);

        function NgControlStatus(cd) {
          _classCallCheck(this, NgControlStatus);

          return _super3.call(this, cd);
        }

        return NgControlStatus;
      }(AbstractControlStatus);

      NgControlStatus.ɵfac = function NgControlStatus_Factory(t) {
        return new (t || NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgControl, 2));
      };

      NgControlStatus.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgControlStatus,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgControlStatus.ctorParameters = function () {
        return [{
          type: NgControl,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControlName],[ngModel],[formControl]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: NgControl,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, null);
      })();
      /**
       * @description
       * Directive automatically applied to Angular form groups that sets CSS classes
       * based on control status (valid/invalid/dirty/etc).
       *
       * @see `NgControlStatus`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
        _inherits(NgControlStatusGroup, _AbstractControlStatu2);

        var _super4 = _createSuper(NgControlStatusGroup);

        function NgControlStatusGroup(cd) {
          _classCallCheck(this, NgControlStatusGroup);

          return _super4.call(this, cd);
        }

        return NgControlStatusGroup;
      }(AbstractControlStatus);

      NgControlStatusGroup.ɵfac = function NgControlStatusGroup_Factory(t) {
        return new (t || NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 2));
      };

      NgControlStatusGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgControlStatusGroup,
        selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-untouched", ctx.ngClassUntouched)("ng-touched", ctx.ngClassTouched)("ng-pristine", ctx.ngClassPristine)("ng-dirty", ctx.ngClassDirty)("ng-valid", ctx.ngClassValid)("ng-invalid", ctx.ngClassInvalid)("ng-pending", ctx.ngClassPending);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgControlStatusGroup.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgControlStatusGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
      }

      function hasValidLength(value) {
        // non-strict comparison is intentional, to check for both `null` and `undefined` values
        return value != null && typeof value.length === 'number';
      }
      /**
       * @description
       * An `InjectionToken` for registering additional synchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_ASYNC_VALIDATORS`
       *
       * @usageNotes
       *
       * ### Providing a custom validator
       *
       * The following example registers a custom validator directive. Adding the validator to the
       * existing collection of validators requires the `multi: true` option.
       *
       * ```typescript
       * @Directive({
       *   selector: '[customValidator]',
       *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
       * })
       * class CustomValidatorDirective implements Validator {
       *   validate(control: AbstractControl): ValidationErrors | null {
       *     return { 'custom': true };
       *   }
       * }
       * ```
       *
       * @publicApi
       */


      var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
      /**
       * @description
       * An `InjectionToken` for registering additional asynchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_VALIDATORS`
       *
       * @publicApi
       */

      var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
      /**
       * A regular expression that matches valid e-mail addresses.
       *
       * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
       * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
       *   punctuation symbols).
       * - `local-part` cannot begin or end with a period (`.`).
       * - `local-part` cannot be longer than 64 characters.
       * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
       *   `foo.com`.
       * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
       *   periods (`.`)).
       * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
       * - A `label` cannot be longer than 63 characters.
       * - The whole address cannot be longer than 254 characters.
       *
       * ## Implementation background
       *
       * This regexp was ported over from AngularJS (see there for git history):
       * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
       * It is based on the
       * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
       * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
       * lengths of different parts of the address). The main differences from the WHATWG version are:
       *   - Disallow `local-part` to begin or end with a period (`.`).
       *   - Disallow `local-part` length to exceed 64 characters.
       *   - Disallow total address length to exceed 254 characters.
       *
       * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
       */

      var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      /**
       * @description
       * Provides a set of built-in validators that can be used by form controls.
       *
       * A validator is a function that processes a `FormControl` or collection of
       * controls and returns an error map or null. A null map means that validation has passed.
       *
       * @see [Form Validation](/guide/form-validation)
       *
       * @publicApi
       */

      var Validators = /*#__PURE__*/function () {
        function Validators() {
          _classCallCheck(this, Validators);
        }

        _createClass(Validators, null, [{
          key: "min",

          /**
           * @description
           * Validator that requires the control's value to be greater than or equal to the provided number.
           * The validator exists only as a function and not as a directive.
           *
           * @usageNotes
           *
           * ### Validate against a minimum of 3
           *
           * ```typescript
           * const control = new FormControl(2, Validators.min(3));
           *
           * console.log(control.errors); // {min: {min: 3, actual: 2}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `min` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */
          value: function min(_min) {
            return function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

              return !isNaN(value) && value < _min ? {
                'min': {
                  'min': _min,
                  'actual': control.value
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control's value to be less than or equal to the provided number.
           * The validator exists only as a function and not as a directive.
           *
           * @usageNotes
           *
           * ### Validate against a maximum of 15
           *
           * ```typescript
           * const control = new FormControl(16, Validators.max(15));
           *
           * console.log(control.errors); // {max: {max: 15, actual: 16}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `max` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "max",
          value: function max(_max) {
            return function (control) {
              if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
              // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

              return !isNaN(value) && value > _max ? {
                'max': {
                  'max': _max,
                  'actual': control.value
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control have a non-empty value.
           *
           * @usageNotes
           *
           * ### Validate that the field is non-empty
           *
           * ```typescript
           * const control = new FormControl('', Validators.required);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map with the `required` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "required",
          value: function required(control) {
            return isEmptyInputValue(control.value) ? {
              'required': true
            } : null;
          }
          /**
           * @description
           * Validator that requires the control's value be true. This validator is commonly
           * used for required checkboxes.
           *
           * @usageNotes
           *
           * ### Validate that the field value is true
           *
           * ```typescript
           * const control = new FormControl('', Validators.requiredTrue);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map that contains the `required` property
           * set to `true` if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "requiredTrue",
          value: function requiredTrue(control) {
            return control.value === true ? null : {
              'required': true
            };
          }
          /**
           * @description
           * Validator that requires the control's value pass an email validation test.
           *
           * Tests the value using a [regular
           * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
           * pattern suitable for common usecases. The pattern is based on the definition of a valid email
           * address in the [WHATWG HTML
           * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
           * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
           * lengths of different parts of the address).
           *
           * The differences from the WHATWG version include:
           * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
           * - Disallow `local-part` to be longer than 64 characters.
           * - Disallow the whole address to be longer than 254 characters.
           *
           * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
           * validate the value against a different pattern.
           *
           * @usageNotes
           *
           * ### Validate that the field matches a valid email pattern
           *
           * ```typescript
           * const control = new FormControl('bad@', Validators.email);
           *
           * console.log(control.errors); // {email: true}
           * ```
           *
           * @returns An error map with the `email` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "email",
          value: function email(control) {
            if (isEmptyInputValue(control.value)) {
              return null; // don't validate empty values to allow optional controls
            }

            return EMAIL_REGEXP.test(control.value) ? null : {
              'email': true
            };
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be greater than or equal
           * to the provided minimum length. This validator is also provided by default if you use the
           * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays. The
           * `minLength` validator logic is also not invoked for values when their `length` property is 0
           * (for example in case of an empty string or an empty array), to support optional controls. You
           * can use the standard `required` validator if empty values should not be considered valid.
           *
           * @usageNotes
           *
           * ### Validate that the field has a minimum of 3 characters
           *
           * ```typescript
           * const control = new FormControl('ng', Validators.minLength(3));
           *
           * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
           * ```
           *
           * ```html
           * <input minlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `minlength` if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "minLength",
          value: function minLength(_minLength) {
            return function (control) {
              if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
                // don't validate empty values to allow optional controls
                // don't validate values without `length` property
                return null;
              }

              return control.value.length < _minLength ? {
                'minlength': {
                  'requiredLength': _minLength,
                  'actualLength': control.value.length
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be less than or equal
           * to the provided maximum length. This validator is also provided by default if you use the
           * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays.
           *
           * @usageNotes
           *
           * ### Validate that the field has maximum of 5 characters
           *
           * ```typescript
           * const control = new FormControl('Angular', Validators.maxLength(5));
           *
           * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
           * ```
           *
           * ```html
           * <input maxlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `maxlength` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "maxLength",
          value: function maxLength(_maxLength) {
            return function (control) {
              return hasValidLength(control.value) && control.value.length > _maxLength ? {
                'maxlength': {
                  'requiredLength': _maxLength,
                  'actualLength': control.value.length
                }
              } : null;
            };
          }
          /**
           * @description
           * Validator that requires the control's value to match a regex pattern. This validator is also
           * provided by default if you use the HTML5 `pattern` attribute.
           *
           * @usageNotes
           *
           * ### Validate that the field only contains letters or spaces
           *
           * ```typescript
           * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
           *
           * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
           * ```
           *
           * ```html
           * <input pattern="[a-zA-Z ]*">
           * ```
           *
           * @param pattern A regular expression to be used as is to test the values, or a string.
           * If a string is passed, the `^` character is prepended and the `$` character is
           * appended to the provided string (if not already present), and the resulting regular
           * expression is used to test the values.
           *
           * @returns A validator function that returns an error map with the
           * `pattern` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "pattern",
          value: function pattern(_pattern) {
            if (!_pattern) return Validators.nullValidator;
            var regex;
            var regexStr;

            if (typeof _pattern === 'string') {
              regexStr = '';
              if (_pattern.charAt(0) !== '^') regexStr += '^';
              regexStr += _pattern;
              if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
              regex = new RegExp(regexStr);
            } else {
              regexStr = _pattern.toString();
              regex = _pattern;
            }

            return function (control) {
              if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
              }

              var value = control.value;
              return regex.test(value) ? null : {
                'pattern': {
                  'requiredPattern': regexStr,
                  'actualValue': value
                }
              };
            };
          }
          /**
           * @description
           * Validator that performs no operation.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "nullValidator",
          value: function nullValidator(control) {
            return null;
          }
        }, {
          key: "compose",
          value: function compose(validators) {
            if (!validators) return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
              return mergeErrors(executeValidators(control, presentValidators));
            };
          }
          /**
           * @description
           * Compose multiple async validators into a single function that returns the union
           * of the individual error objects for the provided control.
           *
           * @returns A validator function that returns an error map with the
           * merged error objects of the async validators if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "composeAsync",
          value: function composeAsync(validators) {
            if (!validators) return null;
            var presentValidators = validators.filter(isPresent);
            if (presentValidators.length == 0) return null;
            return function (control) {
              var observables = executeValidators(control, presentValidators).map(toObservable);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(mergeErrors));
            };
          }
        }]);

        return Validators;
      }();

      function isPresent(o) {
        return o != null;
      }

      function toObservable(r) {
        var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;

        if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw new Error("Expected validator to return Promise or Observable.");
        }

        return obs;
      }

      function mergeErrors(arrayOfErrors) {
        var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        arrayOfErrors.forEach(function (errors) {
          res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
        });
        return Object.keys(res).length === 0 ? null : res;
      }

      function executeValidators(control, validators) {
        return validators.map(function (validator) {
          return validator(control);
        });
      }

      function isValidatorFn(validator) {
        return !validator.validate;
      }
      /**
       * Given the list of validators that may contain both functions as well as classes, return the list
       * of validator functions (convert validator classes into validator functions). This is needed to
       * have consistent structure in validators list before composing them.
       *
       * @param validators The set of validators that may contain validators both in plain function form
       *     as well as represented as a validator class.
       */


      function normalizeValidators(validators) {
        return validators.map(function (validator) {
          return isValidatorFn(validator) ? validator : function (c) {
            return validator.validate(c);
          };
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var NUMBER_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NumberValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a number value and listening to number input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a number input with a reactive form.
       *
       * The following example shows how to use a number input with a reactive form.
       *
       * ```ts
       * const totalCountControl = new FormControl();
       * ```
       *
       * ```
       * <input type="number" [formControl]="totalCountControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var NumberValueAccessor = /*#__PURE__*/function () {
        function NumberValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, NumberValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change or input event occurs on the input
           * element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(NumberValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var normalizedValue = value == null ? '' : value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return NumberValueAccessor;
      }();

      NumberValueAccessor.ɵfac = function NumberValueAccessor_Factory(t) {
        return new (t || NumberValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      NumberValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NumberValueAccessor,
        selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
        hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NUMBER_VALUE_ACCESSOR])]
      });

      NumberValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var RADIO_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RadioControlValueAccessor;
        }),
        multi: true
      };

      function throwNameError() {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
      }
      /**
       * @description
       * Class used by Angular to track radio buttons. For internal use only.
       */


      var RadioControlRegistry = /*#__PURE__*/function () {
        function RadioControlRegistry() {
          _classCallCheck(this, RadioControlRegistry);

          this._accessors = [];
        }
        /**
         * @description
         * Adds a control to the internal registry. For internal use only.
         */


        _createClass(RadioControlRegistry, [{
          key: "add",
          value: function add(control, accessor) {
            this._accessors.push([control, accessor]);
          }
          /**
           * @description
           * Removes a control from the internal registry. For internal use only.
           */

        }, {
          key: "remove",
          value: function remove(accessor) {
            for (var i = this._accessors.length - 1; i >= 0; --i) {
              if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);

                return;
              }
            }
          }
          /**
           * @description
           * Selects a radio button. For internal use only.
           */

        }, {
          key: "select",
          value: function select(accessor) {
            var _this2 = this;

            this._accessors.forEach(function (c) {
              if (_this2._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
              }
            });
          }
        }, {
          key: "_isSameGroup",
          value: function _isSameGroup(controlPair, accessor) {
            if (!controlPair[0].control) return false;
            return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
          }
        }]);

        return RadioControlRegistry;
      }();

      RadioControlRegistry.ɵfac = function RadioControlRegistry_Factory(t) {
        return new (t || RadioControlRegistry)();
      };

      RadioControlRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RadioControlRegistry,
        factory: RadioControlRegistry.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @description
       * The `ControlValueAccessor` for writing radio control values and listening to radio control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using radio buttons with reactive form directives
       *
       * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
       * a reactive form, radio buttons in the same group should have the same `formControlName`.
       * Providing a `name` attribute is optional.
       *
       * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var RadioControlValueAccessor = /*#__PURE__*/function () {
        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
          _classCallCheck(this, RadioControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this._registry = _registry;
          this._injector = _injector;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function () {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /** @nodoc */


        _createClass(RadioControlValueAccessor, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._control = this._injector.get(NgControl);

            this._checkName();

            this._registry.add(this._control, this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._registry.remove(this);
          }
          /**
           * Sets the "checked" property value on the radio input element.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._state = value === this.value;

            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this3 = this;

            this._fn = fn;

            this.onChange = function () {
              fn(_this3.value);

              _this3._registry.select(_this3);
            };
          }
          /**
           * Sets the "value" on the radio input element and unchecks it.
           *
           * @param value
           */

        }, {
          key: "fireUncheck",
          value: function fireUncheck(value) {
            this.writeValue(value);
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwNameError();
            }

            if (!this.name && this.formControlName) this.name = this.formControlName;
          }
        }]);

        return RadioControlValueAccessor;
      }();

      RadioControlValueAccessor.ɵfac = function RadioControlValueAccessor_Factory(t) {
        return new (t || RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      RadioControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RadioControlValueAccessor,
        selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
        hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
              return ctx.onChange();
            })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          name: "name",
          formControlName: "formControlName",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_VALUE_ACCESSOR])]
      });

      RadioControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: RadioControlRegistry
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      RadioControlValueAccessor.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        formControlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: {
              '(change)': 'onChange()',
              '(blur)': 'onTouched()'
            },
            providers: [RADIO_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: RadioControlRegistry
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var RANGE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RangeValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a range value and listening to range input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a range input with a reactive form
       *
       * The following example shows how to use a range input with a reactive form.
       *
       * ```ts
       * const ageControl = new FormControl();
       * ```
       *
       * ```
       * <input type="range" [formControl]="ageControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var RangeValueAccessor = /*#__PURE__*/function () {
        function RangeValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, RangeValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change or input event occurs on the input
           * element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(RangeValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the range input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
        }]);

        return RangeValueAccessor;
      }();

      RangeValueAccessor.ɵfac = function RangeValueAccessor_Factory(t) {
        return new (t || RangeValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      RangeValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RangeValueAccessor,
        selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
        hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RANGE_VALUE_ACCESSOR])]
      });

      RangeValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangeValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var FormErrorExamples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var ReactiveErrors = /*#__PURE__*/function () {
        function ReactiveErrors() {
          _classCallCheck(this, ReactiveErrors);
        }

        _createClass(ReactiveErrors, null, [{
          key: "controlParentException",
          value: function controlParentException() {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
          }
        }, {
          key: "ngModelGroupException",
          value: function ngModelGroupException() {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
          }
        }, {
          key: "missingFormException",
          value: function missingFormException() {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
          }
        }, {
          key: "groupParentException",
          value: function groupParentException() {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
          }
        }, {
          key: "arrayParentException",
          value: function arrayParentException() {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
          }
        }, {
          key: "disabledAttrWarning",
          value: function disabledAttrWarning() {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
          }
        }, {
          key: "ngModelWarning",
          value: function ngModelWarning(directiveName) {
            console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
          }
        }]);

        return ReactiveErrors;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return SelectControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString(id, value) {
        if (id == null) return "".concat(value);
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId(valueString) {
        return valueString.split(':')[0];
      }
      /**
       * @description
       * The `ControlValueAccessor` for writing select control values and listening to select control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using select controls in a reactive form
       *
       * The following examples show how to use a select control in a reactive form.
       *
       * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
       *
       * ### Using select controls in a template-driven form
       *
       * To use a select in a template-driven form, simply add an `ngModel` and a `name`
       * attribute to the main `<select>` tag.
       *
       * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
       *
       * ### Customizing option selection
       *
       * Angular uses object identity to select option. It's possible for the identities of items
       * to change while the data does not. This can happen, for example, if the items are produced
       * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
       * second response will produce objects with different identities.
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
       * If `compareWith` is given, Angular selects option by the return value of the function.
       *
       * ```ts
       * const selectedCountriesControl = new FormControl();
       * ```
       *
       * ```
       * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
       *     <option *ngFor="let country of countries" [ngValue]="country">
       *         {{country.name}}
       *     </option>
       * </select>
       *
       * compareFn(c1: Country, c2: Country): boolean {
       *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
       * }
       * ```
       *
       * **Note:** We listen to the 'change' event because 'input' events aren't fired
       * for selects in Firefox and IE:
       * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
       * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var SelectControlValueAccessor = /*#__PURE__*/function () {
        function SelectControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, SelectControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /** @internal */

          this._optionMap = new Map();
          /** @internal */

          this._idCounter = 0;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};

          this._compareWith = Object.is;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(SelectControlValueAccessor, [{
          key: "writeValue",

          /**
           * Sets the "value" property on the input element. The "selectedIndex"
           * property is also set if an ID is provided on the option element.
           * @nodoc
           */
          value: function writeValue(value) {
            this.value = value;

            var id = this._getOptionId(value);

            if (id == null) {
              this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            }

            var valueString = _buildValueString(id, value);

            this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this4 = this;

            this.onChange = function (valueString) {
              _this4.value = _this4._getOptionValue(valueString);
              fn(_this4.value);
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the select input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption() {
            return (this._idCounter++).toString();
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i = 0, _Array$from = Array.from(this._optionMap.keys()); _i < _Array$from.length; _i++) {
              var id = _Array$from[_i];
              if (this._compareWith(this._optionMap.get(id), value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
          }
        }, {
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
        }]);

        return SelectControlValueAccessor;
      }();

      SelectControlValueAccessor.ɵfac = function SelectControlValueAccessor_Factory(t) {
        return new (t || SelectControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SelectControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SelectControlValueAccessor,
        selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
        hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_VALUE_ACCESSOR])]
      });

      SelectControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SelectControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var NgSelectOption = /*#__PURE__*/function () {
        function NgSelectOption(_element, _renderer, _select) {
          _classCallCheck(this, NgSelectOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;
          if (this._select) this.id = this._select._registerOption();
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(NgSelectOption, [{
          key: "_setElementValue",

          /** @internal */
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }, {
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;

            this._select._optionMap.set(this.id, value);

            this._setElementValue(_buildValueString(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            this._setElementValue(value);

            if (this._select) this._select.writeValue(this._select.value);
          }
        }]);

        return NgSelectOption;
      }();

      NgSelectOption.ɵfac = function NgSelectOption_Factory(t) {
        return new (t || NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectControlValueAccessor, 9));
      };

      NgSelectOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgSelectOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      NgSelectOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      };

      NgSelectOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: SelectControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: NG_VALUE_ACCESSOR,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return SelectMultipleControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString$1(id, value) {
        if (id == null) return "".concat(value);
        if (typeof value === 'string') value = "'".concat(value, "'");
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId$1(valueString) {
        return valueString.split(':')[0];
      }
      /** Mock interface for HTMLCollection */


      var HTMLCollection = function HTMLCollection() {
        _classCallCheck(this, HTMLCollection);
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
       * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using a multi-select control
       *
       * The follow example shows you how to use a multi-select control with a reactive form.
       *
       * ```ts
       * const countryControl = new FormControl();
       * ```
       *
       * ```
       * <select multiple name="countries" [formControl]="countryControl">
       *   <option *ngFor="let country of countries" [ngValue]="country">
       *     {{ country.name }}
       *   </option>
       * </select>
       * ```
       *
       * ### Customizing option selection
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * See the `SelectControlValueAccessor` for usage.
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, SelectMultipleControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /** @internal */

          this._optionMap = new Map();
          /** @internal */

          this._idCounter = 0;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};

          this._compareWith = Object.is;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(SelectMultipleControlValueAccessor, [{
          key: "writeValue",

          /**
           * Sets the "value" property on one or of more of the select's options.
           * @nodoc
           */
          value: function writeValue(value) {
            var _this5 = this;

            this.value = value;
            var optionSelectedStateSetter;

            if (Array.isArray(value)) {
              // convert values to ids
              var ids = value.map(function (v) {
                return _this5._getOptionId(v);
              });

              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(ids.indexOf(o.toString()) > -1);
              };
            } else {
              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(false);
              };
            }

            this._optionMap.forEach(optionSelectedStateSetter);
          }
          /**
           * Registers a function called when the control value changes
           * and writes an array of the selected options.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this6 = this;

            this.onChange = function (_) {
              var selected = [];

              if (_.selectedOptions !== undefined) {
                var options = _.selectedOptions;

                for (var i = 0; i < options.length; i++) {
                  var opt = options.item(i);

                  var val = _this6._getOptionValue(opt.value);

                  selected.push(val);
                }
              } // Degrade on IE
              else {
                  var _options = _.options;

                  for (var _i2 = 0; _i2 < _options.length; _i2++) {
                    var _opt = _options.item(_i2);

                    if (_opt.selected) {
                      var _val = _this6._getOptionValue(_opt.value);

                      selected.push(_val);
                    }
                  }
                }

              _this6.value = selected;
              fn(selected);
            };
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the "disabled" property on the select input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption(value) {
            var id = (this._idCounter++).toString();

            this._optionMap.set(id, value);

            return id;
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i3 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i3 < _Array$from2.length; _i3++) {
              var id = _Array$from2[_i3];
              if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId$1(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
          }
        }, {
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
        }]);

        return SelectMultipleControlValueAccessor;
      }();

      SelectMultipleControlValueAccessor.ɵfac = function SelectMultipleControlValueAccessor_Factory(t) {
        return new (t || SelectMultipleControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      SelectMultipleControlValueAccessor.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SelectMultipleControlValueAccessor,
        selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
        hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target);
            })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR])]
      });

      SelectMultipleControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      SelectMultipleControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectMultipleControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: {
              '(change)': 'onChange($event.target)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectMultipleControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
        function ɵNgSelectMultipleOption(_element, _renderer, _select) {
          _classCallCheck(this, ɵNgSelectMultipleOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;

          if (this._select) {
            this.id = this._select._registerOption(this);
          }
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(ɵNgSelectMultipleOption, [{
          key: "_setElementValue",

          /** @internal */
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @internal */

        }, {
          key: "_setSelected",
          value: function _setSelected(selected) {
            this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }, {
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            if (this._select) {
              this._value = value;

              this._setElementValue(_buildValueString$1(this.id, value));

              this._select.writeValue(this._select.value);
            } else {
              this._setElementValue(value);
            }
          }
        }]);

        return ɵNgSelectMultipleOption;
      }();

      ɵNgSelectMultipleOption.ɵfac = function ɵNgSelectMultipleOption_Factory(t) {
        return new (t || ɵNgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectMultipleControlValueAccessor, 9));
      };

      ɵNgSelectMultipleOption.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ɵNgSelectMultipleOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      ɵNgSelectMultipleOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SelectMultipleControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }];
      };

      ɵNgSelectMultipleOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['value']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgSelectMultipleOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: SelectMultipleControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function controlPath(name, parent) {
        return [].concat(_toConsumableArray(parent.path), [name]);
      }

      function setUpControl(control, dir) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          if (!control) _throwError(dir, 'Cannot find control with');
          if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
        }

        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
        dir.valueAccessor.writeValue(control.value);
        setUpViewChangePipeline(control, dir);
        setUpModelChangePipeline(control, dir);
        setUpBlurPipeline(control, dir);

        if (dir.valueAccessor.setDisabledState) {
          control.registerOnDisabledChange(function (isDisabled) {
            dir.valueAccessor.setDisabledState(isDisabled);
          });
        } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


        dir._rawValidators.forEach(function (validator) {
          if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
            return control.updateValueAndValidity();
          });
        });

        dir._rawAsyncValidators.forEach(function (validator) {
          if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
            return control.updateValueAndValidity();
          });
        });
      }

      function cleanUpControl(control, dir) {
        var noop = function noop() {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            _noControlError(dir);
          }
        };

        dir.valueAccessor.registerOnChange(noop);
        dir.valueAccessor.registerOnTouched(noop);

        dir._rawValidators.forEach(function (validator) {
          if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
          }
        });

        dir._rawAsyncValidators.forEach(function (validator) {
          if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
          }
        });

        if (control) control._clearChangeFns();
      }

      function setUpViewChangePipeline(control, dir) {
        dir.valueAccessor.registerOnChange(function (newValue) {
          control._pendingValue = newValue;
          control._pendingChange = true;
          control._pendingDirty = true;
          if (control.updateOn === 'change') updateControl(control, dir);
        });
      }

      function setUpBlurPipeline(control, dir) {
        dir.valueAccessor.registerOnTouched(function () {
          control._pendingTouched = true;
          if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
          if (control.updateOn !== 'submit') control.markAsTouched();
        });
      }

      function updateControl(control, dir) {
        if (control._pendingDirty) control.markAsDirty();
        control.setValue(control._pendingValue, {
          emitModelToViewChange: false
        });
        dir.viewToModelUpdate(control._pendingValue);
        control._pendingChange = false;
      }

      function setUpModelChangePipeline(control, dir) {
        control.registerOnChange(function (newValue, emitModelEvent) {
          // control -> view
          dir.valueAccessor.writeValue(newValue); // control -> ngModel

          if (emitModelEvent) dir.viewToModelUpdate(newValue);
        });
      }

      function setUpFormContainer(control, dir) {
        if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Cannot find control with');
        control.validator = Validators.compose([control.validator, dir.validator]);
        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
      }

      function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
      }

      function _throwError(dir, message) {
        var messageEnd;

        if (dir.path.length > 1) {
          messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
        } else if (dir.path[0]) {
          messageEnd = "name: '".concat(dir.path, "'");
        } else {
          messageEnd = 'unspecified name attribute';
        }

        throw new Error("".concat(message, " ").concat(messageEnd));
      }

      function composeValidators(validators) {
        return validators != null ? Validators.compose(normalizeValidators(validators)) : null;
      }

      function composeAsyncValidators(validators) {
        return validators != null ? Validators.composeAsync(normalizeValidators(validators)) : null;
      }

      function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) return false;
        var change = changes['model'];
        if (change.isFirstChange()) return true;
        return !Object.is(viewModel, change.currentValue);
      }

      var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];

      function isBuiltInAccessor(valueAccessor) {
        return BUILTIN_ACCESSORS.some(function (a) {
          return valueAccessor.constructor === a;
        });
      }

      function syncPendingControls(form, directives) {
        form._syncPendingControls();

        directives.forEach(function (dir) {
          var control = dir.control;

          if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
          }
        });
      } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


      function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors) return null;
        if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
        var defaultAccessor = undefined;
        var builtinAccessor = undefined;
        var customAccessor = undefined;
        valueAccessors.forEach(function (v) {
          if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
          } else if (isBuiltInAccessor(v)) {
            if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
          } else {
            if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
          }
        });
        if (customAccessor) return customAccessor;
        if (builtinAccessor) return builtinAccessor;
        if (defaultAccessor) return defaultAccessor;

        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          _throwError(dir, 'No valid value accessor for form control with');
        }

        return null;
      }

      function removeDir(list, el) {
        var index = list.indexOf(el);
        if (index > -1) list.splice(index, 1);
      } // TODO(kara): remove after deprecation period


      function _ngModelWarning(name, type, instance, warningConfig) {
        if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never') return;

        if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            ReactiveErrors.ngModelWarning(name);
          }

          type._ngModelWarningSentOnce = true;
          instance._ngModelWarningSent = true;
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reports that a FormControl is valid, meaning that no errors exist in the input value.
       *
       * @see `status`
       */


      var VALID = 'VALID';
      /**
       * Reports that a FormControl is invalid, meaning that an error exists in the input value.
       *
       * @see `status`
       */

      var INVALID = 'INVALID';
      /**
       * Reports that a FormControl is pending, meaning that that async validation is occurring and
       * errors are not yet available for the input value.
       *
       * @see `markAsPending`
       * @see `status`
       */

      var PENDING = 'PENDING';
      /**
       * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
       * calculations of validity or value.
       *
       * @see `markAsDisabled`
       * @see `status`
       */

      var DISABLED = 'DISABLED';

      function _find(control, path, delimiter) {
        if (path == null) return null;

        if (!Array.isArray(path)) {
          path = path.split(delimiter);
        }

        if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        var controlToFind = control;
        path.forEach(function (name) {
          if (controlToFind instanceof FormGroup) {
            controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
          } else if (controlToFind instanceof FormArray) {
            controlToFind = controlToFind.at(name) || null;
          } else {
            controlToFind = null;
          }
        });
        return controlToFind;
      }
      /**
       * Gets validators from either an options object or given validators.
       */


      function pickValidators(validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
      }
      /**
       * Creates validator function by combining provided validators.
       */


      function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator || null;
      }
      /**
       * Gets async validators from either an options object or given validators.
       */


      function pickAsyncValidators(asyncValidator, validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
      }
      /**
       * Creates async validator function by combining provided async validators.
       */


      function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
      }

      function isOptionsObj(validatorOrOpts) {
        return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
      }
      /**
       * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
       *
       * It provides some of the shared behavior that all controls and groups of controls have, like
       * running validators, calculating status, and resetting state. It also defines the properties
       * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
       * instantiated directly.
       *
       * @see [Forms Guide](/guide/forms)
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       * @see [Dynamic Forms Guide](/guide/dynamic-form)
       *
       * @publicApi
       */


      var AbstractControl = /*#__PURE__*/function () {
        /**
         * Initialize the AbstractControl instance.
         *
         * @param validators The function or array of functions that is used to determine the validity of
         *     this control synchronously.
         * @param asyncValidators The function or array of functions that is used to determine validity of
         *     this control asynchronously.
         */
        function AbstractControl(validators, asyncValidators) {
          _classCallCheck(this, AbstractControl);

          /**
           * Indicates that a control has its own pending asynchronous validation in progress.
           *
           * @internal
           */
          this._hasOwnPendingAsyncValidator = false;
          /** @internal */

          this._onCollectionChange = function () {};
          /**
           * A control is `pristine` if the user has not yet changed
           * the value in the UI.
           *
           * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
           * Programmatic changes to a control's value do not mark it dirty.
           */


          this.pristine = true;
          /**
           * True if the control is marked as `touched`.
           *
           * A control is marked `touched` once the user has triggered
           * a `blur` event on it.
           */

          this.touched = false;
          /** @internal */

          this._onDisabledChange = [];
          this._rawValidators = validators;
          this._rawAsyncValidators = asyncValidators;
          this._composedValidatorFn = coerceToValidator(this._rawValidators);
          this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
        }
        /**
         * The function that is used to determine the validity of this control synchronously.
         */


        _createClass(AbstractControl, [{
          key: "setValidators",

          /**
           * Sets the synchronous validators that are active on this control.  Calling
           * this overwrites any existing sync validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */
          value: function setValidators(newValidator) {
            this._rawValidators = newValidator;
            this._composedValidatorFn = coerceToValidator(newValidator);
          }
          /**
           * Sets the async validators that are active on this control. Calling this
           * overwrites any existing async validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "setAsyncValidators",
          value: function setAsyncValidators(newValidator) {
            this._rawAsyncValidators = newValidator;
            this._composedAsyncValidatorFn = coerceToAsyncValidator(newValidator);
          }
          /**
           * Empties out the sync validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearValidators",
          value: function clearValidators() {
            this.validator = null;
          }
          /**
           * Empties out the async validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearAsyncValidators",
          value: function clearAsyncValidators() {
            this.asyncValidator = null;
          }
          /**
           * Marks the control as `touched`. A control is touched by focus and
           * blur events that do not change the value.
           *
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsTouched",
          value: function markAsTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = true;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsTouched(opts);
            }
          }
          /**
           * Marks the control and all its descendant controls as `touched`.
           * @see `markAsTouched()`
           */

        }, {
          key: "markAllAsTouched",
          value: function markAllAsTouched() {
            this.markAsTouched({
              onlySelf: true
            });

            this._forEachChild(function (control) {
              return control.markAllAsTouched();
            });
          }
          /**
           * Marks the control as `untouched`.
           *
           * If the control has any children, also marks all children as `untouched`
           * and recalculates the `touched` status of all parent controls.
           *
           * @see `markAsTouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after the marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsUntouched",
          value: function markAsUntouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = false;
            this._pendingTouched = false;

            this._forEachChild(function (control) {
              control.markAsUntouched({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /**
           * Marks the control as `dirty`. A control becomes dirty when
           * the control's value is changed through the UI; compare `markAsTouched`.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsDirty",
          value: function markAsDirty() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = false;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsDirty(opts);
            }
          }
          /**
           * Marks the control as `pristine`.
           *
           * If the control has any children, marks all children as `pristine`,
           * and recalculates the `pristine` status of all parent
           * controls.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           *
           * @param opts Configuration options that determine how the control emits events after
           * marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsPristine",
          value: function markAsPristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = true;
            this._pendingDirty = false;

            this._forEachChild(function (control) {
              control.markAsPristine({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /**
           * Marks the control as `pending`.
           *
           * A control is pending while the control performs async validation.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates changes and
           * emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
           * observable emits an event with the latest status the control is marked pending.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "markAsPending",
          value: function markAsPending() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.status = PENDING;

            if (opts.emitEvent !== false) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsPending(opts);
            }
          }
          /**
           * Disables the control. This means the control is exempt from validation checks and
           * excluded from the aggregate value of any parent. Its status is `DISABLED`.
           *
           * If the control has children, all children are also disabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates
           * changes and emits events after the control is disabled.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is disabled.
           * When false, no events are emitted.
           */

        }, {
          key: "disable",
          value: function disable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = DISABLED;
            this.errors = null;

            this._forEachChild(function (control) {
              control.disable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this._updateValue();

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(true);
            });
          }
          /**
           * Enables the control. This means the control is included in validation checks and
           * the aggregate value of its parent. Its status recalculates based on its value and
           * its validators.
           *
           * By default, if the control has children, all children are enabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configure options that control how the control propagates changes and
           * emits events when marked as untouched
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is enabled.
           * When false, no events are emitted.
           */

        }, {
          key: "enable",
          value: function enable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = VALID;

            this._forEachChild(function (control) {
              control.enable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(false);
            });
          }
        }, {
          key: "_updateAncestors",
          value: function _updateAncestors(opts) {
            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);

              if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
              }

              this._parent._updateTouched();
            }
          }
          /**
           * @param parent Sets the parent of the control
           */

        }, {
          key: "setParent",
          value: function setParent(parent) {
            this._parent = parent;
          }
          /**
           * Recalculates the value and validation status of the control.
           *
           * By default, it also updates the value and validity of its ancestors.
           *
           * @param opts Configuration options determine how the control propagates changes and emits events
           * after updates and validity checks are applied.
           * * `onlySelf`: When true, only update this control. When false or not supplied,
           * update all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "updateValueAndValidity",
          value: function updateValueAndValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this._setInitialStatus();

            this._updateValue();

            if (this.enabled) {
              this._cancelExistingSubscription();

              this.errors = this._runValidator();
              this.status = this._calculateStatus();

              if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
              }
            }

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTreeValidity",
          value: function _updateTreeValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              emitEvent: true
            };

            this._forEachChild(function (ctrl) {
              return ctrl._updateTreeValidity(opts);
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });
          }
        }, {
          key: "_setInitialStatus",
          value: function _setInitialStatus() {
            this.status = this._allControlsDisabled() ? DISABLED : VALID;
          }
        }, {
          key: "_runValidator",
          value: function _runValidator() {
            return this.validator ? this.validator(this) : null;
          }
        }, {
          key: "_runAsyncValidator",
          value: function _runAsyncValidator(emitEvent) {
            var _this7 = this;

            if (this.asyncValidator) {
              this.status = PENDING;
              this._hasOwnPendingAsyncValidator = true;
              var obs = toObservable(this.asyncValidator(this));
              this._asyncValidationSubscription = obs.subscribe(function (errors) {
                _this7._hasOwnPendingAsyncValidator = false; // This will trigger the recalculation of the validation status, which depends on
                // the state of the asynchronous validation (whether it is in progress or not). So, it is
                // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.

                _this7.setErrors(errors, {
                  emitEvent: emitEvent
                });
              });
            }
          }
        }, {
          key: "_cancelExistingSubscription",
          value: function _cancelExistingSubscription() {
            if (this._asyncValidationSubscription) {
              this._asyncValidationSubscription.unsubscribe();

              this._hasOwnPendingAsyncValidator = false;
            }
          }
          /**
           * Sets errors on a form control when running validations manually, rather than automatically.
           *
           * Calling `setErrors` also updates the validity of the parent control.
           *
           * @usageNotes
           *
           * ### Manually set the errors for a control
           *
           * ```
           * const login = new FormControl('someLogin');
           * login.setErrors({
           *   notUnique: true
           * });
           *
           * expect(login.valid).toEqual(false);
           * expect(login.errors).toEqual({ notUnique: true });
           *
           * login.setValue('someOtherLogin');
           *
           * expect(login.valid).toEqual(true);
           * ```
           */

        }, {
          key: "setErrors",
          value: function setErrors(errors) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.errors = errors;

            this._updateControlsErrors(opts.emitEvent !== false);
          }
          /**
           * Retrieves a child control given the control's name or path.
           *
           * @param path A dot-delimited string or array of string/number values that define the path to the
           * control.
           *
           * @usageNotes
           * ### Retrieve a nested control
           *
           * For example, to get a `name` control nested within a `person` sub-group:
           *
           * * `this.form.get('person.name');`
           *
           * -OR-
           *
           * * `this.form.get(['person', 'name']);`
           */

        }, {
          key: "get",
          value: function get(path) {
            return _find(this, path, '.');
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            var control = path ? this.get(path) : this;
            return control && control.errors ? control.errors[errorCode] : null;
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return !!this.getError(errorCode, path);
          }
          /**
           * Retrieves the top-level ancestor of this control.
           */

        }, {
          key: "_updateControlsErrors",

          /** @internal */
          value: function _updateControlsErrors(emitEvent) {
            this.status = this._calculateStatus();

            if (emitEvent) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent) {
              this._parent._updateControlsErrors(emitEvent);
            }
          }
          /** @internal */

        }, {
          key: "_initObservables",
          value: function _initObservables() {
            this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          }
        }, {
          key: "_calculateStatus",
          value: function _calculateStatus() {
            if (this._allControlsDisabled()) return DISABLED;
            if (this.errors) return INVALID;
            if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
            if (this._anyControlsHaveStatus(INVALID)) return INVALID;
            return VALID;
          }
          /** @internal */

        }, {
          key: "_anyControlsHaveStatus",
          value: function _anyControlsHaveStatus(status) {
            return this._anyControls(function (control) {
              return control.status === status;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsDirty",
          value: function _anyControlsDirty() {
            return this._anyControls(function (control) {
              return control.dirty;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsTouched",
          value: function _anyControlsTouched() {
            return this._anyControls(function (control) {
              return control.touched;
            });
          }
          /** @internal */

        }, {
          key: "_updatePristine",
          value: function _updatePristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = !this._anyControlsDirty();

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTouched",
          value: function _updateTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = this._anyControlsTouched();

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /** @internal */

        }, {
          key: "_isBoxedValue",
          value: function _isBoxedValue(formState) {
            return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
          }
          /** @internal */

        }, {
          key: "_registerOnCollectionChange",
          value: function _registerOnCollectionChange(fn) {
            this._onCollectionChange = fn;
          }
          /** @internal */

        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy(opts) {
            if (isOptionsObj(opts) && opts.updateOn != null) {
              this._updateOn = opts.updateOn;
            }
          }
          /**
           * Check to see if parent has been marked artificially dirty.
           *
           * @internal
           */

        }, {
          key: "_parentMarkedDirty",
          value: function _parentMarkedDirty(onlySelf) {
            var parentDirty = this._parent && this._parent.dirty;
            return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
          }
        }, {
          key: "validator",
          get: function get() {
            return this._composedValidatorFn;
          },
          set: function set(validatorFn) {
            this._rawValidators = this._composedValidatorFn = validatorFn;
          }
          /**
           * The function that is used to determine the validity of this control asynchronously.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn;
          },
          set: function set(asyncValidatorFn) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
          }
          /**
           * The parent control.
           */

        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
          /**
           * A control is `valid` when its `status` is `VALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control has passed all of its validation tests,
           * false otherwise.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.status === VALID;
          }
          /**
           * A control is `invalid` when its `status` is `INVALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control has failed one or more of its validation checks,
           * false otherwise.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.status === INVALID;
          }
          /**
           * A control is `pending` when its `status` is `PENDING`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control is in the process of conducting a validation check,
           * false otherwise.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.status == PENDING;
          }
          /**
           * A control is `disabled` when its `status` is `DISABLED`.
           *
           * Disabled controls are exempt from validation checks and
           * are not included in the aggregate value of their ancestor
           * controls.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control is disabled, false otherwise.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.status === DISABLED;
          }
          /**
           * A control is `enabled` as long as its `status` is not `DISABLED`.
           *
           * @returns True if the control has any status other than 'DISABLED',
           * false if the status is 'DISABLED'.
           *
           * @see {@link AbstractControl.status}
           *
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.status !== DISABLED;
          }
          /**
           * A control is `dirty` if the user has changed the value
           * in the UI.
           *
           * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

        }, {
          key: "dirty",
          get: function get() {
            return !this.pristine;
          }
          /**
           * True if the control has not been marked as touched
           *
           * A control is `untouched` if the user has not yet triggered
           * a `blur` event on it.
           */

        }, {
          key: "untouched",
          get: function get() {
            return !this.touched;
          }
          /**
           * Reports the update strategy of the `AbstractControl` (meaning
           * the event on which the control updates itself).
           * Possible values: `'change'` | `'blur'` | `'submit'`
           * Default value: `'change'`
           */

        }, {
          key: "updateOn",
          get: function get() {
            return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
          }
        }, {
          key: "root",
          get: function get() {
            var x = this;

            while (x._parent) {
              x = x._parent;
            }

            return x;
          }
        }]);

        return AbstractControl;
      }();
      /**
       * Tracks the value and validation status of an individual form control.
       *
       * This is one of the three fundamental building blocks of Angular forms, along with
       * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
       * implements most of the base functionality for accessing the value, validation status,
       * user interactions and events. See [usage examples below](#usage-notes).
       *
       * @see `AbstractControl`
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see [Usage Notes](#usage-notes)
       *
       * @usageNotes
       *
       * ### Initializing Form Controls
       *
       * Instantiate a `FormControl`, with an initial value.
       *
       * ```ts
       * const control = new FormControl('some value');
       * console.log(control.value);     // 'some value'
       *```
       *
       * The following example initializes the control with a form state object. The `value`
       * and `disabled` keys are required in this case.
       *
       * ```ts
       * const control = new FormControl({ value: 'n/a', disabled: true });
       * console.log(control.value);     // 'n/a'
       * console.log(control.status);    // 'DISABLED'
       * ```
       *
       * The following example initializes the control with a sync validator.
       *
       * ```ts
       * const control = new FormControl('', Validators.required);
       * console.log(control.value);      // ''
       * console.log(control.status);     // 'INVALID'
       * ```
       *
       * The following example initializes the control using an options object.
       *
       * ```ts
       * const control = new FormControl('', {
       *    validators: Validators.required,
       *    asyncValidators: myAsyncValidator
       * });
       * ```
       *
       * ### Configure the control to update on a blur event
       *
       * Set the `updateOn` option to `'blur'` to update on the blur `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'blur' });
       * ```
       *
       * ### Configure the control to update on a submit event
       *
       * Set the `updateOn` option to `'submit'` to update on a submit `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'submit' });
       * ```
       *
       * ### Reset the control back to an initial value
       *
       * You reset to a specific form state by passing through a standalone
       * value or a form state object that contains both a value and a disabled state
       * (these are the only two properties that cannot be calculated).
       *
       * ```ts
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       *
       * control.reset('Drew');
       *
       * console.log(control.value); // 'Drew'
       * ```
       *
       * ### Reset the control back to an initial value and disabled
       *
       * ```
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       * console.log(control.status); // 'VALID'
       *
       * control.reset({ value: 'Drew', disabled: true });
       *
       * console.log(control.value); // 'Drew'
       * console.log(control.status); // 'DISABLED'
       * ```
       *
       * @publicApi
       */


      var FormControl = /*#__PURE__*/function (_AbstractControl) {
        _inherits(FormControl, _AbstractControl);

        var _super5 = _createSuper(FormControl);

        /**
         * Creates a new `FormControl` instance.
         *
         * @param formState Initializes the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormControl() {
          var _this8;

          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
          var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, FormControl);

          _this8 = _super5.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          /** @internal */

          _this8._onChange = [];

          _this8._applyFormState(formState);

          _this8._setUpdateStrategy(validatorOrOpts);

          _this8.updateValueAndValidity({
            onlySelf: true,
            emitEvent: false
          });

          _this8._initObservables();

          return _this8;
        }
        /**
         * Sets a new value for the form control.
         *
         * @param value The new value for the control.
         * @param options Configuration options that determine how the control propagates changes
         * and emits events when the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
         * `onChange` event to
         * update the view.
         * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
         * `ngModelChange`
         * event to update the model.
         *
         */


        _createClass(FormControl, [{
          key: "setValue",
          value: function setValue(value) {
            var _this9 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.value = this._pendingValue = value;

            if (this._onChange.length && options.emitModelToViewChange !== false) {
              this._onChange.forEach(function (changeFn) {
                return changeFn(_this9.value, options.emitViewToModelChange !== false);
              });
            }

            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of a control.
           *
           * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
           * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
           * `FormArrays`, where it does behave differently.
           *
           * @see `setValue` for options
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.setValue(value, options);
          }
          /**
           * Resets the form control, marking it `pristine` and `untouched`, and setting
           * the value to null.
           *
           * @param formState Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "reset",
          value: function reset() {
            var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._applyFormState(formState);

            this.markAsPristine(options);
            this.markAsUntouched(options);
            this.setValue(this.value, options);
            this._pendingChange = false;
          }
          /**
           * @internal
           */

        }, {
          key: "_updateValue",
          value: function _updateValue() {}
          /**
           * @internal
           */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return false;
          }
          /**
           * @internal
           */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            return this.disabled;
          }
          /**
           * Register a listener for change events.
           *
           * @param fn The method that is called when the value changes
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange.push(fn);
          }
          /**
           * @internal
           */

        }, {
          key: "_clearChangeFns",
          value: function _clearChangeFns() {
            this._onChange = [];
            this._onDisabledChange = [];

            this._onCollectionChange = function () {};
          }
          /**
           * Register a listener for disabled events.
           *
           * @param fn The method that is called when the disabled status changes.
           */

        }, {
          key: "registerOnDisabledChange",
          value: function registerOnDisabledChange(fn) {
            this._onDisabledChange.push(fn);
          }
          /**
           * @internal
           */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {}
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            if (this.updateOn === 'submit') {
              if (this._pendingDirty) this.markAsDirty();
              if (this._pendingTouched) this.markAsTouched();

              if (this._pendingChange) {
                this.setValue(this._pendingValue, {
                  onlySelf: true,
                  emitModelToViewChange: false
                });
                return true;
              }
            }

            return false;
          }
        }, {
          key: "_applyFormState",
          value: function _applyFormState(formState) {
            if (this._isBoxedValue(formState)) {
              this.value = this._pendingValue = formState.value;
              formState.disabled ? this.disable({
                onlySelf: true,
                emitEvent: false
              }) : this.enable({
                onlySelf: true,
                emitEvent: false
              });
            } else {
              this.value = this._pendingValue = formState;
            }
          }
        }]);

        return FormControl;
      }(AbstractControl);
      /**
       * Tracks the value and validity state of a group of `FormControl` instances.
       *
       * A `FormGroup` aggregates the values of each child `FormControl` into one object,
       * with each control name as the key.  It calculates its status by reducing the status values
       * of its children. For example, if one of the controls in a group is invalid, the entire
       * group becomes invalid.
       *
       * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormArray`.
       *
       * When instantiating a `FormGroup`, pass in a collection of child controls as the first
       * argument. The key for each child registers the name for the control.
       *
       * @usageNotes
       *
       * ### Create a form group with 2 controls
       *
       * ```
       * const form = new FormGroup({
       *   first: new FormControl('Nancy', Validators.minLength(2)),
       *   last: new FormControl('Drew'),
       * });
       *
       * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
       * console.log(form.status);  // 'VALID'
       * ```
       *
       * ### Create a form group with a group-level validator
       *
       * You include group-level validators as the second arg, or group-level async
       * validators as the third arg. These come in handy when you want to perform validation
       * that considers the value of more than one child control.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('', Validators.minLength(2)),
       *   passwordConfirm: new FormControl('', Validators.minLength(2)),
       * }, passwordMatchValidator);
       *
       *
       * function passwordMatchValidator(g: FormGroup) {
       *    return g.get('password').value === g.get('passwordConfirm').value
       *       ? null : {'mismatch': true};
       * }
       * ```
       *
       * Like `FormControl` instances, you choose to pass in
       * validators and async validators as part of an options object.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('')
       *   passwordConfirm: new FormControl('')
       * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
       * ```
       *
       * ### Set the updateOn property for all controls in a form group
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * group level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const c = new FormGroup({
       *   one: new FormControl()
       * }, { updateOn: 'blur' });
       * ```
       *
       * @publicApi
       */


      var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
        _inherits(FormGroup, _AbstractControl2);

        var _super6 = _createSuper(FormGroup);

        /**
         * Creates a new `FormGroup` instance.
         *
         * @param controls A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormGroup(controls, validatorOrOpts, asyncValidator) {
          var _this10;

          _classCallCheck(this, FormGroup);

          _this10 = _super6.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this10.controls = controls;

          _this10._initObservables();

          _this10._setUpdateStrategy(validatorOrOpts);

          _this10._setUpControls();

          _this10.updateValueAndValidity({
            onlySelf: true,
            emitEvent: false
          });

          return _this10;
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update the value or validity of the control.
         * Use {@link FormGroup#addControl addControl} instead.
         *
         * @param name The control name to register in the collection
         * @param control Provides the control for the given name
         */


        _createClass(FormGroup, [{
          key: "registerControl",
          value: function registerControl(name, control) {
            if (this.controls[name]) return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);

            return control;
          }
          /**
           * Add a control to this group.
           *
           * This method also updates the value and validity of the control.
           *
           * @param name The control name to add to the collection
           * @param control Provides the control for the given name
           */

        }, {
          key: "addControl",
          value: function addControl(name, control) {
            this.registerControl(name, control);
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Remove a control from this group.
           *
           * @param name The control name to remove from the collection
           */

        }, {
          key: "removeControl",
          value: function removeControl(name) {
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Replace an existing control.
           *
           * @param name The control name to replace in the collection
           * @param control Provides the control for the given name
           */

        }, {
          key: "setControl",
          value: function setControl(name, control) {
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            if (control) this.registerControl(name, control);
            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Check whether there is an enabled control with the given name in the group.
           *
           * Reports false for disabled controls. If you'd like to check for existence in the group
           * only, use {@link AbstractControl#get get} instead.
           *
           * @param controlName The control name to check for existence in the collection
           *
           * @returns false for disabled controls, true otherwise.
           */

        }, {
          key: "contains",
          value: function contains(controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
          }
          /**
           * Sets the value of the `FormGroup`. It accepts an object that matches
           * the structure of the group, with control names as keys.
           *
           * @usageNotes
           * ### Set the complete value for the form group
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl(),
           *   last: new FormControl()
           * });
           *
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.setValue({first: 'Nancy', last: 'Drew'});
           * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
           * ```
           *
           * @throws When strict checks fail, such as setting the value of a control
           * that doesn't exist or if you exclude a value of a control that does exist.
           *
           * @param value The new value for the control that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this11 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            Object.keys(value).forEach(function (name) {
              _this11._throwIfControlMissing(name);

              _this11.controls[name].setValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormGroup`. It accepts an object with control
           * names as keys, and does its best to match the values to the correct controls
           * in the group.
           *
           * It accepts both super-sets and sub-sets of the group without throwing an error.
           *
           * @usageNotes
           * ### Patch the value for a form group
           *
           * ```
           * const form = new FormGroup({
           *    first: new FormControl(),
           *    last: new FormControl()
           * });
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.patchValue({first: 'Nancy'});
           * console.log(form.value);   // {first: 'Nancy', last: null}
           * ```
           *
           * @param value The object that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes and
           * emits events after the value is patched.
           * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
           * true.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this12 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            Object.keys(value).forEach(function (name) {
              if (_this12.controls[name]) {
                _this12.controls[name].patchValue(value[name], {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
           * the value of all descendants to null.
           *
           * You reset to a specific form state by passing in a map of states
           * that matches the structure of your form, with control names as keys. The state
           * is a standalone value or a form state object with both a value and a disabled
           * status.
           *
           * @param value Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events when the group is reset.
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * @usageNotes
           *
           * ### Reset the form group values
           *
           * ```ts
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * console.log(form.value);  // {first: 'first name', last: 'last name'}
           *
           * form.reset({ first: 'name', last: 'last name' });
           *
           * console.log(form.value);  // {first: 'name', last: 'last name'}
           * ```
           *
           * ### Reset the form group values and disabled status
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * form.reset({
           *   first: {value: 'name', disabled: true},
           *   last: 'last'
           * });
           *
           * console.log(this.form.value);  // {first: 'name', last: 'last name'}
           * console.log(this.form.get('first').status);  // 'DISABLED'
           * ```
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, name) {
              control.reset(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the `FormGroup`, including any disabled controls.
           *
           * Retrieves all values regardless of disabled status.
           * The `value` property is the best way to get the value of the group, because
           * it excludes disabled controls in the `FormGroup`.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this._reduceChildren({}, function (acc, control, name) {
              acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            });

            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(name) {
            if (!Object.keys(this.controls).length) {
              throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.controls[name]) {
              throw new Error("Cannot find form control with name: ".concat(name, "."));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            var _this13 = this;

            Object.keys(this.controls).forEach(function (k) {
              return cb(_this13.controls[k], k);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this14 = this;

            this._forEachChild(function (control) {
              control.setParent(_this14);

              control._registerOnCollectionChange(_this14._onCollectionChange);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            this.value = this._reduceValue();
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            for (var _i4 = 0, _Object$keys = Object.keys(this.controls); _i4 < _Object$keys.length; _i4++) {
              var controlName = _Object$keys[_i4];
              var control = this.controls[controlName];

              if (this.contains(controlName) && condition(control)) {
                return true;
              }
            }

            return false;
          }
          /** @internal */

        }, {
          key: "_reduceValue",
          value: function _reduceValue() {
            var _this15 = this;

            return this._reduceChildren({}, function (acc, control, name) {
              if (control.enabled || _this15.disabled) {
                acc[name] = control.value;
              }

              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_reduceChildren",
          value: function _reduceChildren(initValue, fn) {
            var res = initValue;

            this._forEachChild(function (control, name) {
              res = fn(res, control, name);
            });

            return res;
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            for (var _i5 = 0, _Object$keys2 = Object.keys(this.controls); _i5 < _Object$keys2.length; _i5++) {
              var controlName = _Object$keys2[_i5];

              if (this.controls[controlName].enabled) {
                return false;
              }
            }

            return Object.keys(this.controls).length > 0 || this.disabled;
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, name) {
              if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
              }
            });
          }
        }]);

        return FormGroup;
      }(AbstractControl);
      /**
       * Tracks the value and validity state of an array of `FormControl`,
       * `FormGroup` or `FormArray` instances.
       *
       * A `FormArray` aggregates the values of each child `FormControl` into an array.
       * It calculates its status by reducing the status values of its children. For example, if one of
       * the controls in a `FormArray` is invalid, the entire array becomes invalid.
       *
       * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormGroup`.
       *
       * @usageNotes
       *
       * ### Create an array of form controls
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy', Validators.minLength(2)),
       *   new FormControl('Drew'),
       * ]);
       *
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * console.log(arr.status);  // 'VALID'
       * ```
       *
       * ### Create a form array with array-level validators
       *
       * You include array-level validators and async validators. These come in handy
       * when you want to perform validation that considers the value of more than one child
       * control.
       *
       * The two types of validators are passed in separately as the second and third arg
       * respectively, or together as part of an options object.
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy'),
       *   new FormControl('Drew')
       * ], {validators: myValidator, asyncValidators: myAsyncValidator});
       * ```
       *
       * ### Set the updateOn property for all controls in a form array
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * array level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl()
       * ], {updateOn: 'blur'});
       * ```
       *
       * ### Adding or removing controls from a form array
       *
       * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
       * in `FormArray` itself. These methods ensure the controls are properly tracked in the
       * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
       * the `FormArray` directly, as that result in strange and unexpected behavior such
       * as broken change detection.
       *
       * @publicApi
       */


      var FormArray = /*#__PURE__*/function (_AbstractControl3) {
        _inherits(FormArray, _AbstractControl3);

        var _super7 = _createSuper(FormArray);

        /**
         * Creates a new `FormArray` instance.
         *
         * @param controls An array of child controls. Each child control is given an index
         * where it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function FormArray(controls, validatorOrOpts, asyncValidator) {
          var _this16;

          _classCallCheck(this, FormArray);

          _this16 = _super7.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this16.controls = controls;

          _this16._initObservables();

          _this16._setUpdateStrategy(validatorOrOpts);

          _this16._setUpControls();

          _this16.updateValueAndValidity({
            onlySelf: true,
            emitEvent: false
          });

          return _this16;
        }
        /**
         * Get the `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to retrieve the control
         */


        _createClass(FormArray, [{
          key: "at",
          value: function at(index) {
            return this.controls[index];
          }
          /**
           * Insert a new `AbstractControl` at the end of the array.
           *
           * @param control Form control to be inserted
           */

        }, {
          key: "push",
          value: function push(control) {
            this.controls.push(control);

            this._registerControl(control);

            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Insert a new `AbstractControl` at the given `index` in the array.
           *
           * @param index Index in the array to insert the control
           * @param control Form control to be inserted
           */

        }, {
          key: "insert",
          value: function insert(index, control) {
            this.controls.splice(index, 0, control);

            this._registerControl(control);

            this.updateValueAndValidity();
          }
          /**
           * Remove the control at the given `index` in the array.
           *
           * @param index Index in the array to remove the control
           */

        }, {
          key: "removeAt",
          value: function removeAt(index) {
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);
            this.updateValueAndValidity();
          }
          /**
           * Replace an existing control.
           *
           * @param index Index in the array to replace the control
           * @param control The `AbstractControl` control to replace the existing control
           */

        }, {
          key: "setControl",
          value: function setControl(index, control) {
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);

            if (control) {
              this.controls.splice(index, 0, control);

              this._registerControl(control);
            }

            this.updateValueAndValidity();

            this._onCollectionChange();
          }
          /**
           * Length of the control array.
           */

        }, {
          key: "setValue",

          /**
           * Sets the value of the `FormArray`. It accepts an array that matches
           * the structure of the control.
           *
           * This method performs strict checks, and throws an error if you try
           * to set the value of a control that doesn't exist or if you exclude the
           * value of a control.
           *
           * @usageNotes
           * ### Set the values for the controls in the form array
           *
           * ```
           * const arr = new FormArray([
           *   new FormControl(),
           *   new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.setValue(['Nancy', 'Drew']);
           * console.log(arr.value);   // ['Nancy', 'Drew']
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */
          value: function setValue(value) {
            var _this17 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            value.forEach(function (newValue, index) {
              _this17._throwIfControlMissing(index);

              _this17.at(index).setValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormArray`. It accepts an array that matches the
           * structure of the control, and does its best to match the values to the correct
           * controls in the group.
           *
           * It accepts both super-sets and sub-sets of the array without throwing an error.
           *
           * @usageNotes
           * ### Patch the values for controls in a form array
           *
           * ```
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.patchValue(['Nancy']);
           * console.log(arr.value);   // ['Nancy', null]
           * ```
           *
           * @param value Array of latest values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this18 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            value.forEach(function (newValue, index) {
              if (_this18.at(index)) {
                _this18.at(index).patchValue(newValue, {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
           * value of all descendants to null or null maps.
           *
           * You reset to a specific form state by passing in an array of states
           * that matches the structure of the control. The state is a standalone value
           * or a form state object with both a value and a disabled status.
           *
           * @usageNotes
           * ### Reset the values in a form array
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * arr.reset(['name', 'last name']);
           *
           * console.log(this.arr.value);  // ['name', 'last name']
           * ```
           *
           * ### Reset the values in a form array and the disabled status for the first control
           *
           * ```
           * this.arr.reset([
           *   {value: 'name', disabled: true},
           *   'last'
           * ]);
           *
           * console.log(this.arr.value);  // ['name', 'last name']
           * console.log(this.arr.get(0).status);  // 'DISABLED'
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, index) {
              control.reset(value[index], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the array, including any disabled controls.
           *
           * Reports all values regardless of disabled status.
           * For enabled controls only, the `value` property is the best way to get the value of the array.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this.controls.map(function (control) {
              return control instanceof FormControl ? control.value : control.getRawValue();
            });
          }
          /**
           * Remove all controls in the `FormArray`.
           *
           * @usageNotes
           * ### Remove all elements from a FormArray
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.length);  // 2
           *
           * arr.clear();
           * console.log(arr.length);  // 0
           * ```
           *
           * It's a simpler and more efficient alternative to removing all elements one by one:
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           *
           * while (arr.length) {
           *    arr.removeAt(0);
           * }
           * ```
           */

        }, {
          key: "clear",
          value: function clear() {
            if (this.controls.length < 1) return;

            this._forEachChild(function (control) {
              return control._registerOnCollectionChange(function () {});
            });

            this.controls.splice(0);
            this.updateValueAndValidity();
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this.controls.reduce(function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            }, false);
            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(index) {
            if (!this.controls.length) {
              throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.at(index)) {
              throw new Error("Cannot find form control at index ".concat(index));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            this.controls.forEach(function (control, index) {
              cb(control, index);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            var _this19 = this;

            this.value = this.controls.filter(function (control) {
              return control.enabled || _this19.disabled;
            }).map(function (control) {
              return control.value;
            });
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return this.controls.some(function (control) {
              return control.enabled && condition(control);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this20 = this;

            this._forEachChild(function (control) {
              return _this20._registerControl(control);
            });
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, i) {
              if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: ".concat(i, "."));
              }
            });
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            var _iterator = _createForOfIteratorHelper(this.controls),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var control = _step.value;
                if (control.enabled) return false;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.controls.length > 0 || this.disabled;
          }
        }, {
          key: "_registerControl",
          value: function _registerControl(control) {
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);
          }
        }, {
          key: "length",
          get: function get() {
            return this.controls.length;
          }
        }]);

        return FormArray;
      }(AbstractControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgForm;
        })
      };

      var ɵ0 = function ɵ0() {
        return Promise.resolve(null);
      };

      var resolvedPromise = ɵ0();
      /**
       * @description
       * Creates a top-level `FormGroup` instance and binds it to a form
       * to track aggregate form value and validation status.
       *
       * As soon as you import the `FormsModule`, this directive becomes active by default on
       * all `<form>` tags.  You don't need to add a special selector.
       *
       * You optionally export the directive into a local template variable using `ngForm` as the key
       * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
       * `FormGroup` instance are duplicated on the directive itself, so a reference to it
       * gives you access to the aggregate value and validity status of the form, as well as
       * user interaction properties like `dirty` and `touched`.
       *
       * To register child controls with the form, use `NgModel` with a `name`
       * attribute. You may use `NgModelGroup` to create sub-groups within the form.
       *
       * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
       * triggered a form submission. The `ngSubmit` event emits the original form
       * submission event.
       *
       * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
       * To import the `FormsModule` but skip its usage in some forms,
       * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
       * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
       * unnecessary because the `<form>` tags are inert. In that case, you would
       * refrain from using the `formGroup` directive.
       *
       * @usageNotes
       *
       * ### Listening for form submission
       *
       * The following example shows how to capture the form values from the "ngSubmit" event.
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Setting the update options
       *
       * The following example shows you how to change the "updateOn" option from its default using
       * ngFormOptions.
       *
       * ```html
       * <form [ngFormOptions]="{updateOn: 'blur'}">
       *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
       * </form>
       * ```
       *
       * ### Native DOM validation UI
       *
       * In order to prevent the native DOM form validation UI from interfering with Angular's form
       * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
       * `FormModule` or `ReactiveFormModule` are imported into the application.
       * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
       * `ngNativeValidate` attribute to the `<form>` element:
       *
       * ```html
       * <form ngNativeValidate>
       *   ...
       * </form>
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgForm = /*#__PURE__*/function (_ControlContainer) {
        _inherits(NgForm, _ControlContainer);

        var _super8 = _createSuper(NgForm);

        function NgForm(validators, asyncValidators) {
          var _this21;

          _classCallCheck(this, NgForm);

          _this21 = _super8.call(this);
          /**
           * @description
           * Returns whether the form submission has been triggered.
           */

          _this21.submitted = false;
          _this21._directives = [];
          /**
           * @description
           * Event emitter for the "ngSubmit" event
           */

          _this21.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this21.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
          return _this21;
        }
        /** @nodoc */


        _createClass(NgForm, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          /**
           * @description
           * The directive instance.
           */

        }, {
          key: "addControl",

          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `NgModel` directive instance.
           */
          value: function addControl(dir) {
            var _this22 = this;

            resolvedPromise.then(function () {
              var container = _this22._findContainer(dir.path);

              dir.control = container.registerControl(dir.name, dir.control);
              setUpControl(dir.control, dir);
              dir.control.updateValueAndValidity({
                emitEvent: false
              });

              _this22._directives.push(dir);
            });
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `NgModel` directive.
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `NgModel` instance from the internal list of directives
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            var _this23 = this;

            resolvedPromise.then(function () {
              var container = _this23._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }

              removeDir(_this23._directives, dir);
            });
          }
          /**
           * @description
           * Adds a new `NgModelGroup` directive instance to the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            var _this24 = this;

            resolvedPromise.then(function () {
              var container = _this24._findContainer(dir.path);

              var group = new FormGroup({});
              setUpFormContainer(group, dir);
              container.registerControl(dir.name, group);
              group.updateValueAndValidity({
                emitEvent: false
              });
            });
          }
          /**
           * @description
           * Removes the `NgModelGroup` directive instance from the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {
            var _this25 = this;

            resolvedPromise.then(function () {
              var container = _this25._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }
            });
          }
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `NgControl` directive.
           *
           * @param dir The `NgControl` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var _this26 = this;

            resolvedPromise.then(function () {
              var ctrl = _this26.form.get(dir.path);

              ctrl.setValue(value);
            });
          }
          /**
           * @description
           * Sets the value for this `FormGroup`.
           *
           * @param value The new value
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            this.control.setValue(value);
          }
          /**
           * @description
           * Method called when the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this._directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.form._updateOn = this.options.updateOn;
            }
          }
          /** @internal */

        }, {
          key: "_findContainer",
          value: function _findContainer(path) {
            path.pop();
            return path.length ? this.form.get(path) : this.form;
          }
        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * The internal `FormGroup` instance.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it is always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Returns a map of the controls in this group.
           */

        }, {
          key: "controls",
          get: function get() {
            return this.form.controls;
          }
        }]);

        return NgForm;
      }(ControlContainer);

      NgForm.ɵfac = function NgForm_Factory(t) {
        return new (t || NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      NgForm.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgForm,
        selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
        hostBindings: function NgForm_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function NgForm_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function NgForm_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          options: ["ngFormOptions", "options"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgForm.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      NgForm.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngFormOptions']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgForm, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
            providers: [formDirectiveProvider],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngFormOptions']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
       *
       * @publicApi
       */


      var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
        _inherits(AbstractFormGroupDirective, _ControlContainer2);

        var _super9 = _createSuper(AbstractFormGroupDirective);

        function AbstractFormGroupDirective() {
          _classCallCheck(this, AbstractFormGroupDirective);

          return _super9.apply(this, arguments);
        }

        _createClass(AbstractFormGroupDirective, [{
          key: "ngOnInit",

          /** @nodoc */
          value: function ngOnInit() {
            this._checkParentType(); // Register the group with its parent group.


            this.formDirective.addFormGroup(this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              // Remove the group from its parent group.
              this.formDirective.removeFormGroup(this);
            }
          }
          /**
           * @description
           * The `FormGroup` bound to this directive.
           */

        }, {
          key: "_checkParentType",

          /** @internal */
          value: function _checkParentType() {}
        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormGroup(this);
          }
          /**
           * @description
           * The path to this group from the top-level directive.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * The synchronous validators registered with this group.
           */

        }, {
          key: "validator",
          get: function get() {
            return composeValidators(this._validators);
          }
          /**
           * @description
           * The async validators registered with this group.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return composeAsyncValidators(this._asyncValidators);
          }
        }]);

        return AbstractFormGroupDirective;
      }(ControlContainer);

      AbstractFormGroupDirective.ɵfac = function AbstractFormGroupDirective_Factory(t) {
        return ɵAbstractFormGroupDirective_BaseFactory(t || AbstractFormGroupDirective);
      };

      AbstractFormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AbstractFormGroupDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵAbstractFormGroupDirective_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AbstractFormGroupDirective);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractFormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TemplateDrivenErrors = /*#__PURE__*/function () {
        function TemplateDrivenErrors() {
          _classCallCheck(this, TemplateDrivenErrors);
        }

        _createClass(TemplateDrivenErrors, null, [{
          key: "modelParentException",
          value: function modelParentException() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
          }
        }, {
          key: "formGroupNameException",
          value: function formGroupNameException() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
          }
        }, {
          key: "missingNameException",
          value: function missingNameException() {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
          }
        }, {
          key: "modelGroupParentException",
          value: function modelGroupParentException() {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
          }
        }]);

        return TemplateDrivenErrors;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var modelGroupProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgModelGroup;
        })
      };
      /**
       * @description
       * Creates and binds a `FormGroup` instance to a DOM element.
       *
       * This directive can only be used as a child of `NgForm` (within `<form>` tags).
       *
       * Use this directive to validate a sub-group of your form separately from the
       * rest of your form, or if some values in your domain model make more sense
       * to consume together in a nested object.
       *
       * Provide a name for the sub-group and it will become the key
       * for the sub-group in the form's full value. If you need direct access, export the directive into
       * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
       *
       * @usageNotes
       *
       * ### Consuming controls in a grouping
       *
       * The following example shows you how to combine controls together in a sub-group
       * of the form.
       *
       * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
        _inherits(NgModelGroup, _AbstractFormGroupDir);

        var _super10 = _createSuper(NgModelGroup);

        function NgModelGroup(parent, validators, asyncValidators) {
          var _this27;

          _classCallCheck(this, NgModelGroup);

          _this27 = _super10.call(this);
          _this27._parent = parent;
          _this27._validators = validators;
          _this27._asyncValidators = asyncValidators;
          return _this27;
        }
        /** @internal */


        _createClass(NgModelGroup, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              TemplateDrivenErrors.modelGroupParentException();
            }
          }
        }]);

        return NgModelGroup;
      }(AbstractFormGroupDirective);

      NgModelGroup.ɵfac = function NgModelGroup_Factory(t) {
        return new (t || NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      NgModelGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgModelGroup,
        selectors: [["", "ngModelGroup", ""]],
        inputs: {
          name: ["ngModelGroup", "name"]
        },
        exportAs: ["ngModelGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      NgModelGroup.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      NgModelGroup.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelGroup']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModelGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngModelGroup]',
            providers: [modelGroupProvider],
            exportAs: 'ngModelGroup'
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModelGroup']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formControlBinding = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return NgModel;
        })
      };

      var ɵ0$1 = function ɵ0$1() {
        return Promise.resolve(null);
      };
      /**
       * `ngModel` forces an additional change detection run when its inputs change:
       * E.g.:
       * ```
       * <div>{{myModel.valid}}</div>
       * <input [(ngModel)]="myValue" #myModel="ngModel">
       * ```
       * I.e. `ngModel` can export itself on the element and then be used in the template.
       * Normally, this would result in expressions before the `input` that use the exported directive
       * to have and old value as they have been
       * dirty checked before. As this is a very common case for `ngModel`, we added this second change
       * detection run.
       *
       * Notes:
       * - this is just one extra run no matter how many `ngModel` have been changed.
       * - this is a general problem when using `exportAs` for directives!
       */


      var resolvedPromise$1 = ɵ0$1();
      /**
       * @description
       * Creates a `FormControl` instance from a domain model and binds it
       * to a form control element.
       *
       * The `FormControl` instance tracks the value, user interaction, and
       * validation status of the control and keeps the view synced with the model. If used
       * within a parent form, the directive also registers itself with the form as a child
       * control.
       *
       * This directive is used by itself or as part of a larger form. Use the
       * `ngModel` selector to activate it.
       *
       * It accepts a domain model as an optional `Input`. If you have a one-way binding
       * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
       * class sets the value in the view. If you have a two-way binding with `[()]` syntax
       * (also known as 'banana-box syntax'), the value in the UI always syncs back to
       * the domain model in your class.
       *
       * To inspect the properties of the associated `FormControl` (like validity state),
       * export the directive into a local template variable using `ngModel` as the key (ex:
       * `#myVar="ngModel"`). You then access the control using the directive's `control` property, but
       * most properties used (like `valid` and `dirty`) fall through to the control anyway for direct
       * access. See a full list of properties directly available in `AbstractControlDirective`.
       *
       * @see `RadioControlValueAccessor`
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using ngModel on a standalone control
       *
       * The following examples show a simple standalone control using `ngModel`:
       *
       * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
       *
       * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
       * so that the control can be registered with the parent form under that name.
       *
       * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
       * as the parent form syncs the value for you. You access its properties by exporting it into a
       * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
       * needed on form submission.
       *
       * If you do need to populate initial values into your form, using a one-way binding for
       * `ngModel` tends to be sufficient as long as you use the exported form's value rather
       * than the domain model's value on submit.
       *
       * ### Using ngModel within a form
       *
       * The following example shows controls using `ngModel` within a form:
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Using a standalone ngModel within a group
       *
       * The following example shows you how to use a standalone ngModel control
       * within a form. This controls the display of the form, but doesn't contain form data.
       *
       * ```html
       * <form>
       *   <input name="login" ngModel placeholder="Login">
       *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
       * </form>
       * <!-- form value: {login: ''} -->
       * ```
       *
       * ### Setting the ngModel name attribute through options
       *
       * The following example shows you an alternate way to set the name attribute. The name attribute is
       * used within a custom form component, and the name `@Input` property serves a different purpose.
       *
       * ```html
       * <form>
       *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
       *   </my-person-control>
       * </form>
       * <!-- form value: {user: ''} -->
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var NgModel = /*#__PURE__*/function (_NgControl) {
        _inherits(NgModel, _NgControl);

        var _super11 = _createSuper(NgModel);

        function NgModel(parent, validators, asyncValidators, valueAccessors) {
          var _this28;

          _classCallCheck(this, NgModel);

          _this28 = _super11.call(this);
          _this28.control = new FormControl();
          /** @internal */

          _this28._registered = false;
          /**
           * @description
           * Event emitter for producing the `ngModelChange` event after
           * the view model updates.
           */

          _this28.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this28._parent = parent;
          _this28._rawValidators = validators || [];
          _this28._rawAsyncValidators = asyncValidators || [];
          _this28.valueAccessor = selectValueAccessor(_assertThisInitialized(_this28), valueAccessors);
          return _this28;
        }
        /** @nodoc */


        _createClass(NgModel, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkForErrors();

            if (!this._registered) this._setUpControl();

            if ('isDisabled' in changes) {
              this._updateDisabled(changes);
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              this._updateValue(this.model);

              this.viewModel = this.model;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "viewToModelUpdate",

          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value emitted by `ngModelChange`.
           */
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._setUpdateStrategy();

            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
            this._registered = true;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.control._updateOn = this.options.updateOn;
            }
          }
        }, {
          key: "_isStandalone",
          value: function _isStandalone() {
            return !this._parent || !!(this.options && this.options.standalone);
          }
        }, {
          key: "_setUpStandalone",
          value: function _setUpStandalone() {
            setUpControl(this.control, this);
            this.control.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_checkForErrors",
          value: function _checkForErrors() {
            if (!this._isStandalone()) {
              this._checkParentType();
            }

            this._checkName();
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
              } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
                TemplateDrivenErrors.modelParentException();
              }
            }
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.options && this.options.name) this.name = this.options.name;

            if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              TemplateDrivenErrors.missingNameException();
            }
          }
        }, {
          key: "_updateValue",
          value: function _updateValue(value) {
            var _this29 = this;

            resolvedPromise$1.then(function () {
              _this29.control.setValue(value, {
                emitViewToModelChange: false
              });
            });
          }
        }, {
          key: "_updateDisabled",
          value: function _updateDisabled(changes) {
            var _this30 = this;

            var disabledValue = changes['isDisabled'].currentValue;
            var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
            resolvedPromise$1.then(function () {
              if (isDisabled && !_this30.control.disabled) {
                _this30.control.disable();
              } else if (!isDisabled && _this30.control.disabled) {
                _this30.control.enable();
              }
            });
          }
        }, {
          key: "path",
          get: function get() {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
          }
          /**
           * @description
           * The top-level directive for this control if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Synchronous validator function composed of all the synchronous validators
           * registered with this directive.
           */

        }, {
          key: "validator",
          get: function get() {
            return composeValidators(this._rawValidators);
          }
          /**
           * @description
           * Async validator function composed of all the async validators registered with this
           * directive.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return composeAsyncValidators(this._rawAsyncValidators);
          }
        }]);

        return NgModel;
      }(NgControl);

      NgModel.ɵfac = function NgModel_Factory(t) {
        return new (t || NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10));
      };

      NgModel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NgModel,
        selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
        inputs: {
          name: "name",
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"],
          options: ["ngModelOptions", "options"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngModel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      NgModel.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }];
      };

      NgModel.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModelOptions']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModelOptions']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       *
       * Adds `novalidate` attribute to all forms by default.
       *
       * `novalidate` is used to disable browser's native form validation.
       *
       * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
       *
       * ```
       * <form ngNativeValidate></form>
       * ```
       *
       * @publicApi
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       */


      var ɵNgNoValidate = function ɵNgNoValidate() {
        _classCallCheck(this, ɵNgNoValidate);
      };

      ɵNgNoValidate.ɵfac = function ɵNgNoValidate_Factory(t) {
        return new (t || ɵNgNoValidate)();
      };

      ɵNgNoValidate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ɵNgNoValidate,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵNgNoValidate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: {
              'novalidate': ''
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token to provide to turn off the ngModel warning on formControl and formControlName.
       */


      var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
      var formControlBinding$1 = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormControlDirective;
        })
      };
      /**
       * @description
       * Synchronizes a standalone `FormControl` instance to a form control element.
       *
       * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives was deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * The following example shows how to register a standalone control and set its value.
       *
       * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
        _inherits(FormControlDirective, _NgControl2);

        var _super12 = _createSuper(FormControlDirective);

        function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this31;

          _classCallCheck(this, FormControlDirective);

          _this31 = _super12.call(this);
          _this31._ngModelWarningConfig = _ngModelWarningConfig;
          /** @deprecated as of v6 */

          _this31.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular `FormControlDirective` instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this31._ngModelWarningSent = false;
          _this31._rawValidators = validators || [];
          _this31._rawAsyncValidators = asyncValidators || [];
          _this31.valueAccessor = selectValueAccessor(_assertThisInitialized(_this31), valueAccessors);
          return _this31;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(FormControlDirective, [{
          key: "ngOnChanges",

          /** @nodoc */
          value: function ngOnChanges(changes) {
            if (this._isControlChanged(changes)) {
              setUpControl(this.form, this);

              if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
              }

              this.form.updateValueAndValidity({
                emitEvent: false
              });
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

              this.form.setValue(this.model);
              this.viewModel = this.model;
            }
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "viewToModelUpdate",

          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_isControlChanged",
          value: function _isControlChanged(changes) {
            return changes.hasOwnProperty('form');
          }
        }, {
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              ReactiveErrors.disabledAttrWarning();
            }
          }
        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Synchronous validator function composed of all the synchronous validators
           * registered with this directive.
           */

        }, {
          key: "validator",
          get: function get() {
            return composeValidators(this._rawValidators);
          }
          /**
           * @description
           * Async validator function composed of all the async validators registered with this
           * directive.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return composeAsyncValidators(this._rawAsyncValidators);
          }
          /**
           * @description
           * The `FormControl` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
        }]);

        return FormControlDirective;
      }(NgControl);

      FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
        return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      FormControlDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormControlDirective,
        selectors: [["", "formControl", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          form: ["formControl", "form"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */

      FormControlDirective._ngModelWarningSentOnce = false;

      FormControlDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      FormControlDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControl']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControl]',
            providers: [formControlBinding$1],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formControl']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider$1 = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormGroupDirective;
        })
      };
      /**
       * @description
       *
       * Binds an existing `FormGroup` to a DOM element.
       *
       * This directive accepts an existing `FormGroup` instance. It will then use this
       * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
       * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
       * and `FormArrayName` directives.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * ### Register Form Group
       *
       * The following example registers a `FormGroup` with first name and last name controls,
       * and listens for the *ngSubmit* event when the button is clicked.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
        _inherits(FormGroupDirective, _ControlContainer3);

        var _super13 = _createSuper(FormGroupDirective);

        function FormGroupDirective(_validators, _asyncValidators) {
          var _this32;

          _classCallCheck(this, FormGroupDirective);

          _this32 = _super13.call(this);
          _this32._validators = _validators;
          _this32._asyncValidators = _asyncValidators;
          /**
           * @description
           * Reports whether the form submission has been triggered.
           */

          _this32.submitted = false;
          /**
           * @description
           * Tracks the list of added `FormControlName` instances
           */

          _this32.directives = [];
          /**
           * @description
           * Tracks the `FormGroup` bound to this directive.
           */

          _this32.form = null;
          /**
           * @description
           * Emits an event when the form submission has been triggered.
           */

          _this32.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this32;
        }
        /** @nodoc */


        _createClass(FormGroupDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkFormPresent();

            if (changes.hasOwnProperty('form')) {
              this._updateValidators();

              this._updateDomValue();

              this._updateRegistrations();
            }
          }
          /**
           * @description
           * Returns this directive's instance.
           */

        }, {
          key: "addControl",

          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `FormControlName` directive instance.
           */
          value: function addControl(dir) {
            var ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
            this.directives.push(dir);
            return ctrl;
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `FormControlName` directive
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `FormControlName` instance from the internal list of directives
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            removeDir(this.directives, dir);
          }
          /**
           * Adds a new `FormGroupName` directive instance to the form.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
          /**
           * No-op method to remove the form group.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {}
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Adds a new `FormArrayName` directive instance to the form.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "addFormArray",
          value: function addFormArray(dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
          /**
           * No-op method to remove the form array.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "removeFormArray",
          value: function removeFormArray(dir) {}
          /**
           * @description
           * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "getFormArray",
          value: function getFormArray(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `FormControlName` directive.
           *
           * @param dir The `FormControlName` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
          }
          /**
           * @description
           * Method called with the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this.directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
          /** @internal */

        }, {
          key: "_updateDomValue",
          value: function _updateDomValue() {
            var _this33 = this;

            this.directives.forEach(function (dir) {
              var newCtrl = _this33.form.get(dir.path);

              if (dir.control !== newCtrl) {
                cleanUpControl(dir.control, dir);
                if (newCtrl) setUpControl(newCtrl, dir);
                dir.control = newCtrl;
              }
            });

            this.form._updateTreeValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_updateRegistrations",
          value: function _updateRegistrations() {
            var _this34 = this;

            this.form._registerOnCollectionChange(function () {
              return _this34._updateDomValue();
            });

            if (this._oldForm) this._oldForm._registerOnCollectionChange(function () {});
            this._oldForm = this.form;
          }
        }, {
          key: "_updateValidators",
          value: function _updateValidators() {
            var sync = composeValidators(this._validators);
            this.form.validator = Validators.compose([this.form.validator, sync]);
            var async = composeAsyncValidators(this._asyncValidators);
            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
          }
        }, {
          key: "_checkFormPresent",
          value: function _checkFormPresent() {
            if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.missingFormException();
            }
          }
        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * Returns the `FormGroup` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
        }]);

        return FormGroupDirective;
      }(ControlContainer);

      FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
        return new (t || FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormGroupDirective,
        selectors: [["", "formGroup", ""]],
        hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function FormGroupDirective_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          form: ["formGroup", "form"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      FormGroupDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormGroupDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroup']
        }],
        ngSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formGroup']
          }],
          ngSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formGroupNameProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormGroupName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormGroup` to a DOM element.
       *
       * This directive can only be used with a parent `FormGroupDirective`.
       *
       * It accepts the string name of the nested `FormGroup` to link, and
       * looks for a `FormGroup` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * Use nested form groups to validate a sub-group of a
       * form separately from the rest or to group the values of certain
       * controls into their own nested object.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @usageNotes
       *
       * ### Access the group by name
       *
       * The following example uses the {@link AbstractControl#get get} method to access the
       * associated `FormGroup`
       *
       * ```ts
       *   this.form.get('name');
       * ```
       *
       * ### Access individual controls in the group
       *
       * The following example uses the {@link AbstractControl#get get} method to access
       * individual controls within the group using dot syntax.
       *
       * ```ts
       *   this.form.get('name.first');
       * ```
       *
       * ### Register a nested `FormGroup`.
       *
       * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
       * and provides methods to retrieve the nested `FormGroup` and individual controls.
       *
       * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
        _inherits(FormGroupName, _AbstractFormGroupDir2);

        var _super14 = _createSuper(FormGroupName);

        function FormGroupName(parent, validators, asyncValidators) {
          var _this35;

          _classCallCheck(this, FormGroupName);

          _this35 = _super14.call(this);
          _this35._parent = parent;
          _this35._validators = validators;
          _this35._asyncValidators = asyncValidators;
          return _this35;
        }
        /** @internal */


        _createClass(FormGroupName, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.groupParentException();
            }
          }
        }]);

        return FormGroupName;
      }(AbstractFormGroupDirective);

      FormGroupName.ɵfac = function FormGroupName_Factory(t) {
        return new (t || FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormGroupName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormGroupName,
        selectors: [["", "formGroupName", ""]],
        inputs: {
          name: ["formGroupName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      FormGroupName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormGroupName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formGroupName']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formGroupName]',
            providers: [formGroupNameProvider]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formGroupName']
          }]
        });
      })();

      var formArrayNameProvider = {
        provide: ControlContainer,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormArrayName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormArray` to a DOM element.
       *
       * This directive is designed to be used with a parent `FormGroupDirective` (selector:
       * `[formGroup]`).
       *
       * It accepts the string name of the nested `FormArray` you want to link, and
       * will look for a `FormArray` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Example
       *
       * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
        _inherits(FormArrayName, _ControlContainer4);

        var _super15 = _createSuper(FormArrayName);

        function FormArrayName(parent, validators, asyncValidators) {
          var _this36;

          _classCallCheck(this, FormArrayName);

          _this36 = _super15.call(this);
          _this36._parent = parent;
          _this36._validators = validators;
          _this36._asyncValidators = asyncValidators;
          return _this36;
        }
        /**
         * A lifecycle method called when the directive's inputs are initialized. For internal use only.
         * @throws If the directive does not have a valid parent.
         * @nodoc
         */


        _createClass(FormArrayName, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkParentType();

            this.formDirective.addFormArray(this);
          }
          /**
           * A lifecycle method called before the directive's instance is destroyed. For internal use only.
           * @nodoc
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeFormArray(this);
            }
          }
          /**
           * @description
           * The `FormArray` bound to this directive.
           */

        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.arrayParentException();
            }
          }
        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormArray(this);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * Synchronous validator function composed of all the synchronous validators registered with this
           * directive.
           */

        }, {
          key: "validator",
          get: function get() {
            return composeValidators(this._validators);
          }
          /**
           * @description
           * Async validator function composed of all the async validators registered with this directive.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return composeAsyncValidators(this._asyncValidators);
          }
        }]);

        return FormArrayName;
      }(ControlContainer);

      FormArrayName.ɵfac = function FormArrayName_Factory(t) {
        return new (t || FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10));
      };

      FormArrayName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormArrayName,
        selectors: [["", "formArrayName", ""]],
        inputs: {
          name: ["formArrayName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      FormArrayName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      FormArrayName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formArrayName']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormArrayName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formArrayName]',
            providers: [formArrayNameProvider]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formArrayName']
          }]
        });
      })();

      function _hasInvalidParent(parent) {
        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var controlNameBinding = {
        provide: NgControl,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return FormControlName;
        })
      };
      /**
       * @description
       * Syncs a `FormControl` in an existing `FormGroup` to a form control
       * element by name.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Register `FormControl` within a group
       *
       * The following example shows how to register multiple form controls within a form group
       * and set their value.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * To see `formControlName` examples with different form control types, see:
       *
       * * Radio buttons: `RadioControlValueAccessor`
       * * Selects: `SelectControlValueAccessor`
       *
       * ### Use with ngModel is deprecated
       *
       * Support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives has been deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       *
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var FormControlName = /*#__PURE__*/function (_NgControl3) {
        _inherits(FormControlName, _NgControl3);

        var _super16 = _createSuper(FormControlName);

        function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this37;

          _classCallCheck(this, FormControlName);

          _this37 = _super16.call(this);
          _this37._ngModelWarningConfig = _ngModelWarningConfig;
          _this37._added = false;
          /** @deprecated as of v6 */

          _this37.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular FormControlName instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this37._ngModelWarningSent = false;
          _this37._parent = parent;
          _this37._rawValidators = validators || [];
          _this37._rawAsyncValidators = asyncValidators || [];
          _this37.valueAccessor = selectValueAccessor(_assertThisInitialized(_this37), valueAccessors);
          return _this37;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(FormControlName, [{
          key: "ngOnChanges",

          /** @nodoc */
          value: function ngOnChanges(changes) {
            if (!this._added) this._setUpControl();

            if (isPropertyUpdated(changes, this.viewModel)) {
              _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

              this.viewModel = this.model;
              this.formDirective.updateModel(this, this.model);
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeControl(this);
            }
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
              } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
                ReactiveErrors.controlParentException();
              }
            }
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._checkParentType();

            this.control = this.formDirective.addControl(this);

            if (this.control.disabled && this.valueAccessor.setDisabledState) {
              this.valueAccessor.setDisabledState(true);
            }

            this._added = true;
          }
        }, {
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              ReactiveErrors.disabledAttrWarning();
            }
          }
        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Synchronous validator function composed of all the synchronous validators
           * registered with this directive.
           */

        }, {
          key: "validator",
          get: function get() {
            return composeValidators(this._rawValidators);
          }
          /**
           * @description
           * Async validator function composed of all the async validators registered with this
           * directive.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return composeAsyncValidators(this._rawAsyncValidators);
          }
        }]);

        return FormControlName;
      }(NgControl);

      FormControlName.ɵfac = function FormControlName_Factory(t) {
        return new (t || FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      FormControlName.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FormControlName,
        selectors: [["", "formControlName", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          name: ["formControlName", "name"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */

      FormControlName._ngModelWarningSentOnce = false;

      FormControlName.ctorParameters = function () {
        return [{
          type: ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      FormControlName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['formControlName']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['ngModelChange']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[formControlName]',
            providers: [controlNameBinding]
          }]
        }], function () {
          return [{
            type: ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disabled']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['formControlName']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['ngModel']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return RequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */

      var CHECKBOX_REQUIRED_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return CheckboxRequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds the `required` validator to any controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required validator using template-driven forms
       *
       * ```
       * <input name="fullName" ngModel required>
       * ```
       *
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var RequiredValidator = /*#__PURE__*/function () {
        function RequiredValidator() {
          _classCallCheck(this, RequiredValidator);

          this._required = false;
        }
        /**
         * @description
         * Tracks changes to the required attribute bound to this directive.
         */


        _createClass(RequiredValidator, [{
          key: "validate",

          /**
           * Method that validates whether the control is empty.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          value: function validate(control) {
            return this.required ? Validators.required(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = value != null && value !== false && "".concat(value) !== 'false';
            if (this._onChange) this._onChange();
          }
        }]);

        return RequiredValidator;
      }();

      RequiredValidator.ɵfac = function RequiredValidator_Factory(t) {
        return new (t || RequiredValidator)();
      };

      RequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RequiredValidator,
        selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
        hostVars: 1,
        hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        inputs: {
          required: "required"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([REQUIRED_VALIDATOR])]
      });
      RequiredValidator.propDecorators = {
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], function () {
          return [];
        }, {
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * A Directive that adds the `required` validator to checkbox controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required checkbox validator using template-driven forms
       *
       * The following example shows how to add a checkbox required validator to an input attached to an
       * ngModel binding.
       *
       * ```
       * <input type="checkbox" name="active" ngModel required>
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */


      var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
        _inherits(CheckboxRequiredValidator, _RequiredValidator);

        var _super17 = _createSuper(CheckboxRequiredValidator);

        function CheckboxRequiredValidator() {
          _classCallCheck(this, CheckboxRequiredValidator);

          return _super17.apply(this, arguments);
        }

        _createClass(CheckboxRequiredValidator, [{
          key: "validate",

          /**
           * Method that validates whether or not the checkbox has been checked.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          value: function validate(control) {
            return this.required ? Validators.requiredTrue(control) : null;
          }
        }]);

        return CheckboxRequiredValidator;
      }(RequiredValidator);

      CheckboxRequiredValidator.ɵfac = function CheckboxRequiredValidator_Factory(t) {
        return ɵCheckboxRequiredValidator_BaseFactory(t || CheckboxRequiredValidator);
      };

      CheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CheckboxRequiredValidator,
        selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CheckboxRequiredValidator);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], null, null);
      })();
      /**
       * @description
       * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var EMAIL_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return EmailValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds the `email` validator to controls marked with the
       * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding an email validator
       *
       * The following example shows how to add an email validator to an input attached to an ngModel
       * binding.
       *
       * ```
       * <input type="email" name="email" ngModel email>
       * <input type="email" name="email" ngModel email="true">
       * <input type="email" name="email" ngModel [email]="true">
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */

      var EmailValidator = /*#__PURE__*/function () {
        function EmailValidator() {
          _classCallCheck(this, EmailValidator);

          this._enabled = false;
        }
        /**
         * @description
         * Tracks changes to the email attribute bound to this directive.
         */


        _createClass(EmailValidator, [{
          key: "validate",

          /**
           * Method that validates whether an email address is valid.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          value: function validate(control) {
            return this._enabled ? Validators.email(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "email",
          set: function set(value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange) this._onChange();
          }
        }]);

        return EmailValidator;
      }();

      EmailValidator.ɵfac = function EmailValidator_Factory(t) {
        return new (t || EmailValidator)();
      };

      EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: EmailValidator,
        selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
        inputs: {
          email: "email"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
      });
      EmailValidator.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
          }]
        }], function () {
          return [];
        }, {
          email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MIN_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return MinLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds minimum length validation to controls marked with the
       * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a minimum length validator
       *
       * The following example shows how to add a minimum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel minlength="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var MinLengthValidator = /*#__PURE__*/function () {
        function MinLengthValidator() {
          _classCallCheck(this, MinLengthValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(MinLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('minlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value meets a minimum length requirement.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.minlength == null ? null : this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
          }
        }]);

        return MinLengthValidator;
      }();

      MinLengthValidator.ɵfac = function MinLengthValidator_Factory(t) {
        return new (t || MinLengthValidator)();
      };

      MinLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MinLengthValidator,
        selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("minlength", ctx.minlength ? ctx.minlength : null);
          }
        },
        inputs: {
          minlength: "minlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MinLengthValidator.propDecorators = {
        minlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: {
              '[attr.minlength]': 'minlength ? minlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          minlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MAX_LENGTH_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return MaxLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds max length validation to controls marked with the
       * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a maximum length validator
       *
       * The following example shows how to add a maximum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel maxlength="25">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var MaxLengthValidator = /*#__PURE__*/function () {
        function MaxLengthValidator() {
          _classCallCheck(this, MaxLengthValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(MaxLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('maxlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value exceeds the maximum length requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.maxlength != null ? this._validator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
          }
        }]);

        return MaxLengthValidator;
      }();

      MaxLengthValidator.ɵfac = function MaxLengthValidator_Factory(t) {
        return new (t || MaxLengthValidator)();
      };

      MaxLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MaxLengthValidator,
        selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
          }
        },
        inputs: {
          maxlength: "maxlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      MaxLengthValidator.propDecorators = {
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaxLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: {
              '[attr.maxlength]': 'maxlength ? maxlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          maxlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var PATTERN_VALIDATOR = {
        provide: NG_VALIDATORS,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return PatternValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds regex pattern validation to controls marked with the
       * `pattern` attribute. The regex must match the entire control value.
       * The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a pattern validator
       *
       * The following example shows how to add a pattern validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var PatternValidator = /*#__PURE__*/function () {
        function PatternValidator() {
          _classCallCheck(this, PatternValidator);

          this._validator = Validators.nullValidator;
        }
        /** @nodoc */


        _createClass(PatternValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('pattern' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value matches the the pattern requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = Validators.pattern(this.pattern);
          }
        }]);

        return PatternValidator;
      }();

      PatternValidator.ɵfac = function PatternValidator_Factory(t) {
        return new (t || PatternValidator)();
      };

      PatternValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: PatternValidator,
        selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function PatternValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pattern", ctx.pattern ? ctx.pattern : null);
          }
        },
        inputs: {
          pattern: "pattern"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      PatternValidator.propDecorators = {
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatternValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: {
              '[attr.pattern]': 'pattern ? pattern : null'
            }
          }]
        }], function () {
          return [];
        }, {
          pattern: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
      var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
      var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
      /**
       * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
       */

      var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
        _classCallCheck(this, ɵInternalFormsSharedModule);
      };

      ɵInternalFormsSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ɵInternalFormsSharedModule
      });
      ɵInternalFormsSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ɵInternalFormsSharedModule_Factory(t) {
          return new (t || ɵInternalFormsSharedModule)();
        }
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ɵInternalFormsSharedModule, {
          declarations: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator],
          exports: [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ɵInternalFormsSharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: SHARED_FORM_DIRECTIVES,
            exports: SHARED_FORM_DIRECTIVES
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function isAbstractControlOptions(options) {
        return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
      }
      /**
       * @description
       * Creates an `AbstractControl` from a user-specified configuration.
       *
       * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
       * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
       * forms.
       *
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       *
       * @publicApi
       */


      var FormBuilder = /*#__PURE__*/function () {
        function FormBuilder() {
          _classCallCheck(this, FormBuilder);
        }

        _createClass(FormBuilder, [{
          key: "group",

          /**
           * @description
           * Construct a new `FormGroup` instance.
           *
           * @param controlsConfig A collection of child controls. The key for each child is the name
           * under which it is registered.
           *
           * @param options Configuration options object for the `FormGroup`. The object can
           * have two shapes:
           *
           * 1) `AbstractControlOptions` object (preferred), which consists of:
           * * `validators`: A synchronous validator function, or an array of validator functions
           * * `asyncValidators`: A single async validator or array of async validator functions
           * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
           * submit')
           *
           * 2) Legacy configuration object, which consists of:
           * * `validator`: A synchronous validator function, or an array of validator functions
           * * `asyncValidator`: A single async validator or array of async validator functions
           *
           */
          value: function group(controlsConfig) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var controls = this._reduceControls(controlsConfig);

            var validators = null;
            var asyncValidators = null;
            var updateOn = undefined;

            if (options != null) {
              if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
              } else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
              }
            }

            return new FormGroup(controls, {
              asyncValidators: asyncValidators,
              updateOn: updateOn,
              validators: validators
            });
          }
          /**
           * @description
           * Construct a new `FormControl` with the given state, validators and options.
           *
           * @param formState Initializes the control with an initial state value, or
           * with an object that contains both a value and a disabled status.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           *
           * @usageNotes
           *
           * ### Initialize a control as disabled
           *
           * The following example returns a control with an initial value in a disabled state.
           *
           * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
           * </code-example>
           */

        }, {
          key: "control",
          value: function control(formState, validatorOrOpts, asyncValidator) {
            return new FormControl(formState, validatorOrOpts, asyncValidator);
          }
          /**
           * Constructs a new `FormArray` from the given array of configurations,
           * validators and options.
           *
           * @param controlsConfig An array of child controls or control configs. Each
           * child control is given an index when it is registered.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           */

        }, {
          key: "array",
          value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
            var _this38 = this;

            var controls = controlsConfig.map(function (c) {
              return _this38._createControl(c);
            });
            return new FormArray(controls, validatorOrOpts, asyncValidator);
          }
          /** @internal */

        }, {
          key: "_reduceControls",
          value: function _reduceControls(controlsConfig) {
            var _this39 = this;

            var controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
              controls[controlName] = _this39._createControl(controlsConfig[controlName]);
            });
            return controls;
          }
          /** @internal */

        }, {
          key: "_createControl",
          value: function _createControl(controlConfig) {
            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
              return controlConfig;
            } else if (Array.isArray(controlConfig)) {
              var value = controlConfig[0];
              var validator = controlConfig.length > 1 ? controlConfig[1] : null;
              var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
              return this.control(value, validator, asyncValidator);
            } else {
              return this.control(controlConfig);
            }
          }
        }]);

        return FormBuilder;
      }();

      FormBuilder.ɵfac = function FormBuilder_Factory(t) {
        return new (t || FormBuilder)();
      };

      FormBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FormBuilder,
        factory: FormBuilder.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @publicApi
       */


      var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('10.1.0');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Exports the required providers and directives for template-driven forms,
       * making them available for import by NgModules that import this module.
       *
       * @see [Forms Overview](/guide/forms-overview)
       * @see [Template-driven Forms Guide](/guide/forms)
       *
       * @publicApi
       */

      var FormsModule = function FormsModule() {
        _classCallCheck(this, FormsModule);
      };

      FormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FormsModule
      });
      FormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FormsModule_Factory(t) {
          return new (t || FormsModule)();
        },
        providers: [RadioControlRegistry],
        imports: [ɵInternalFormsSharedModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormsModule, {
          declarations: [NgModel, NgModelGroup, NgForm],
          exports: [ɵInternalFormsSharedModule, NgModel, NgModelGroup, NgForm]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            providers: [RadioControlRegistry],
            exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();
      /**
       * Exports the required infrastructure and directives for reactive forms,
       * making them available for import by NgModules that import this module.
       *
       * @see [Forms Overview](guide/forms-overview)
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @publicApi
       */


      var ReactiveFormsModule = /*#__PURE__*/function () {
        function ReactiveFormsModule() {
          _classCallCheck(this, ReactiveFormsModule);
        }

        _createClass(ReactiveFormsModule, null, [{
          key: "withConfig",

          /**
           * @description
           * Provides options for configuring the reactive forms module.
           *
           * @param opts An object of configuration options
           * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
           * binding is used with reactive form directives.
           */
          value: function withConfig(opts) {
            return {
              ngModule: ReactiveFormsModule,
              providers: [{
                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                useValue: opts.warnOnNgModelWithFormControl
              }]
            };
          }
        }]);

        return ReactiveFormsModule;
      }();

      ReactiveFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ReactiveFormsModule
      });
      ReactiveFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ReactiveFormsModule_Factory(t) {
          return new (t || ReactiveFormsModule)();
        },
        providers: [FormBuilder, RadioControlRegistry],
        imports: [ɵInternalFormsSharedModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReactiveFormsModule, {
          declarations: [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName],
          exports: [ɵInternalFormsSharedModule, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReactiveFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            providers: [FormBuilder, RadioControlRegistry],
            exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // This file only reexports content of the `src` folder. Keep it that way.

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=forms.js.map

      /***/

    },

    /***/
    "NFeN":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js ***!
      \**********************************************************************/

    /*! exports provided: ICON_REGISTRY_PROVIDER, ICON_REGISTRY_PROVIDER_FACTORY, MAT_ICON_LOCATION, MAT_ICON_LOCATION_FACTORY, MatIcon, MatIconModule, MatIconRegistry, getMatIconFailedToSanitizeLiteralError, getMatIconFailedToSanitizeUrlError, getMatIconNameNotFoundError, getMatIconNoHttpProviderError, ɵ0 */

    /***/
    function NFeN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER", function () {
        return ICON_REGISTRY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ICON_REGISTRY_PROVIDER_FACTORY", function () {
        return ICON_REGISTRY_PROVIDER_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION", function () {
        return MAT_ICON_LOCATION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ICON_LOCATION_FACTORY", function () {
        return MAT_ICON_LOCATION_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIcon", function () {
        return MatIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIconModule", function () {
        return MatIconModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatIconRegistry", function () {
        return MatIconRegistry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeLiteralError", function () {
        return getMatIconFailedToSanitizeLiteralError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconFailedToSanitizeUrlError", function () {
        return getMatIconFailedToSanitizeUrlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconNameNotFoundError", function () {
        return getMatIconNameNotFoundError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatIconNoHttpProviderError", function () {
        return getMatIconNoHttpProviderError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an exception to be thrown in the case when attempting to
       * load an icon with a name that cannot be found.
       * @docs-private
       */


      var _c0 = ["*"];

      function getMatIconNameNotFoundError(iconName) {
        return Error("Unable to find icon with the name \"".concat(iconName, "\""));
      }
      /**
       * Returns an exception to be thrown when the consumer attempts to use
       * `<mat-icon>` without including @angular/common/http.
       * @docs-private
       */


      function getMatIconNoHttpProviderError() {
        return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
      }
      /**
       * Returns an exception to be thrown when a URL couldn't be sanitized.
       * @param url URL that was attempted to be sanitized.
       * @docs-private
       */


      function getMatIconFailedToSanitizeUrlError(url) {
        return Error("The URL provided to MatIconRegistry was not trusted as a resource URL " + "via Angular's DomSanitizer. Attempted URL was \"".concat(url, "\"."));
      }
      /**
       * Returns an exception to be thrown when a HTML string couldn't be sanitized.
       * @param literal HTML that was attempted to be sanitized.
       * @docs-private
       */


      function getMatIconFailedToSanitizeLiteralError(literal) {
        return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by " + "Angular's DomSanitizer. Attempted literal was \"".concat(literal, "\"."));
      }
      /**
       * Configuration for an icon, including the URL and possibly the cached SVG element.
       * @docs-private
       */


      var SvgIconConfig = function SvgIconConfig(url, svgText, options) {
        _classCallCheck(this, SvgIconConfig);

        this.url = url;
        this.svgText = svgText;
        this.options = options;
      };
      /**
       * Service to register and display icons used by the `<mat-icon>` component.
       * - Registers icon URLs by namespace and name.
       * - Registers icon set URLs by namespace.
       * - Registers aliases for CSS classes, for use with icon fonts.
       * - Loads icons from URLs and extracts individual icons from icon sets.
       */


      var MatIconRegistry = /*#__PURE__*/function () {
        function MatIconRegistry(_httpClient, _sanitizer, document, _errorHandler) {
          _classCallCheck(this, MatIconRegistry);

          this._httpClient = _httpClient;
          this._sanitizer = _sanitizer;
          this._errorHandler = _errorHandler;
          /**
           * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
           */

          this._svgIconConfigs = new Map();
          /**
           * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
           * Multiple icon sets can be registered under the same namespace.
           */

          this._iconSetConfigs = new Map();
          /** Cache for icons loaded by direct URLs. */

          this._cachedIconsByUrl = new Map();
          /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

          this._inProgressUrlFetches = new Map();
          /** Map from font identifiers to their CSS class names. Used for icon fonts. */

          this._fontCssClassesByAlias = new Map();
          /**
           * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
           * The default 'material-icons' value assumes that the material icon font has been loaded as
           * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
           */

          this._defaultFontSetClass = 'material-icons';
          this._document = document;
        }
        /**
         * Registers an icon by URL in the default namespace.
         * @param iconName Name under which the icon should be registered.
         * @param url
         */


        _createClass(MatIconRegistry, [{
          key: "addSvgIcon",
          value: function addSvgIcon(iconName, url, options) {
            return this.addSvgIconInNamespace('', iconName, url, options);
          }
          /**
           * Registers an icon using an HTML string in the default namespace.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteral",
          value: function addSvgIconLiteral(iconName, literal, options) {
            return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
          }
          /**
           * Registers an icon by URL in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param url
           */

        }, {
          key: "addSvgIconInNamespace",
          value: function addSvgIconInNamespace(namespace, iconName, url, options) {
            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon using an HTML string in the specified namespace.
           * @param namespace Namespace in which the icon should be registered.
           * @param iconName Name under which the icon should be registered.
           * @param literal SVG source of the icon.
           */

        }, {
          key: "addSvgIconLiteralInNamespace",
          value: function addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal); // TODO: add an ngDevMode check


            if (!cleanLiteral) {
              throw getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Registers an icon set by URL in the default namespace.
           * @param url
           */

        }, {
          key: "addSvgIconSet",
          value: function addSvgIconSet(url, options) {
            return this.addSvgIconSetInNamespace('', url, options);
          }
          /**
           * Registers an icon set using an HTML string in the default namespace.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteral",
          value: function addSvgIconSetLiteral(literal, options) {
            return this.addSvgIconSetLiteralInNamespace('', literal, options);
          }
          /**
           * Registers an icon set by URL in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param url
           */

        }, {
          key: "addSvgIconSetInNamespace",
          value: function addSvgIconSetInNamespace(namespace, url, options) {
            return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
          }
          /**
           * Registers an icon set using an HTML string in the specified namespace.
           * @param namespace Namespace in which to register the icon set.
           * @param literal SVG source of the icon set.
           */

        }, {
          key: "addSvgIconSetLiteralInNamespace",
          value: function addSvgIconSetLiteralInNamespace(namespace, literal, options) {
            var cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, literal);

            if (!cleanLiteral) {
              throw getMatIconFailedToSanitizeLiteralError(literal);
            }

            return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', cleanLiteral, options));
          }
          /**
           * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
           * component with the alias as the fontSet input will cause the class name to be applied
           * to the `<mat-icon>` element.
           *
           * @param alias Alias for the font.
           * @param className Class name override to be used instead of the alias.
           */

        }, {
          key: "registerFontClassAlias",
          value: function registerFontClassAlias(alias) {
            var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : alias;

            this._fontCssClassesByAlias.set(alias, className);

            return this;
          }
          /**
           * Returns the CSS class name associated with the alias by a previous call to
           * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
           */

        }, {
          key: "classNameForFontAlias",
          value: function classNameForFontAlias(alias) {
            return this._fontCssClassesByAlias.get(alias) || alias;
          }
          /**
           * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           *
           * @param className
           */

        }, {
          key: "setDefaultFontSetClass",
          value: function setDefaultFontSetClass(className) {
            this._defaultFontSetClass = className;
            return this;
          }
          /**
           * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
           * have a fontSet input value, and is not loading an icon by name or URL.
           */

        }, {
          key: "getDefaultFontSetClass",
          value: function getDefaultFontSetClass() {
            return this._defaultFontSetClass;
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
           * The response from the URL may be cached so this will not always cause an HTTP request, but
           * the produced element will always be a new copy of the originally fetched icon. (That is,
           * it will not contain any modifications made to elements previously returned).
           *
           * @param safeUrl URL from which to fetch the SVG icon.
           */

        }, {
          key: "getSvgIconFromUrl",
          value: function getSvgIconFromUrl(safeUrl) {
            var _this40 = this;

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl);

            if (!url) {
              throw getMatIconFailedToSanitizeUrlError(safeUrl);
            }

            var cachedIcon = this._cachedIconsByUrl.get(url);

            if (cachedIcon) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(cachedIcon));
            }

            return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svg) {
              return _this40._cachedIconsByUrl.set(url, svg);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svg) {
              return cloneSvg(svg);
            }));
          }
          /**
           * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
           * and namespace. The icon must have been previously registered with addIcon or addIconSet;
           * if not, the Observable will throw an error.
           *
           * @param name Name of the icon to be retrieved.
           * @param namespace Namespace in which to look for the icon.
           */

        }, {
          key: "getNamedSvgIcon",
          value: function getNamedSvgIcon(name) {
            var namespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            // Return (copy of) cached icon if possible.
            var key = iconKey(namespace, name);

            var config = this._svgIconConfigs.get(key);

            if (config) {
              return this._getSvgFromConfig(config);
            } // See if we have any icon sets registered for the namespace.


            var iconSetConfigs = this._iconSetConfigs.get(namespace);

            if (iconSetConfigs) {
              return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(getMatIconNameNotFoundError(key));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._svgIconConfigs.clear();

            this._iconSetConfigs.clear();

            this._cachedIconsByUrl.clear();
          }
          /**
           * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
           */

        }, {
          key: "_getSvgFromConfig",
          value: function _getSvgFromConfig(config) {
            if (config.svgText) {
              // We already have the SVG element for this icon, return a copy.
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(cloneSvg(this._svgElementFromConfig(config)));
            } else {
              // Fetch the icon from the config's URL, cache it, and return a copy.
              return this._loadSvgIconFromConfig(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (svg) {
                return cloneSvg(svg);
              }));
            }
          }
          /**
           * Attempts to find an icon with the specified name in any of the SVG icon sets.
           * First searches the available cached icons for a nested element with a matching name, and
           * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
           * that have not been cached, and searches again after all fetches are completed.
           * The returned Observable produces the SVG element if possible, and throws
           * an error if no icon with the specified name can be found.
           */

        }, {
          key: "_getSvgFromIconSetConfigs",
          value: function _getSvgFromIconSetConfigs(name, iconSetConfigs) {
            var _this41 = this;

            // For all the icon set SVG elements we've fetched, see if any contain an icon with the
            // requested name.
            var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

            if (namedIcon) {
              // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
              // time anyway, there's probably not much advantage compared to just always extracting
              // it from the icon set.
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(namedIcon);
            } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
            // fetched, fetch them now and look for iconName in the results.


            var iconSetFetchRequests = iconSetConfigs.filter(function (iconSetConfig) {
              return !iconSetConfig.svgText;
            }).map(function (iconSetConfig) {
              return _this41._loadSvgIconSetFromConfig(iconSetConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
                var url = _this41._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
                // combined Observable won't necessarily fail.


                var errorMessage = "Loading icon set URL: ".concat(url, " failed: ").concat(err.message);

                _this41._errorHandler.handleError(new Error(errorMessage));

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
              }));
            }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
            // cached SVG element (unless the request failed), and we can check again for the icon.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(iconSetFetchRequests).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              var foundIcon = _this41._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


              if (!foundIcon) {
                throw getMatIconNameNotFoundError(name);
              }

              return foundIcon;
            }));
          }
          /**
           * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractIconWithNameFromAnySet",
          value: function _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
            // Iterate backwards, so icon sets added later have precedence.
            for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
              var config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
              // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
              // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
              // some of the parsing.

              if (config.svgText && config.svgText.indexOf(iconName) > -1) {
                var svg = this._svgElementFromConfig(config);

                var foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

                if (foundIcon) {
                  return foundIcon;
                }
              }
            }

            return null;
          }
          /**
           * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
           * from it.
           */

        }, {
          key: "_loadSvgIconFromConfig",
          value: function _loadSvgIconFromConfig(config) {
            var _this42 = this;

            return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svgText) {
              return config.svgText = svgText;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
              return _this42._svgElementFromConfig(config);
            }));
          }
          /**
           * Loads the content of the icon set URL specified in the
           * SvgIconConfig and attaches it to the config.
           */

        }, {
          key: "_loadSvgIconSetFromConfig",
          value: function _loadSvgIconSetFromConfig(config) {
            if (config.svgText) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }

            return this._fetchIcon(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (svgText) {
              return config.svgText = svgText;
            }));
          }
          /**
           * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
           * tag matches the specified name. If found, copies the nested element to a new SVG element and
           * returns it. Returns null if no matching element is found.
           */

        }, {
          key: "_extractSvgIconFromSet",
          value: function _extractSvgIconFromSet(iconSet, iconName, options) {
            // Use the `id="iconName"` syntax in order to escape special
            // characters in the ID (versus using the #iconName syntax).
            var iconSource = iconSet.querySelector("[id=\"".concat(iconName, "\"]"));

            if (!iconSource) {
              return null;
            } // Clone the element and remove the ID to prevent multiple elements from being added
            // to the page with the same ID.


            var iconElement = iconSource.cloneNode(true);
            iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
            // the content of a new <svg> node.

            if (iconElement.nodeName.toLowerCase() === 'svg') {
              return this._setSvgAttributes(iconElement, options);
            } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
            // that the same could be achieved by referring to it via <use href="#id">, however the <use>
            // tag is problematic on Firefox, because it needs to include the current page path.


            if (iconElement.nodeName.toLowerCase() === 'symbol') {
              return this._setSvgAttributes(this._toSvgElement(iconElement), options);
            } // createElement('SVG') doesn't work as expected; the DOM ends up with
            // the correct nodes, but the SVG content doesn't render. Instead we
            // have to create an empty SVG node using innerHTML and append its content.
            // Elements created using DOMParser.parseFromString have the same problem.
            // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


            var svg = this._svgElementFromString('<svg></svg>'); // Clone the node so we don't remove it from the parent icon set element.


            svg.appendChild(iconElement);
            return this._setSvgAttributes(svg, options);
          }
          /**
           * Creates a DOM element from the given SVG string.
           */

        }, {
          key: "_svgElementFromString",
          value: function _svgElementFromString(str) {
            var div = this._document.createElement('DIV');

            div.innerHTML = str;
            var svg = div.querySelector('svg'); // TODO: add an ngDevMode check

            if (!svg) {
              throw Error('<svg> tag not found');
            }

            return svg;
          }
          /**
           * Converts an element into an SVG node by cloning all of its children.
           */

        }, {
          key: "_toSvgElement",
          value: function _toSvgElement(element) {
            var svg = this._svgElementFromString('<svg></svg>');

            var attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

            for (var i = 0; i < attributes.length; i++) {
              var _attributes$i = attributes[i],
                  name = _attributes$i.name,
                  value = _attributes$i.value;

              if (name !== 'id') {
                svg.setAttribute(name, value);
              }
            }

            for (var _i6 = 0; _i6 < element.childNodes.length; _i6++) {
              if (element.childNodes[_i6].nodeType === this._document.ELEMENT_NODE) {
                svg.appendChild(element.childNodes[_i6].cloneNode(true));
              }
            }

            return svg;
          }
          /**
           * Sets the default attributes for an SVG element to be used as an icon.
           */

        }, {
          key: "_setSvgAttributes",
          value: function _setSvgAttributes(svg, options) {
            svg.setAttribute('fit', '');
            svg.setAttribute('height', '100%');
            svg.setAttribute('width', '100%');
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

            if (options && options.viewBox) {
              svg.setAttribute('viewBox', options.viewBox);
            }

            return svg;
          }
          /**
           * Returns an Observable which produces the string contents of the given icon. Results may be
           * cached, so future calls with the same URL may not cause another HTTP request.
           */

        }, {
          key: "_fetchIcon",
          value: function _fetchIcon(iconConfig) {
            var _this43 = this;

            var _a;

            var safeUrl = iconConfig.url,
                options = iconConfig.options;
            var withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

            if (!this._httpClient) {
              throw getMatIconNoHttpProviderError();
            } // TODO: add an ngDevMode check


            if (safeUrl == null) {
              throw Error("Cannot fetch icon from URL \"".concat(safeUrl, "\"."));
            }

            var url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


            if (!url) {
              throw getMatIconFailedToSanitizeUrlError(safeUrl);
            } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
            // already a request in progress for that URL. It's necessary to call share() on the
            // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


            var inProgressFetch = this._inProgressUrlFetches.get(url);

            if (inProgressFetch) {
              return inProgressFetch;
            }

            var req = this._httpClient.get(url, {
              responseType: 'text',
              withCredentials: withCredentials
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this43._inProgressUrlFetches["delete"](url);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());

            this._inProgressUrlFetches.set(url, req);

            return req;
          }
          /**
           * Registers an icon config by name in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param iconName Name under which to register the config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconConfig",
          value: function _addSvgIconConfig(namespace, iconName, config) {
            this._svgIconConfigs.set(iconKey(namespace, iconName), config);

            return this;
          }
          /**
           * Registers an icon set config in the specified namespace.
           * @param namespace Namespace in which to register the icon config.
           * @param config Config to be registered.
           */

        }, {
          key: "_addSvgIconSetConfig",
          value: function _addSvgIconSetConfig(namespace, config) {
            var configNamespace = this._iconSetConfigs.get(namespace);

            if (configNamespace) {
              configNamespace.push(config);
            } else {
              this._iconSetConfigs.set(namespace, [config]);
            }

            return this;
          }
          /** Parses a config's text into an SVG element. */

        }, {
          key: "_svgElementFromConfig",
          value: function _svgElementFromConfig(config) {
            if (!config.svgElement) {
              var svg = this._svgElementFromString(config.svgText);

              this._setSvgAttributes(svg, config.options);

              config.svgElement = svg;
            }

            return config.svgElement;
          }
        }]);

        return MatIconRegistry;
      }();

      MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
        return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
      };

      MatIconRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function MatIconRegistry_Factory() {
          return new MatIconRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
        },
        token: MatIconRegistry,
        providedIn: "root"
      });

      MatIconRegistry.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
          }];
        }, null);
      })();
      /** @docs-private */


      function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
        return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
      }
      /** @docs-private */


      var ICON_REGISTRY_PROVIDER = {
        // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
        provide: MatIconRegistry,
        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]],
        useFactory: ICON_REGISTRY_PROVIDER_FACTORY
      };
      /** Clones an SVGElement while preserving type information. */

      function cloneSvg(svg) {
        return svg.cloneNode(true);
      }
      /** Returns the cache key to use for an icon namespace and name. */


      function iconKey(namespace, name) {
        return namespace + ':' + name;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Boilerplate for applying mixins to MatIcon.

      /** @docs-private */


      var MatIconBase = function MatIconBase(_elementRef) {
        _classCallCheck(this, MatIconBase);

        this._elementRef = _elementRef;
      };

      var _MatIconMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(MatIconBase);
      /**
       * Injection token used to provide the current location to `MatIcon`.
       * Used to handle server-side rendering and to stub out during unit tests.
       * @docs-private
       */


      var MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-icon-location', {
        providedIn: 'root',
        factory: MAT_ICON_LOCATION_FACTORY
      });
      /** @docs-private */

      function MAT_ICON_LOCATION_FACTORY() {
        var _document = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]);

        var _location = _document ? _document.location : null;

        return {
          // Note that this needs to be a function, rather than a property, because Angular
          // will only resolve it once, but we want the current path on each call.
          getPathname: function getPathname() {
            return _location ? _location.pathname + _location.search : '';
          }
        };
      }
      /** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


      var funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];

      var ɵ0 = function ɵ0(attr) {
        return "[".concat(attr, "]");
      };
      /** Selector that can be used to find all elements that are using a `FuncIRI`. */


      var funcIriAttributeSelector = funcIriAttributes.map(ɵ0).join(', ');
      /** Regex that can be used to extract the id out of a FuncIRI. */

      var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
      /**
       * Component to display an icon. It can be used in the following ways:
       *
       * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
       *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
       *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
       *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
       *   Examples:
       *     `<mat-icon svgIcon="left-arrow"></mat-icon>
       *     <mat-icon svgIcon="animals:cat"></mat-icon>`
       *
       * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
       *   component. By default the Material icons font is used as described at
       *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
       *   alternate font by setting the fontSet input to either the CSS class to apply to use the
       *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
       *   Examples:
       *     `<mat-icon>home</mat-icon>
       *     <mat-icon fontSet="myfont">sun</mat-icon>`
       *
       * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
       *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
       *   CSS class which causes the glyph to be displayed via a :before selector, as in
       *   https://fortawesome.github.io/Font-Awesome/examples/
       *   Example:
       *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
       */

      var MatIcon = /*#__PURE__*/function (_MatIconMixinBase2) {
        _inherits(MatIcon, _MatIconMixinBase2);

        var _super18 = _createSuper(MatIcon);

        function MatIcon(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
          var _this44;

          _classCallCheck(this, MatIcon);

          _this44 = _super18.call(this, elementRef);
          _this44._iconRegistry = _iconRegistry;
          _this44._location = _location;
          _this44._errorHandler = _errorHandler;
          _this44._inline = false;
          /** Subscription to the current in-progress SVG icon request. */

          _this44._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
          // the right thing to do for the majority of icon use-cases.

          if (!ariaHidden) {
            elementRef.nativeElement.setAttribute('aria-hidden', 'true');
          }

          return _this44;
        }
        /**
         * Whether the icon should be inlined, automatically sizing the icon to match the font size of
         * the element the icon is contained in.
         */


        _createClass(MatIcon, [{
          key: "_splitIconName",

          /**
           * Splits an svgIcon binding value into its icon set and icon name components.
           * Returns a 2-element array of [(icon set), (icon name)].
           * The separator for the two fields is ':'. If there is no separator, an empty
           * string is returned for the icon set and the entire value is returned for
           * the icon name. If the argument is falsy, returns an array of two empty strings.
           * Throws an error if the name contains two or more ':' separators.
           * Examples:
           *   `'social:cake' -> ['social', 'cake']
           *   'penguin' -> ['', 'penguin']
           *   null -> ['', '']
           *   'a:b:c' -> (throws Error)`
           */
          value: function _splitIconName(iconName) {
            if (!iconName) {
              return ['', ''];
            }

            var parts = iconName.split(':');

            switch (parts.length) {
              case 1:
                return ['', parts[0]];
              // Use default namespace.

              case 2:
                return parts;

              default:
                throw Error("Invalid icon name: \"".concat(iconName, "\""));
              // TODO: add an ngDevMode check
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this45 = this;

            // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
            var svgIconChanges = changes['svgIcon'];
            this._svgNamespace = null;
            this._svgName = null;

            if (svgIconChanges) {
              this._currentIconFetch.unsubscribe();

              if (this.svgIcon) {
                var _this$_splitIconName = this._splitIconName(this.svgIcon),
                    _this$_splitIconName2 = _slicedToArray(_this$_splitIconName, 2),
                    namespace = _this$_splitIconName2[0],
                    iconName = _this$_splitIconName2[1];

                if (namespace) {
                  this._svgNamespace = namespace;
                }

                if (iconName) {
                  this._svgName = iconName;
                }

                this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (svg) {
                  return _this45._setSvgElement(svg);
                }, function (err) {
                  var errorMessage = "Error retrieving icon ".concat(namespace, ":").concat(iconName, "! ").concat(err.message);

                  _this45._errorHandler.handleError(new Error(errorMessage));
                });
              } else if (svgIconChanges.previousValue) {
                this._clearSvgElement();
              }
            }

            if (this._usingFontIcon()) {
              this._updateFontIconClasses();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            // Update font classes because ngOnChanges won't be called if none of the inputs are present,
            // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
            if (this._usingFontIcon()) {
              this._updateFontIconClasses();
            }
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var cachedElements = this._elementsWithExternalReferences;

            if (cachedElements && cachedElements.size) {
              var newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
              // the browser doesn't have an API that will let us react on link clicks and
              // we can't depend on the Angular router. The references need to be updated,
              // because while most browsers don't care whether the URL is correct after
              // the first render, Safari will break if the user navigates to a different
              // page and the SVG isn't re-rendered.


              if (newPath !== this._previousPath) {
                this._previousPath = newPath;

                this._prependPathToReferences(newPath);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._currentIconFetch.unsubscribe();

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            }
          }
        }, {
          key: "_usingFontIcon",
          value: function _usingFontIcon() {
            return !this.svgIcon;
          }
        }, {
          key: "_setSvgElement",
          value: function _setSvgElement(svg) {
            this._clearSvgElement(); // Workaround for IE11 and Edge ignoring `style` tags inside dynamically-created SVGs.
            // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
            // Do this before inserting the element into the DOM, in order to avoid a style recalculation.


            var styleTags = svg.querySelectorAll('style');

            for (var i = 0; i < styleTags.length; i++) {
              styleTags[i].textContent += ' ';
            } // Note: we do this fix here, rather than the icon registry, because the
            // references have to point to the URL at the time that the icon was created.


            var path = this._location.getPathname();

            this._previousPath = path;

            this._cacheChildrenWithExternalReferences(svg);

            this._prependPathToReferences(path);

            this._elementRef.nativeElement.appendChild(svg);
          }
        }, {
          key: "_clearSvgElement",
          value: function _clearSvgElement() {
            var layoutElement = this._elementRef.nativeElement;
            var childCount = layoutElement.childNodes.length;

            if (this._elementsWithExternalReferences) {
              this._elementsWithExternalReferences.clear();
            } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
            // we can't use innerHTML, because IE will throw if the element has a data binding.


            while (childCount--) {
              var child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
              // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

              if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
                layoutElement.removeChild(child);
              }
            }
          }
        }, {
          key: "_updateFontIconClasses",
          value: function _updateFontIconClasses() {
            if (!this._usingFontIcon()) {
              return;
            }

            var elem = this._elementRef.nativeElement;
            var fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

            if (fontSetClass != this._previousFontSetClass) {
              if (this._previousFontSetClass) {
                elem.classList.remove(this._previousFontSetClass);
              }

              if (fontSetClass) {
                elem.classList.add(fontSetClass);
              }

              this._previousFontSetClass = fontSetClass;
            }

            if (this.fontIcon != this._previousFontIconClass) {
              if (this._previousFontIconClass) {
                elem.classList.remove(this._previousFontIconClass);
              }

              if (this.fontIcon) {
                elem.classList.add(this.fontIcon);
              }

              this._previousFontIconClass = this.fontIcon;
            }
          }
          /**
           * Cleans up a value to be used as a fontIcon or fontSet.
           * Since the value ends up being assigned as a CSS class, we
           * have to trim the value and omit space-separated values.
           */

        }, {
          key: "_cleanupFontValue",
          value: function _cleanupFontValue(value) {
            return typeof value === 'string' ? value.trim().split(' ')[0] : value;
          }
          /**
           * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
           * reference. This is required because WebKit browsers require references to be prefixed with
           * the current path, if the page has a `base` tag.
           */

        }, {
          key: "_prependPathToReferences",
          value: function _prependPathToReferences(path) {
            var elements = this._elementsWithExternalReferences;

            if (elements) {
              elements.forEach(function (attrs, element) {
                attrs.forEach(function (attr) {
                  element.setAttribute(attr.name, "url('".concat(path, "#").concat(attr.value, "')"));
                });
              });
            }
          }
          /**
           * Caches the children of an SVG element that have `url()`
           * references that we need to prefix with the current path.
           */

        }, {
          key: "_cacheChildrenWithExternalReferences",
          value: function _cacheChildrenWithExternalReferences(element) {
            var elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
            var elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

            var _loop = function _loop(i) {
              funcIriAttributes.forEach(function (attr) {
                var elementWithReference = elementsWithFuncIri[i];
                var value = elementWithReference.getAttribute(attr);
                var match = value ? value.match(funcIriPattern) : null;

                if (match) {
                  var attributes = elements.get(elementWithReference);

                  if (!attributes) {
                    attributes = [];
                    elements.set(elementWithReference, attributes);
                  }

                  attributes.push({
                    name: attr,
                    value: match[1]
                  });
                }
              });
            };

            for (var i = 0; i < elementsWithFuncIri.length; i++) {
              _loop(i);
            }
          }
        }, {
          key: "inline",
          get: function get() {
            return this._inline;
          },
          set: function set(inline) {
            this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(inline);
          }
          /** Font set that the icon is a part of. */

        }, {
          key: "fontSet",
          get: function get() {
            return this._fontSet;
          },
          set: function set(value) {
            this._fontSet = this._cleanupFontValue(value);
          }
          /** Name of an icon within a font set. */

        }, {
          key: "fontIcon",
          get: function get() {
            return this._fontIcon;
          },
          set: function set(value) {
            this._fontIcon = this._cleanupFontValue(value);
          }
        }]);

        return MatIcon;
      }(_MatIconMixinBase);

      MatIcon.ɵfac = function MatIcon_Factory(t) {
        return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));
      };

      MatIcon.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatIcon,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 7,
        hostBindings: function MatIcon_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
          }
        },
        inputs: {
          color: "color",
          inline: "inline",
          fontSet: "fontSet",
          fontIcon: "fontIcon",
          svgIcon: "svgIcon"
        },
        exportAs: ["matIcon"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatIcon_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatIcon.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: MatIconRegistry
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
            args: ['aria-hidden']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_ICON_LOCATION]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
        }];
      };

      MatIcon.propDecorators = {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fontIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: '<ng-content></ng-content>',
            selector: 'mat-icon',
            exportAs: 'matIcon',
            inputs: ['color'],
            host: {
              'role': 'img',
              'class': 'mat-icon notranslate',
              '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
              '[attr.data-mat-icon-name]': '_svgName || fontIcon',
              '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
              '[class.mat-icon-inline]': 'inline',
              '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: MatIconRegistry
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['aria-hidden']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_ICON_LOCATION]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
          }];
        }, {
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fontSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fontIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          svgIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatIconModule = function MatIconModule() {
        _classCallCheck(this, MatIconModule);
      };

      MatIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatIconModule
      });
      MatIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatIconModule_Factory(t) {
          return new (t || MatIconModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatIconModule, {
          declarations: function declarations() {
            return [MatIcon];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatIcon]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=icon.js.map

      /***/

    },

    /***/
    "TKuo":
    /*!*********************************************************************************!*\
      !*** ./src/app/sign-up/sign-up/sign-up-container/signup-container.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SignupContainerComponent */

    /***/
    function TKuo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupContainerComponent", function () {
        return SignupContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sign-up-form/sign-up-form.component */
      "YxyU");

      var SignupContainerComponent = /*#__PURE__*/function () {
        function SignupContainerComponent() {
          _classCallCheck(this, SignupContainerComponent);
        }

        _createClass(SignupContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SignupContainerComponent;
      }();

      SignupContainerComponent.ɵfac = function SignupContainerComponent_Factory(t) {
        return new (t || SignupContainerComponent)();
      };

      SignupContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupContainerComponent,
        selectors: [["app-singup-container"]],
        decls: 3,
        vars: 0,
        consts: [[1, "sign-up-container"], [1, "background"]],
        template: function SignupContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sign-up-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
          }
        },
        directives: [_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_1__["SignUpFormComponent"]],
        styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff;\n}\n\n.background[_ngcontent-%COMP%] {\n  background-image: url(\"https://andmaltes.github.io/RaiselyApplication/assets/background-pic.jpg\");\n  width: calc(100vw - 450px);\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n}\n\n.background[_ngcontent-%COMP%]::before {\n  background-image: url(\"https://andmaltes.github.io/RaiselyApplication/assets/background.png\"), linear-gradient(226deg, #ffd740 12%, #673ab7 100%);\n  height: 100%;\n  width: 100%;\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: 0.5;\n}\n\n.sign-up-container[_ngcontent-%COMP%] {\n  width: 450px;\n  padding: 40px;\n  overflow-y: auto;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwL3NpZ24tdXAtY29udGFpbmVyL3NpZ251cC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlHQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGlKQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAvc2lnbi11cC1jb250YWluZXIvc2lnbnVwLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2FuZG1hbHRlcy5naXRodWIuaW8vUmFpc2VseUFwcGxpY2F0aW9uL2Fzc2V0cy9iYWNrZ3JvdW5kLXBpYy5qcGdcIik7XHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA0NTBweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5iYWNrZ3JvdW5kOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9hbmRtYWx0ZXMuZ2l0aHViLmlvL1JhaXNlbHlBcHBsaWNhdGlvbi9hc3NldHMvYmFja2dyb3VuZC5wbmcnKSxcclxuICBsaW5lYXItZ3JhZGllbnQoMjI2ZGVnLCAjZmZkNzQwIDEyJSwgIzY3M2FiNyAgMTAwJSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uc2lnbi11cC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-singup-container',
            templateUrl: './signup-container.component.html',
            styleUrls: ['./signup-container.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Wp6s":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js ***!
      \**********************************************************************/

    /*! exports provided: MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardModule, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage */

    /***/
    function Wp6s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCard", function () {
        return MatCard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardActions", function () {
        return MatCardActions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function () {
        return MatCardAvatar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardContent", function () {
        return MatCardContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardFooter", function () {
        return MatCardFooter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardHeader", function () {
        return MatCardHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardImage", function () {
        return MatCardImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function () {
        return MatCardLgImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function () {
        return MatCardMdImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardModule", function () {
        return MatCardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function () {
        return MatCardSmImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function () {
        return MatCardSubtitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardTitle", function () {
        return MatCardTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function () {
        return MatCardTitleGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function () {
        return MatCardXlImage;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Content of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var _c0 = ["*", [["mat-card-footer"]]];
      var _c1 = ["*", "mat-card-footer"];
      var _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
      var _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
      var _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
      var _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];

      var MatCardContent = function MatCardContent() {
        _classCallCheck(this, MatCardContent);
      };

      MatCardContent.ɵfac = function MatCardContent_Factory(t) {
        return new (t || MatCardContent)();
      };

      MatCardContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardContent,
        selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
        hostAttrs: [1, "mat-card-content"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-content, [mat-card-content], [matCardContent]',
            host: {
              'class': 'mat-card-content'
            }
          }]
        }], null, null);
      })();
      /**
       * Title of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardTitle = function MatCardTitle() {
        _classCallCheck(this, MatCardTitle);
      };

      MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
        return new (t || MatCardTitle)();
      };

      MatCardTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardTitle,
        selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
        hostAttrs: [1, "mat-card-title"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "mat-card-title, [mat-card-title], [matCardTitle]",
            host: {
              'class': 'mat-card-title'
            }
          }]
        }], null, null);
      })();
      /**
       * Sub-title of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardSubtitle = function MatCardSubtitle() {
        _classCallCheck(this, MatCardSubtitle);
      };

      MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
        return new (t || MatCardSubtitle)();
      };

      MatCardSubtitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardSubtitle,
        selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
        hostAttrs: [1, "mat-card-subtitle"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
            host: {
              'class': 'mat-card-subtitle'
            }
          }]
        }], null, null);
      })();
      /**
       * Action section of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardActions = function MatCardActions() {
        _classCallCheck(this, MatCardActions);

        /** Position of the actions inside the card. */
        this.align = 'start';
      };

      MatCardActions.ɵfac = function MatCardActions_Factory(t) {
        return new (t || MatCardActions)();
      };

      MatCardActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardActions,
        selectors: [["mat-card-actions"]],
        hostAttrs: [1, "mat-card-actions"],
        hostVars: 2,
        hostBindings: function MatCardActions_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
          }
        },
        inputs: {
          align: "align"
        },
        exportAs: ["matCardActions"]
      });
      MatCardActions.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-actions',
            exportAs: 'matCardActions',
            host: {
              'class': 'mat-card-actions',
              '[class.mat-card-actions-align-end]': 'align === "end"'
            }
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * Footer of a card, needed as it's used as a selector in the API.
       * @docs-private
       */


      var MatCardFooter = function MatCardFooter() {
        _classCallCheck(this, MatCardFooter);
      };

      MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
        return new (t || MatCardFooter)();
      };

      MatCardFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardFooter,
        selectors: [["mat-card-footer"]],
        hostAttrs: [1, "mat-card-footer"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mat-card-footer',
            host: {
              'class': 'mat-card-footer'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardImage = function MatCardImage() {
        _classCallCheck(this, MatCardImage);
      };

      MatCardImage.ɵfac = function MatCardImage_Factory(t) {
        return new (t || MatCardImage)();
      };

      MatCardImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardImage,
        selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
        hostAttrs: [1, "mat-card-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-image], [matCardImage]',
            host: {
              'class': 'mat-card-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardSmImage = function MatCardSmImage() {
        _classCallCheck(this, MatCardSmImage);
      };

      MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
        return new (t || MatCardSmImage)();
      };

      MatCardSmImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardSmImage,
        selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
        hostAttrs: [1, "mat-card-sm-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-sm-image], [matCardImageSmall]',
            host: {
              'class': 'mat-card-sm-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardMdImage = function MatCardMdImage() {
        _classCallCheck(this, MatCardMdImage);
      };

      MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
        return new (t || MatCardMdImage)();
      };

      MatCardMdImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardMdImage,
        selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
        hostAttrs: [1, "mat-card-md-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-md-image], [matCardImageMedium]',
            host: {
              'class': 'mat-card-md-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardLgImage = function MatCardLgImage() {
        _classCallCheck(this, MatCardLgImage);
      };

      MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
        return new (t || MatCardLgImage)();
      };

      MatCardLgImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardLgImage,
        selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
        hostAttrs: [1, "mat-card-lg-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-lg-image], [matCardImageLarge]',
            host: {
              'class': 'mat-card-lg-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Large image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardXlImage = function MatCardXlImage() {
        _classCallCheck(this, MatCardXlImage);
      };

      MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
        return new (t || MatCardXlImage)();
      };

      MatCardXlImage.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardXlImage,
        selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
        hostAttrs: [1, "mat-card-xl-image"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-xl-image], [matCardImageXLarge]',
            host: {
              'class': 'mat-card-xl-image'
            }
          }]
        }], null, null);
      })();
      /**
       * Avatar image used in a card, needed to add the mat- CSS styling.
       * @docs-private
       */


      var MatCardAvatar = function MatCardAvatar() {
        _classCallCheck(this, MatCardAvatar);
      };

      MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
        return new (t || MatCardAvatar)();
      };

      MatCardAvatar.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCardAvatar,
        selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
        hostAttrs: [1, "mat-card-avatar"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[mat-card-avatar], [matCardAvatar]',
            host: {
              'class': 'mat-card-avatar'
            }
          }]
        }], null, null);
      })();
      /**
       * A basic content container component that adds the styles of a Material design card.
       *
       * While this component can be used alone, it also provides a number
       * of preset styles for common card sections, including:
       * - mat-card-title
       * - mat-card-subtitle
       * - mat-card-content
       * - mat-card-actions
       * - mat-card-footer
       */


      var MatCard = // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
      function MatCard(_animationMode) {
        _classCallCheck(this, MatCard);

        this._animationMode = _animationMode;
      };

      MatCard.ɵfac = function MatCard_Factory(t) {
        return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatCard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCard,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-card", "mat-focus-indicator"],
        hostVars: 2,
        hostBindings: function MatCard_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        exportAs: ["matCard"],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatCard_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      MatCard.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card',
            exportAs: 'matCard',
            template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card mat-focus-indicator',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
          }]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, null);
      })();
      /**
       * Component intended to be used within the `<mat-card>` component. It adds styles for a
       * preset header section (i.e. a title, subtitle, and avatar layout).
       * @docs-private
       */


      var MatCardHeader = function MatCardHeader() {
        _classCallCheck(this, MatCardHeader);
      };

      MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
        return new (t || MatCardHeader)();
      };

      MatCardHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCardHeader,
        selectors: [["mat-card-header"]],
        hostAttrs: [1, "mat-card-header"],
        ngContentSelectors: _c3,
        decls: 4,
        vars: 0,
        consts: [[1, "mat-card-header-text"]],
        template: function MatCardHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card-header',
            template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card-header'
            }
          }]
        }], null, null);
      })();
      /**
       * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
       * layout that groups an image with a title section.
       * @docs-private
       */


      var MatCardTitleGroup = function MatCardTitleGroup() {
        _classCallCheck(this, MatCardTitleGroup);
      };

      MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
        return new (t || MatCardTitleGroup)();
      };

      MatCardTitleGroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCardTitleGroup,
        selectors: [["mat-card-title-group"]],
        hostAttrs: [1, "mat-card-title-group"],
        ngContentSelectors: _c5,
        decls: 4,
        vars: 0,
        template: function MatCardTitleGroup_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-card-title-group',
            template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              'class': 'mat-card-title-group'
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatCardModule = function MatCardModule() {
        _classCallCheck(this, MatCardModule);
      };

      MatCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCardModule
      });
      MatCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatCardModule_Factory(t) {
          return new (t || MatCardModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCardModule, {
          declarations: function declarations() {
            return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=card.js.map

      /***/

    },

    /***/
    "Xa2L":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js ***!
      \**********************************************************************************/

    /*! exports provided: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY, MatProgressSpinner, MatProgressSpinnerModule, MatSpinner */

    /***/
    function Xa2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS", function () {
        return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY", function () {
        return MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressSpinner", function () {
        return MatProgressSpinner;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function () {
        return MatProgressSpinnerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSpinner", function () {
        return MatSpinner;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base reference size of the spinner.
       * @docs-private
       */


      function MatProgressSpinner__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
        }
      }

      function MatProgressSpinner__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
        }
      }

      function MatSpinner__svg_circle_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-name", "mat-progress-spinner-stroke-rotate-" + ctx_r0._spinnerAnimationLabel)("stroke-dashoffset", ctx_r0._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r0._getStrokeCircumference(), "px")("stroke-width", ctx_r0._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r0._getCircleRadius());
        }
      }

      function MatSpinner__svg_circle_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "circle", 3);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r1._getStrokeDashOffset(), "px")("stroke-dasharray", ctx_r1._getStrokeCircumference(), "px")("stroke-width", ctx_r1._getCircleStrokeWidth(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", ctx_r1._getCircleRadius());
        }
      }

      var _c0 = ".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";
      var BASE_SIZE = 100;
      /**
       * Base reference stroke width of the spinner.
       * @docs-private
       */

      var BASE_STROKE_WIDTH = 10; // Boilerplate for applying mixins to MatProgressSpinner.

      /** @docs-private */

      var MatProgressSpinnerBase = function MatProgressSpinnerBase(_elementRef) {
        _classCallCheck(this, MatProgressSpinnerBase);

        this._elementRef = _elementRef;
      };

      var _MatProgressSpinnerMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(MatProgressSpinnerBase, 'primary');
      /** Injection token to be used to override the default options for `mat-progress-spinner`. */


      var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-progress-spinner-default-options', {
        providedIn: 'root',
        factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
      });
      /** @docs-private */

      function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
        return {
          diameter: BASE_SIZE
        };
      } // .0001 percentage difference is necessary in order to avoid unwanted animation frames
      // for example because the animation duration is 4 seconds, .1% accounts to 4ms
      // which are enough to see the flicker described in
      // https://github.com/angular/components/issues/8984


      var INDETERMINATE_ANIMATION_TEMPLATE = "\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n";
      /**
       * `<mat-progress-spinner>` component.
       */

      var MatProgressSpinner = /*#__PURE__*/function (_MatProgressSpinnerMi) {
        _inherits(MatProgressSpinner, _MatProgressSpinnerMi);

        var _super19 = _createSuper(MatProgressSpinner);

        function MatProgressSpinner(_elementRef, platform, _document, animationMode, defaults) {
          var _this46;

          _classCallCheck(this, MatProgressSpinner);

          _this46 = _super19.call(this, _elementRef);
          _this46._elementRef = _elementRef;
          _this46._document = _document;
          _this46._diameter = BASE_SIZE;
          _this46._value = 0;
          _this46._fallbackAnimation = false;
          /** Mode of the progress circle */

          _this46.mode = 'determinate';
          var trackedDiameters = MatProgressSpinner._diameters;
          _this46._spinnerAnimationLabel = _this46._getSpinnerAnimationLabel(); // The base size is already inserted via the component's structural styles. We still
          // need to track it so we don't end up adding the same styles again.

          if (!trackedDiameters.has(_document.head)) {
            trackedDiameters.set(_document.head, new Set([BASE_SIZE]));
          }

          _this46._fallbackAnimation = platform.EDGE || platform.TRIDENT;
          _this46._noopAnimations = animationMode === 'NoopAnimations' && !!defaults && !defaults._forceAnimations;

          if (defaults) {
            if (defaults.diameter) {
              _this46.diameter = defaults.diameter;
            }

            if (defaults.strokeWidth) {
              _this46.strokeWidth = defaults.strokeWidth;
            }
          }

          return _this46;
        }
        /** The diameter of the progress spinner (will set width and height of svg). */


        _createClass(MatProgressSpinner, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var element = this._elementRef.nativeElement; // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
            // Angular seems to create the element outside the shadow root and then moves it inside, if the
            // node is inside an `ngIf` and a ShadowDom-encapsulated component.

            this._styleRoot = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["_getShadowRoot"])(element) || this._document.head;

            this._attachStyleNode(); // On IE and Edge, we can't animate the `stroke-dashoffset`
            // reliably so we fall back to a non-spec animation.


            var animationClass = "mat-progress-spinner-indeterminate".concat(this._fallbackAnimation ? '-fallback' : '', "-animation");
            element.classList.add(animationClass);
          }
          /** The radius of the spinner, adjusted for stroke width. */

        }, {
          key: "_getCircleRadius",
          value: function _getCircleRadius() {
            return (this.diameter - BASE_STROKE_WIDTH) / 2;
          }
          /** The view box of the spinner's svg element. */

        }, {
          key: "_getViewBox",
          value: function _getViewBox() {
            var viewBox = this._getCircleRadius() * 2 + this.strokeWidth;
            return "0 0 ".concat(viewBox, " ").concat(viewBox);
          }
          /** The stroke circumference of the svg circle. */

        }, {
          key: "_getStrokeCircumference",
          value: function _getStrokeCircumference() {
            return 2 * Math.PI * this._getCircleRadius();
          }
          /** The dash offset of the svg circle. */

        }, {
          key: "_getStrokeDashOffset",
          value: function _getStrokeDashOffset() {
            if (this.mode === 'determinate') {
              return this._getStrokeCircumference() * (100 - this._value) / 100;
            } // In fallback mode set the circle to 80% and rotate it with CSS.


            if (this._fallbackAnimation && this.mode === 'indeterminate') {
              return this._getStrokeCircumference() * 0.2;
            }

            return null;
          }
          /** Stroke width of the circle in percent. */

        }, {
          key: "_getCircleStrokeWidth",
          value: function _getCircleStrokeWidth() {
            return this.strokeWidth / this.diameter * 100;
          }
          /** Dynamically generates a style tag containing the correct animation for this diameter. */

        }, {
          key: "_attachStyleNode",
          value: function _attachStyleNode() {
            var styleRoot = this._styleRoot;
            var currentDiameter = this._diameter;
            var diameters = MatProgressSpinner._diameters;
            var diametersForElement = diameters.get(styleRoot);

            if (!diametersForElement || !diametersForElement.has(currentDiameter)) {
              var styleTag = this._document.createElement('style');

              styleTag.setAttribute('mat-spinner-animation', this._spinnerAnimationLabel);
              styleTag.textContent = this._getAnimationText();
              styleRoot.appendChild(styleTag);

              if (!diametersForElement) {
                diametersForElement = new Set();
                diameters.set(styleRoot, diametersForElement);
              }

              diametersForElement.add(currentDiameter);
            }
          }
          /** Generates animation styles adjusted for the spinner's diameter. */

        }, {
          key: "_getAnimationText",
          value: function _getAnimationText() {
            var strokeCircumference = this._getStrokeCircumference();

            return INDETERMINATE_ANIMATION_TEMPLATE // Animation should begin at 5% and end at 80%
            .replace(/START_VALUE/g, "".concat(0.95 * strokeCircumference)).replace(/END_VALUE/g, "".concat(0.2 * strokeCircumference)).replace(/DIAMETER/g, "".concat(this._spinnerAnimationLabel));
          }
          /** Returns the circle diameter formatted for use with the animation-name CSS property. */

        }, {
          key: "_getSpinnerAnimationLabel",
          value: function _getSpinnerAnimationLabel() {
            // The string of a float point number will include a period ‘.’ character,
            // which is not valid for a CSS animation-name.
            return this.diameter.toString().replace('.', '_');
          }
        }, {
          key: "diameter",
          get: function get() {
            return this._diameter;
          },
          set: function set(size) {
            this._diameter = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
            this._spinnerAnimationLabel = this._getSpinnerAnimationLabel(); // If this is set before `ngOnInit`, the style root may not have been resolved yet.

            if (!this._fallbackAnimation && this._styleRoot) {
              this._attachStyleNode();
            }
          }
          /** Stroke width of the progress spinner. */

        }, {
          key: "strokeWidth",
          get: function get() {
            return this._strokeWidth || this.diameter / 10;
          },
          set: function set(value) {
            this._strokeWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(value);
          }
          /** Value of the progress circle. */

        }, {
          key: "value",
          get: function get() {
            return this.mode === 'determinate' ? this._value : 0;
          },
          set: function set(newValue) {
            this._value = Math.max(0, Math.min(100, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(newValue)));
          }
        }]);

        return MatProgressSpinner;
      }(_MatProgressSpinnerMixinBase);

      MatProgressSpinner.ɵfac = function MatProgressSpinner_Factory(t) {
        return new (t || MatProgressSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };

      MatProgressSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatProgressSpinner,
        selectors: [["mat-progress-spinner"]],
        hostAttrs: ["role", "progressbar", 1, "mat-progress-spinner"],
        hostVars: 10,
        hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.mode === "determinate" ? 0 : null)("aria-valuemax", ctx.mode === "determinate" ? 100 : null)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          color: "color",
          mode: "mode",
          diameter: "diameter",
          strokeWidth: "strokeWidth",
          value: "value"
        },
        exportAs: ["matProgressSpinner"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 8,
        consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
        template: function MatProgressSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatProgressSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatProgressSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: [_c0],
        encapsulation: 2,
        changeDetection: 0
      });
      /**
       * Tracks diameters of existing instances to de-dupe generated styles (default d = 100).
       * We need to keep track of which elements the diameters were attached to, because for
       * elements in the Shadow DOM the style tags are attached to the shadow root, rather
       * than the document head.
       */

      MatProgressSpinner._diameters = new WeakMap();

      MatProgressSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      };

      MatProgressSpinner.propDecorators = {
        diameter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        strokeWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinner, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-progress-spinner',
            exportAs: 'matProgressSpinner',
            host: {
              'role': 'progressbar',
              'class': 'mat-progress-spinner',
              '[class._mat-animation-noopable]': "_noopAnimations",
              '[style.width.px]': 'diameter',
              '[style.height.px]': 'diameter',
              '[attr.aria-valuemin]': 'mode === "determinate" ? 0 : null',
              '[attr.aria-valuemax]': 'mode === "determinate" ? 100 : null',
              '[attr.aria-valuenow]': 'mode === "determinate" ? value : null',
              '[attr.mode]': 'mode'
            },
            inputs: ['color'],
            template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          diameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * `<mat-spinner>` component.
       *
       * This is a component definition to be used as a convenience reference to create an
       * indeterminate `<mat-progress-spinner>` instance.
       */


      var MatSpinner = /*#__PURE__*/function (_MatProgressSpinner) {
        _inherits(MatSpinner, _MatProgressSpinner);

        var _super20 = _createSuper(MatSpinner);

        function MatSpinner(elementRef, platform, document, animationMode, defaults) {
          var _this47;

          _classCallCheck(this, MatSpinner);

          _this47 = _super20.call(this, elementRef, platform, document, animationMode, defaults);
          _this47.mode = 'indeterminate';
          return _this47;
        }

        return MatSpinner;
      }(MatProgressSpinner);

      MatSpinner.ɵfac = function MatSpinner_Factory(t) {
        return new (t || MatSpinner)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS));
      };

      MatSpinner.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSpinner,
        selectors: [["mat-spinner"]],
        hostAttrs: ["role", "progressbar", "mode", "indeterminate", 1, "mat-spinner", "mat-progress-spinner"],
        hostVars: 6,
        hostBindings: function MatSpinner_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          color: "color"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 8,
        consts: [["preserveAspectRatio", "xMidYMid meet", "focusable", "false", 3, "ngSwitch"], ["cx", "50%", "cy", "50%", 3, "animation-name", "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%", 3, "stroke-dashoffset", "stroke-dasharray", "stroke-width", 4, "ngSwitchCase"], ["cx", "50%", "cy", "50%"]],
        template: function MatSpinner_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSpinner__svg_circle_1_Template, 1, 9, "circle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatSpinner__svg_circle_2_Template, 1, 7, "circle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.diameter, "px")("height", ctx.diameter, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode === "indeterminate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("viewBox", ctx._getViewBox());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]],
        styles: [_c0],
        encapsulation: 2,
        changeDetection: 0
      });

      MatSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSpinner, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mat-spinner',
            host: {
              'role': 'progressbar',
              'mode': 'indeterminate',
              'class': 'mat-spinner mat-progress-spinner',
              '[class._mat-animation-noopable]': "_noopAnimations",
              '[style.width.px]': 'diameter',
              '[style.height.px]': 'diameter'
            },
            inputs: ['color'],
            template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the mat-progress-spinner\n  element containing the SVG. `focusable=\"false\"` prevents IE from allowing the user to\n  tab into the SVG element.\n-->\n\n<svg\n  [style.width.px]=\"diameter\"\n  [style.height.px]=\"diameter\"\n  [attr.viewBox]=\"_getViewBox()\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  [ngSwitch]=\"mode === 'indeterminate'\">\n\n  <!--\n    Technically we can reuse the same `circle` element, however Safari has an issue that breaks\n    the SVG rendering in determinate mode, after switching between indeterminate and determinate.\n    Using a different element avoids the issue. An alternative to this is adding `display: none`\n    for a split second and then removing it when switching between modes, but it's hard to know\n    for how long to hide the element and it can cause the UI to blink.\n  -->\n  <circle\n    *ngSwitchCase=\"true\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.animation-name]=\"'mat-progress-spinner-stroke-rotate-' + _spinnerAnimationLabel\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n\n  <circle\n    *ngSwitchCase=\"false\"\n    cx=\"50%\"\n    cy=\"50%\"\n    [attr.r]=\"_getCircleRadius()\"\n    [style.stroke-dashoffset.px]=\"_getStrokeDashOffset()\"\n    [style.stroke-dasharray.px]=\"_getStrokeCircumference()\"\n    [style.stroke-width.%]=\"_getCircleStrokeWidth()\"></circle>\n</svg>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatProgressSpinnerModule = function MatProgressSpinnerModule() {
        _classCallCheck(this, MatProgressSpinnerModule);
      };

      MatProgressSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatProgressSpinnerModule
      });
      MatProgressSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatProgressSpinnerModule_Factory(t) {
          return new (t || MatProgressSpinnerModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatProgressSpinnerModule, {
          declarations: function declarations() {
            return [MatProgressSpinner, MatSpinner];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          },
          exports: function exports() {
            return [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatProgressSpinnerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [MatProgressSpinner, MatSpinner, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
            declarations: [MatProgressSpinner, MatSpinner]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=progress-spinner.js.map

      /***/

    },

    /***/
    "XxzT":
    /*!*****************************************************!*\
      !*** ./src/app/sign-up/services/sign-up.service.ts ***!
      \*****************************************************/

    /*! exports provided: SignUpService */

    /***/
    function XxzT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpService", function () {
        return SignUpService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var SignUpService = /*#__PURE__*/function () {
        function SignUpService(http) {
          _classCallCheck(this, SignUpService);

          this.http = http;
        }

        _createClass(SignUpService, [{
          key: "checkUser",
          value: function checkUser(request) {
            return this.http.post('https://api.raisely.com/v3/check-user', request);
          }
        }, {
          key: "signUp",
          value: function signUp(request) {
            return this.http.post('https://api.raisely.com/v3/signup', request);
          }
        }]);

        return SignUpService;
      }();

      SignUpService.ɵfac = function SignUpService_Factory(t) {
        return new (t || SignUpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      SignUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SignUpService,
        factory: SignUpService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YxyU":
    /*!******************************************************************************************!*\
      !*** ./src/app/sign-up/sign-up/sign-up-container/sign-up-form/sign-up-form.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: SignUpFormComponent, EnumUserExists */

    /***/
    function YxyU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function () {
        return SignUpFormComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnumUserExists", function () {
        return EnumUserExists;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _modals_confirmation_moldal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../modals/confirmation-moldal/confirmation-modal.component */
      "Q+5x");
      /* harmony import */


      var _modals_error_modals_services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../modals/error-modals/services/error-modal.store.service */
      "aBuy");
      /* harmony import */


      var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/sign-up.service */
      "XxzT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function SignUpFormComponent_mat_spinner_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 13);
        }
      }

      function SignUpFormComponent_mat_icon_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_11_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_11_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_11_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The email address is already in use, please use a different email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_11_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Something has happened, please try again later. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpFormComponent_mat_error_11_span_1_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpFormComponent_mat_error_11_span_2_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignUpFormComponent_mat_error_11_span_3_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignUpFormComponent_mat_error_11_span_4_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls["email"].errors["required"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls["email"].errors["email"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls["email"].errors["exists"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls["email"].errors["unknown"]);
        }
      }

      function SignUpFormComponent_mat_error_16_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpFormComponent_mat_error_16_span_1_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls["firstName"].errors["required"]);
        }
      }

      function SignUpFormComponent_mat_error_21_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpFormComponent_mat_error_21_span_1_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.controls["lastName"].errors["required"]);
        }
      }

      function SignUpFormComponent_mat_error_29_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpFormComponent_mat_error_29_span_1_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.signupForm.controls["password"].errors["required"]);
        }
      }

      function SignUpFormComponent_mat_error_37_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password confirmation is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_37_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password does not match ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SignUpFormComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignUpFormComponent_mat_error_37_span_1_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignUpFormComponent_mat_error_37_span_2_Template, 2, 0, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.signupForm.controls["confirmPassword"].errors["required"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.signupForm.controls["confirmPassword"].errors["validatePassword"]);
        }
      }

      var SignUpFormComponent = /*#__PURE__*/function () {
        function SignUpFormComponent(formBuilder, errorModalStoreService, signUpService, matDialog) {
          _classCallCheck(this, SignUpFormComponent);

          this.formBuilder = formBuilder;
          this.errorModalStoreService = errorModalStoreService;
          this.signUpService = signUpService;
          this.matDialog = matDialog;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.signupForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: this.validatePassword()
          });
          this.hidePassword = true;
          this.hidePasswordConfirmation = true;
          this.debounceTime = 500;
          this.userExists = EnumUserExists.initial;
          this.EnumUserExists = EnumUserExists;
        }

        _createClass(SignUpFormComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true); // Now let's also unsubscribe from the subject itself:

            this.destroy$.unsubscribe();
          }
        }, {
          key: "validatePassword",
          value: function validatePassword() {
            return function (formGroup) {
              var control = formGroup.controls.password;
              var matchingControl = formGroup.controls.confirmPassword;

              if (matchingControl.errors && !matchingControl.errors.validatePassword) {
                return;
              }

              if (control.value !== matchingControl.value) {
                matchingControl.setErrors({
                  validatePassword: true
                });
              } else {
                matchingControl.setErrors(null);
              }
            };
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this48 = this;

            this.signupForm.controls.email.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (email) {
              _this48.userExists = EnumUserExists.initial;
              return email;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.debounceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function () {
              return !_this48.signupForm.controls.email.errors;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (email) {
              _this48.userExists = EnumUserExists.checking;
              var request = {
                campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
                data: {
                  email: email
                }
              };
              return _this48.signUpService.checkUser(request);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              switch (response.data.status) {
                case 'OK':
                  _this48.userExists = EnumUserExists.valid;

                  _this48.signupForm.controls.email.setErrors(null);

                  break;

                case 'EXISTS':
                  _this48.userExists = EnumUserExists.exists;

                  _this48.signupForm.controls.email.setErrors({
                    exists: true
                  });

                  break;

                default:
                  _this48.userExists = EnumUserExists.error;

                  _this48.signupForm.controls.email.setErrors({
                    unknown: true
                  });

                  break;
              }
            })).subscribe(function (response) {}, function (err) {
              _this48.errorModalStoreService.setError('Something has happened. Our IT department is working on it');

              console.log(err);
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this49 = this;

            if (this.signupForm.invalid) {
              this.errorModalStoreService.setError('Please verify that the information is completed and valid.');
            } else if (this.userExists === EnumUserExists.initial || this.userExists === EnumUserExists.checking) {
              this.errorModalStoreService.setError('We are verifying if the email address exists. Please allow us one more minute.');
            } else {
              var request = {
                campaignUuid: '46aa3270-d2ee-11ea-a9f0-e9a68ccff42a',
                data: {
                  email: this.signupForm.controls.email.value,
                  firstName: this.signupForm.controls.firstName.value,
                  lastName: this.signupForm.controls.lastName.value,
                  password: this.signupForm.controls.password.value
                }
              };
              this.signUpService.signUp(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (response) {
                var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
                dialogConfig.disableClose = true;
                dialogConfig.autoFocus = true;

                var reference = _this49.matDialog.open(_modals_confirmation_moldal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationModalComponent"], dialogConfig);

                reference.componentInstance.message = response.message;

                _this49.signupForm.reset();
              }, function (err) {
                _this49.errorModalStoreService.setError('Something has happened. Our IT department is working on it');

                console.log(err);
              });
            }
          }
        }]);

        return SignUpFormComponent;
      }();

      SignUpFormComponent.ɵfac = function SignUpFormComponent_Factory(t) {
        return new (t || SignUpFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modals_error_modals_services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_6__["ErrorModalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sign_up_service__WEBPACK_IMPORTED_MODULE_7__["SignUpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
      };

      SignUpFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpFormComponent,
        selectors: [["app-sign-up-form"]],
        decls: 40,
        vars: 16,
        consts: [[3, "formGroup"], ["appearance", "outline"], ["formControlName", "email", "matInput", "", "type", "text"], ["diameter", "20", "color", "accent", "matSuffix", "", 4, "ngIf"], ["matSuffix", "", 4, "ngIf"], [4, "ngIf"], ["formControlName", "firstName", "matInput", "", "type", "text"], ["formControlName", "lastName", "matInput", "", "type", "text"], ["formControlName", "password", "matInput", "", "type", "text", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["appearance", "outline", 1, "example-form-field"], ["formControlName", "confirmPassword", "matInput", "", "type", "text", 3, "type"], ["color", "primary", "mat-flat-button", "", 3, "click"], ["diameter", "20", "color", "accent", "matSuffix", ""], ["matSuffix", ""]],
        template: function SignUpFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create a new free account and star receiving special offers!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignUpFormComponent_mat_spinner_9_Template, 1, 0, "mat-spinner", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignUpFormComponent_mat_icon_10_Template, 2, 0, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignUpFormComponent_mat_error_11_Template, 5, 4, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignUpFormComponent_mat_error_16_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignUpFormComponent_mat_error_21_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpFormComponent_Template_button_click_26_listener() {
              return ctx.hidePassword = !ctx.hidePassword;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignUpFormComponent_mat_error_29_Template, 2, 1, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpFormComponent_Template_button_click_34_listener() {
              return ctx.hidePasswordConfirmation = !ctx.hidePasswordConfirmation;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SignUpFormComponent_mat_error_37_Template, 3, 2, "mat-error", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpFormComponent_Template_button_click_38_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign me in!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userExists === ctx.EnumUserExists.checking);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userExists === ctx.EnumUserExists.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["email"].errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["firstName"].errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["lastName"].errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["password"].errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePasswordConfirmation ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePasswordConfirmation);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hidePasswordConfirmation ? "visibility_off" : "visibility");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls["confirmPassword"].errors);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  width: 100%;\n  display: block;\n  margin-bottom: 15px;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n  margin-bottom: 15px;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 100;\n}\n\n.mat-flat-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9zaWduLXVwL3NpZ24tdXAtY29udGFpbmVyL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFLRTtFQUNFLFdBQUE7QUFGSjs7QUFLRTtFQUNFLFdBQUE7QUFISjs7QUFLSTtFQUNFLFdBQUE7QUFITiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC9zaWduLXVwLWNvbnRhaW5lci9zaWduLXVwLWZvcm0vc2lnbi11cC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU0KTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG5cclxuLm1hdCB7XHJcbiAgJi1mbGF0LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICYtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sign-up-form',
            templateUrl: './sign-up-form.component.html',
            styleUrls: ['./sign-up-form.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _modals_error_modals_services_error_modal_store_service__WEBPACK_IMPORTED_MODULE_6__["ErrorModalStoreService"]
          }, {
            type: _services_sign_up_service__WEBPACK_IMPORTED_MODULE_7__["SignUpService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }];
        }, null);
      })();

      var EnumUserExists;

      (function (EnumUserExists) {
        EnumUserExists[EnumUserExists["initial"] = 0] = "initial";
        EnumUserExists[EnumUserExists["checking"] = 1] = "checking";
        EnumUserExists[EnumUserExists["exists"] = 2] = "exists";
        EnumUserExists[EnumUserExists["valid"] = 3] = "valid";
        EnumUserExists[EnumUserExists["error"] = 4] = "error";
      })(EnumUserExists || (EnumUserExists = {}));
      /***/

    },

    /***/
    "bTqV":
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js ***!
      \************************************************************************/

    /*! exports provided: MatAnchor, MatButton, MatButtonModule */

    /***/
    function bTqV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatAnchor", function () {
        return MatAnchor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButton", function () {
        return MatButton;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () {
        return MatButtonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default color palette for round buttons (mat-fab and mat-mini-fab) */


      var _c0 = ["mat-button", ""];
      var _c1 = ["*"];
      var _c2 = ".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n";
      var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
      /**
       * List of classes to add to MatButton instances based on host attributes to
       * style as different variants.
       */

      var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

      /** @docs-private */

      var MatButtonBase = function MatButtonBase(_elementRef) {
        _classCallCheck(this, MatButtonBase);

        this._elementRef = _elementRef;
      };

      var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["mixinDisableRipple"])(MatButtonBase)));
      /**
       * Material design button.
       */


      var MatButton = /*#__PURE__*/function (_MatButtonMixinBase2) {
        _inherits(MatButton, _MatButtonMixinBase2);

        var _super21 = _createSuper(MatButton);

        function MatButton(elementRef, _focusMonitor, _animationMode) {
          var _this50;

          _classCallCheck(this, MatButton);

          _this50 = _super21.call(this, elementRef);
          _this50._focusMonitor = _focusMonitor;
          _this50._animationMode = _animationMode;
          /** Whether the button is round. */

          _this50.isRoundButton = _this50._hasHostAttributes('mat-fab', 'mat-mini-fab');
          /** Whether the button is icon button. */

          _this50.isIconButton = _this50._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
          // attributes, add the correct corresponding class.

          var _iterator2 = _createForOfIteratorHelper(BUTTON_HOST_ATTRIBUTES),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var attr = _step2.value;

              if (_this50._hasHostAttributes(attr)) {
                _this50._getHostElement().classList.add(attr);
              }
            } // Add a class that applies to all buttons. This makes it easier to target if somebody
            // wants to target all Material buttons. We do it here rather than `host` to ensure that
            // the class is applied to derived classes.

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          elementRef.nativeElement.classList.add('mat-button-base');

          if (_this50.isRoundButton) {
            _this50.color = DEFAULT_ROUND_BUTTON_COLOR;
          }

          return _this50;
        }

        _createClass(MatButton, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._focusMonitor.monitor(this._elementRef, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Focuses the button. */

        }, {
          key: "focus",
          value: function focus() {
            var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
            var options = arguments.length > 1 ? arguments[1] : undefined;

            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
          }
        }, {
          key: "_getHostElement",
          value: function _getHostElement() {
            return this._elementRef.nativeElement;
          }
        }, {
          key: "_isRippleDisabled",
          value: function _isRippleDisabled() {
            return this.disableRipple || this.disabled;
          }
          /** Gets whether the button has one of the given attributes. */

        }, {
          key: "_hasHostAttributes",
          value: function _hasHostAttributes() {
            var _this51 = this;

            for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
              attributes[_key] = arguments[_key];
            }

            return attributes.some(function (attribute) {
              return _this51._getHostElement().hasAttribute(attribute);
            });
          }
        }]);

        return MatButton;
      }(_MatButtonMixinBase);

      MatButton.ɵfac = function MatButton_Factory(t) {
        return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatButton,
        selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
        viewQuery: function MatButton_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
          }
        },
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 5,
        hostBindings: function MatButton_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color"
        },
        exportAs: ["matButton"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 5,
        consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
        template: function MatButton_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      MatButton.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatButton.propDecorators = {
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButton, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
            exportAs: 'matButton',
            host: {
              '[attr.disabled]': 'disabled || null',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              // Add a class for disabled button styling instead of the using attribute
              // selector or pseudo-selector.  This allows users to create focusabled
              // disabled buttons without recreating the styles.
              '[class.mat-button-disabled]': 'disabled',
              'class': 'mat-focus-indicator'
            },
            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
            inputs: ['disabled', 'disableRipple', 'color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]]
          }]
        });
      })();
      /**
       * Material design anchor button.
       */


      var MatAnchor = /*#__PURE__*/function (_MatButton) {
        _inherits(MatAnchor, _MatButton);

        var _super22 = _createSuper(MatAnchor);

        function MatAnchor(focusMonitor, elementRef, animationMode) {
          _classCallCheck(this, MatAnchor);

          return _super22.call(this, elementRef, focusMonitor, animationMode);
        }

        _createClass(MatAnchor, [{
          key: "_haltDisabledEvents",
          value: function _haltDisabledEvents(event) {
            // A disabled button shouldn't apply any actions
            if (this.disabled) {
              event.preventDefault();
              event.stopImmediatePropagation();
            }
          }
        }]);

        return MatAnchor;
      }(MatButton);

      MatAnchor.ɵfac = function MatAnchor_Factory(t) {
        return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatAnchor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatAnchor,
        selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
        hostAttrs: [1, "mat-focus-indicator"],
        hostVars: 7,
        hostBindings: function MatAnchor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
              return ctx._haltDisabledEvents($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-button-disabled", ctx.disabled);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex"
        },
        exportAs: ["matButton", "matAnchor"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        attrs: _c0,
        ngContentSelectors: _c1,
        decls: 4,
        vars: 5,
        consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
        template: function MatAnchor_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRipple"]],
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      MatAnchor.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatAnchor.propDecorators = {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAnchor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
            exportAs: 'matButton, matAnchor',
            host: {
              // Note that we ignore the user-specified tabindex when it's disabled for
              // consistency with the `mat-button` applied on native buttons where even
              // though they have an index, they're not tabbable.
              '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
              '[attr.disabled]': 'disabled || null',
              '[attr.aria-disabled]': 'disabled.toString()',
              '(click)': '_haltDisabledEvents($event)',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
              '[class.mat-button-disabled]': 'disabled',
              'class': 'mat-focus-indicator'
            },
            inputs: ['disabled', 'disableRipple', 'color'],
            template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span>\n<span matRipple class=\"mat-button-ripple\"\n      [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\"\n      [matRippleDisabled]=\"_isRippleDisabled()\"\n      [matRippleCentered]=\"isIconButton\"\n      [matRippleTrigger]=\"_getHostElement()\"></span>\n<span class=\"mat-button-focus-overlay\"></span>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatButtonModule = function MatButtonModule() {
        _classCallCheck(this, MatButtonModule);
      };

      MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatButtonModule
      });
      MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MatButtonModule_Factory(t) {
          return new (t || MatButtonModule)();
        },
        imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatButtonModule, {
          declarations: function declarations() {
            return [MatButton, MatAnchor];
          },
          imports: function imports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          },
          exports: function exports() {
            return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButtonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
            declarations: [MatButton, MatAnchor]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=button.js.map

      /***/

    },

    /***/
    "ihCf":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
      \***********************************************************************/

    /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

    /***/
    function ihCf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
        return AutofillMonitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
        return CdkAutofill;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
        return CdkTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
        return TextFieldModule;
      });
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Options to pass to the animationstart listener. */


      var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
        passive: true
      });
      /**
       * An injectable service that can be used to monitor the autofill state of an input.
       * Based on the following blog post:
       * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
       */

      var AutofillMonitor = /*#__PURE__*/function () {
        function AutofillMonitor(_platform, _ngZone) {
          _classCallCheck(this, AutofillMonitor);

          this._platform = _platform;
          this._ngZone = _ngZone;
          this._monitoredElements = new Map();
        }

        _createClass(AutofillMonitor, [{
          key: "monitor",
          value: function monitor(elementOrRef) {
            var _this52 = this;

            if (!this._platform.isBrowser) {
              return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }

            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              return info.subject;
            }

            var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var cssClass = 'cdk-text-field-autofilled';

            var listener = function listener(event) {
              // Animation events fire on initial element render, we check for the presence of the autofill
              // CSS class to make sure this is a real change in state, not just the initial render before
              // we fire off events.
              if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);

                _this52._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: true
                  });
                });
              } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);

                _this52._ngZone.run(function () {
                  return result.next({
                    target: event.target,
                    isAutofilled: false
                  });
                });
              }
            };

            this._ngZone.runOutsideAngular(function () {
              element.addEventListener('animationstart', listener, listenerOptions);
              element.classList.add('cdk-text-field-autofill-monitored');
            });

            this._monitoredElements.set(element, {
              subject: result,
              unlisten: function unlisten() {
                element.removeEventListener('animationstart', listener, listenerOptions);
              }
            });

            return result;
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(elementOrRef) {
            var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);

            var info = this._monitoredElements.get(element);

            if (info) {
              info.unlisten();
              info.subject.complete();
              element.classList.remove('cdk-text-field-autofill-monitored');
              element.classList.remove('cdk-text-field-autofilled');

              this._monitoredElements["delete"](element);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this53 = this;

            this._monitoredElements.forEach(function (_info, element) {
              return _this53.stopMonitoring(element);
            });
          }
        }]);

        return AutofillMonitor;
      }();

      AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
        return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function AutofillMonitor_Factory() {
          return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
        },
        token: AutofillMonitor,
        providedIn: "root"
      });

      AutofillMonitor.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /** A directive that can be used to monitor the autofill state of an input. */


      var CdkAutofill = /*#__PURE__*/function () {
        function CdkAutofill(_elementRef, _autofillMonitor) {
          _classCallCheck(this, CdkAutofill);

          this._elementRef = _elementRef;
          this._autofillMonitor = _autofillMonitor;
          /** Emits when the autofill state of the element changes. */

          this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(CdkAutofill, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this54 = this;

            this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
              return _this54.cdkAutofill.emit(event);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._autofillMonitor.stopMonitoring(this._elementRef);
          }
        }]);

        return CdkAutofill;
      }();

      CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
        return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor));
      };

      CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkAutofill,
        selectors: [["", "cdkAutofill", ""]],
        outputs: {
          cdkAutofill: "cdkAutofill"
        }
      });

      CdkAutofill.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: AutofillMonitor
        }];
      };

      CdkAutofill.propDecorators = {
        cdkAutofill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[cdkAutofill]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: AutofillMonitor
          }];
        }, {
          cdkAutofill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Directive to automatically resize a textarea to fit its content. */


      var CdkTextareaAutosize = /*#__PURE__*/function () {
        function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
        /** @breaking-change 11.0.0 make document required */
        document) {
          _classCallCheck(this, CdkTextareaAutosize);

          this._elementRef = _elementRef;
          this._platform = _platform;
          this._ngZone = _ngZone;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this._enabled = true;
          /**
           * Value of minRows as of last resize. If the minRows has decreased, the
           * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
           * does not have the same problem because it does not affect the textarea's scrollHeight.
           */

          this._previousMinRows = -1;
          this._document = document;
          this._textareaElement = this._elementRef.nativeElement;
          this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
        }
        /** Minimum amount of rows in the textarea. */


        _createClass(CdkTextareaAutosize, [{
          key: "_setMinHeight",

          /** Sets the minimum height of the textarea as determined by minRows. */
          value: function _setMinHeight() {
            var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

            if (minHeight) {
              this._textareaElement.style.minHeight = minHeight;
            }
          }
          /** Sets the maximum height of the textarea as determined by maxRows. */

        }, {
          key: "_setMaxHeight",
          value: function _setMaxHeight() {
            var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

            if (maxHeight) {
              this._textareaElement.style.maxHeight = maxHeight;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this55 = this;

            if (this._platform.isBrowser) {
              // Remember the height which we started with in case autosizing is disabled
              this._initialHeight = this._textareaElement.style.height;
              this.resizeToFitContent();

              this._ngZone.runOutsideAngular(function () {
                var window = _this55._getWindow();

                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this55._destroyed)).subscribe(function () {
                  return _this55.resizeToFitContent(true);
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /**
           * Cache the height of a single-row textarea if it has not already been cached.
           *
           * We need to know how large a single "row" of a textarea is in order to apply minRows and
           * maxRows. For the initial version, we will assume that the height of a single line in the
           * textarea does not ever change.
           */

        }, {
          key: "_cacheTextareaLineHeight",
          value: function _cacheTextareaLineHeight() {
            if (this._cachedLineHeight) {
              return;
            } // Use a clone element because we have to override some styles.


            var textareaClone = this._textareaElement.cloneNode(false);

            textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
            // `visibility: hidden` so that nothing is rendered. Clear any other styles that
            // would affect the height.

            textareaClone.style.position = 'absolute';
            textareaClone.style.visibility = 'hidden';
            textareaClone.style.border = 'none';
            textareaClone.style.padding = '0';
            textareaClone.style.height = '';
            textareaClone.style.minHeight = '';
            textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
            // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
            // As a workaround that removes the extra space for the scrollbar, we can just set overflow
            // to hidden. This ensures that there is no invalid calculation of the line height.
            // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

            textareaClone.style.overflow = 'hidden';

            this._textareaElement.parentNode.appendChild(textareaClone);

            this._cachedLineHeight = textareaClone.clientHeight;

            this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


            this._setMinHeight();

            this._setMaxHeight();
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._platform.isBrowser) {
              this.resizeToFitContent();
            }
          }
          /**
           * Resize the textarea to fit its content.
           * @param force Whether to force a height recalculation. By default the height will be
           *    recalculated only if the value changed since the last call.
           */

        }, {
          key: "resizeToFitContent",
          value: function resizeToFitContent() {
            var _this56 = this;

            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // If autosizing is disabled, just skip everything else
            if (!this._enabled) {
              return;
            }

            this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
            // in checking the height of the textarea.


            if (!this._cachedLineHeight) {
              return;
            }

            var textarea = this._elementRef.nativeElement;
            var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

            if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
              return;
            }

            var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
            // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
            // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
            // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
            // need to be removed temporarily.

            textarea.classList.add(this._measuringClass);
            textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
            // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

            var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

            textarea.style.height = "".concat(height, "px");
            textarea.classList.remove(this._measuringClass);
            textarea.placeholder = placeholderText;

            this._ngZone.runOutsideAngular(function () {
              if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame(function () {
                  return _this56._scrollToCaretPosition(textarea);
                });
              } else {
                setTimeout(function () {
                  return _this56._scrollToCaretPosition(textarea);
                });
              }
            });

            this._previousValue = value;
            this._previousMinRows = this._minRows;
          }
          /**
           * Resets the textarea to its original size
           */

        }, {
          key: "reset",
          value: function reset() {
            // Do not try to change the textarea, if the initialHeight has not been determined yet
            // This might potentially remove styles when reset() is called before ngAfterViewInit
            if (this._initialHeight !== undefined) {
              this._textareaElement.style.height = this._initialHeight;
            }
          } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete

        }, {
          key: "_noopInputHandler",
          value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
          /**
           * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
           * prevent it from scrolling to the caret position. We need to re-set the selection
           * in order for it to scroll to the proper position.
           */

        }, {
          key: "_scrollToCaretPosition",
          value: function _scrollToCaretPosition(textarea) {
            var selectionStart = textarea.selectionStart,
                selectionEnd = textarea.selectionEnd;

            var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
            // element has been removed from the DOM. Assert that the directive hasn't been destroyed
            // between the time we requested the animation frame and when it was executed.
            // Also note that we have to assert that the textarea is focused before we set the
            // selection range. Setting the selection range on a non-focused textarea will cause
            // it to receive focus on IE and Edge.


            if (!this._destroyed.isStopped && document.activeElement === textarea) {
              textarea.setSelectionRange(selectionStart, selectionEnd);
            }
          }
        }, {
          key: "minRows",
          get: function get() {
            return this._minRows;
          },
          set: function set(value) {
            this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMinHeight();
          }
          /** Maximum amount of rows in the textarea. */

        }, {
          key: "maxRows",
          get: function get() {
            return this._maxRows;
          },
          set: function set(value) {
            this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

            this._setMaxHeight();
          }
          /** Whether autosizing is enabled or not */

        }, {
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
            // resizeToFitContent too early (i.e. before ngAfterViewInit)

            if (this._enabled !== value) {
              (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
            }
          }
        }]);

        return CdkTextareaAutosize;
      }();

      CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
        return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      };

      CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CdkTextareaAutosize,
        selectors: [["textarea", "cdkTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
        hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
              return ctx._noopInputHandler();
            });
          }
        },
        inputs: {
          minRows: ["cdkAutosizeMinRows", "minRows"],
          maxRows: ["cdkAutosizeMaxRows", "maxRows"],
          enabled: ["cdkTextareaAutosize", "enabled"]
        },
        exportAs: ["cdkTextareaAutosize"]
      });

      CdkTextareaAutosize.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      };

      CdkTextareaAutosize.propDecorators = {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMinRows']
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMaxRows']
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTextareaAutosize']
        }],
        _noopInputHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[cdkTextareaAutosize]',
            exportAs: 'cdkTextareaAutosize',
            host: {
              'class': 'cdk-textarea-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }]
          }];
        }, {
          minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMinRows']
          }],
          maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkAutosizeMaxRows']
          }],
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkTextareaAutosize']
          }],
          // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
          // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
          // can move this back into `host`.
          // tslint:disable:no-host-decorator-in-concrete
          _noopInputHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TextFieldModule = function TextFieldModule() {
        _classCallCheck(this, TextFieldModule);
      };

      TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TextFieldModule
      });
      TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function TextFieldModule_Factory(t) {
          return new (t || TextFieldModule)();
        },
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, {
          declarations: function declarations() {
            return [CdkAutofill, CdkTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
          },
          exports: function exports() {
            return [CdkAutofill, CdkTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [CdkAutofill, CdkTextareaAutosize],
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
            exports: [CdkAutofill, CdkTextareaAutosize]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=text-field.js.map

      /***/

    },

    /***/
    "kEuc":
    /*!*******************************************!*\
      !*** ./src/app/sign-up/sign-up.module.ts ***!
      \*******************************************/

    /*! exports provided: SignUpModule */

    /***/
    function kEuc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpModule", function () {
        return SignUpModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-up-routing.module */
      "tUD1");
      /* harmony import */


      var _sign_up_sign_up_container_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sign-up/sign-up-container/sign-up-form/sign-up-form.component */
      "YxyU");
      /* harmony import */


      var _sign_up_sign_up_container_signup_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sign-up/sign-up-container/signup-container.component */
      "TKuo");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var SignUpModule = function SignUpModule() {
        _classCallCheck(this, SignUpModule);
      };

      SignUpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SignUpModule
      });
      SignUpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SignUpModule_Factory(t) {
          return new (t || SignUpModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignUpRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignUpModule, {
          declarations: [_sign_up_sign_up_container_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_3__["SignUpFormComponent"], _sign_up_sign_up_container_signup_container_component__WEBPACK_IMPORTED_MODULE_4__["SignupContainerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignUpRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_sign_up_sign_up_container_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_3__["SignUpFormComponent"], _sign_up_sign_up_container_signup_container_component__WEBPACK_IMPORTED_MODULE_4__["SignupContainerComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignUpRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kmnG":
    /*!****************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
      \****************************************************************************/

    /*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

    /***/
    function kmnG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function () {
        return MAT_ERROR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
        return MAT_FORM_FIELD;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
        return MAT_FORM_FIELD_DEFAULT_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function () {
        return MAT_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function () {
        return MAT_SUFFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatError", function () {
        return MatError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
        return MatFormField;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
        return MatFormFieldControl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
        return MatFormFieldModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatHint", function () {
        return MatHint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
        return MatLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
        return MatPlaceholder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
        return MatPrefix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
        return MatSuffix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function () {
        return _MAT_HINT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
        return getMatFormFieldDuplicatedHintError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
        return getMatFormFieldMissingControlError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
        return getMatFormFieldPlaceholderConflictError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
        return matFormFieldAnimations;
      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "GU7r");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["underline"];
      var _c1 = ["connectionContainer"];
      var _c2 = ["inputContainer"];
      var _c3 = ["label"];

      function MatFormField_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function MatFormField_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
        }
      }

      function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
        }
      }

      function MatFormField_label_9_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " *");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_label_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.updateOutlineGap();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
        }
      }

      function MatFormField_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function MatFormField_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
        }
      }

      function MatFormField_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
        }
      }

      function MatFormField_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r16._hintLabelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
        }
      }

      function MatFormField_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
        }
      }

      var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
      var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
      var nextUniqueId = 0;
      /**
       * Injection token that can be used to reference instances of `MatError`. It serves as
       * alternative token to the actual `MatError` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */

      var MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatError');
      /** Single error message to be shown underneath the form field. */

      var MatError = function MatError() {
        _classCallCheck(this, MatError);

        this.id = "mat-error-".concat(nextUniqueId++);
      };

      MatError.ɵfac = function MatError_Factory(t) {
        return new (t || MatError)();
      };

      MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatError,
        selectors: [["mat-error"]],
        hostAttrs: ["role", "alert", 1, "mat-error"],
        hostVars: 1,
        hostBindings: function MatError_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_ERROR,
          useExisting: MatError
        }])]
      });
      MatError.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatError, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-error',
            host: {
              'class': 'mat-error',
              'role': 'alert',
              '[attr.id]': 'id'
            },
            providers: [{
              provide: MAT_ERROR,
              useExisting: MatError
            }]
          }]
        }], function () {
          return [];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Animations used by the MatFormField.
       * @docs-private
       */


      var matFormFieldAnimations = {
        /** Animation that transitions the form field's error and hint messages. */
        transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 1,
          transform: 'translateY(0%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
          opacity: 0,
          transform: 'translateY(-100%)'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** An interface which allows a control to work inside of a `MatFormField`. */

      var MatFormFieldControl = function MatFormFieldControl() {
        _classCallCheck(this, MatFormFieldControl);
      };

      MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
        return new (t || MatFormFieldControl)();
      };

      MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatFormFieldControl
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldControl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      function getMatFormFieldPlaceholderConflictError() {
        return Error('Placeholder attribute and child element were both specified.');
      }
      /** @docs-private */


      function getMatFormFieldDuplicatedHintError(align) {
        return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
      }
      /** @docs-private */


      function getMatFormFieldMissingControlError() {
        return Error('mat-form-field must contain a MatFormFieldControl.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId$1 = 0;
      /**
       * Injection token that can be used to reference instances of `MatHint`. It serves as
       * alternative token to the actual `MatHint` class which could cause unnecessary
       * retention of the class and its directive metadata.
       *
       * *Note*: This is not part of the public API as the MDC-based form-field will not
       * need a lightweight token for `MatHint` and we want to reduce breaking changes.
       */

      var _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatHint');
      /** Hint text to be shown underneath the form field control. */


      var MatHint = function MatHint() {
        _classCallCheck(this, MatHint);

        /** Whether to align the hint label at the start or end of the line. */
        this.align = 'start';
        /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

        this.id = "mat-hint-".concat(nextUniqueId$1++);
      };

      MatHint.ɵfac = function MatHint_Factory(t) {
        return new (t || MatHint)();
      };

      MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatHint,
        selectors: [["mat-hint"]],
        hostAttrs: [1, "mat-hint"],
        hostVars: 4,
        hostBindings: function MatHint_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("align", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-right", ctx.align == "end");
          }
        },
        inputs: {
          align: "align",
          id: "id"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _MAT_HINT,
          useExisting: MatHint
        }])]
      });
      MatHint.propDecorators = {
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatHint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-hint',
            host: {
              'class': 'mat-hint',
              '[class.mat-right]': 'align == "end"',
              '[attr.id]': 'id',
              // Remove align attribute to prevent it from interfering with layout.
              '[attr.align]': 'null'
            },
            providers: [{
              provide: _MAT_HINT,
              useExisting: MatHint
            }]
          }]
        }], function () {
          return [];
        }, {
          align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The floating label for a `mat-form-field`. */


      var MatLabel = function MatLabel() {
        _classCallCheck(this, MatLabel);
      };

      MatLabel.ɵfac = function MatLabel_Factory(t) {
        return new (t || MatLabel)();
      };

      MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatLabel,
        selectors: [["mat-label"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatLabel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-label'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The placeholder text for an `MatFormField`.
       * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
       *     placeholder.
       * @breaking-change 8.0.0
       */


      var MatPlaceholder = function MatPlaceholder() {
        _classCallCheck(this, MatPlaceholder);
      };

      MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
        return new (t || MatPlaceholder)();
      };

      MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPlaceholder,
        selectors: [["mat-placeholder"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPlaceholder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mat-placeholder'
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatPrefix`. It serves as
       * alternative token to the actual `MatPrefix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatPrefix');
      /** Prefix to be placed in front of the form field. */

      var MatPrefix = function MatPrefix() {
        _classCallCheck(this, MatPrefix);
      };

      MatPrefix.ɵfac = function MatPrefix_Factory(t) {
        return new (t || MatPrefix)();
      };

      MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatPrefix,
        selectors: [["", "matPrefix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_PREFIX,
          useExisting: MatPrefix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatPrefix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matPrefix]',
            providers: [{
              provide: MAT_PREFIX,
              useExisting: MatPrefix
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token that can be used to reference instances of `MatSuffix`. It serves as
       * alternative token to the actual `MatSuffix` class which could cause unnecessary
       * retention of the class and its directive metadata.
       */


      var MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSuffix');
      /** Suffix to be placed at the end of the form field. */

      var MatSuffix = function MatSuffix() {
        _classCallCheck(this, MatSuffix);
      };

      MatSuffix.ɵfac = function MatSuffix_Factory(t) {
        return new (t || MatSuffix)();
      };

      MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: MatSuffix,
        selectors: [["", "matSuffix", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_SUFFIX,
          useExisting: MatSuffix
        }])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSuffix, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: '[matSuffix]',
            providers: [{
              provide: MAT_SUFFIX,
              useExisting: MatSuffix
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var nextUniqueId$2 = 0;
      var floatingLabelScale = 0.75;
      var outlineGapPadding = 5;
      /**
       * Boilerplate for applying mixins to MatFormField.
       * @docs-private
       */

      var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
        _classCallCheck(this, MatFormFieldBase);

        this._elementRef = _elementRef;
      };
      /**
       * Base class to which we're applying the form field mixins.
       * @docs-private
       */


      var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
      /**
       * Injection token that can be used to configure the
       * default options for all form field within an app.
       */


      var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
      /**
       * Injection token that can be used to inject an instances of `MatFormField`. It serves
       * as alternative token to the actual `MatFormField` class which would cause unnecessary
       * retention of the `MatFormField` class and its component metadata.
       */

      var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
      /** Container for form controls that applies Material Design styling and behavior. */

      var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
        _inherits(MatFormField, _MatFormFieldMixinBas);

        var _super23 = _createSuper(MatFormField);

        function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
          var _this57;

          _classCallCheck(this, MatFormField);

          _this57 = _super23.call(this, _elementRef);
          _this57._elementRef = _elementRef;
          _this57._changeDetectorRef = _changeDetectorRef;
          _this57._dir = _dir;
          _this57._defaults = _defaults;
          _this57._platform = _platform;
          _this57._ngZone = _ngZone;
          /**
           * Whether the outline gap needs to be calculated
           * immediately on the next change detection run.
           */

          _this57._outlineGapCalculationNeededImmediately = false;
          /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

          _this57._outlineGapCalculationNeededOnStable = false;
          _this57._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
          /** Override for the logic that disables the label animation in certain cases. */

          _this57._showAlwaysAnimate = false;
          /** State of the mat-hint and mat-error animations. */

          _this57._subscriptAnimationState = '';
          _this57._hintLabel = ''; // Unique id for the hint label.

          _this57._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the label element.

          _this57._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
          _this57._labelOptions = labelOptions ? labelOptions : {};
          _this57.floatLabel = _this57._getDefaultFloatLabelState();
          _this57._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

          _this57.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
          _this57._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
          return _this57;
        }
        /** The form-field appearance style. */


        _createClass(MatFormField, [{
          key: "_shouldAlwaysFloat",

          /** Whether the floating label should always float or not. */
          value: function _shouldAlwaysFloat() {
            return this.floatLabel === 'always' && !this._showAlwaysAnimate;
          }
          /** Whether the label can float or not. */

        }, {
          key: "_canLabelFloat",
          value: function _canLabelFloat() {
            return this.floatLabel !== 'never';
          }
          /** Text for the form field hint. */

        }, {
          key: "getLabelId",

          /**
           * Gets the id of the label element. If no label is present, returns `null`.
           */
          value: function getLabelId() {
            return this._hasFloatingLabel() ? this._labelId : null;
          }
          /**
           * Gets an ElementRef for the element that a overlay attached to the form-field should be
           * positioned relative to.
           */

        }, {
          key: "getConnectedOverlayOrigin",
          value: function getConnectedOverlayOrigin() {
            return this._connectionContainerRef || this._elementRef;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this58 = this;

            this._validateControlChild();

            var control = this._control;

            if (control.controlType) {
              this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
            } // Subscribe to changes in the child control state in order to update the form field UI.


            control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this58._validatePlaceholders();

              _this58._syncDescribedByIds();

              _this58._changeDetectorRef.markForCheck();
            }); // Run change detection if the value changes.

            if (control.ngControl && control.ngControl.valueChanges) {
              control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                return _this58._changeDetectorRef.markForCheck();
              });
            } // Note that we have to run outside of the `NgZone` explicitly,
            // in order to avoid throwing users into an infinite loop
            // if `zone-patch-rxjs` is included.


            this._ngZone.runOutsideAngular(function () {
              _this58._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this58._destroyed)).subscribe(function () {
                if (_this58._outlineGapCalculationNeededOnStable) {
                  _this58.updateOutlineGap();
                }
              });
            }); // Run change detection and update the outline if the suffix or prefix changes.


            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
              _this58._outlineGapCalculationNeededOnStable = true;

              _this58._changeDetectorRef.markForCheck();
            }); // Re-validate when the number of hints changes.

            this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this58._processHints();

              _this58._changeDetectorRef.markForCheck();
            }); // Update the aria-described by when the number of errors changes.


            this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(function () {
              _this58._syncDescribedByIds();

              _this58._changeDetectorRef.markForCheck();
            });

            if (this._dir) {
              this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
                if (typeof requestAnimationFrame === 'function') {
                  _this58._ngZone.runOutsideAngular(function () {
                    requestAnimationFrame(function () {
                      return _this58.updateOutlineGap();
                    });
                  });
                } else {
                  _this58.updateOutlineGap();
                }
              });
            }
          }
        }, {
          key: "ngAfterContentChecked",
          value: function ngAfterContentChecked() {
            this._validateControlChild();

            if (this._outlineGapCalculationNeededImmediately) {
              this.updateOutlineGap();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Avoid animations on load.
            this._subscriptAnimationState = 'enter';

            this._changeDetectorRef.detectChanges();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Determines whether a class from the NgControl should be forwarded to the host element. */

        }, {
          key: "_shouldForward",
          value: function _shouldForward(prop) {
            var ngControl = this._control ? this._control.ngControl : null;
            return ngControl && ngControl[prop];
          }
        }, {
          key: "_hasPlaceholder",
          value: function _hasPlaceholder() {
            return !!(this._control && this._control.placeholder || this._placeholderChild);
          }
        }, {
          key: "_hasLabel",
          value: function _hasLabel() {
            return !!(this._labelChildNonStatic || this._labelChildStatic);
          }
        }, {
          key: "_shouldLabelFloat",
          value: function _shouldLabelFloat() {
            return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
          }
        }, {
          key: "_hideControlPlaceholder",
          value: function _hideControlPlaceholder() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
          }
        }, {
          key: "_hasFloatingLabel",
          value: function _hasFloatingLabel() {
            // In the legacy appearance the placeholder is promoted to a label if no label is given.
            return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
          }
          /** Determines whether to display hints or errors. */

        }, {
          key: "_getDisplayedMessages",
          value: function _getDisplayedMessages() {
            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
          }
          /** Animates the placeholder up and locks it in position. */

        }, {
          key: "_animateAndLockLabel",
          value: function _animateAndLockLabel() {
            var _this59 = this;

            if (this._hasFloatingLabel() && this._canLabelFloat()) {
              // If animations are disabled, we shouldn't go in here,
              // because the `transitionend` will never fire.
              if (this._animationsEnabled && this._label) {
                this._showAlwaysAnimate = true;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                  _this59._showAlwaysAnimate = false;
                });
              }

              this.floatLabel = 'always';

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
           * or child element with the `mat-placeholder` directive).
           */

        }, {
          key: "_validatePlaceholders",
          value: function _validatePlaceholders() {
            if (this._control.placeholder && this._placeholderChild && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatFormFieldPlaceholderConflictError();
            }
          }
          /** Does any extra processing that is required when handling the hints. */

        }, {
          key: "_processHints",
          value: function _processHints() {
            this._validateHints();

            this._syncDescribedByIds();
          }
          /**
           * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
           * attribute being considered as `align="start"`.
           */

        }, {
          key: "_validateHints",
          value: function _validateHints() {
            var _this60 = this;

            if (this._hintChildren && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              var startHint;
              var endHint;

              this._hintChildren.forEach(function (hint) {
                if (hint.align === 'start') {
                  if (startHint || _this60.hintLabel) {
                    throw getMatFormFieldDuplicatedHintError('start');
                  }

                  startHint = hint;
                } else if (hint.align === 'end') {
                  if (endHint) {
                    throw getMatFormFieldDuplicatedHintError('end');
                  }

                  endHint = hint;
                }
              });
            }
          }
          /** Gets the default float label state. */

        }, {
          key: "_getDefaultFloatLabelState",
          value: function _getDefaultFloatLabelState() {
            return this._defaults && this._defaults.floatLabel || this._labelOptions["float"] || 'auto';
          }
          /**
           * Sets the list of element IDs that describe the child control. This allows the control to update
           * its `aria-describedby` attribute accordingly.
           */

        }, {
          key: "_syncDescribedByIds",
          value: function _syncDescribedByIds() {
            if (this._control) {
              var ids = []; // TODO(wagnermaciel): Remove the type check when we find the root cause of this bug.

              if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === 'string') {
                ids.push.apply(ids, _toConsumableArray(this._control.userAriaDescribedBy.split(' ')));
              }

              if (this._getDisplayedMessages() === 'hint') {
                var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'start';
                }) : null;
                var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
                  return hint.align === 'end';
                }) : null;

                if (startHint) {
                  ids.push(startHint.id);
                } else if (this._hintLabel) {
                  ids.push(this._hintLabelId);
                }

                if (endHint) {
                  ids.push(endHint.id);
                }
              } else if (this._errorChildren) {
                ids.push.apply(ids, _toConsumableArray(this._errorChildren.map(function (error) {
                  return error.id;
                })));
              }

              this._control.setDescribedByIds(ids);
            }
          }
          /** Throws an error if the form field's control is missing. */

        }, {
          key: "_validateControlChild",
          value: function _validateControlChild() {
            if (!this._control && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatFormFieldMissingControlError();
            }
          }
          /**
           * Updates the width and position of the gap in the outline. Only relevant for the outline
           * appearance.
           */

        }, {
          key: "updateOutlineGap",
          value: function updateOutlineGap() {
            var labelEl = this._label ? this._label.nativeElement : null;

            if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
              return;
            }

            if (!this._platform.isBrowser) {
              // getBoundingClientRect isn't available on the server.
              return;
            } // If the element is not present in the DOM, the outline gap will need to be calculated
            // the next time it is checked and in the DOM.


            if (!this._isAttachedToDOM()) {
              this._outlineGapCalculationNeededImmediately = true;
              return;
            }

            var startWidth = 0;
            var gapWidth = 0;
            var container = this._connectionContainerRef.nativeElement;
            var startEls = container.querySelectorAll('.mat-form-field-outline-start');
            var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

            if (this._label && this._label.nativeElement.children.length) {
              var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
              // invisible and we can't calculate the outline gap. Mark the element as needing
              // to be checked the next time the zone stabilizes. We can't do this immediately
              // on the next change detection, because even if the element becomes visible,
              // the `ClientRect` won't be reclaculated immediately. We reset the
              // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

              if (containerRect.width === 0 && containerRect.height === 0) {
                this._outlineGapCalculationNeededOnStable = true;
                this._outlineGapCalculationNeededImmediately = false;
                return;
              }

              var containerStart = this._getStartEnd(containerRect);

              var labelChildren = labelEl.children;

              var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

              var labelWidth = 0;

              for (var i = 0; i < labelChildren.length; i++) {
                labelWidth += labelChildren[i].offsetWidth;
              }

              startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
              gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
            }

            for (var _i7 = 0; _i7 < startEls.length; _i7++) {
              startEls[_i7].style.width = "".concat(startWidth, "px");
            }

            for (var _i8 = 0; _i8 < gapEls.length; _i8++) {
              gapEls[_i8].style.width = "".concat(gapWidth, "px");
            }

            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
          }
          /** Gets the start end of the rect considering the current directionality. */

        }, {
          key: "_getStartEnd",
          value: function _getStartEnd(rect) {
            return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
          }
          /** Checks whether the form field is attached to the DOM. */

        }, {
          key: "_isAttachedToDOM",
          value: function _isAttachedToDOM() {
            var element = this._elementRef.nativeElement;

            if (element.getRootNode) {
              var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
              // or the closest shadow root, otherwise it'll be the element itself.

              return rootNode && rootNode !== element;
            } // Otherwise fall back to checking if it's in the document. This doesn't account for
            // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


            return document.documentElement.contains(element);
          }
        }, {
          key: "appearance",
          get: function get() {
            return this._appearance;
          },
          set: function set(value) {
            var oldValue = this._appearance;
            this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

            if (this._appearance === 'outline' && oldValue !== value) {
              this._outlineGapCalculationNeededOnStable = true;
            }
          }
          /** Whether the required marker should be hidden. */

        }, {
          key: "hideRequiredMarker",
          get: function get() {
            return this._hideRequiredMarker;
          },
          set: function set(value) {
            this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "hintLabel",
          get: function get() {
            return this._hintLabel;
          },
          set: function set(value) {
            this._hintLabel = value;

            this._processHints();
          }
          /**
           * Whether the label should always float, never float or float as the user types.
           *
           * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
           * way to make the floating label emulate the behavior of a standard input placeholder. However
           * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
           * appearances the `never` option has been disabled in favor of just using the placeholder.
           */

        }, {
          key: "floatLabel",
          get: function get() {
            return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
          },
          set: function set(value) {
            if (value !== this._floatLabel) {
              this._floatLabel = value || this._getDefaultFloatLabelState();

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "_control",
          get: function get() {
            // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
            //  We should clean this up once Ivy is the default renderer.
            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
          },
          set: function set(value) {
            this._explicitFormFieldControl = value;
          }
        }]);

        return MatFormField;
      }(_MatFormFieldMixinBase);

      MatFormField.ɵfac = function MatFormField_Factory(t) {
        return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8));
      };

      MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MatFormField,
        selectors: [["mat-form-field"]],
        contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
          }
        },
        viewQuery: function MatFormField_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
          }
        },
        hostAttrs: [1, "mat-form-field"],
        hostVars: 44,
        hostBindings: function MatFormField_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
          }
        },
        inputs: {
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          hideRequiredMarker: "hideRequiredMarker",
          hintLabel: "hintLabel"
        },
        exportAs: ["matFormField"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: MAT_FORM_FIELD,
          useExisting: MatFormField
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c5,
        decls: 15,
        vars: 8,
        consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
        template: function MatFormField_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
              return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "hint");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["CdkObserveContent"]],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
        encapsulation: 2,
        data: {
          animation: [matFormFieldAnimations.transitionMessages]
        },
        changeDetection: 0
      });

      MatFormField.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      };

      MatFormField.propDecorators = {
        appearance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hideRequiredMarker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hintLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        floatLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        underlineRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['underline']
        }],
        _connectionContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['connectionContainer', {
            "static": true
          }]
        }],
        _inputContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['inputContainer']
        }],
        _label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['label']
        }],
        _controlNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl]
        }],
        _controlStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatFormFieldControl, {
            "static": true
          }]
        }],
        _labelChildNonStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel]
        }],
        _labelChildStatic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatLabel, {
            "static": true
          }]
        }],
        _placeholderChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [MatPlaceholder]
        }],
        _errorChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_ERROR, {
            descendants: true
          }]
        }],
        _hintChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_MAT_HINT, {
            descendants: true
          }]
        }],
        _prefixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_PREFIX, {
            descendants: true
          }]
        }],
        _suffixChildren: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [MAT_SUFFIX, {
            descendants: true
          }]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormField, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mat-form-field',
            exportAs: 'matFormField',
            template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
            animations: [matFormFieldAnimations.transitionMessages],
            host: {
              'class': 'mat-form-field',
              '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
              '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
              '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
              '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
              '[class.mat-form-field-invalid]': '_control.errorState',
              '[class.mat-form-field-can-float]': '_canLabelFloat()',
              '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
              '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
              '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
              '[class.mat-form-field-disabled]': '_control.disabled',
              '[class.mat-form-field-autofilled]': '_control.autofilled',
              '[class.mat-focused]': '_control.focused',
              '[class.mat-accent]': 'color == "accent"',
              '[class.mat-warn]': 'color == "warn"',
              '[class.ng-untouched]': '_shouldForward("untouched")',
              '[class.ng-touched]': '_shouldForward("touched")',
              '[class.ng-pristine]': '_shouldForward("pristine")',
              '[class.ng-dirty]': '_shouldForward("dirty")',
              '[class.ng-valid]': '_shouldForward("valid")',
              '[class.ng-invalid]': '_shouldForward("invalid")',
              '[class.ng-pending]': '_shouldForward("pending")',
              '[class._mat-animation-noopable]': '!_animationsEnabled'
            },
            inputs: ['color'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            providers: [{
              provide: MAT_FORM_FIELD,
              useExisting: MatFormField
            }],
            styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }]
          }];
        }, {
          floatLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hideRequiredMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hintLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          underlineRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['underline']
          }],
          _connectionContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['connectionContainer', {
              "static": true
            }]
          }],
          _inputContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputContainer']
          }],
          _label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['label']
          }],
          _controlNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl]
          }],
          _controlStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatFormFieldControl, {
              "static": true
            }]
          }],
          _labelChildNonStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel]
          }],
          _labelChildStatic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatLabel, {
              "static": true
            }]
          }],
          _placeholderChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MatPlaceholder]
          }],
          _errorChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_ERROR, {
              descendants: true
            }]
          }],
          _hintChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_MAT_HINT, {
              descendants: true
            }]
          }],
          _prefixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_PREFIX, {
              descendants: true
            }]
          }],
          _suffixChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [MAT_SUFFIX, {
              descendants: true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatFormFieldModule = function MatFormFieldModule() {
        _classCallCheck(this, MatFormFieldModule);
      };

      MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: MatFormFieldModule
      });
      MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function MatFormFieldModule_Factory(t) {
          return new (t || MatFormFieldModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
          declarations: function declarations() {
            return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]];
          },
          exports: function exports() {
            return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatFormFieldModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
            exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=form-field.js.map

      /***/

    },

    /***/
    "qFsG":
    /*!***********************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
      \***********************************************************************/

    /*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */

    /***/
    function qFsG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
        return MAT_INPUT_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInput", function () {
        return MatInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
        return MatInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
        return MatTextareaAutosize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
        return getMatInputUnsupportedTypeError;
      });
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "ihCf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to automatically resize a textarea to fit its content.
       * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
       * @breaking-change 8.0.0
       */


      var MatTextareaAutosize = /*#__PURE__*/function (_angular_cdk_text_fie) {
        _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

        var _super24 = _createSuper(MatTextareaAutosize);

        function MatTextareaAutosize() {
          _classCallCheck(this, MatTextareaAutosize);

          return _super24.apply(this, arguments);
        }

        _createClass(MatTextareaAutosize, [{
          key: "matAutosizeMinRows",
          get: function get() {
            return this.minRows;
          },
          set: function set(value) {
            this.minRows = value;
          }
        }, {
          key: "matAutosizeMaxRows",
          get: function get() {
            return this.maxRows;
          },
          set: function set(value) {
            this.maxRows = value;
          }
        }, {
          key: "matAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }, {
          key: "matTextareaAutosize",
          get: function get() {
            return this.enabled;
          },
          set: function set(value) {
            this.enabled = value;
          }
        }]);

        return MatTextareaAutosize;
      }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

      MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
        return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
      };

      MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatTextareaAutosize,
        selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
        hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
        inputs: {
          cdkAutosizeMinRows: "cdkAutosizeMinRows",
          cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
          matAutosizeMinRows: "matAutosizeMinRows",
          matAutosizeMaxRows: "matAutosizeMaxRows",
          matAutosize: ["mat-autosize", "matAutosize"],
          matTextareaAutosize: "matTextareaAutosize"
        },
        exportAs: ["matTextareaAutosize"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });
      MatTextareaAutosize.propDecorators = {
        matAutosizeMinRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosizeMaxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mat-autosize']
        }],
        matTextareaAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      var ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
            exportAs: 'matTextareaAutosize',
            inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
            host: {
              'class': 'cdk-textarea-autosize mat-autosize',
              // Textarea elements that have the directive applied should have a single row by default.
              // Browsers normally show two rows by default and therefore this limits the minRows binding.
              'rows': '1'
            }
          }]
        }], null, {
          matAutosizeMinRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosizeMaxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          matAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mat-autosize']
          }],
          matTextareaAutosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** @docs-private */


      function getMatInputUnsupportedTypeError(type) {
        return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This token is used to inject the object whose value should be set into `MatInput`. If none is
       * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
       * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
       * value to them.
       */


      var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

      var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
      var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

      /** @docs-private */

      var MatInputBase = function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
      /** @docs-private */
      ngControl) {
        _classCallCheck(this, MatInputBase);

        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
      };

      var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
      /** Directive that allows a native input to work inside a `MatFormField`. */


      var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
        _inherits(MatInput, _MatInputMixinBase2);

        var _super25 = _createSuper(MatInput);

        function MatInput(_elementRef, _platform,
        /** @docs-private */
        ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // TODO: Remove this once the legacy appearance has been removed. We only need
        // to inject the form-field for determining whether the placeholder has been promoted.
        _formField) {
          var _this61;

          _classCallCheck(this, MatInput);

          _this61 = _super25.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
          _this61._elementRef = _elementRef;
          _this61._platform = _platform;
          _this61.ngControl = ngControl;
          _this61._autofillMonitor = _autofillMonitor;
          _this61._formField = _formField;
          _this61._uid = "mat-input-".concat(nextUniqueId++);
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this61.focused = false;
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this61.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this61.controlType = 'mat-input';
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

          _this61.autofilled = false;
          _this61._disabled = false;
          _this61._required = false;
          _this61._type = 'text';
          _this61._readonly = false;
          _this61._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
            return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
          });
          var element = _this61._elementRef.nativeElement;
          var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
          // accessor.

          _this61._inputValueAccessor = inputValueAccessor || element;
          _this61._previousNativeValue = _this61.value; // Force setter to be called in case id was not specified.

          _this61.id = _this61.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
          // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
          // exists on iOS, we only bother to install the listener on iOS.

          if (_platform.IOS) {
            ngZone.runOutsideAngular(function () {
              _elementRef.nativeElement.addEventListener('keyup', function (event) {
                var el = event.target;

                if (!el.value && !el.selectionStart && !el.selectionEnd) {
                  // Note: Just setting `0, 0` doesn't fix the issue. Setting
                  // `1, 1` fixes it for the first time that you type text and
                  // then hold delete. Toggling to `1, 1` and then back to
                  // `0, 0` seems to completely fix it.
                  el.setSelectionRange(1, 1);
                  el.setSelectionRange(0, 0);
                }
              });
            });
          }

          _this61._isServer = !_this61._platform.isBrowser;
          _this61._isNativeSelect = nodeName === 'select';
          _this61._isTextarea = nodeName === 'textarea';

          if (_this61._isNativeSelect) {
            _this61.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
          }

          return _this61;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */


        _createClass(MatInput, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this62 = this;

            if (this._platform.isBrowser) {
              this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                _this62.autofilled = event.isAutofilled;

                _this62.stateChanges.next();
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();

            if (this._platform.isBrowser) {
              this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            } // We need to dirty-check the native element's value, because there are some cases where
            // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
            // updating the value using `emitEvent: false`).


            this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
            // present or not depends on a query which is prone to "changed after checked" errors.


            this._dirtyCheckPlaceholder();
          }
          /** Focuses the input. */

        }, {
          key: "focus",
          value: function focus(options) {
            this._elementRef.nativeElement.focus(options);
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete

        }, {
          key: "_focusChanged",
          value: function _focusChanged(isFocused) {
            if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
              this.focused = isFocused;
              this.stateChanges.next();
            }
          } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete

        }, {
          key: "_onInput",
          value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
            // Angular will run a new change detection each time the `input` event has been dispatched.
            // It's necessary that Angular recognizes the value change, because when floatingLabel
            // is set to false and Angular forms aren't used, the placeholder won't recognize the
            // value changes and will not disappear.
            // Listening to the input event wouldn't be necessary when the input is using the
            // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
          }
          /** Does some manual dirty checking on the native input `placeholder` attribute. */

        }, {
          key: "_dirtyCheckPlaceholder",
          value: function _dirtyCheckPlaceholder() {
            var _a, _b; // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
            // screen readers will read it out twice: once from the label and once from the attribute.
            // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
            // the only one that supports promoting the placeholder to a label.


            var placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;

            if (placeholder !== this._previousPlaceholder) {
              var element = this._elementRef.nativeElement;
              this._previousPlaceholder = placeholder;
              placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
            }
          }
          /** Does some manual dirty checking on the native input `value` property. */

        }, {
          key: "_dirtyCheckNativeValue",
          value: function _dirtyCheckNativeValue() {
            var newValue = this._elementRef.nativeElement.value;

            if (this._previousNativeValue !== newValue) {
              this._previousNativeValue = newValue;
              this.stateChanges.next();
            }
          }
          /** Make sure the input is a supported type. */

        }, {
          key: "_validateType",
          value: function _validateType() {
            if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatInputUnsupportedTypeError(this._type);
            }
          }
          /** Checks whether the input type is one of the types that are never empty. */

        }, {
          key: "_isNeverEmpty",
          value: function _isNeverEmpty() {
            return this._neverEmptyInputTypes.indexOf(this._type) > -1;
          }
          /** Checks whether the input is invalid based on the native validation. */

        }, {
          key: "_isBadInput",
          value: function _isBadInput() {
            // The `validity` property won't be present on platform-server.
            var validity = this._elementRef.nativeElement.validity;
            return validity && validity.badInput;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "setDescribedByIds",

          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */
          value: function setDescribedByIds(ids) {
            if (ids.length) {
              this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
            } else {
              this._elementRef.nativeElement.removeAttribute('aria-describedby');
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            // Do not re-focus the input element if the element is already focused. Otherwise it can happen
            // that someone clicks on a time input and the cursor resets to the "hours" field while the
            // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
            if (!this.focused) {
              this.focus();
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
            // Reset from here to ensure that the element doesn't become stuck.

            if (this.focused) {
              this.focused = false;
              this.stateChanges.next();
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this._uid;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
          /** Input type of the element. */

        }, {
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(value) {
            this._type = value || 'text';

            this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea elements don't support the type property or attribute.


            if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
              this._elementRef.nativeElement.type = this._type;
            }
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this._inputValueAccessor.value;
          },
          set: function set(value) {
            if (value !== this.value) {
              this._inputValueAccessor.value = value;
              this.stateChanges.next();
            }
          }
          /** Whether the element is readonly. */

        }, {
          key: "readonly",
          get: function get() {
            return this._readonly;
          },
          set: function set(value) {
            this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "empty",
          get: function get() {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
          }
          /**
           * Implemented as part of MatFormFieldControl.
           * @docs-private
           */

        }, {
          key: "shouldLabelFloat",
          get: function get() {
            if (this._isNativeSelect) {
              // For a single-selection `<select>`, the label should float when the selected option has
              // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
              // overlapping the label with the options.
              var selectElement = this._elementRef.nativeElement;
              var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
              // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

              return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
            } else {
              return this.focused || !this.empty;
            }
          }
        }]);

        return MatInput;
      }(_MatInputMixinBase);

      MatInput.ɵfac = function MatInput_Factory(t) {
        return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"], 8));
      };

      MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MatInput,
        selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
        hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
        hostVars: 9,
        hostBindings: function MatInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
              return ctx._focusChanged(true);
            })("blur", function MatInput_blur_HostBindingHandler() {
              return ctx._focusChanged(false);
            })("input", function MatInput_input_HostBindingHandler() {
              return ctx._onInput();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
          }
        },
        inputs: {
          id: "id",
          disabled: "disabled",
          required: "required",
          type: "type",
          value: "value",
          readonly: "readonly",
          placeholder: "placeholder",
          errorStateMatcher: "errorStateMatcher",
          userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"]
        },
        exportAs: ["matInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
          useExisting: MatInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });

      MatInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_INPUT_VALUE_ACCESSOR]
          }]
        }, {
          type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]]
          }]
        }];
      };

      MatInput.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        userAriaDescribedBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-describedby']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _focusChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['focus', ['true']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['blur', ['false']]
        }],
        _onInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
            exportAs: 'matInput',
            host: {
              /**
               * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
               */
              'class': 'mat-input-element mat-form-field-autofill-control',
              '[class.mat-input-server]': '_isServer',
              // Native input properties that are overwritten by Angular inputs need to be synced with
              // the native input element. Otherwise property bindings for those don't work.
              '[attr.id]': 'id',
              // At the time of writing, we have a lot of customer tests that look up the input based on its
              // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
              // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
              '[attr.data-placeholder]': 'placeholder',
              '[disabled]': 'disabled',
              '[required]': 'required',
              '[attr.readonly]': 'readonly && !_isNativeSelect || null',
              '[attr.aria-invalid]': 'errorState',
              '[attr.aria-required]': 'required.toString()'
            },
            providers: [{
              provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
              useExisting: MatInput
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }]
          }, {
            type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MAT_INPUT_VALUE_ACCESSOR]
            }]
          }, {
            type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD"]]
            }]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

          /** Callback for the cases where the focused state of the input changes. */
          // tslint:disable:no-host-decorator-in-concrete
          // tslint:enable:no-host-decorator-in-concrete
          _focusChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus', ['true']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['blur', ['false']]
          }],
          // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
          // In Ivy the `host` bindings will be merged when this class is extended, whereas in
          // ViewEngine they're overwritten.
          // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
          // tslint:disable-next-line:no-host-decorator-in-concrete
          _onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          userAriaDescribedBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-describedby']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var MatInputModule = function MatInputModule() {
        _classCallCheck(this, MatInputModule);
      };

      MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatInputModule
      });
      MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function MatInputModule_Factory(t) {
          return new (t || MatInputModule)();
        },
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
        imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, {
          declarations: function declarations() {
            return [MatInput, MatTextareaAutosize];
          },
          imports: function imports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]];
          },
          exports: function exports() {
            return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [MatInput, MatTextareaAutosize],
            imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
            exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
            // be used together with `MatFormField`.
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
            providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=input.js.map

      /***/

    },

    /***/
    "tUD1":
    /*!***************************************************!*\
      !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: SignUpRoutingModule */

    /***/
    function tUD1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpRoutingModule", function () {
        return SignUpRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sign_up_sign_up_container_signup_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sign-up/sign-up-container/signup-container.component */
      "TKuo");

      var routes = [{
        path: '',
        component: _sign_up_sign_up_container_signup_container_component__WEBPACK_IMPORTED_MODULE_2__["SignupContainerComponent"]
      }];

      var SignUpRoutingModule = function SignUpRoutingModule() {
        _classCallCheck(this, SignUpRoutingModule);
      };

      SignUpRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SignUpRoutingModule
      });
      SignUpRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SignUpRoutingModule_Factory(t) {
          return new (t || SignUpRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignUpRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map