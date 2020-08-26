import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import {EventComponent} from './event/event.component';
import {AboutComponent} from './about/about.component';
import {ApplyComponent} from './apply/apply.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'blog', component: BlogComponent},
  {path: 'blog/:id' , component: BlogComponent},
  {path: 'event', component: EventComponent},
  {path: 'about', component: AboutComponent},
  {path: 'apply', component: ApplyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
