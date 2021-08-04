import{ NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { ContactComponent } from './components/routes/contact/contact.component';
import { HomeComponent } from './components/routes/home/home.component';
import { HijoComponent } from './components/routes/hijo/hijo.component'; 
import { UsersComponent } from './components/routes/users/users.component';

const routes: Routes =[

 {
    path: '',
    children: [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'contact',
            component: ContactComponent
        },
        {
            path: 'hijo',
            component: HijoComponent
        },
        {
            path: 'user',
            component: UsersComponent
        }
     
    ]
 }

];

@NgModule({

 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]

})

export class AppRoutingModule {}