import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent, AppService
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
