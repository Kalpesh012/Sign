import { Component } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginStatus:any=sessionStorage.getItem("loginStatus");

  constructor(private service:FlightService, private router:Router)
  {
  }



  signin(email:any, password:any)
  {
   
    this.service.signin(email,password).subscribe(

      response => {

        console.log(response);
        alert('login successful');
        sessionStorage.setItem("loginStatus","active");
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("userId",response.userId);
        sessionStorage.setItem("userRole",response.userRole);
        sessionStorage.setItem("userName",response.userName);
        this.router.navigate(['see-all-flights']);
    },

    () => { alert('Wrong email Id or password!!');  }

    );



  }
}
