import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupContainerComponent } from './sign-up/sign-up-container/signup-container.component';

const routes: Routes = [{
  path: '',
  component: SignupContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
