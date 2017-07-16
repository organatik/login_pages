import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModules} from './material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule, Routes} from "@angular/router";
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeSignUpComponent } from './home-sign-up/home-sign-up.component';

const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: SignUpComponent },
  { path: 'home', component: HomeSignUpComponent },
];




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeSignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModules,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
