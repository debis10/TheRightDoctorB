import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from '../user';

@Component({
  selector: 'app-user-delete',
  standalone: false,
  templateUrl: './user-delete.html',
  styleUrl: './user-delete.css',
})
export class UserDelete implements OnInit {
  user: User | undefined;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUser(id).subscribe((data) => {
        this.user = data;
      });
    }
  }

  confirmDelete(): void {
    if (this.user && this.user.id) {
      this.loading = true;
      this.userService.deleteUser(this.user.id).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/users']);
        },
        error: (err) => {
          this.loading = false;
          alert('Error deleting person: ' + (err.error?.message || 'Unknown error'));
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
