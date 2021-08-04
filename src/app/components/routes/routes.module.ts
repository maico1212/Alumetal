import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HijoComponent } from './hijo/hijo.component';

import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { SwiperModule } from 'ngx-swiper-wrapper';





@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    HijoComponent,
    UsersComponent,
    SwiperModule
   
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    RoutesModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule
  
  ],
  
})
export class RoutesModule { }
