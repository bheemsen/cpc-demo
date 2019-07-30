import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {

  gridColumns = ['UserId', 'UserName', 'Image', 'Age', 'Description', 'Action'];
  filterRequired = false;

  constructor() {

  }

}