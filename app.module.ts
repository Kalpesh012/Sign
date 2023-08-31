import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightListComponent} from './flight-list/flight-list.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { FormsModule } from '@angular/forms';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
  
    CreateFlightComponent,
    FlightListComponent,
    ViewFlightComponent,
    UpdateFlightComponent,
    SignInComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
