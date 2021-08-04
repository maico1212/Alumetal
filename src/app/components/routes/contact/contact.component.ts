import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {
 error: boolean = false;
  user: any;

  registerForm = new FormGroup(
    {


      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    }
  )

  constructor(
    private _authService: AuthService

  ) { }

  ngOnInit(): void {
  }

 

  register() {

    this._authService.register(this.registerForm.value).subscribe(

      response => {

      this.user = response;

    }, error => {
         
       console.log(error);
       this.error= true;
      
    }



    )


  }

}

