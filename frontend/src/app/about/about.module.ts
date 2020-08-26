import { NgModule } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {AppRoutingModule } from '../app-routing.module';
import {AboutComponent} from './about.component';
import {DocumentsService} from '../services/documents.service';
import { AppModule } from '../app.module';
import { HeaderModule } from '../header/header/header.module';
import { FooterModule } from '../footer/footer/footer.module';


@NgModule({
  imports: [HeaderModule,
  FooterModule,
  AppRoutingModule],
  declarations: [ ],
  providers:   []
})
export class AboutModule {}
