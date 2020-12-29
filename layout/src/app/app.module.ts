import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { TopicComponent } from './topic/topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ErrorBannerComponent } from './error-banner/error-banner.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    TopicComponent,
    TopicDetailsComponent,
    CategoryComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ErrorBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
