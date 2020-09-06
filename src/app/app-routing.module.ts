import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpModule } from './sign-up/sign-up.module';


const routes: Routes = [{
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module')
        .then((m: { SignUpModule: SignUpModule }) => m.SignUpModule)
},
    {
        path: '**',
        redirectTo: 'sign-up'
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
