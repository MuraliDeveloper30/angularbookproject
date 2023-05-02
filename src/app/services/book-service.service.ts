import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Book } from '../models/bookgallery';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl : string ="https://localhost:7064/api/BookGallery"
  constructor(private http : HttpClient) { }


  createBook(bookData: Book) {

    return this.http.post<any>(`${this.baseUrl}/CreateBookDetails`,bookData);
  }
  getallBook():Observable<Book[]> {

    return this.http.get<Book[]>(this.baseUrl);
  }


  updateBook(id: string, updateBook: Book):Observable<Book> {

    return this.http.patch<Book>(`${this.baseUrl}/`+ id,updateBook);
  }

  getBook(id: string):Observable<Book> {

    return this.http.get<Book>(`${this.baseUrl}/`+ id);
  }

  deleteBook(id: string):Observable<Book> {

    return this.http.delete<Book>(`${this.baseUrl}/`+ id);
  }


}
