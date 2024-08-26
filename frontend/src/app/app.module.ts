import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AdminComponent } from './components/pages/admin/admin.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TemplateComponent } from './components/pages/template/template.component';
import { TemplateAComponent } from './components/partials/template-a/template-a.component';
import { TemplateBComponent } from './components/partials/template-b/template-b.component';
import { TemplateCComponent } from './components/partials/template-c/template-c.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ButtonComponent } from './components/partials/button/button.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { TableComponent } from './components/partials/table/table.component';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    TemplateComponent,
    TemplateAComponent,
    TemplateBComponent,
    TemplateCComponent,
    ButtonComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RadioButtonModule,
    RatingModule,
    TriStateCheckboxModule,
    FormsModule,
    ToastModule,
    CheckboxModule,
    TableModule
  ],
  providers: [MessageService, provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
