import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList: TodoItem[] = [];
  newTask: string = '';

  ngOnInit() {
    const storedList = localStorage.getItem('todoList');
    if (storedList) {
      this.todoList = JSON.parse(storedList);
    }
  }

  addTodo(task: string) {
    if (task.trim() === '') {
      return;
    } else {
      this.todoList.push({
        id: this.todoList.length + 1,
        task: task,
        completed:false
      });
      this.newTask = '';
      this.saveTodoList();
    }
  }

  deleteTask(id: number) {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
    this.saveTodoList();
  }

  toggleCompleted(id: number) {
    const todo = this.todoList.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodoList();
    }
  }

  saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  loadTodoList() {
    const savedList = localStorage.getItem('todoList');
    if (savedList) {
      this.todoList = JSON.parse(savedList);
    }
  }


}
