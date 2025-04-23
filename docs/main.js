"use strict";
(self["webpackChunkangular_chatbot"] = self["webpackChunkangular_chatbot"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/fixed-chat/fixed-chat.component */ 4407);
/* harmony import */ var _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/collapsible-chat/collapsible-chat.component */ 5287);
/* harmony import */ var _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/enums/display-type.enum */ 647);
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/login/login.component */ 4914);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);









const routes = [{
  path: 'login',
  component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}, {
  path: '',
  redirectTo: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__.DisplayType.Fixed.toLowerCase(),
  pathMatch: 'full'
}, {
  path: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__.DisplayType.Fixed.toLowerCase(),
  component: _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_0__.FixedChatComponent,
  // You can add a guard here like below if needed:
  canActivate: [() => {
    const auth = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    return auth.isLoggedIn() || router.createUrlTree(['/login']);
  }]
}, {
  path: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__.DisplayType.Collapsible.toLowerCase(),
  component: _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_1__.CollapsibleChatComponent
}, {
  path: '**',
  redirectTo: _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_2__.DisplayType.Fixed.toLowerCase()
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/enums/display-type.enum */ 647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/clipboard */ 2352);






function AppComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Copied email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(location) {
    this.location = location;
    this.email = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.email;
    this.copyEmail = false;
    this.displayType = _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_1__.DisplayType;
    this.display = _shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_1__.DisplayType.Fixed;
    const path = this.location.path().split('/')[1];
    this.display = path ? path : this.display;
  }
  onClickCopyEmail() {
    this.copyEmail = true;
    setTimeout(() => {
      this.copyEmail = false;
    }, 2000);
  }
  onClickRedirectGithub() {
    window.open(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.githubUrl, '_blank');
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 22,
      vars: 8,
      consts: [[1, "full-width", "full-height"], [1, "app-header", "display-flex", "-row", "-center"], [1, "header-title", "display-flex", "-center"], [1, "header-actions", "display-flex", "-center"], [1, "chat-buttons"], [1, "button-container"], ["id", "fixed-chat", "type", "radio", "name", "display-button", 3, "value", "routerLink", "checked"], ["for", "fixed-chat"], ["id", "collapsible-chat", "type", "radio", "name", "display-button", 3, "value", "routerLink", "checked"], ["for", "collapsible-chat"], [1, "app-socials", "display-flex", "full-height"], [1, "socials-icons", "display-flex", "-column", "-center", "full-height"], [1, "display-flex", "-center"], ["src", "./assets/github-logo.png", 1, "icon", 3, "click"], ["src", "./assets/mail.png", 1, "icon", 3, "click", "cdkCopyToClipboard"], ["class", "copy-alert", 4, "ngIf"], [1, "copy-alert"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Angular Chatbot Example ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Fixed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Collapsible");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_img_click_17_listener() {
            return ctx.onClickRedirectGithub();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12)(19, "img", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_img_click_19_listener() {
            return ctx.onClickCopyEmail();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AppComponent_span_20_Template, 2, 0, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.displayType.Fixed);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", ctx.displayType.Fixed);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.display === ctx.displayType.Fixed);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.displayType.Collapsible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", ctx.displayType.Collapsible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.display === ctx.displayType.Collapsible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkCopyToClipboard", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.copyEmail);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__.CdkCopyToClipboard],
      styles: [".app-header[_ngcontent-%COMP%] {\n  height: 15%;\n  background-color: #465461;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.app-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 100%;\n  text-align: center;\n  color: #ECF3F4;\n  font-size: 2vh;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 3%;\n  height: 30%;\n  border-radius: 0;\n  border: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 15%;\n  text-align: center;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.8vh;\n  padding: 0.5em 0.5em;\n  cursor: pointer;\n  transition: all 0.3s;\n  background: #ECF3F4;\n  border-radius: 2px;\n  color: #465461;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.app-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .chat-buttons[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  background: #729CA2;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%] {\n  width: 10%;\n  justify-content: center;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .socials-icons[_ngcontent-%COMP%] {\n  gap: 20%;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  filter: invert(100%);\n  width: 2.5vh;\n  cursor: pointer;\n}\n.app-header[_ngcontent-%COMP%]   .app-socials[_ngcontent-%COMP%]   .copy-alert[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16%;\n  width: 10%;\n  color: #729CA2;\n  font-size: 2vh;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_copy-alert 2s 1;\n  -webkit-animation: _ngcontent-%COMP%_copy-alert 2s 1;\n  animation-fill-mode: forwards;\n  animation-delay: 2s;\n  -webkit-animation-delay: 1s; \n\n  -webkit-animation-fill-mode: forwards;\n}\n@keyframes _ngcontent-%COMP%_copy-alert {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSx5QkNISTtFRElKLDhCQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NSQTtFRFNBLGNBQUE7QUFEUjtBQUlJO0VBQ0ksVUFBQTtBQUZSO0FBSVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZaO0FBSVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGaEI7QUFJZ0I7RUFDSSxhQUFBO0FBRnBCO0FBS2dCO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQ3hDWjtFRHlDWSxrQkFBQTtFQUNBLGNDN0NaO0FEMENSO0FBTWdCO0VBQ0ksWUFBQTtBQUpwQjtBQU9nQjtFQUNJLG1CQ3BEYjtBRCtDUDtBQVdJO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0FBVFI7QUFXUTtFQUNJLFFBQUE7QUFUWjtBQVlRO0VBRUksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVZaO0FBYVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0M3RUw7RUQ4RUssY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0VBRUEsbUJBQUE7RUFDQSwyQkFBQSxFQUFBLHNCQUFBO0VBQ0EscUNBQUE7QUFaWjtBQWVRO0VBQ0k7SUFBTSxVQUFBO0VBWmhCO0VBYVU7SUFBSSxVQUFBO0VBVmQ7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL2NvbG9ycyc7XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWFjdGlvbnMge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgIC5jaGF0LWJ1dHRvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMyU7XHJcbiAgICAgICAgICAgIGhlaWdodDozMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQgeyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjh2aDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1zb2NpYWxzIHtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuc29jaWFscy1pY29uc3tcclxuICAgICAgICAgICAgZ2FwOiAyMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMi41dmg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3B5LWFsZXJ0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDE2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmNvcHktYWxlcnQgMnMgMTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246Y29weS1hbGVydCAycyAxO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OjJzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheToxczsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQGtleWZyYW1lcyBjb3B5LWFsZXJ0e1xyXG4gICAgICAgICAgICBmcm9tIHtvcGFjaXR5IDoxO31cclxuICAgICAgICAgICAgdG8ge29wYWNpdHkgOjA7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgY29weS1hbGVydHtcclxuICAgICAgICAgICAgZnJvbSB7b3BhY2l0eSA6MTt9XHJcbiAgICAgICAgICAgIHRvIHtvcGFjaXR5IDowO31cclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59IiwiJG9yYW5nZTogI0ZGODkzQjtcclxuJGJsYWNrOiAjNDY1NDYxO1xyXG4kYmx1ZTogIzcyOUNBMjtcclxuJGxpZ2h0X2JsdWU6ICNDNERDREY7XHJcbiR3aGl0ZTogI0VDRjNGNDsiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLHlCQ0hJO0VESUosOEJBQUE7RUFDQSxlQUFBO0FBREo7QUFHSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ1JBO0VEU0EsY0FBQTtBQURSO0FBSUk7RUFDSSxVQUFBO0FBRlI7QUFJUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRlo7QUFJWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZoQjtBQUlnQjtFQUNJLGFBQUE7QUFGcEI7QUFLZ0I7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJDeENaO0VEeUNZLGtCQUFBO0VBQ0EsY0M3Q1o7QUQwQ1I7QUFNZ0I7RUFDSSxZQUFBO0FBSnBCO0FBT2dCO0VBQ0ksbUJDcERiO0FEK0NQO0FBV0k7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7QUFUUjtBQVdRO0VBQ0ksUUFBQTtBQVRaO0FBWVE7RUFFSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVlo7QUFhUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQzdFTDtFRDhFSyxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFFQSxtQkFBQTtFQUNBLDJCQUFBLEVBQUEsc0JBQUE7RUFDQSxxQ0FBQTtBQVpaO0FBZVE7RUFDSTtJQUFNLFVBQUE7RUFaaEI7RUFhVTtJQUFJLFVBQUE7RUFWZDtBQUNGO0FBQUEsdzJKQUF3MkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL2NvbG9ycyc7XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyLWFjdGlvbnMge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgIC5jaGF0LWJ1dHRvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMyU7XHJcbiAgICAgICAgICAgIGhlaWdodDozMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQgeyBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjh2aDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkICsgbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1zb2NpYWxzIHtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuc29jaWFscy1pY29uc3tcclxuICAgICAgICAgICAgZ2FwOiAyMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMi41dmg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3B5LWFsZXJ0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDE2JTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgY29sb3I6ICRibHVlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOmNvcHktYWxlcnQgMnMgMTtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246Y29weS1hbGVydCAycyAxO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICBcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OjJzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheToxczsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQGtleWZyYW1lcyBjb3B5LWFsZXJ0e1xyXG4gICAgICAgICAgICBmcm9tIHtvcGFjaXR5IDoxO31cclxuICAgICAgICAgICAgdG8ge29wYWNpdHkgOjA7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgY29weS1hbGVydHtcclxuICAgICAgICAgICAgZnJvbSB7b3BhY2l0eSA6MTt9XHJcbiAgICAgICAgICAgIHRvIHtvcGFjaXR5IDowO31cclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59IiwiJG9yYW5nZTogI0ZGODkzQjtcclxuJGJsYWNrOiAjNDY1NDYxO1xyXG4kYmx1ZTogIzcyOUNBMjtcclxuJGxpZ2h0X2JsdWU6ICNDNERDREY7XHJcbiR3aGl0ZTogI0VDRjNGNDsiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/clipboard */ 2352);
/* harmony import */ var _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/fixed-chat/fixed-chat.component */ 4407);
/* harmony import */ var _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/collapsible-chat/collapsible-chat.component */ 5287);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat/chat.component */ 191);
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/login/login.component */ 4914);
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/token.interceptor */ 2543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);






