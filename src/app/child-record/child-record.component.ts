import { Component, OnInit, Input } from '@angular/core';
import { Task, ExtendedTask } from '../models/task.model';

@Component({
  selector: 'app-child-record',
  templateUrl: './child-record.component.html',
  styleUrls: ['./child-record.component.css']
})
export class ChildRecordComponent implements OnInit {
@Input() task: Task;

  constructor() { }

  ngOnInit() {
    // ES6 Feature : Destructor assignment
    const { name, description } = this.task;
    console.log('Name ' + name);
    console.log('Desc ' + description);

    const extendedTask = new ExtendedTask();
    const extendedValue = extendedTask.function(name, description);
    console.log(extendedValue);
  }

}
