import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoTopbarComponent } from './demo-topbar/demo-topbar.component';
import { CoreModule } from './core/core.module';


import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormModule } from './form/form.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTestPipe } from './my-test.pipe';




@NgModule({
  declarations: [
    AppComponent,
    DemoTopbarComponent,
    MyTestPipe,
  ],
  imports: [
    BrowserModule,

    CoreModule,
    HomeModule,
    FormModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
