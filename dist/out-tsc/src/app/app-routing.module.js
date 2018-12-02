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
var router_1 = require("@angular/router");
var tab_a_component_1 = require("../app/tab-view/tab-a/tab-a.component");
var tab_b_component_1 = require("../app/tab-view/tab-b/tab-b.component");
var water_fall_component_1 = require("../app/components/water-flow/water-fall.component");
var test_component_1 = require("../app/components/test/test.component");
exports.router = [
    { path: '', pathMatch: 'full', redirectTo: '/tab_a' },
    {
        path: 'tab_a', component: tab_a_component_1.TabAComponent, children: [
            { path: 'water_fall', component: water_fall_component_1.WaterFallComponent },
            { path: 'todo', component: test_component_1.TestComponent }
        ]
    },
    { path: 'tab_b', component: tab_b_component_1.TabBComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forRoot(exports.router)
            ],
            exports: [
                router_1.RouterModule
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map