// Angular Material Modules






// Components




// Services


class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_6__.TokenInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__.ClipboardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_fixed_chat_fixed_chat_component__WEBPACK_IMPORTED_MODULE_2__.FixedChatComponent, _pages_collapsible_chat_collapsible_chat_component__WEBPACK_IMPORTED_MODULE_3__.CollapsibleChatComponent, _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__.ChatComponent, _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__.ClipboardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule]
  });
})();

/***/ }),

/***/ 191:
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatComponent: () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _models_chat_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/chat-message */ 197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/chat.service */ 856);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);










const _c0 = ["messageContainer"];
function ChatComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", message_r2.text, " ");
  }
}
function ChatComponent_div_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", message_r2.text, " ");
  }
}
function ChatComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span")(3, "span")(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ChatComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChatComponent_div_14_div_2_Template, 2, 1, "div", 17)(3, ChatComponent_div_14_div_3_Template, 2, 1, "div", 18)(4, ChatComponent_div_14_div_4_Template, 5, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", message_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "bot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "loading");
  }
}
class Message {}
var MessageType;
(function (MessageType) {
  MessageType["Bot"] = "bot";
  MessageType["User"] = "user";
  MessageType["Loading"] = "loading";
})(MessageType || (MessageType = {}));
class ChatComponent {
  constructor(formBuilder, chatService) {
    this.formBuilder = formBuilder;
    this.chatService = chatService;
    this.messages = [];
    this.canSendMessage = true;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      message: ['']
    });
    // Optional: preload welcome message
    // this.getBotMessage(); 
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  onClickSendMessage() {
    const message = this.form.get('message').value;
    if (message && this.canSendMessage) {
      const userMessage = {
        text: message,
        type: MessageType.User
      };
      this.messages.push(userMessage);
      this.form.get('message').setValue('');
      this.form.updateValueAndValidity();
      this.getBotMessage();
    }
  }
  createDefaultMessage(content, prompt) {
    return {
      id: this.generateUUID(),
      chatId: this.generateUUID(),
      userId: 'user-uuid',
      userName: 'User',
      content: content,
      prompt: prompt,
      role: _models_chat_message__WEBPACK_IMPORTED_MODULE_0__.ChatRole.USER,
      timestamp: new Date().toISOString()
    };
  }
  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }
  getBotMessage() {
    this.canSendMessage = false;
    const waitMessage = {
      type: MessageType.Loading
    };
    this.messages.push(waitMessage);
    // Create a placeholder for the bot's full response *before* subscribing
    const botMessagePlaceholder = {
      text: '',
      type: MessageType.Bot
    };
    let placeholderAdded = false; // Flag to track if we added the placeholder
    let botMessageIndex = -1; // To store the index of the placeholder
    const lastUserMessage = this.messages.filter(m => m.type === MessageType.User).pop()?.text;
    if (!lastUserMessage) {
      console.warn("No user message found to send.");
      this.messages.pop(); // Remove loading message
      this.canSendMessage = true;
      return; // Exit if there's nothing to send
    }
    var chatMessage = this.createDefaultMessage("", lastUserMessage);
    this.chatService.getToolResponseStream(chatMessage).subscribe({
      next: event => {
        const response = event.data;
        // --- Action on receiving data chunk ---
        console.log('Stream event received:', event);
        const chunk = response.content; // Assuming backend sends string chunks
        // 1. Remove Loading & Add Placeholder (only on the first chunk)
        if (!placeholderAdded) {
          const loadingIndex = this.messages.findIndex(m => m.type === MessageType.Loading);
          if (loadingIndex !== -1) {
            this.messages.splice(loadingIndex, 1); // Remove loading
          }
          this.messages.push(botMessagePlaceholder); // Add the empty bot message bubble
          botMessageIndex = this.messages.length - 1; // Get its index
          placeholderAdded = true;
        }
        // 2. Append data chunk to the placeholder message
        if (botMessageIndex !== -1 && this.messages[botMessageIndex]) {
          // Ensure text is initialized
          this.messages[botMessageIndex].text = (this.messages[botMessageIndex].text || '') + chunk;
        } else if (placeholderAdded) {
          console.error("Error: Bot message placeholder was added but cannot be found.");
          // Fallback: create a new message? Might lead to multiple bubbles.
          // const fallbackMsg: Message = { text: chunk, type: MessageType.Bot };
          // this.messages.push(fallbackMsg);
        }
        // Do NOT re-enable sending here - wait for complete/error
      },
      error: error => {
        // --- Action on stream error ---
        console.error('Error from backend stream:', error);
        // Remove loading message if it's still there
        const loadingIndex = this.messages.findIndex(m => m.type === MessageType.Loading);
        if (loadingIndex !== -1) {
          this.messages.splice(loadingIndex, 1);
        }
        // Add a distinct error message bubble
        const errorMessage = {
          text: 'Sorry, an error occurred while getting the response.',
          type: MessageType.Bot
        };
        this.messages.push(errorMessage);
        this.canSendMessage = true; // Allow sending again after error
      },
      complete: () => {
        // --- Action on stream completion ---
        console.log('Stream completed successfully.');
        // Ensure loading is removed (safety check)
        if (!placeholderAdded) {
          const loadingIndex = this.messages.findIndex(m => m.type === MessageType.Loading);
          if (loadingIndex !== -1) {
            this.messages.splice(loadingIndex, 1); // Remove loading
          }
          // If the stream completed *without sending any data*
          if (botMessageIndex === -1) {
            const noDataMsg = {
              text: "[No response received]",
              type: MessageType.Bot
            };
            this.messages.push(noDataMsg);
          }
        }
        // If placeholder was added but remains empty after completion
        else if (botMessageIndex !== -1 && this.messages[botMessageIndex]?.text === '') {
          console.warn("Stream completed but no text content received.");
          this.messages[botMessageIndex].text = "[Empty response]";
        }
        this.canSendMessage = true; // IMPORTANT: Allow sending ONLY when stream is fully complete
      }
    });
  }
  onClickEnter(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.onClickSendMessage();
    }
  }
  scrollToBottom() {
    try {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.warn('Failed to scroll:', err);
    }
  }
  static {
    this.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__.ChatService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.messageContainer = _t.first);
        }
      },
      inputs: {
        display: "display"
      },
      decls: 21,
      vars: 3,
      consts: [["messageContainer", ""], [1, "chat-wrapper", 3, "formGroup"], [1, "chat-card", 3, "ngClass"], [1, "chat-header"], [1, "chat-header-left"], ["mat-card-avatar", "", "src", "./assets/bot.png", "alt", "Chatbot", 1, "chat-icon"], [1, "chat-title"], [1, "chat-subtitle"], [1, "status-icon", "online"], [1, "chat-messages"], ["class", "message-wrapper", 4, "ngFor", "ngForOf"], [1, "chat-input-wrapper"], ["appearance", "outline", 1, "chat-input-field"], ["matInput", "", "formControlName", "message", "placeholder", "Type your message...", "rows", "1", 1, "chat-input", 3, "keydown.enter"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Send message", 3, "click"], [1, "message-wrapper"], [3, "ngSwitch"], ["class", "message user", 4, "ngSwitchCase"], ["class", "message bot", 4, "ngSwitchCase"], ["class", "message loading", 4, "ngSwitchCase"], [1, "message", "user"], [1, "message", "bot"], [1, "message", "loading"], [1, "loading-dots"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1)(1, "mat-card", 2)(2, "mat-card-header", 3)(3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "mat-card-title", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Chatbot");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-subtitle", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Online");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-content", 9, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChatComponent_div_14_Template, 5, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-card-actions", 11)(16, "mat-form-field", 12)(17, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_textarea_keydown_enter_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onClickEnter($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onClickSendMessage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "send");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.display);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.messages);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
      styles: ["\n\n.chat-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.chat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 80vh;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  background-color: #f5f5f5;\n}\n\n.chat-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.chat-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.chat-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 0;\n}\n\n.chat-subtitle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.9rem;\n  color: #666;\n}\n\n.status-icon[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n\n.status-icon.online[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 10px;\n}\n\n.message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 0;\n}\n\n.message[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  border-radius: 10px;\n  max-width: 70%;\n  word-wrap: break-word;\n}\n\n.user[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  margin-left: auto;\n}\n\n.bot[_ngcontent-%COMP%] {\n  background-color: #f1f0f0;\n  color: black;\n  margin-right: auto;\n}\n\n.loading[_ngcontent-%COMP%] {\n  background-color: #f1f0f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n\n.loading-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: #555;\n  border-radius: 50%;\n  margin: 0 4px;\n  animation: _ngcontent-%COMP%_pulse 1.2s infinite ease-in-out;\n}\n\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n\n.loading-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.5);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.chat-input-wrapper[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #fff;\n}\n\n.chat-input-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chat-input[_ngcontent-%COMP%] {\n  resize: none;\n  overflow-y: auto;\n  max-height: 100px;\n}\n\n\n\nbutton[mat-icon-button][_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtFQUNGO0VBQ0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0EscUNBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQUYiLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNDU1MgY29tcGlsZWQgdG8gQ1NTIGZvciB0aGUgY2hhdCBjb21wb25lbnQgKi9cclxuLmNoYXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY2hhdC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2hhdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5jaGF0LWhlYWRlci1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0LWljb24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jaGF0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaGF0LXN1YnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5zdGF0dXMtaWNvbiB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnN0YXR1cy1pY29uLm9ubGluZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZXMge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4udXNlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5ib3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWRvdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRpbmctZG90cyBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgNHB4O1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmxvYWRpbmctZG90cyBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcblxyXG4ubG9hZGluZy1kb3RzIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXQtaW5wdXQtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2hhdC1pbnB1dC1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGF0LWlucHV0IHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLyogRW5zdXJlIG1hdC1pY29uLWJ1dHRvbiBpcyBzdHlsZWQgKi9cclxuYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtFQUNGO0VBQ0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0EscUNBQUE7QUFDQTtFQUNFLGdCQUFBO0FBQUY7QUFDQSxncEtBQWdwSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNDU1MgY29tcGlsZWQgdG8gQ1NTIGZvciB0aGUgY2hhdCBjb21wb25lbnQgKi9cclxuLmNoYXQtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY2hhdC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2hhdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5jaGF0LWhlYWRlci1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0LWljb24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5jaGF0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaGF0LXN1YnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5zdGF0dXMtaWNvbiB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnN0YXR1cy1pY29uLm9ubGluZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZXMge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4udXNlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5ib3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYwZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWRvdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvYWRpbmctZG90cyBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgNHB4O1xyXG4gIGFuaW1hdGlvbjogcHVsc2UgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmxvYWRpbmctZG90cyBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcblxyXG4ubG9hZGluZy1kb3RzIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmNoYXQtaW5wdXQtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2hhdC1pbnB1dC1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGF0LWlucHV0IHtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLyogRW5zdXJlIG1hdC1pY29uLWJ1dHRvbiBpcyBzdHlsZWQgKi9cclxuYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4914:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);











function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
class LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.errorMessage = '';
    this.loginForm = this.fb.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) return;
    const {
      username,
      password
    } = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: () => {
        this.errorMessage = '';
        this.router.navigate(['/fixed-chat']); // Navigate to chatbot or main app
      },
      error: err => {
        this.errorMessage = err.message || 'Login failed';
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 26,
      vars: 3,
      consts: [[1, "login-wrapper"], [1, "login-card"], [1, "login-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "username", "required", "", "autocomplete", "username"], ["matInput", "", "type", "password", "formControlName", "password", "required", "", "autocomplete", "current-password"], ["class", "error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "login-button", 3, "disabled"], [1, "login-actions"], ["routerLink", "/forgot-password", 1, "forgot-link"], [1, "spacer"], ["routerLink", "/register", 1, "register-link"], [1, "error-message"], ["color", "warn"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Please sign in to continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content")(8, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 3)(10, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 3)(14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 4, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card-actions", 8)(21, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Forgot password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Create account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon],
      styles: [".login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: linear-gradient(145deg, #f0f2f5, #ffffff);\n  padding: 1rem;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: 1.5rem;\n  border-radius: 12px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  font-weight: bold;\n}\n\n.login-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n.login-actions[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%], .login-actions[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-decoration: none;\n  color: #3f51b5;\n}\n.login-actions[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:hover, .login-actions[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-actions[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7O0VBRUUsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJOztFQUNFLDBCQUFBO0FBRU47QUFFRTtFQUNFLE9BQUE7QUFBSjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFERiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2YwZjJmNSwgI2ZmZmZmZik7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sb2dpbi1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxuICAuZm9yZ290LWxpbmssXHJcbiAgLnJlZ2lzdGVyLWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNkMzJmMmY7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFOztFQUVFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTs7RUFDRSwwQkFBQTtBQUVOO0FBRUU7RUFDRSxPQUFBO0FBQUo7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBREY7QUFDQSxvc0VBQW9zRSIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2YwZjJmNSwgI2ZmZmZmZik7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5sb2dpbi1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG5cclxuICAuZm9yZ290LWxpbmssXHJcbiAgLnJlZ2lzdGVyLWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3BhY2VyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNkMzJmMmY7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 197:
/*!****************************************!*\
  !*** ./src/app/models/chat-message.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatRole: () => (/* binding */ ChatRole)
/* harmony export */ });
// chat.model.ts
var ChatRole;
(function (ChatRole) {
  ChatRole[ChatRole["USER"] = 0] = "USER";
  ChatRole[ChatRole["ASSISTANT"] = 1] = "ASSISTANT";
})(ChatRole || (ChatRole = {}));

