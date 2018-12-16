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
    this.setImgPosition();
  }

  calculateColWidth(){
    this.containerWidth = document.getElementById('waterFall').offsetWidth;
    this.imgPaneWidth = document.getElementsByClassName('img-item')[0].clientWidth+10;
    this.columnNum = Math.floor(this.containerWidth/this.imgPaneWidth);
  }

  initImgUrl(){
    this.imgPaneTop= this.waterFallEle.nativeElement.parentElement.offsetTop;
    this.imgPaneLeft = this.waterFallEle.nativeElement.parentElement.offsetLeft;
    // 图片资源，未将私人图片上传
    for(let i =0;i<36;i++){
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
    const imgDomList = this.waterFallEle.nativeElement.firstChild.children;
    for(let i = 0; i<this.imgList.length;i++){
      let imgHeight = imgDomList[i].offsetHeight;
      if(i<this.columnNum){
        this.imgList[i].top = this.imgPaneTop;
        this.imgList[i].left = this.imgPaneWidth * i+ this.imgPaneLeft;
        this.columnHeightArr.push(imgHeight+this.imgPaneTop);
      }else{
        let minHeight = Math.min(...this.columnHeightArr);
        let minHeightIdx = this.columnHeightArr.indexOf(minHeight);
  
        this.imgList[i].left = minHeightIdx * this.imgPaneWidth+this.imgPaneLeft;
        this.imgList[i].top = minHeight + 10;
        this.columnHeightArr[minHeightIdx] = this.columnHeightArr[minHeightIdx] + imgHeight + 10;
      }
    }
  }


}
