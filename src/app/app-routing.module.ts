import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarsCardComponent } from './admin/compo/dars-card/dars-card.component';
import { DarshComponent } from './admin/compo/darsh/darsh.component';
import { LoginComponent } from './admin/compo/login/login.component';
import { RegExpComponent } from './admin/compo/reg-exp/reg-exp.component';
import { SearTalentComponent } from './admin/compo/sear-talent/sear-talent.component';
import { ViewReportComponent } from './admin/compo/view-report/view-report.component';
import { DarshexpComponent } from './expert/compo/darshexp/darshexp.component';
import { ProfileComponent } from './expert/compo/profile/profile.component';
import { UserLoginComponent } from './user/compo/user-login/user-login.component';
import { UserNavComponent } from './user/compo/user-nav/user-nav.component';
import { UserNotificationComponent } from './user/compo/user-notification/user-notification.component';
import { UserRegComponent } from './user/compo/user-reg/user-reg.component';
import { UserTableComponent } from './user/compo/user-table/user-table.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
    {path:'',component:DarshComponent,children:[
    {path:'',component:DarsCardComponent},
    {path:'reg',component:RegExpComponent},
    {path:'search',component:SearTalentComponent},
    {path:'repo',component:ViewReportComponent}
  ]},
  {path:'exp',component:DarshexpComponent,children:[
    {path:'',component:ProfileComponent},
    {path:'searchtalent',component:SearTalentComponent}
  ]},
  {path:'user-nav',component:UserNavComponent,children:[
    {path:'',component:UserTableComponent},
    {path:'register',component:UserRegComponent},
    {path:'login',component:UserLoginComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
