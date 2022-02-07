import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: DataService;

  constructor(data: DataService) { 
    this.data=data;
  }

  ngOnInit(): void {
  }

  checktask(id: number){
    let task = this.data.tasks.find(task => task.id == id);
    task.state = !task.state;
    this.data.update();
  }

  deltask(id: number, e: Event){
    e.stopPropagation();
    this.data.tasks = this.data.tasks.filter(task => task.id != id);
    this.data.updateID();
  }

  clock(id: number){
    let task = this.data.tasks.find(task => task.id == id);
    let now = new Date();
    let list = new Date(task.date);
    task.minutes = Math.floor((now.getTime() - list.getTime()) / 60000);
  }

  priority(id: number, option: string, e: Event){
    e.stopPropagation();
    let task = this.data.tasks.find(task => task.id == id);
    if (option == 'up' && task.priority < 1)
      task.priority++;
    else if (option == 'down' && task.priority > -1)
      task.priority--;
    this.sort();
  }

  sort(){
    this.data.tasks.sort((a,b) => {
        if (a.priority > b.priority) return -1;
        else if (a.priority < b.priority) return 1;
        else return 0;
    });
  }

}
