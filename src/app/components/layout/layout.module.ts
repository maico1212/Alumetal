import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ContactComponent } from '../routes/contact/contact.component';
import { HomeComponent } from '../routes/home/home.component';
import { HijoComponent } from '../routes/hijo/hijo.component';
import { TextComponent } from '../routes/text/text.component';
import { UsersComponent } from '../routes/users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    ContactComponent,
    HijoComponent,
    TextComponent,
    UsersComponent
    
    
  
   
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    ContactComponent,
    HijoComponent,
    TextComponent,
    UsersComponent
  
  
    
    
  ],
  
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    


  ]
})
export class LayoutModule { }