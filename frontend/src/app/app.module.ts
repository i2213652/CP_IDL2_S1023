import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './home/task/task.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TaskComponent, HomeComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
