import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginFailureComponent } from './login-failure/login-failure.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataServiceService } from './data-service.service';
import { ShowJSONComponent } from './show-json/show-json.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginSuccessComponent,
    LoginFailureComponent,
    ShowJSONComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
