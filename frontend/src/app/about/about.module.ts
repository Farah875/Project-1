import { NgModule } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {AppRoutingModule } from '../app-routing.module';
import {AboutComponent} from './about.component';
import {DocumentsService} from '../services/documents.service';


@NgModule({
  imports: [
    FooterComponent,
    HeaderComponent,
    AppRoutingModule
  ],
  declarations: [ AboutComponent ],
  providers:    [ DocumentsService ]
})
export class AboutModule {}
