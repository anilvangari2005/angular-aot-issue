import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminUserListComponent } from "./admin-user-list/admin-user-list.component";
import { AdminUserProfileComponent } from "./admin-user-profile/admin-user-profile.component";
import { UIRouterModule } from "@uirouter/angular";
import { ADMIN_STATES } from "./admin.states";
import { BlogModule } from "../blog/blog.module";

@NgModule({
  declarations: [AdminUserListComponent, AdminUserProfileComponent],
  imports: [
    CommonModule,
    BlogModule,
    UIRouterModule.forChild({
      states: ADMIN_STATES
    })
  ],
  exports: [AdminUserListComponent, AdminUserProfileComponent],
})
export class AdminModule { }
