import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DarshComponent } from './admin/compo/darsh/darsh.component';
import { RegExpComponent } from './admin/compo/reg-exp/reg-exp.component';
import { SearTalentComponent } from './admin/compo/sear-talent/sear-talent.component';
import { ViewReportComponent } from './admin/compo/view-report/view-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DarsCardComponent } from './admin/compo/dars-card/dars-card.component';
import {MatStepperModule} from '@angular/material/stepper'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './admin/compo/login/login.component'; 
import {MatCardModule} from '@angular/material/card';
import { DarshexpComponent } from './expert/compo/darshexp/darshexp.component';
import { RegisterexpComponent } from './expert/compo/registerexp/registerexp.component';
import { SearchexpComponent } from './expert/compo/searchexp/searchexp.component';
import { NotificationexpComponent } from './expert/compo/notificationexp/notificationexp.component';
import { ProfileComponent } from './expert/compo/profile/profile.component';
import { UserNavComponent } from './user/compo/user-nav/user-nav.component';
import { UserRegComponent } from './user/compo/user-reg/user-reg.component';
import { UserDarshComponent } from './user/compo/user-darsh/user-darsh.component';
import { UserNotificationComponent } from './user/compo/user-notification/user-notification.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { UserTableComponent } from './user/compo/user-table/user-table.component';
import { UserLoginComponent } from './user/compo/user-login/user-login.component'; 
@NgModule({
  declarations: [
    AppComponent,
    DarshComponent,
    RegExpComponent,
    SearTalentComponent,
    ViewReportComponent,
    DarsCardComponent,
    LoginComponent,
    DarshexpComponent,
    RegisterexpComponent,
    SearchexpComponent,
    NotificationexpComponent,
    ProfileComponent,
    UserNavComponent,
    UserRegComponent,
    UserDarshComponent,
    UserNotificationComponent,
    UserTableComponent,
    UserLoginComponent,
    
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
    MatTabsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
