import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutModule} from './components/layout/layout.module';
import { LayoutComponent} from './components/layout/layout.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
    
    
  ],

  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserModule, // Desarrollo de módulos web necesarios
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   
    


  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
