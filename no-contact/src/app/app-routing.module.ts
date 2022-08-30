import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoContactFormComponent } from './no-contact-form/no-contact-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'no-contact-form', component: NoContactFormComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to home
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
