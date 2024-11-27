import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: any = {
    name: '',
    nic: '',
    course: '',
    contact: ''
  };
  studentID!: number;
  isLoading: boolean = false;
  message: string = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.studentID = Number(this.route.snapshot.paramMap.get('id'));
  
    if (this.studentID) {
      this.isLoading = true;
  
      this.studentService.getStdByID(this.studentID).subscribe({
        next: (res: any) => {
          if (Array.isArray(res) && res.length > 1) {
            // Extract the student object from the response
            this.student = res[1];
          } else {
            console.error('Invalid response format:', res);
            alert('Failed to fetch student data');
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching student:', err);
          alert('Error fetching student');
          this.isLoading = false;
        }
      });
    }
  }
  

  updateStd() {
    this.isLoading = true;

    this.studentService.updateStudent(this.studentID, this.student).subscribe({
      next: (res: any) => {
        alert(res.message || 'Student updated successfully!');
        this.router.navigate(['/student']); // Redirect to the student list or home page
      },
      error: (err) => {
        console.error('Error updating student:', err);
        this.message = 'Failed to update student. Please try again.';
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
