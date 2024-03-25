import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';
import { DisplayComponent } from './display/display.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout.component';
import { BadgeModule } from 'primeng/badge';
import { TabMenuModule } from 'primeng/tabmenu';
import { HeaderComponent } from '../header/header.component';


const routes:Routes = [
  {path:'',component: LayoutComponent ,children:[ 
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'add_Activity',component:ActivityFormComponent},
    {path:'display_Activities',component:DisplayComponent},
    {path:'profile',component:ProfileComponent}
  ]}
]


@NgModule({
  declarations: [
    HomeComponent,
    ActivityFormComponent,
    DisplayComponent,
    ProfileComponent,
    NavComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BadgeModule,
    TabMenuModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
