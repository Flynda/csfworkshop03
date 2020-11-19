import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  status = new FormControl(false)
  tasks = [];
  currentYear = new Date().getFullYear()
  currentMonth = new Date().getMonth()
  currentDay = new Date().getDate()
  minDate: Date;

  constructor(private fb: FormBuilder) {
    this.todoForm = fb.group({
      description: this.description,
      priority: this.priority,
      due: this.due
    });
    this.minDate = new Date(this.currentYear - 0, this.currentMonth, this.currentDay);
  }

  ngOnInit(): void {
  }

  addTask(formDirective: FormGroupDirective){
    const newStatus = status
    
    let addToDo = new todoList(
      this.todoForm.value.description,
      this.todoForm.value.priority,
      this.todoForm.value.due.format('ll'),
      false
    )

    console.log(addToDo);
    this.tasks.push(addToDo)

    this.todoForm.reset()
    formDirective.resetForm();
    
  }

  complete(i) {
    if (this.tasks[i].status)
     {this.tasks[i].status = false;}
    else
      {this.tasks[i].status = true;}
    console.log(this.tasks)
  }
  delete(i) {
    this.tasks.splice(i, 1)
  }

  displayedColumns: string[] = ['description', 'priority', 'due'];
}