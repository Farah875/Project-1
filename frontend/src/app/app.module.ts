import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalenderComponent } from './calender/calender.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { ApplyComponent } from './apply/apply.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalenderComponent,
    FooterComponent,
    HomeComponent,
    BlogListComponent,
    BlogComponent,
    EventComponent,
    AboutComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
