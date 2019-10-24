import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"]
})
export class HeroFormComponent  {
  powers = ["睿智", "迅捷", "炽热", "掌天"];

  model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");

  submitted = false;

  onSubmit() {
    window.alert(0)
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
  this.model = new Hero(42, '', '');
}
}
