import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';
import { ChineseComponent } from './chinese/chinese.component';
import { ItalianComponent } from './italian/italian.component';
import { SIndianComponent } from './sindian/sindian.component';
import { NIndiaComponent } from './nindia/nindia.component';

const routes: Routes = [
  {path: '', redirectTo:'/pages', pathMatch: 'full' },
//{path: 'path', component: AppComponent},
{path: 'path', component: HomeComponent},
{path: 'place', component: PlaceComponent},
{path: 'ch', component: ChineseComponent},
{path: 'it', component: ItalianComponent},
{path: 'n', component: NIndiaComponent},
{path: 's', component: SIndianComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =   [ HomeComponent, PlaceComponent] 