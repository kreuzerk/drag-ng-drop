import {Component, ElementRef, OnInit, ViewChildren} from '@angular/core';
import {fromEvent, merge, NEVER, Observable, Subject} from 'rxjs';
import {filter, mapTo, switchMap} from 'rxjs/operators';

@Component({
  selector: 'primeng-sortable-grid',
  templateUrl: './primeng.sortgrid.component.html'
})
export class PrimengSortgridComponent implements OnInit {

  @ViewChildren('draggableContainer') draggableContainers;

  public items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private dragIndex: number;
  private dragElement: any;
  private placeHolderPosition;
  private cmdKeypress$: Observable<any>;
  private COMMAND_KEY = 91;
  private dragItemClicked$ = new Subject<ElementRef>();

  ngOnInit(): void {
    // TODO Remove deprcated keyCode. See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    const cmdKeyDown = fromEvent(window, 'keydown').pipe(
      filter((keyboardEvent: KeyboardEvent) => keyboardEvent.keyCode === this.COMMAND_KEY),
      mapTo(true)
    );
    const keyup = fromEvent(window, 'keyup').pipe(mapTo(false));

    const isCmdKeyPressed$ = merge(cmdKeyDown, keyup);

    isCmdKeyPressed$.pipe(
      switchMap((pressed) => pressed ? this.dragItemClicked$ : NEVER)
    ).subscribe((selectedElement: ElementRef) => {
      selectedElement.nativeElement.firstChild.classList.add('selected');
    });

  }

  dragStart(event, index): void {
    this.dragIndex = index;
    this.dragElement = this.draggableContainers._results[this.dragIndex];
    this.placeHolderPosition = index;
  }

  dragEnter(event, hoverIndex: number): void {

    const dragIndex = this.indexOf(this.dragElement.nativeElement.parentNode.children, this.dragElement.nativeElement);
    console.log('Im Dragenter: hoverIndex', hoverIndex);
    console.log('Im Dragenter: dragIndex', dragIndex);

    if (hoverIndex === this.dragIndex) {
      return;
    }

    const dropElement = this.draggableContainers._results[hoverIndex];
    const el = this.getReferenceElement(dragIndex, hoverIndex);

    dropElement.nativeElement.parentNode.insertBefore(this.dragElement.nativeElement, el.nativeElement);
  }

  private getReferenceElement(dragIndex: number, hoverIndex: number): ElementRef {
    const elementRefIndex = dragIndex < hoverIndex ? hoverIndex + 1 : hoverIndex;
    return this.draggableContainers._results[elementRefIndex];
  }

  private indexOf(collection, node: ElementRef): number {
    return Array.prototype.indexOf.call(collection, node);
  }

  itemClicked(index): void {
    const clickedItem = this.draggableContainers._results[index];
    this.dragItemClicked$.next(clickedItem);
  }
}
