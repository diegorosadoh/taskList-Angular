import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  newtask='';
  errortask='';
  data: DataService;

  constructor(data: DataService) { 
    this.data=data;
  }

  addtask(){
    if(this.newtask!==''){
      this.data.tasks.push({
        id: ++this.data.lastID,
        text: this.newtask,
        date: new Date(),
        minutes: 0,
        priority: -1,
        state: false
      });
      this.data.update();
      this.newtask='';
      this.errortask='';
    }else{
      this.errortask="Enter a new task";
    }
  }

  ngOnInit(): void {
  }

}
