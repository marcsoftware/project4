import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'subject/:subject', component: TypeComponent },
  { path: '', component: HomeComponent },

];


@NgModule({
  declarations: [

    AppComponent,
    TypeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
