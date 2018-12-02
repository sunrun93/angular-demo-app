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
var WaterFallComponent = /** @class */ (function () {
    function WaterFallComponent() {
        this.imgList = [];
        this.columnHeightArr = [];
    }
    WaterFallComponent.prototype.ngOnInit = function () {
        this.initImgUrl();
    };
    WaterFallComponent.prototype.ngAfterViewInit = function () {
        this.columnHeightArr = [];
    };
    WaterFallComponent.prototype.calculateColWidth = function () {
        this.containerWidth = document.getElementById('waterFall').offsetWidth;
        this.imgPaneWidth = document.getElementsByClassName('img-item')[0].clientWidth + 10;
        this.columnNum = Math.floor(this.containerWidth / this.imgPaneWidth);
    };
    WaterFallComponent.prototype.initImgUrl = function () {
        // 图片资源，未将私人图片上传
        for (var i = 0; i < 44; i++) {
            var imgurl = "assets/imgs/" + (i + 1) + ".jpg";
            this.imgList.push({
                src: imgurl,
                left: 0,
                top: 0,
                height: 0
            });
        }
    };
    WaterFallComponent.prototype.onWindowLoaded = function () {
        this.calculateColWidth();
        this.setImgPosition();
    };
    WaterFallComponent.prototype.onWindowResize = function () {
        this.calculateColWidth();
        this.setImgPosition();
    };
    WaterFallComponent.prototype.setImgPosition = function () {
        this.columnHeightArr = [];
        var imgDomList = this.waterFallEle.nativeElement.firstChild.children;
        var paneLeft = this.waterFallEle.nativeElement.parentElement.offsetLeft;
        var paneTop = this.waterFallEle.nativeElement.parentElement.offsetTop;
        for (var i = 0; i < this.imgList.length; i++) {
            var imgHeight = imgDomList[i].offsetHeight;
            if (i < this.columnNum) {
                this.imgList[i].top = 0;
                this.imgList[i].left = this.imgPaneWidth * i + paneLeft;
                this.columnHeightArr.push(imgHeight + paneTop);
            }
            else {
                var minHeight = Math.min.apply(Math, this.columnHeightArr);
                var minHeightIdx = this.columnHeightArr.indexOf(minHeight);
                this.imgList[i].left = minHeightIdx * this.imgPaneWidth + paneLeft;
                this.imgList[i].top = minHeight + 10;
                this.columnHeightArr[minHeightIdx] = this.columnHeightArr[minHeightIdx] + imgHeight + 10;
            }
        }
    };
    __decorate([
        core_1.ViewChild('waterFall'),
        __metadata("design:type", Object)
    ], WaterFallComponent.prototype, "waterFallEle", void 0);
    __decorate([
        core_1.HostListener('window:load', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WaterFallComponent.prototype, "onWindowLoaded", null);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WaterFallComponent.prototype, "onWindowResize", null);
    WaterFallComponent = __decorate([
        core_1.Component({
            selector: 'app-water-fall',
            templateUrl: './water-fall.component.html',
            styleUrls: ['./water-fall.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], WaterFallComponent);
    return WaterFallComponent;
}());
exports.WaterFallComponent = WaterFallComponent;
//# sourceMappingURL=water-fall.component.js.map