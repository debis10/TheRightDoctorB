import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, User } from '../user';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.css',
})
export class UserEdit implements OnInit {
  editForm: FormGroup;
  userId: string | null = null;
  loading = false;
  submitted = false;
  isEditMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(150)]],
      gender: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEditMode = true;
      this.userId = id;
      this.userService.getUser(this.userId).subscribe(user => {
        this.editForm.patchValue(user);
      });
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }

    this.loading = true;

    if (this.isEditMode && this.userId) {
      // Update existing user
      this.userService.updateUser(this.userId, this.editForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/users']);
        },
        error: (err) => {
          this.loading = false;
          alert('Error updating person: ' + (err.error?.message || 'Unknown error'));
        }
      });
    } else {
      // Create new user
      this.userService.createUser(this.editForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/users']);
        },
        error: (err) => {
          this.loading = false;
          alert('Error creating person: ' + (err.error?.message || 'Unknown error'));
        }
      });
    }
  }
}
