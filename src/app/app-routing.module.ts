import { UpdateBookComponent } from './update-book/update-book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ViewbookComponent } from './components/viewbook/viewbook.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BookgalleryComponent } from './components/bookgallery/bookgallery.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'bookgallery',component: BookgalleryComponent},
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'addbook',component: AddbookComponent},
  {path: 'createbook',component: CreateBookComponent},
  {path: 'viewbook',component: ViewbookComponent},
  {path: 'updatebook',component: UpdateBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
