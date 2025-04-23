import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FixedChatComponent } from './pages/fixed-chat/fixed-chat.component';
import { CollapsibleChatComponent } from './pages/collapsible-chat/collapsible-chat.component';
import { DisplayType } from './shared/enums/display-type.enum';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    redirectTo: DisplayType.Fixed.toLowerCase(),
    pathMatch: 'full',
  },

  {
    path: DisplayType.Fixed.toLowerCase(),
    component: FixedChatComponent,
    // You can add a guard here like below if needed:

      canActivate: [() => {
        const auth = inject(AuthService);
        const router = inject(Router);
        return auth.isLoggedIn() || router.createUrlTree(['/login']);
      }] 
  },


  {
    path: DisplayType.Collapsible.toLowerCase(),
    component: CollapsibleChatComponent
  },

  { path: '**', redirectTo: DisplayType.Fixed.toLowerCase() }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
