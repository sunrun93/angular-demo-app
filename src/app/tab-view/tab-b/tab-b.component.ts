import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ArrayExtention } from '../../commons/arrayExtention';

@Component({
  selector: 'app-tab-b',
  templateUrl: './tab-b.component.html',
  styleUrls: ['./tab-b.component.css']
})
export class TabBComponent implements OnInit {

  testId:string;

  strArray = ['apple','watermelon','strawberry','pineapple'];
  nbrArray = [444,222,333,111];
  objArray = [
    {'title':'apple','favorite':'3'},
    {'title':'watermelon','favorite':'2'},
    {'title':'strawberry','favorite':'1'},
    {'title':'pineapple','favorite':'4'},
  ];

  objArrayColne:any;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.testId = this.route.snapshot.paramMap.get('id');
  }

  public mySort = (array: any[], key: string = null, asce: boolean = true) => {
    array.sort((x, y) => {
      let targetX = key ? x[key] : x;
      let targetY = key ? y[key] : y;
      if (targetX < targetY) {
        return asce ? -1 : 1;
      } else if (targetX === targetY) {
        return 0;
      } else {
        return asce ? 1 : -1;
      }
    })
  }

  public myClone = (array)=>{
    return array.map((item)=>{return {...item}});
  }

  


}
