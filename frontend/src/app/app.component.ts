import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  constructor(activatedRoute: ActivatedRoute, private router: Router){
    activatedRoute.params.subscribe(params => {
      console.log("route params: ",params)
      // if(params['feedback']){
      //   this.feedback = true;
      // }
      // if(params['login']){
      //   this.login = true;
      // }
    });

  }

  navigateTo(event:string){
    if(event){
      this.router.navigate([event]);
    }
  }

  
}
