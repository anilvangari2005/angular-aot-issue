import { Component, Input, OnInit } from '@angular/core';
import { StateService } from "@uirouter/core";
import * as _ from "lodash";

@Component({
  selector: 'colors',
  templateUrl: 'colors.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ColorsComponent implements OnInit {

  darkColorTheme: boolean;
  now: any;

  constructor(private stateService: StateService) {
    this.darkColorTheme = this.stateService.params.theme === "true";
  }

  ngOnInit() {
    this.now = new Date();
  }

  themeChanged() {
    console.log("darkColorTheme", this.darkColorTheme);
    let params = {
      theme: this.darkColorTheme
    }
    this.syncLocation(params);
  }

  syncLocation(paramObj) {
    // TODO: CONVERSION PENDING
    console.log("syncLocation", paramObj);
    let params = _.clone(this.stateService.params);
    params = _.merge(params, paramObj);

    this.stateService.go(this.stateService.current.name, params, {
      reload: false
    });
  }

}
