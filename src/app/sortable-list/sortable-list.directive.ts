import {AfterViewInit, Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[sortableList]'
})
export class SortableListDirective implements OnInit {

  @Input() sortableList: any[];

  ngOnInit(): void {
  }
}
