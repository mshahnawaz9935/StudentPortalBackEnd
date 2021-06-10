import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
// { path: 'home', component: HomeComponent },
//   { path: 'jobs', component: JobsComponent },
//      { path: 'companies', component: CompaniesComponent , canActivate: [AuthGuard] },
//         { path: 'login', component: LoginComponent },
//            { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard] },
//               { path: 'appliedjobs', component: AppliedjobsComponent , canActivate: [AuthGuard]  },
//               { path: 'candidates', component: CandidatesComponent  }
            ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
