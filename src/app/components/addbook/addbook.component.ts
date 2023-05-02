import { HttpClient, HttpEventType } from '@angular/common/http';
import { BookService } from './../../services/book-service.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {


  addBookForm!: FormGroup;


  constructor(private mb : FormBuilder,private bookService: BookService, private router:Router, private http:HttpClient ) {}

  ngOnInit(): void {
     this.addBookForm = this.mb.group({
      bookName: ['', Validators.required],
      bookAuthor: ['', Validators.required],
      bookPrice: ['', Validators.required],
      bookImage: ['', Validators.required],
     })
  }

  createButton(){
    const bookData = this.addBookForm.value;
    this.bookService.createBook(bookData).subscribe(
      (response) => {
        console.log(response);
        alert('Book added successfully!');
        this.addBookForm.reset();
      },
      (error) => {
        console.log(error);
        alert('Error adding book!');
      }
    );

  }


  }

