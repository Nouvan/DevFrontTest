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
    "https://secure.geonames.org/countryInfoJSON?formatted=true&username=hydrane";

  public continentsList = [];
  private allCountries;

  constructor(private http: HttpClient) {}

  getCountryInfos(): Observable<any> {
    return this.http.get<any>(this.geonamesAPI);
  }

  getCountriesByContinent(continent: string) {
    if (continent === "ALL") return this.allCountries;
    return _.filter(this.allCountries, { continent: continent });
  }

  setContinentList(countriesList) {
    this.allCountries = countriesList;
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
