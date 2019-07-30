import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { MockData } from './../common';

@Component({
  selector: 'grid',
  styleUrls: ['grid.component.css'],
  templateUrl: 'grid.component.html',
})
export class GridComponent implements OnInit {

  selectedItems: any = []
  visible = true;
  selectable = true;
  removable = true;

  filterItems = [
    { id: 1, text: 'Below 20 years', range: '0-20', count: 0 },
    { id: 2, text: '20 to 40 years', range: '20-40', count: 0 },
    { id: 3, text: '40 to 60 years', range: '40-60', count: 0 },
    { id: 4, text: 'Above 60 years', range: '60', count: 0 }
  ];
  currentPageNo: number = 1
  @Input() filterRequired: boolean
  @Input() displayedColumns: string[];
  dataSource: MatTableDataSource<UserData>;
  users: UserData[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

    this.users = MockData.data.map(item => new UserData(item));
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.filterItems.forEach(item => {
      if (item.range.includes('-')) {
        let ageRange = item.range.split('-');
        item.count = this.users.filter(x => (x.Age >= parseInt(ageRange[0]) && x.Age <= parseInt(ageRange[1]))).length;
      }
      else {
        item.count = this.users.filter(x => (x.Age >= parseInt(item.range))).length;
      }
    });
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onChipSelectionChange(e) {
    this.selectedItems = e.selected;
  }

  onPaginateChange(event) {
    this.currentPageNo = event.pageIndex + 1;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  removeFilterItem(filterItem: any): void {
    const index = this.selectedItems.indexOf(filterItem);
    if (index >= 0) {
      this.selectedItems.splice(index, 1);
    }
  }


}

export class UserData {
  constructor(item) {
    Object.keys(item).forEach((prop) => { this[prop] = item[prop]; });
  }
  UserId: string;
  UserName: string;
  Age: number;
  Image: string;
  Description: string;
}
