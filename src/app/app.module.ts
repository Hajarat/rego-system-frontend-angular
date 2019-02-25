import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserListComponent } from './user-list/user-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: RegisterFormComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
