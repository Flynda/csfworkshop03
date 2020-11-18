import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { now } from 'moment';
import { todoList } from './models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todoForm: FormGroup;

  description = new FormControl('', [Validators.required]);
  priority = new FormControl('', [Validators.required]);
  due = new FormControl('', [Validators.required]);
  tasks = [];
  currentYear = new Date().getFullYear()
  currentMonth = new Date().getMonth()
  currentDay = new Date().getDate()
  minDate: Date;

  constructor(fb: FormBuilder) {
    this.todoForm = fb.group({
      description: this.description,
      priority: this.priority,
      due: this.due
    });
    this.minDate = new Date(this.currentYear - 0, this.currentMonth, this.currentDay)
  }

  ngOnInit(): void {
  }

  processForm(){
    let addToDo = new todoList(
      this.todoForm.value.description,
      this.todoForm.value.priority,
      this.todoForm.value.due.format('ll')
    )
    this.todoForm.reset
    // this.todoForm.value.priority = ''
    // this.todoForm.value.due = ''

    console.log(addToDo);
    this.tasks.push(addToDo)
  }

  displayedColumns: string[] = ['description', 'priority', 'due'];
}
