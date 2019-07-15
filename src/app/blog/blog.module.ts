import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogHomeComponent } from "./blog-home/blog-home.component";
import { BlogPostsAllComponent } from "./blog-posts-all/blog-posts-all.component";
import { UIRouterModule } from "@uirouter/angular";
import { BLOG_STATES } from "./blog.states";

@NgModule({
  declarations: [BlogHomeComponent, BlogPostsAllComponent],
  imports: [
    CommonModule,
    // UIRouterModule.forChild({
    //   states: BLOG_STATES
    // })
  ],
  exports: [BlogHomeComponent, BlogPostsAllComponent]
})
export class BlogModule { }
