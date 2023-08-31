import { Component } from '@angular/core';
import { Flight } from '../Flight';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent {

  constructor(private flightService: FlightService,
    private router: Router) { }

    flight : Flight = new Flight();
    
    
    
    saveFlight(){
      this.flightService.createFlight(this.flight).subscribe( data =>{
        console.log(data);
        this.goToFlightList();
      },
      error => console.log(error));
    }
  
    goToFlightList(){
      this.router.navigate(['/see-all-flights']);
    }
    
    onSubmit(){
      console.log(this.flight);
      this.saveFlight();
    }



}

