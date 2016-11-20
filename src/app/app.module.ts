import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentUnoComponent } from './components/component-uno/component-uno.component';
import { ComponentDosComponent } from './components/component-dos/component-dos.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentUnoComponent,
    ComponentDosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
