import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  }
];
