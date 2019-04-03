import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'sortable-list',
  templateUrl: 'sortable-list.component.html'
})
export class SortableListComponent {

  @Input() dragableItem: TemplateRef;
  @Input() items: any[];

  private dragIndex: number;
  private dragItem: number;
  private placeHolderPosition;

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
