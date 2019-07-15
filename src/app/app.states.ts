import { Ng2StateDeclaration } from "@uirouter/angular";
import { HelloComponent } from "./hello.component";
import { ColorsComponent } from "./colors.component";

let allStates: Ng2StateDeclaration[] = [].concat(

  {
    name: "hello",
    url: "/",
    component: HelloComponent,
  },
  {
    name: "colors",
    url: "/colors?:theme",
    component: ColorsComponent,
  }
);
export const APP_STATES: Ng2StateDeclaration[] = allStates;
