import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private hs:HomeService) { }
  homes:any= []

  ngOnInit(){
    this.homes=this.hs.homes
  }
}
