import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightListComponent } from './flight-list/flight-list.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import {UpdateFlightComponent} from'./update-flight/update-flight.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGaurdService } from './auth-gaurd.service';

const routes: Routes = [
  {path: 'see-all-flights', component: FlightListComponent,canActivate: [AuthGaurdService]},
  {path: 'create-flight', component: CreateFlightComponent,canActivate: [AuthGaurdService]},
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'update-flight/:id', component: UpdateFlightComponent,canActivate: [AuthGaurdService]},
  {path: 'view-flight-details/:id', component: ViewFlightComponent, canActivate: [AuthGaurdService]},
  {path:'signin', component: SignInComponent},
  {path:'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
