import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  /* Defining property with the @Input decoartor which 
  tells that this propery is coming from parent */
  @Input() public parentData;
  constructor() { }
  ngOnInit() {
  }

}