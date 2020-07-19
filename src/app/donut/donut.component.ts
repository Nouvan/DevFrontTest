import { Component, OnInit, Input } from "@angular/core";
import { Filter } from "../filters/filters.interface";
import * as Highcharts from "highcharts";
import * as _ from "lodash";

interface chartInterface {
  name: string;
  y: number;
}

@Component({
  selector: "app-donut",
  templateUrl: "./donut.component.html",
  styleUrls: ["./donut.component.css"],
})
export class DonutComponent implements OnInit {
  public _countries: any[];
  @Input()
  set countries(countries) {
    this._countries = countries;
    this.setChartData(this._countries);
  }

  public _resultNB: number;
  @Input()
  set resultNB(resultNB) {
    console.log(resultNB);
    this._resultNB = resultNB;
    this.setChartData(this._countries);
  }
  get resultNB() {
    return this._resultNB;
  }

  @Input() type: string;
  @Input() title: string;

  highcharts = Highcharts;

  public update: boolean = false;

  chartOptions = {
    chart: {
      type: "pie",
    },
    title: {
      text: "",
    },
    series: [],
  };

  constructor() {}

  ngOnInit() {
    this.setChartData(this._countries);
  }

  private setChartData(countries) {
    if (!countries.length) return;

    let sortedCountries = _(countries)
      .map((country) =>
        this.getChartData(country.countryName, parseInt(country[this.type]))
      )
      .sortBy("y")
      .reverse()
      .value();

    let chartData = sortedCountries.splice(0, this.resultNB);
    chartData.push(
      sortedCountries.reduce((acc, res) => {
        let test = this.getChartData("Other", acc.y + res.y);
        return test;
      })
    );

    this.chartOptions.series = [{ data: chartData }];

    this.update = true;
  }

  private getChartData(name: string, value: number): chartInterface {
    return {
      name: name,
      y: value,
    };
  }
}
