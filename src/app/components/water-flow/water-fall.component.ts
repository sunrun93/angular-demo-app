import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-water-fall',
  templateUrl: './water-fall.component.html',
  styleUrls: ['./water-fall.component.css']
})
export class WaterFallComponent implements OnInit {
  private imgList = [];
  private containerWidth;
  private imgPaneWidth;
  private columnNum;
  private columnHeightArr = [];
  private imgSizeArr = [];
  private imgPaneTop;
  private imgPaneLeft;

  @ViewChild('waterFall') waterFallEle;

  constructor() { }

  ngOnInit() {
    this.initImgUrl();
  }

  ngAfterViewInit(){
    this.columnHeightArr = [];
    this.calculateColWidth();
    setTimeout(() => {
      this.setImgPosition();
    }, 0);
  }

  calculateColWidth(){
    this.containerWidth = document.getElementById('waterFall').offsetWidth;
    this.imgPaneWidth = document.getElementsByClassName('img-item')[0].clientWidth+10;
    this.columnNum = Math.floor(this.containerWidth/this.imgPaneWidth);
  }

  initImgUrl(){
    this.imgPaneTop= this.waterFallEle.nativeElement.parentElement.offsetTop;
    this.imgPaneLeft = this.waterFallEle.nativeElement.parentElement.offsetLeft;
    // 图片资源,测试项目中仅上传35张图片
    for(let i =0;i<35;i++){
      let imgurl = `assets/imgs/${i+1}.jpg`
      this.imgList.push(
        {
          src: imgurl,
          left: this.imgPaneLeft,
          top: this.imgPaneTop,
          height:0
        }
      );
    }
  }

  @HostListener('window:load',['$event']) // window onload trigger
  onWindowLoaded(){
    this.setImgPosition();
  }

  @HostListener('window:resize',['$event']) // window resize trigger
  onWindowResize(){
    this.calculateColWidth();
    this.setImgPosition();
  }

  onImgload(event) {
    this.imgSizeArr.push({
      width: event.srcElement.offsetWidth,
      height: event.srcElement.offsetHeight
    })
  }

  setImgPosition(){
    this.columnHeightArr = [];
    // 动态设置每个图片的位置
    const imgDomList = this.waterFallEle.nativeElement.firstChild.children;
    for(let i = 0; i<this.imgList.length;i++){
      let imgHeight = imgDomList[i].offsetHeight;
      if(i<this.columnNum){
        // 首先设置第一行的照片的位置，并记录当前行的最大高度
        this.imgList[i].top = this.imgPaneTop;
        this.imgList[i].left = this.imgPaneWidth * i+ this.imgPaneLeft;
        this.columnHeightArr.push(imgHeight+this.imgPaneTop);
      }else{
        // 从第二行开始，首先找到当前最矮的列
        let minHeight = Math.min(...this.columnHeightArr);
        let minHeightIdx = this.columnHeightArr.indexOf(minHeight);
  
        this.imgList[i].left = minHeightIdx * this.imgPaneWidth+this.imgPaneLeft;
        this.imgList[i].top = minHeight + 10;
        this.columnHeightArr[minHeightIdx] = this.columnHeightArr[minHeightIdx] + imgHeight + 10;
      }
    }
  }


}
