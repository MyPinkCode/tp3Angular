import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  tab= [15, 46, 0, 89, 80];
  titre="Opérations sur un tableau";
  onPosition(i)
  {
    console.log("position:"+i);
  }
  constructor() { }

  ngOnInit() {
  }

}
