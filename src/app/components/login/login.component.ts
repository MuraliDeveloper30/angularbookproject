import { AuthService } from './../../services/auth.service';

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  type: string ="password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username :['', Validators.required],
      password :['', Validators.required],
    });
  }

  hideshow()
  {
     this.isText =!this.isText;
     this.isText ? this.eyeIcon = "fa-eye" :this.eyeIcon = "fa-eye-slash";
     this.isText? this.type ="text" : this.type ="password";

  }
  onLogin()
  {
    if(this.loginForm.valid){

      console.log(this.loginForm.value)
      //send the obj to database

      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.loginForm.reset();
          this.router.navigate(['bookgallery']);
        },
        error:(err) =>{
          alert(err?.error.message);
        }
      })
    }else{

     // console.log("Form is not Valid")
      //throw the error usign toaster and with fields

      this.validateAllFormsFields(this.loginForm)
      alert("your form is invalid")
    }
  }

   private validateAllFormsFields(formGroup: FormGroup)
   {
     Object.keys(formGroup.controls).forEach(field=>{
        const control = formGroup.get(field);
        if(control instanceof FormControl){
         control?.markAsDirty({onlySelf:true})
        }else if(control instanceof FormGroup)
        {
         this.validateAllFormsFields(control)
        }
     })

   }



}
