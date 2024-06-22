import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(private service :TokenService,private router:Router){}
  username =this.service.getName()
  logout(){
    this.service.clearStorage()
    this.router.navigateByUrl("/auth/login")
  }


}
