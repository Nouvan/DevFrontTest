import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponentComponent } from './filters-component/filters-component.component';
import { DonutComponentComponent } from './donut-component/donut-component.component';
import { TableComponentComponent } from './table-component/table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponentComponent,
    DonutComponentComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
