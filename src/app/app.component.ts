import { Component, OnInit } from '@angular/core';
import { PageService } from './page.service';
import { IPage } from './page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public pages = [];
  //pages: IPage[];
constructor(private _pageService : PageService){}
 
ngOnInit(){
  this._pageService.getPages()
  //.subscribe(data => this.pages = data)
  .subscribe((app) => this.pages = app,
  (err) => console.log(err) );
}
}
