import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  tasks = new Array();
  lastID = -1;
  view_state = 'all';
  regex = '';

  constructor() { }

  updateID(){
    this.lastID = -1;
    for (let task of this.tasks) task.id = ++this.lastID
    this.update();
  }

  update(){
    localStorage.setItem("list",JSON.stringify(this.tasks));
    if (this.tasks.length > 0) this.lastID = this.tasks[this.tasks.length-1].id;
    this.filter(this.view_state);
  }

  filter(option: string){
    switch (option){
      case 'all':
        this.view_state = 'all';
        break;
      case 'active':
        this.view_state = 'active';
        break;
      case 'completed':
        this.view_state = 'completed';
        break;
      default:
        this.view_state = 'all';
    }
  }

  view(){
    let result = [];
    switch (this.view_state){
        case 'all':
            result = this.tasks;
            break;
        case 'active':
            result = this.tasks.filter(task => task.state == false);
            break;
        case 'completed':
            result = this.tasks.filter(task => task.state == true);
            break;
        default:
            result = this.tasks;
    }
    if(this.regex !== "")
        result = result.filter(task => task.text.includes(this.regex));
    return result;
  }

  active(){
    return this.tasks.filter(task => task.state == false).length;
  }
}
