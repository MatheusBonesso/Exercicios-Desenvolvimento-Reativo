import { Component, OnInit } from '@angular/core';
import { Task } from './classes/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[];
  userTask: string = '';
  userTimeSpent: string = '';

  constructor() {
    this.tasks = [new Task('Exercicio matinal', '00:40')];
  }

  ngOnInit(): void {}

  saveTask() {
    this.tasks.push(new Task(this.userTask, this.userTimeSpent));
  }
}
