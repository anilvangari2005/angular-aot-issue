import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user-profile',
  template: `
    <h1>Admin User Profile Page</h1>
    <ul>
      <li><a tabindex="0" uiSref="blog-all-posts">All Posts</a></li>
    </ul>
  `,
  styles: []
})
export class AdminUserProfileComponent implements OnInit {
  ngOnInit(): void {
    console.log("AdminUserProfileComponent");
  }
}
