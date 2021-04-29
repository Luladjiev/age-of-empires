import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CivilizationComponent } from './components/civilization/civilization.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ArticlesComponent,
    HomeComponent,
    MyProfileComponent,
    CivilizationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
