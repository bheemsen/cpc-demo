import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materialModule';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AgeFilterComponent } from './age-filter/age-filter.component';
import { ActiveFilterPipe } from './active-filter.pipe'


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AgeFilterComponent,
    ActiveFilterPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
