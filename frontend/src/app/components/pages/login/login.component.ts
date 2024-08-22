import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'loginPage',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){
    

  }
  navigateTo(event:string){
    if(event){
      this.router.navigate([event]);
    }
  }

}
