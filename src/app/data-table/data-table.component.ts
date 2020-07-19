import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"],
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ["continentName", "countryName"];
  dataSource;

  public _countries: any[];

  @Input()
  set countries(countries) {
    this._countries = countries;
    this.dataSource = new MatTableDataSource(countries);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public _metric: string;
  @Input()
  set metric(metric) {
    this._metric = metric;
    this.setDisplayedColumnsByMetric(this._metric);
  }
  get metric() {
    return this._metric;
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.setDisplayedColumnsByMetric(this._metric);
  }

  setDisplayedColumnsByMetric(metric = "ALL") {
    this.displayedColumns = ["continentName", "countryName"];

    if (metric !== "ALL") {
      this.displayedColumns.push(metric);
    } else {
      this.displayedColumns = this.displayedColumns.concat([
        "areaInSqKm",
        "population",
      ]);
    }
  }
}
