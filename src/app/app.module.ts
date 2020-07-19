import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FiltersComponent } from "./filters/filters.component";
import { DonutComponent } from "./donut/donut.component";
import { DataTableComponent } from "./data-table/data-table.component";

import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    DonutComponent,
    DataTableComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MatSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
