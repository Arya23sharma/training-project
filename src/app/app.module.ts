import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';
import { ChineseComponent } from './chinese/chinese.component';
import { ItalianComponent } from './italian/italian.component';
import { SIndianComponent } from './sindian/sindian.component';
import { NIndiaComponent } from './nindia/nindia.component';
import { HttpClientModule } from '@angular/common/http';
import { PageService } from './page.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceComponent,
    ChineseComponent,
    ItalianComponent,
    SIndianComponent,
    NIndiaComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