/***/ }),

/***/ 5287:
/*!**********************************************************************!*\
  !*** ./src/app/pages/collapsible-chat/collapsible-chat.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsibleChatComponent: () => (/* binding */ CollapsibleChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/display-type.enum */ 647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/chat/chat.component */ 191);







function CollapsibleChatComponent_app_chat_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-chat", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("display", ctx_r0.displayType.Collapsible)("@fadeAnimation", undefined);
  }
}
class CollapsibleChatComponent {
  constructor() {
    this.botIconPath = './assets/bot.png';
    this.chatIconPath = './assets/chat.png';
    this.isOpen = false;
    this.iconSrc = this.botIconPath;
    this.iconState = 'default';
    this.displayType = src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_0__.DisplayType;
  }
  onChangeChatState() {
    this.isOpen = !this.isOpen;
    this.iconState = this.iconState === 'default' ? 'rotated' : 'default';
    if (this.isOpen) this.iconSrc = this.chatIconPath;else this.iconSrc = this.botIconPath;
  }
  static {
    this.ɵfac = function CollapsibleChatComponent_Factory(t) {
      return new (t || CollapsibleChatComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CollapsibleChatComponent,
      selectors: [["app-collapsible-chat"]],
      decls: 3,
      vars: 5,
      consts: [["matSuffix", "", "mat-fab", "", 1, "chat-button", 3, "click", "disableRipple"], [3, "src", "ngClass"], [3, "display", 4, "ngIf"], [3, "display"]],
      template: function CollapsibleChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CollapsibleChatComponent_Template_button_click_0_listener() {
            return ctx.onChangeChatState();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CollapsibleChatComponent_app_chat_2_Template, 1, 2, "app-chat", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disableRipple", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("@rotateAnimation", ctx.iconState)("ngClass", ctx.isOpen ? "button-icon chat" : "button-icon bot");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatFabButton, _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__.ChatComponent],
      styles: [".chat-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 5%;\n  right: 3%;\n  background-color: #465461;\n}\n.chat-button[_ngcontent-%COMP%]   .button-icon[_ngcontent-%COMP%] {\n  filter: invert(100%);\n}\n.chat-button[_ngcontent-%COMP%]   .button-icon.chat[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.chat-button[_ngcontent-%COMP%]   .button-icon.bot[_ngcontent-%COMP%] {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNpYmxlLWNoYXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EseUJDUkk7QURPUjtBQUdJO0VBRUksb0JBQUE7QUFEUjtBQUdRO0VBQ0ksVUFBQTtBQURaO0FBSVE7RUFDSSxVQUFBO0FBRloiLCJmaWxlIjoiY29sbGFwc2libGUtY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvY29sb3JzJztcclxuXHJcbi5jaGF0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIHJpZ2h0OiAzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuXHJcbiAgICAuYnV0dG9uLWljb24ge1xyXG4gICAgICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XHJcblxyXG4gICAgICAgICYuY2hhdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmJvdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJG9yYW5nZTogI0ZGODkzQjtcclxuJGJsYWNrOiAjNDY1NDYxO1xyXG4kYmx1ZTogIzcyOUNBMjtcclxuJGxpZ2h0X2JsdWU6ICNDNERDREY7XHJcbiR3aGl0ZTogI0VDRjNGNDsiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29sbGFwc2libGUtY2hhdC9jb2xsYXBzaWJsZS1jaGF0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx5QkNSSTtBRE9SO0FBR0k7RUFFSSxvQkFBQTtBQURSO0FBR1E7RUFDSSxVQUFBO0FBRFo7QUFJUTtFQUNJLFVBQUE7QUFGWjtBQUFBLDRzQ0FBNHNDIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnL3NyYy9jb2xvcnMnO1xyXG5cclxuLmNoYXQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgcmlnaHQ6IDMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xyXG5cclxuICAgIC5idXR0b24taWNvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcclxuICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcclxuXHJcbiAgICAgICAgJi5jaGF0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYm90IHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkb3JhbmdlOiAjRkY4OTNCO1xyXG4kYmxhY2s6ICM0NjU0NjE7XHJcbiRibHVlOiAjNzI5Q0EyO1xyXG4kbGlnaHRfYmx1ZTogI0M0RENERjtcclxuJHdoaXRlOiAjRUNGM0Y0OyJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('rotateAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('rotated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          transform: 'rotate(0deg)'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('default', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          transform: 'rotate(-360deg)'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('default => rotated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('500ms ease-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('rotated => default', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('500ms ease-out'))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('fadeAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          opacity: 0
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)("150ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          opacity: 1
        }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)(":leave", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          opacity: 1
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)("150ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          opacity: 0
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 4407:
/*!**********************************************************!*\
  !*** ./src/app/pages/fixed-chat/fixed-chat.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FixedChatComponent: () => (/* binding */ FixedChatComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/enums/display-type.enum */ 647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/chat/chat.component */ 191);



class FixedChatComponent {
  constructor() {
    this.displayType = src_app_shared_enums_display_type_enum__WEBPACK_IMPORTED_MODULE_0__.DisplayType;
  }
  static {
    this.ɵfac = function FixedChatComponent_Factory(t) {
      return new (t || FixedChatComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FixedChatComponent,
      selectors: [["app-fixed-chat"]],
      decls: 1,
      vars: 1,
      consts: [[3, "display"]],
      template: function FixedChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-chat", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("display", ctx.displayType.Fixed);
        }
      },
      dependencies: [_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__.ChatComponent],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXhlZC1jaGF0LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZml4ZWQtY2hhdC9maXhlZC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);





class AuthService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'http://localhost:8080/auth';
    this.tokenKey = 'jwt_token';
    this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService();
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }
  isLoggedIn() {
    const token = this.getToken();
    console.log("token:", token);
    return !!localStorage.getItem(this.tokenKey);
  }
  // Called during app initialization
  initAuth() {
    const token = this.getToken();
    console.log("token:", token);
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // Existing valid token
      this.isAuthenticatedSubject.next(true);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    }
    // Attempt authentication with hardcoded credentials
    const credentials = {
      username: 'angular-user',
      password: 'angular-pass'
    };
    return this.login(credentials.username, credentials.password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
      this.isAuthenticatedSubject.next(true);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
      console.error('Startup authentication failed:', error.message);
      this.isAuthenticatedSubject.next(false);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false); // Continue app startup even if auth fails
    }));
  }
  login(username, password) {
    return this.http.post(`${this.baseUrl}/login-angular`, {
      username,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(response => {
      if (response.token) {
        localStorage.setItem(this.tokenKey, response.token);
        this.isAuthenticatedSubject.next(true);
      } else {
        throw new Error('Invalid credentials');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  isAuthenticated() {
    const token = this.getToken();
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }
  getRoles() {
    const token = this.getToken();
    if (token) {
      const decoded = this.jwtHelper.decodeToken(token);
      return decoded.roles || [];
    }
    return [];
  }
  hasRole(role) {
    return this.getRoles().includes(`ROLE_${role}`);
  }
  handleError(error) {
    let errorMessage = 'An error occurred';
    if (error.status === 400) {
      errorMessage = 'Invalid username or password';
    } else if (error.status === 0) {
      errorMessage = 'Network error: Please check your connection';
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => new Error(errorMessage));
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 856:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatService: () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 4796);





class ChatService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.baseUrl = 'http://localhost:8080/gen-ai';
  }
  /**
   * Gets AI tool response using Server-Sent Events (SSE)
   */
  getToolResponseStream(chatMessage) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      // For SSE with POST requests, we need EventSource polyfill or custom implementation
      // This implementation uses fetch with SSE handling
      // const fetchUrl = `${this.baseUrl}/ask-ai-tool`;
      const fetchUrl = `${this.baseUrl}/ask-ai-stream`;
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
        'Authorization': `Bearer ${this.authService.getToken()}`
      });
      const fetchPromise = fetch(fetchUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(chatMessage),
        cache: 'no-cache'
      });
      fetchPromise.then(response => {
        if (!response.ok) {
          observer.error(`HTTP error! Status: ${response.status}`);
          return;
        }
        if (!response.body) {
          observer.error('Response body is null');
          return;
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        function processStreamChunk() {
          reader.read().then(({
            done,
            value
          }) => {
            if (done) {
              observer.complete();
              return;
            }
            const chunk = decoder.decode(value, {
              stream: true
            });
            const lines = chunk.split('\n\n');
            lines.forEach(line => {
              if (line.trim() !== '') {
                // Parse SSE format
                const eventData = line.split('\n').reduce((acc, part) => {
                  const colonIndex = part.indexOf(':');
                  if (colonIndex > 0) {
                    const field = part.substring(0, colonIndex).trim();
                    const value = part.substring(colonIndex + 1).trim();
                    acc[field] = value;
                  }
                  return acc;
                }, {});
                try {
                  const parsedData = JSON.parse(eventData.data);
                  const event = new MessageEvent(eventData.event || 'message', {
                    data: parsedData
                  });
                  observer.next(event);
                } catch (err) {
                  console.error('JSON parse error for SSE event:', err);
                }
              }
            });
            processStreamChunk();
          }).catch(err => {
            observer.error(err);
          });
        }
        processStreamChunk();
      }).catch(err => {
        observer.error(err);
      });
      return () => {
        // Nothing to clean up for fetch implementation
        console.log('Stream connection closed');
      };
    });
  }
  /**
   * Alternative method using standard HTTP POST
   * Useful for non-streaming responses or when SSE is not needed
   */
  askAgent(chatMessage) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/ask-ai-tool`, chatMessage, {
      headers: headers,
      responseType: 'text',
      reportProgress: true,
      observe: 'events'
    });
  }
  getResponseStream(question) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      // Ensure the URL is correct - verify the base path and endpoint
      const eventSource = new EventSource(`${this.baseUrl}/ask-ai-stream?prompt=${encodeURIComponent(question)}`);
      // Listener for SPECIFICALLY named 'weather' events
      eventSource.addEventListener('weather', event => {
        console.log('Received "weather" event:', event);
        //console.log('Data:', event.data); // Access the data payload
        observer.next(event); // Cast is safe here
      });
      // Listener for any OTHER named events (if backend sends more types)
      eventSource.addEventListener('message', event => {
        console.log('Received "message" event:', event);
        console.log('Data:', event.data);
        observer.next(event);
      });
      // Optional: Keep onmessage for UNNAMED events (if backend might send those)
      // eventSource.onmessage = (event) => {
      //   console.log('Received unnamed event:', event);
      //   observer.next(event);
      // };
      eventSource.onerror = err => {
        console.error('EventSource failed:', err);
        // Don't close the source here if you want automatic reconnection (default EventSource behavior)
        // Only close if the error is fatal or you want to stop trying.
        // eventSource.close();
        observer.error(err);
      };
      eventSource.onopen = () => {
        console.log('EventSource connection opened');
      };
      // Cleanup when the Observable is unsubscribed
      return () => {
        if (eventSource.readyState !== EventSource.CLOSED) {
          eventSource.close();
          console.log('EventSource connection closed');
        }
      };
    });
  }
  static {
    this.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2543:
/*!***********************************************!*\
  !*** ./src/app/services/token.interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenInterceptor: () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);





class TokenInterceptor {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    console.log('TokenInterceptor instantiated');
  }
  intercept(req, next) {
    console.log('TokenInterceptor engaged:', req.url); // <-- Check if this appears
    // Your interceptor logic
    // Skip auth header for login or auth endpoints
    if (req.url.includes('/auth')) {
      return next.handle(req);
    }
    const token = this.authService.getToken();
    const authReq = token ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }) : req;
    return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.log(error);
      if (error.status === 401) {
        // Attempt silent re-auth
        return this.authService.initAuth().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(success => {
          if (success) {
            const newToken = this.authService.getToken();
            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`
              }
            });
            return next.handle(retryReq);
          } else {
            this.authService.logout();
            this.router.navigate(['/login']);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Authentication failed'));
          }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => {
          this.authService.logout();
          this.router.navigate(['/login']);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Authentication failed'));
        }));
      } else if (error.status === 403) {
        // Access Denied
        this.authService.logout();
        this.router.navigate(['/login']);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error('Access denied: Insufficient permissions'));
      }
      // Other errors
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 647:
/*!***************************************************!*\
  !*** ./src/app/shared/enums/display-type.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayType: () => (/* binding */ DisplayType)
/* harmony export */ });
var DisplayType;
(function (DisplayType) {
  DisplayType["Fixed"] = "fixed-chat";
  DisplayType["Collapsible"] = "collapsible-chat";
})(DisplayType || (DisplayType = {}));

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  email: 'leticiamichelin@outlook.com',
  githubUrl: 'https://github.com/leticiabma'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map