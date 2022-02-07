import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  regex="";
  data: DataService;

  constructor(data: DataService) { 
    this.data=data;
  }

  ngOnInit(): void {
  }

  clean(){
    this.data.tasks = this.data.tasks.filter(task => task.state == false);
    this.data.updateID();
  }

  search(){
    this.data.regex=this.regex;
  }
}
