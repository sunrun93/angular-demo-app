"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var tab_a_component_1 = require("./tab-a/tab-a.component");
var tab_b_component_1 = require("./tab-b/tab-b.component");
var router_1 = require("@angular/router");
var app_routing_module_1 = require("../app-routing.module");
var TabViewModule = /** @class */ (function () {
    function TabViewModule() {
    }
    TabViewModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(app_routing_module_1.router)
            ],
            exports: [tab_a_component_1.TabAComponent, tab_b_component_1.TabBComponent, router_1.RouterModule],
            declarations: [tab_a_component_1.TabAComponent, tab_b_component_1.TabBComponent]
        })
    ], TabViewModule);
    return TabViewModule;
}());
exports.TabViewModule = TabViewModule;
//# sourceMappingURL=tab-view.module.js.map