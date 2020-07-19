import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { FilterService } from "../filter.service";
import { Filter } from "./filters.interface";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.css"],
})
export class FiltersComponent implements OnInit {
  @Input() disabled;
  @Output() onChanges: EventEmitter<Filter> = new EventEmitter();

  public _filters: Filter = {
    continent: "ALL",
    metric: "ALL",
    resultsNB: 5,
  };
  set filters(values) {
    this._filters = values;
  }
  get filters() {
    return this._filters;
  }

  public metricFilterValues = [
    {
      name: "Both",
      value: "ALL",
    },
    {
      name: "Surface",
      value: "areaInSqKm",
    },
    {
      name: "Population",
      value: "population",
    },
  ];

  public maxResultNBValues = [5, 10, 15, 20];

  constructor(public filterService: FilterService) {}

  ngOnInit() {}

  /**
   * Emit on any filters changes
   */
  public onFilterChange() {
    this.onChanges.emit(this.filters);
  }
}
