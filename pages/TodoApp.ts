import { Page, chain } from "zle";
import {  TodoPanel } from "../components/NewTodo";

export class TodoApp extends Page {
  static $url = "http://todomvc.com/examples/react/";
  static $initialPanels = [TodoPanel];

  getTodoPanel(){
    return chain(async ()=>{
      return await this.$context.waitFor(TodoPanel)
    });
  }
}
