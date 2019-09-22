import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';


const appRoutes: Routes = [
  { path: 'test', component: TypeComponent },

];


@NgModule({
  declarations: [

    AppComponent,
    TypeComponent
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
