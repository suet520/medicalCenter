import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HeaderComponent } from './components/partials/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
