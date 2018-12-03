import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tab-b',
  templateUrl: './tab-b.component.html',
  styleUrls: ['./tab-b.component.css']
})
export class TabBComponent implements OnInit {

  testId:string;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.testId = this.route.snapshot.paramMap.get('id');
  }

}
