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
  private dragItem: number;
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
    this.dragItem = this.items[this.dragIndex];
    this.placeHolderPosition = index;
  }

  dragEnter(event, hoverIndex: number): void {
    this.insertItem(hoverIndex, hoverIndex < this.placeHolderPosition);
    this.removeItem(this.placeHolderPosition, hoverIndex > this.placeHolderPosition);
    this.placeHolderPosition = hoverIndex;
  }

  private removeItem(index: number, after: boolean) {
    const position = after ? index : index + 1;
    this.items.splice(position, 1);
  }

  private insertItem(index: number, before) {
    const position = before ? index : index + 1;
    this.items.splice(position, 0, this.dragItem);
  }

  itemClicked(index): void {
    const clickedItem = this.draggableContainers._results[index];
    this.dragItemClicked$.next(clickedItem);
  }
}
