import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Filter } from "./filters/filters.interface";
import * as _ from "lodash";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  private geonamesAPI =
    "http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane";

  public continentsList = [];

  constructor(private http: HttpClient) {}

  getCountryInfos(filter: Filter): Observable<any> {
    return this.http.get<any>(this.geonamesAPI);
  }

  setContinentList(countriesList) {
    this.continentsList = _(countriesList)
      .map((country) => {
        return {
          name: country.continentName,
          value: country.continent,
        };
      })
      .uniqBy("name")
      .sortBy("name")
      .value();
  }

  public get continentList() {
    return this.continentsList;
  }
}
