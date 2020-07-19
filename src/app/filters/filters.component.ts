import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Filter } from './filters.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent implements OnInit {
  @Input() filtersOptions;

  @Output() onChanges: EventEmitter<Filter> = new EventEmitter();

  public filters:Filter = {
    continent: 'ALL',
    metric: 'ALL',
    resultsNB: '5'
  }

  public metricFilterValues = [
    {
      name: 'All',
      value: 'ALL'
    },
    {
      name: 'areaInSqKm',
      value: 'areaInSqKm'
    },
    {
      name: 'Population',
      value: 'population'
    }
  ];

  public maxResultNBValues = [5,10,15,20];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit on any filters changes 
   */
  public onFilterChange() {
    this.onChanges.emit(this.filters);
  }
}
