import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // this.route.snapshot.queryParams // wont react to changes
    // this.route.snapshot.fragment // wont react to changes
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
    this.route.fragment.subscribe((fragment) => {
      console.log(fragment);
    });
  }

  loadUsers() {
    this.router.navigate(['/users', 5, 'Dima'], {
      // relativeTo: this.route // for relative path
      queryParams: { param: '2' },
      fragment: 'fromJS',
    });
  }
}
