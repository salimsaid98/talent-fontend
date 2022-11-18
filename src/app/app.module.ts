import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './compo/home/home.component';
import { NavComponent } from './compo/nav/nav.component';
import { ProfileComponent } from './compo/profile/profile.component';
import { NotificationComponent } from './compo/notification/notification.component';
import { FriendsComponent } from './compo/friends/friends.component';
import { AllFriendsComponent } from './compo/all-friends/all-friends.component';
import { AddFriendsComponent } from './compo/add-friends/add-friends.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    NotificationComponent,
    FriendsComponent,
    AllFriendsComponent,
    AddFriendsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatSelectModule ,
    FormsModule,
    Ng2SearchPipeModule ,
    MatDatepickerModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
