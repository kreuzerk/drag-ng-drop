import {AfterViewInit, Component} from '@angular/core';
import {CdkDragEnter, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sort-grid',
  templateUrl: './sort-grid.component.html'
})
export class SortGridComponent implements AfterViewInit {

  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private sourceIndex: number;
  private targetIndex: number;

  constructor() {
  }

  ngAfterViewInit() {
  }

  drop() {
    moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
  }

  enter = (dragEnter: CdkDragEnter) => {
    const containerElement = dragEnter.container.element.nativeElement;

    this.sourceIndex = __indexOf(containerElement.parentNode.children, dragEnter.item.dropContainer.element.nativeElement) + 1;
    this.targetIndex = __indexOf(containerElement.parentNode.children, containerElement);

    console.log('Enterd', this.targetIndex);
  }
}

function __indexOf(collection, node) {
  return Array.prototype.indexOf.call(collection, node);
}
