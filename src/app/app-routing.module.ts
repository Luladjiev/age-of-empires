import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { CivilizationComponent } from './components/civilization/civilization.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'civ/:civId', component: CivilizationComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
