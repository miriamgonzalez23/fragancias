import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfumeryFraganciasComponent } from './perfumery-fragancias/perfumery-fragancias.component';
import { FraganciaAboutComponent } from './fragancia-about/fragancia-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fragancias',
    pathMatch: 'full'
  },
  {
    path: 'fragancias',
    component: PerfumeryFraganciasComponent
  },
  {
    path: 'about',
    component: FraganciaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
