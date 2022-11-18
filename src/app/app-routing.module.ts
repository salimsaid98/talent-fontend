import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFriendsComponent } from './compo/add-friends/add-friends.component';
import { AllFriendsComponent } from './compo/all-friends/all-friends.component';
import { FriendsComponent } from './compo/friends/friends.component';
import { HomeComponent } from './compo/home/home.component';
import { NavComponent } from './compo/nav/nav.component';
import { NotificationComponent } from './compo/notification/notification.component';
import { ProfileComponent } from './compo/profile/profile.component';
const routes: Routes = [
  {path:'',component:NavComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'profile',component:ProfileComponent},
    {path:'notification',component:NotificationComponent},
    {path:'friends',component:FriendsComponent,children:[
      {path:'',component:AllFriendsComponent},
      {path:'addfriends',component:AddFriendsComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
