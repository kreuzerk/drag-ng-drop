import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'primeng-sortable-grid',
  templateUrl: './primeng.sortgrid.component.html'
})
export class PrimengSortgridComponent implements OnInit {

  public items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  private dragIndex: number;
  private dragItem: number;
  private placeHolderPosition;

  ngOnInit(): void {
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
}
