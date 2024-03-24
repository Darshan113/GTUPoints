import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './pages/header/header.component';
import { NavComponent } from './pages/layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
