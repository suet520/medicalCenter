import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'homePage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
