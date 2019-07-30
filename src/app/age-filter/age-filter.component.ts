import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { log } from 'util';

@Component({
  selector: 'age-filter',
  templateUrl: './age-filter.component.html',
  styleUrls: ['./age-filter.component.css']
})
export class AgeFilterComponent implements OnInit {

  selectable: boolean = true;
  @Input("chipItems") chipItems: any[];
  @Output("selectionChange") selectionChange = new EventEmitter();
  selectedItems: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  isSelected(offer: any): boolean {
    const index = this.selectedItems.indexOf(offer);
    return index >= 0;
  }

  toggleItem(item: any): void {
    let index = this.selectedItems.indexOf(item);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(item);
    }
  }

  changeSelected(event, item) {
    this.selectionChange.emit({ data: item, selected: this.selectedItems });
  }

}
