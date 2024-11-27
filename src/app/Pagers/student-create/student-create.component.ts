import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent {
  constructor(
    private studentService: StudentService,
    private router: Router // Inject Router
  ) {}

  name!: string;
  nic!: string;
  course!: string;
  contact!: string;
  isLoading: boolean = false;
  errors: any = [];

  saveStd() {
    this.isLoading = true;

    const inputData = {
      name: this.name, // API function variable names in Laravel
      nic: this.nic,
      course: this.course,
      contact: this.contact,
    };

    this.studentService.saveStd(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert('Student Added Successfully');
        this.isLoading = false;

        // Redirect to /student after success
        this.router.navigate(['/student']);
      },
      error: (err: any) => {
        this.errors = err.error.errors;
        this.isLoading = false;

        console.log(err.error.errors, 'errors');
      },
    });
  }
}
