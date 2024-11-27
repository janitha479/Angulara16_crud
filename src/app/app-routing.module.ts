import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Pagers/about-us/about-us.component';
import { ContactUsComponent } from './Pagers/contact-us/contact-us.component';
import { HomePageComponent } from './Pagers/home-page/home-page.component';
import { StudentCreateComponent } from './Pagers/student-create/student-create.component';
import { StudentEditComponent } from './Pagers/student-edit/student-edit.component';
import { StudentPageComponent } from './Pagers/student-page/student-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home page'},
  { path: 'about_us', component: AboutUsComponent, title: 'About us'},
  { path: 'contact_us', component: ContactUsComponent, title: 'contact us'},
  { path: 'student', component: StudentPageComponent, title: 'Student page'},
  { path: 'student/create', component: StudentCreateComponent, title: 'Student create'},
  { path: 'student/edit/:id', component: StudentEditComponent, title: 'Student edit'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
