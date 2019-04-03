import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, NgZone, OnInit, Renderer2} from '@angular/core';
import {Draggable, Droppable} from 'primeng/primeng';

@Directive({
  selector: '[sortableListItem]'
})
export class SortableListItemDirective implements OnInit, AfterViewInit {

  private readonly pDraggable: Draggable;
  private readonly pDroppable: Droppable;

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
    this.pDraggable.onDragStart.subscribe((dragEvent: DragEvent) => this.dragStart(dragEvent));
    this.pDroppable.onDragEnter.subscribe((dropEnterEvent: DragEvent) => this.dropEnter(dropEnterEvent));
  }

  private dragStart(dragEvent: DragEvent): void {
    const dragElement: any = dragEvent.target;
    const allElements = dragElement.parentNode.children;
    console.log('DragIndex', this.findIndex(allElements, dragElement));
  }

  private dropEnter(dropEnterEvent: DragEvent): void {
    const dropToElement: any = dropEnterEvent.target;
    const allElements = dropToElement.parentNode.children;
    console.log('DropIndex', this.findIndex(allElements, dropToElement));
  }

  private findIndex(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
  };
}
