import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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

  constructor(fb: FormBuilder) {
    this.todoForm = fb.group({
      description: this.description,
      priority: this.priority,
      due: this.due
    })
  }

  ngOnInit(): void {
  }

  processForm(){
    let addToDo = new todoList(
      this.todoForm.value.description,
      this.todoForm.value.priority,
      this.todoForm.value.due      
    )
    console.log(addToDo);
    this.tasks.push(addToDo)
  }

  displayedColumns: string[] = ['description', 'priority', 'due'];
}
