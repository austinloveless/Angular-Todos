import { Component, OnInit, Input } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todos: any[];
  private url = "https://angular-todos.herokuapp.com/api/todos";

  constructor(private http: Http) {
    http.get(this.url).subscribe(res => {
      this.todos = res.json();
      console.log(res.json());
    });
  }

  ngOnInit() {}

  createTodo(input: HTMLInputElement) {
    let todo: any = { todo: input.value };
    input.value = "";
    this.http.post(this.url, todo).subscribe(res => {
      todo._id = res.json().todo;
      this.todos.splice(0, 0, todo);
    });
  }

  deleteTodo(todo) {
    this.http.delete(this.url + "/" + todo._id).subscribe(res => {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      this.todos.filter(todo => todo.id !== todo._id);
    });
  }
}
