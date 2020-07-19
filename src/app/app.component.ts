import { Component, OnInit } from "@angular/core";
import { FilterService } from "./filter.service";
import { Filter } from "./filters/filters.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "HomaGamesFrontTest";
  disabled: boolean = true;
  filters: Filter = {
    continent: "ALL",
    metric: "ALL",
    resultsNB: 5,
  };

  countries = [];

  constructor(private filterService: FilterService) {}

  ngOnInit() {}

  /**
   * Initialize the filter when the user click on the Go button
   */
  public initFilters() {
    this.filterService.getCountryInfos().subscribe((data) => {
      this.countries = data.geonames;
      this.filterService.setContinentList(this.countries);
      this.disabled = false;
    });
  }

  /**
   * Update for the metric and max result number filter.
   */
  public updateFilters(filters: Filter) {
    this.filters = filters;
  }

  /**
   * Get the list of countries by continent
   */
  public getCountriesByContinent(filters: Filter) {
    this.filters = filters;
    this.countries = this.filterService.getCountriesByContinent(
      this.filters.continent
    );
  }
}
