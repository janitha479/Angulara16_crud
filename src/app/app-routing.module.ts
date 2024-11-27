import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Pagers/about-us/about-us.component';
import { ContactUsComponent } from './Pagers/contact-us/contact-us.component';
import { HomePageComponent } from './Pagers/home-page/home-page.component';
import { StudentCreateComponent } from './Pagers/student-create/student-create.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home page'},
  { path: 'about_us', component: AboutUsComponent, title: 'About us'},
  { path: 'contact_us', component: ContactUsComponent, title: 'contact us'},
  { path: 'student/create', component: StudentCreateComponent, title: 'Student create'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
