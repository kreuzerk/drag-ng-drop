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

  private dragElement: any;
  private dragIndex: number;
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

  dragStart(event, container): void {
    this.dragIndex = this.indexOf(container.parentNode.children, container);
    this.dragElement = container;
  }

  dragEnter(event, dropElement: any): void {
    const parent = dropElement.parentNode;
    const allElements = parent.children;

    const hoverIndex = this.indexOf(allElements, dropElement);
    if (hoverIndex === this.dragIndex) {
      return;
    }
    const el = this.getReferenceElement(allElements, this.dragIndex, hoverIndex);
    parent.insertBefore(this.dragElement, el);
    this.dragIndex = this.indexOf(allElements, this.dragElement);
  }

  private getReferenceElement(collection, dragIndex: number, hoverIndex: number): Node | null {
    if (hoverIndex + 1 === this.draggableContainers._results.length) {
      return null;
    }
    const elementRefIndex = dragIndex < hoverIndex ? hoverIndex + 1 : hoverIndex;
    return collection[elementRefIndex];
  }

  private indexOf(collection, node: ElementRef): number {
    return Array.prototype.indexOf.call(collection, node);
  }

  itemClicked(index): void {
    const clickedItem = this.draggableContainers._results[index];
    this.dragItemClicked$.next(clickedItem);
  }
}
