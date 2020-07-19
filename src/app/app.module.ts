import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FiltersComponent } from "./filters/filters.component";
import { DonutComponent } from "./donut/donut.component";
import { DataTableComponent } from "./data-table/data-table.component";

import { MatSelectModule } from "@angular/material/select";
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    DonutComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
