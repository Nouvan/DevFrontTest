import { Component } from "@angular/core";
import { Filter } from "./filters/filters.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "HomaGamesFrontTest";

  /**
   *
   */
  public updateFilters(filter: Filter) {
    console.log("UPDATE", filter);
  }
}
