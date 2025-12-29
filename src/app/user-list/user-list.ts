import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this person?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.users = this.users.filter(u => u.id !== id);
      });
    }
  }

  getJoinedDate(index: number): string {
    const dates = [
      'Dec 15, 2024',
      'Dec 10, 2024',
      'Dec 5, 2024',
      'Nov 28, 2024',
      'Nov 20, 2024'
    ];
    return dates[index % dates.length];
  }
}
