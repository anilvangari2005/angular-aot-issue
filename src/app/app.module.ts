import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { UIRouterModule } from "@uirouter/angular";
import { APP_STATES } from "./app.states";
import { routerConfig } from "./routing.config";

import { ColorsComponent } from "./colors.component";

import { AdminModule } from "./admin/admin.module";
import { BlogModule } from "./blog/blog.module";


@NgModule({
  imports: [BrowserModule, FormsModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      config: routerConfig,
      otherwise: { state: "login", params: {} }
    }),
    AdminModule
  ],
  declarations: [AppComponent, HelloComponent, ColorsComponent],
  entryComponents: [
      AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
