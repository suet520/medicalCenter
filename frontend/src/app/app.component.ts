import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  
  constructor(activatedRoute: ActivatedRoute, private router: Router , public messageService:MessageService
  ){
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

  ngAfterViewInit() {
    setTimeout(() => {
      this.messageService.add({
        key: 'success',
        severity: 'success',
        summary: 'title',
        detail: 'description',
        styleClass: 'bg-green-500',
        contentStyleClass: 'p-3',
        closable: false
      });
    });
  }

  navigateTo(event:string){
    if(event){
      this.router.navigate([event]);
    }
  }

  
}
