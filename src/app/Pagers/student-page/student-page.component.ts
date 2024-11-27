import { Component } from '@angular/core';
import { StudentService, studentRes } from 'src/app/Service/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  constructor(private studentService: StudentService){}

  students!: studentRes[];
  isLoading: boolean = false

  ngOnInit(){
    this.getStudentList();

  }
  getStudentList(){
    this.isLoading = true;
    this.studentService.getStudents().subscribe((res: any)=>{
      console.log(res);
      this.students = res[1];
      this.isLoading = false;
    });
  }

}
