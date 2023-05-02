import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit{


  creatbookForm!: FormGroup;

  constructor(private fb : FormBuilder, private Bkauth: BookService, private router:Router) {}

  ngOnInit(): void {
     this.creatbookForm = this.fb.group({
      bookName: ['', Validators.required],
      bookAuthor: ['', Validators.required],
      bookPrice: ['', Validators.required]
     })
  }

  createBk()
  {
    if(this.creatbookForm.valid){

      console.log(this.creatbookForm.value)
      //send the obj to database

      this.Bkauth.createBook(this.creatbookForm.value)
      .subscribe({
        next:(res)=>{
          alert("Book Added Successfully!");
          this.creatbookForm.reset();
          this.router.navigate(['viewbook']);
        },
        error:(err) =>{
          alert(err?.error.message);
        }
      })
      //send the obj to database
    }else{

     // d")
      //throw the error usign toaster and with fields

      this.validateAllFormsFields(this.creatbookForm)
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
viewBk()
{
  this.router.navigate(['viewbook']);
}
updateBk()
{
  this.router.navigate(['updatebook']);
}

}



