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
  filter: Filter;
  disabled: boolean = true;
  constructor(private filterService: FilterService) {}

  ngOnInit() {}

  public initFilters() {
    this.filterService.getCountryInfos(this.filter).subscribe((data) => {
      this.filterService.setContinentList(data.geonames);
      this.disabled = false;
    });
  }

  /**
   *
   */
  public updateFilters(filter: Filter) {
    this.filterService.getCountryInfos(filter).subscribe();
  }
}
