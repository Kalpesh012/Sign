import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../Flight';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit{

  id: number = 0;
  particularFlight: Flight = new Flight();
  constructor(private route: ActivatedRoute, private flightService: FlightService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  
    this.flightService.getFlightById(this.id).subscribe( data => {
      this.particularFlight = data;
      console.log( this.particularFlight);
    });
  }

}
