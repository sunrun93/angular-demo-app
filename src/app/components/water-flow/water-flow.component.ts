import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-water-flow',
  templateUrl: './water-flow.component.html',
  styleUrls: ['./water-flow.component.css']
})
export class WaterFlowComponent implements OnInit {
  private imgList = [];
  private containerWidth;
  private imgPaneWidth;
  private columnNum;
  private columnHeightArr = [];

  constructor() { }

  ngOnInit() {
    this.initImgUrl();
  }

  ngAfterViewInit(){
    this.getContainerWidth();
    this.columnHeightArr = [];
  }

  getContainerWidth(){
    this.containerWidth = document.getElementById('waterFall').offsetWidth;
    this.imgPaneWidth = document.getElementsByClassName('img-item')[0].clientWidth+10;
    this.columnNum = Math.floor(this.containerWidth/this.imgPaneWidth);
  }

  initImgUrl(){
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

  loadImage(e, index) {
    // first line
    let imgHeight = e.target.parentElement.clientHeight;
    this.imgList[index].height = imgHeight;
    if (index < this.columnNum) {
      this.imgList[index].top = 0;
      this.imgList[index].left = this.imgPaneWidth * index;
      this.columnHeightArr.push(imgHeight);
    } else {
      let minHeight = Math.min(...this.columnHeightArr);
      let minHeightIdx = this.columnHeightArr.indexOf(minHeight);

      this.imgList[index].left = minHeightIdx * this.imgPaneWidth;
      this.imgList[index].top = minHeight + 10;
      this.columnHeightArr[minHeightIdx] = this.columnHeightArr[minHeightIdx] + imgHeight + 10;
    }
  }


}
