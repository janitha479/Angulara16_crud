import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Pagers/about-us/about-us.component';
import { ContactUsComponent } from './Pagers/contact-us/contact-us.component';
import { HomePageComponent } from './Pagers/home-page/home-page.component';
import { NavbarComponent } from './Pagers/Partials/navbar/navbar.component';
import { StudentCreateComponent } from './Pagers/student-create/student-create.component';
import { SpinnerComponent } from './Pagers/Partials/spinner/spinner.component';
import { StudentPageComponent } from './Pagers/student-page/student-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    StudentCreateComponent,
    SpinnerComponent,
    StudentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
