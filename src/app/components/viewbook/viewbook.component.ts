import { Book } from './../../models/bookgallery';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.scss']
})
export class ViewbookComponent {

  creatbookForm!: FormGroup;
  id:any;
  Books: Book[]=[];
  constructor(private mb : FormBuilder, private Bkauth: BookService, private router:Router, private route :ActivatedRoute) {}



  ngOnInit (): void{
    this.Bkauth.getallBook()
    .subscribe({
    next: (viewbook) => {
   this.Books = viewbook;
    },
    error:(response) => {
    console.log(response);
    }
    })
    }
 }

    //send the obj to database


