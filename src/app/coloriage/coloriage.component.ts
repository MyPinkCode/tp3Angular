import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coloriage',
  templateUrl: './coloriage.component.html',
  styleUrls: ['./coloriage.component.css']
})
export class ColoriageComponent implements OnInit {
  color:string;
  fontfam:string;
  choix:string;
  set(col,fontf)
  {
    this.color=col;
    this.fontfam=fontf;
    console.log('sorry');
  }
  constructor() { }

  ngOnInit() {
  }

}
