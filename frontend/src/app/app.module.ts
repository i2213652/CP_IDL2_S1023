import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareaComponent } from './home/tarea/tarea.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';

@NgModule({
  declarations: [AppComponent, TareaComponent, HomeComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
