import { makeAutoObservable } from "mobx";
import { Todo } from "../types/global";

class StoreImpl {
  todo: Todo[] = [{ id: 1, name: "Wash cat", completed: false }];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todo.push({
      id: this.todo.length + 1,
      name: "Random task" + this.todo.length + 1,
      completed: false,
    });
  }
}

export const store = new StoreImpl();
