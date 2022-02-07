import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks= new Array();
  data: DataService;

  constructor(data: DataService) { 
    this.data=data;
  }

  ngOnInit(): void {
    if(localStorage.getItem("list")){
      this.data.tasks=JSON.parse(localStorage.getItem("list") as string);
      this.data.updateID();
    }
  }
}
