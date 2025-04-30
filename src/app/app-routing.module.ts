import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AiutoComponent } from './aiuto/aiuto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aiuto', component: AiutoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

