import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { TopicComponent } from './topic/topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, TopNavbarComponent, TopicComponent, TopicDetailsComponent, CategoryComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
