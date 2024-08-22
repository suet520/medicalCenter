import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'login', component:LoginComponent},
  {path: 'feedback', component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
