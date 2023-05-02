import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  type: string ="password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;

  constructor(private fb : FormBuilder, private auth: AuthService, private router:Router) {}

  ngOnInit(): void {
     this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
     })
  }

  hideshow()
  {
     this.isText =!this.isText;
     this.isText ? this.eyeIcon = "fa-eye" :this.eyeIcon = "fa-eye-slash";
     this.isText? this.type ="text" : this.type ="password";

  }
  onSignUp()
  {
    if(this.signUpForm.valid){

      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.signUpForm.reset();
          this.router.navigate(['login']);
        })
        ,error: (err=>{
          alert(err?.error.message)
        })
      })

      console.log(this.signUpForm.value)
      //send the obj to database
    }else{

     // d")
      //throw the error usign toaster and with fields

      this.validateAllFormsFields(this.signUpForm)
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
