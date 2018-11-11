import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  taskToAdd: Task = new Task();
  tasks: Task[] = [];
  helpText: string;

  constructor() {
     // ES6 Feature: Back ticks multiple lines
     // ES6 Feature: Template literals
     this.helpText =  `
    * Defaults of ${this.title} will be added if
    fields are not filled
    `;
  }


  addDefaultItem() {
    const task = new Task();
  }

  addItem() {
    // ES6 Feature: Default parameters
    const task: Task = {
      name: this.taskToAdd.name || 'Sample Name',
      description: this.taskToAdd.description || 'Sample Description',
      completed: this.taskToAdd.completed || false
    };

    this.tasks.push(task);
  }

}
