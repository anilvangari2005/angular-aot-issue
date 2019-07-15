import { Ng2StateDeclaration } from "@uirouter/angular";
import { AdminUserListComponent } from "./admin-user-list/admin-user-list.component";
import { AdminUserProfileComponent } from "./admin-user-profile/admin-user-profile.component";

let allStates: Ng2StateDeclaration[] = [].concat(
  {
    name: "admin-user-list",
    url: "/admin/user/list",
    component: AdminUserListComponent,
  },
  {
    name: "admin-user-profile",
    url: "/admin/user/profile",
    component: AdminUserProfileComponent,
  }
);

export const ADMIN_STATES: Ng2StateDeclaration[] = allStates;
