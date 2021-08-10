import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SecurePageComponent } from './pages/secure-page/secure-page.component';
import { AuthGuard } from './app.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'secure', component: SecurePageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
