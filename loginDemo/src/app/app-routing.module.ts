import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { combineLatest } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { LoginFailureComponent } from './login-failure/login-failure.component';
import { LoginRouteGuardGuard } from './login-route-guard.guard';
import { ShowJSONComponent } from './show-json/show-json.component';
import { RouteResolver } from './route-resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'loginSuccess',
    component: LoginSuccessComponent,
    canActivate:[LoginRouteGuardGuard]
  },
  {
    path: 'loginFailure',
    component: LoginFailureComponent
  },
  {
    path: 'showJson',
    component: ShowJSONComponent,
    resolve: {value: RouteResolver}
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
