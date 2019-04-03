import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, NgZone, OnInit, Renderer2} from '@angular/core';
import {Draggable, Droppable} from 'primeng/primeng';

@Directive({
  selector: '[sortableListItem]'
})
export class SortableListItemDirective implements OnInit, AfterViewInit {

  private readonly pDraggable: Draggable;
  private readonly pDroppable: Droppable;

  @HostBinding('attr.pDraggable') get draggable() {
    return this.pDraggable;
  }

  @HostBinding('attr.pDraggable') get draggable() {
    return this.pDraggable;
  }

  @HostListener('dragstart', ['$event']) onDragStart(event) {
    this.pDraggable.dragStart(event);
  }

  @HostListener('dragenter', ['$event'])
  dragEnter(event) {
    this.pDroppable.dragEnter(event);
  }

  constructor(private elRef: ElementRef, private zone: NgZone) {
    this.pDraggable = new Draggable(this.elRef, this.zone);
    this.pDroppable = new Droppable(this.elRef, this.zone);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.pDraggable.ngAfterViewInit();
    this.pDraggable.onDragStart.subscribe(e => console.log('Strart drag', e));
    this.pDroppable.onDragEnter.subscribe(e => console.log('Drag enter', e));
  }
}
