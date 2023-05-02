import { Book } from './../models/bookgallery';
import { BookService } from './../services/book-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent  implements OnInit {

  creatbookForm!: FormGroup;
  id:any;
  Books: Book[]=[];
 // editClicked! :Event;



  constructor(private fb : FormBuilder, private Bkauth: BookService, private router:Router, private route :ActivatedRoute) {}


  ngOnInit(): void {
    this.Bkauth.getallBook()
    .subscribe({
    next: (viewbook) => {
   this.Books = viewbook;
    },
    error:(response) => {
    console.log(response);
    }
    })
    this.getBookDetails();
 }


 getBookDetails()
 {
   this.route.paramMap.subscribe({
  next:(params) => {
  this.id = params.get('id');
    if (this.id) {
    this.Bkauth.getBook(this.id)
    .subscribe({
    next: (response) =>{
    this.creatbookForm.value.bookName = response.bookName;
    this.creatbookForm.value.bookAuthor = response.bookAuthor;
    this.creatbookForm.value.bookPrice = response.bookPrice;
    }
    });
    }
   }
    })
 }


 updateBk()
  {
    //send the obj to database
    this.Bkauth.updateBook(this.id,this.creatbookForm.value)
    .subscribe({
      next:(res)=>{
        alert("Book Updated Successfully!");
        this.creatbookForm.reset();
        this.router.navigate(['bookgallery']);
      },
      error:(err) =>{
        alert(err?.error.message);
      }
    })
    //send the obj to database
  }
  editBk() {

  }


}

