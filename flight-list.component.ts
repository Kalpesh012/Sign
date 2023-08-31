import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { Flight } from '../Flight';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit{
  // POSTS : any;
  flights: Flight[] = [];
  flightName : String = "";
  count : number = 4;
  p : number = 1;
  constructor(private flightService: FlightService,
    private router: Router) { }


    viewflight(id : number){   //4
      this.router.navigate(['view-flight-details', id]);  //'view-flight-details, 4
    }

    deleteFlight(id : number){
      var status = confirm("Are you sure to delete this record?");
      if (status == true) {
      this.flightService.deleteFlight(id).subscribe( data => {
        this.getAllFlightDetails();
      })
    }
      else{
        this.getAllFlightDetails();
      }
    
    }

    updateFlight(id : number){
      this.router.navigate(['update-flight', id]);
    }
  ngOnInit(): void {
    this.getAllFlightDetails();
  }
  removeAllFlights(){
    var status = confirm("Are you sure to delete all the records?");
    if (status == true) {
      this.flightService.deleteAll().subscribe(details => {
        console.log(details);  //null
        this.getAllFlightDetails();
      },
        error => {
          console.log(error);
        })
    }
    else{
    this.getAllFlightDetails();
  }
  }

  getNonCommercialFlights(){
    this.flightService.findByComFLights().subscribe({
      next: (res) => {
      console.log(res);
      this.flights = res;
    },
    error: (e) => console.error(e)
  });
  }

  getCommercialFlights(){
    this.flightService.findByNonComFLights().subscribe({
      next: (res) => {
      console.log(res);
      this.flights = res;
    },
    error: (e) => console.error(e)
  });
  }
  private getAllFlightDetails() : any{
    this.flightService.getFlightList().subscribe(data => {
      this.flights = data;
      console.log(data);
    });
  }

  searchByFlightName() : any{
    this.flightService.findByFlightName(this.flightName).subscribe(details => {
      this.flights= details;
      console.log(details);
    },
      error => {
        console.log(error);
      });
  }
  

  // fetchPosts(): void {
  //   this.flightService.getAllPosts().subscribe(
  //     (response) => {
  //       this.POSTS = response;
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // onTableDataChange(event: any) {
  //   this.p = event;
  //   this.fetchPosts();
  // }
  // onTableSizeChange(event: any): void {
  //   this.count = event.target.value;
  //   this.p = 1;
  //   this.fetchPosts();
  // }
}
