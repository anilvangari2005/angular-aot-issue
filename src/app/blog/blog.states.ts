import { Ng2StateDeclaration } from "@uirouter/angular";
import { BlogHomeComponent } from "./blog-home/blog-home.component";
import { BlogPostsAllComponent } from "./blog-posts-all/blog-posts-all.component";

let allStates: Ng2StateDeclaration[] = [].concat(
  {
    name: "blog-home",
    url: "/blog/home",
    component: BlogHomeComponent,
  },
  {
    name: "blog-all-posts",
    url: "/blog/posts/all",
    component: BlogPostsAllComponent,
  }
);

export const BLOG_STATES: Ng2StateDeclaration[] = allStates;
