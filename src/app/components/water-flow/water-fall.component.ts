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

  @ViewChild('waterFall') waterFallEle;

  constructor() { }

  ngOnInit() {
    this.initImgUrl();
  }

  ngAfterViewInit(){
    this.columnHeightArr = [];
    this.calculateColWidth();

  }

  calculateColWidth(){
    this.containerWidth = document.getElementById('waterFall').offsetWidth;
    this.imgPaneWidth = document.getElementsByClassName('img-item')[0].clientWidth+10;
    this.columnNum = Math.floor(this.containerWidth/this.imgPaneWidth);
  }

  initImgUrl(){
    // 图片资源，未将私人图片上传
    for(let i =0;i<44;i++){
      let imgurl = `assets/imgs/${i+1}.jpg`
      this.imgList.push(
        {
          src: imgurl,
          left: 0,
          top: 0,
          height:0
        }
      );
    }
  }

  @HostListener('window:load',['$event']) // window onload trigger
  onWindowLoaded(){
    this.calculateColWidth();
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
    const paneLeft =  this.waterFallEle.nativeElement.parentElement.offsetLeft;
    const paneTop = this.waterFallEle.nativeElement.parentElement.offsetTop;
    for(let i = 0; i<this.imgList.length;i++){
      let imgHeight = imgDomList[i].offsetHeight;
      if(i<this.columnNum){
        this.imgList[i].top = paneTop;
        this.imgList[i].left = this.imgPaneWidth * i+paneLeft;
        this.columnHeightArr.push(imgHeight+paneTop);
      }else{
        let minHeight = Math.min(...this.columnHeightArr);
        let minHeightIdx = this.columnHeightArr.indexOf(minHeight);
  
        this.imgList[i].left = minHeightIdx * this.imgPaneWidth+paneLeft;
        this.imgList[i].top = minHeight + 10;
        this.columnHeightArr[minHeightIdx] = this.columnHeightArr[minHeightIdx] + imgHeight + 10;
      }
    }
  }


}
