import { Component } from '@angular/core';
import { StudentService } from 'src/app/Service/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})



export class StudentCreateComponent {

  constructor(private studentService: StudentService){}

name !: string
nic !: string
course !: string
contact !: string
isLoading: boolean = false
errors: any =[];

saveStd(){
  this.isLoading = true

  var inputData = {
    name: this.name,//these are the variable names of api function variable names in laravel ($request->name;)
    nic: this.nic,
    course: this.course,
    contact: this.contact,


  }
  this.studentService.saveStd(inputData).subscribe({
    next: (res: any) => {
      console.log(res, 'response');
      alert(res.message);
      this.name = '';
      this.nic = '';
      this.course = '';
      this.contact = '';
      this.isLoading = false

    },
    error: (err: any) => {
      this.errors = err.error.errors
      this.isLoading = false

      console.log(err.error.errors, 'errors');


    }

  })

}

}
