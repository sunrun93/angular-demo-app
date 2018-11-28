"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WaterFlowComponent = /** @class */ (function () {
    function WaterFlowComponent() {
        this.imgurls = [];
    }
    WaterFlowComponent.prototype.ngOnInit = function () {
        this.getContainerWidth;
        this.initImgUrl();
    };
    WaterFlowComponent.prototype.getContainerWidth = function () {
        this.containerWidth = document.getElementById('waterFall').offsetWidth;
    };
    WaterFlowComponent.prototype.initImgUrl = function () {
        for (var i = 0; i < 43; i++) {
            var imgurl = "assets/imgs/" + (i + 1) + ".jpg";
            this.imgurls.push(imgurl);
        }
    };
    WaterFlowComponent = __decorate([
        core_1.Component({
            selector: 'app-water-flow',
            templateUrl: './water-flow.component.html',
            styleUrls: ['./water-flow.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], WaterFlowComponent);
    return WaterFlowComponent;
}());
exports.WaterFlowComponent = WaterFlowComponent;
//# sourceMappingURL=water-flow.component.js.map