import { Panel, UIDefinition, chain } from "zle";

/**添加新的待办事项 */
export class NewTodo extends Panel {
  static $definition = UIDefinition.root("input.new-todo","input");

  /**输入待办事项 */
  async inputItem(todoItem:string){
    console.log(`input todo item：${todoItem}`)
    await this.$click("input")
    await this.$type("input",todoItem)
    await this.$type("input", String.fromCharCode(13))
  }
}


/**单个待办事项条目 */
export class LatestTodoItem extends Panel{
  static $definition = UIDefinition.root("ul.todo-list li:nth-last-child(1)","todo")
    .withDescendant("input.toggle","checkout box")
    .withDescendant("label","item name")
    .withDescendant("button.destroy","delete");

  /**获取待办事项的reactid */
  async getTodoReactId(){}

  /**勾选待办事项 */
  async checkoutTodoITem(){
    await this.$click("checkout box")
  }

  /**获取待办事项的状态 */
  async getTodoItemStatus(){

  }

  /**删除待办事项 */
  async delteTodoItem(){
    await this.$hover("item name")
    await this.$click("delete")
  }

  /**获取待办事项的名称 */
  async getTodoItemName(){
    return await this.$textOf("item name")
  }
}

/**待办事项列表 */
export class TodoList extends Panel{
  static $definition = UIDefinition.root("ul.todo-list","todo list")

  /**获取TodoList的长度 */
  async getNumberOfAllTodoItem(){
    let selector = "ul.todo-list li"
    let todoList = await this.$context.page.$$(selector)
    if(todoList){
      return todoList.length
    }else{
      throw new Error("can not find to do item")
    }
  }
}

/**todoList的筛选器 */
export class Filter extends Panel{
  static $definition = UIDefinition.root("footer.footer","filter")
    .withDescendant('a[href="#/"]',"all")
    .withDescendant('a[href="#/active"]',"active")
    .withDescendant('a[href="#/completed"]',"completed")
    .withDescendant("span.todo-count strong","item left")

  /**筛选所有的 */
  async filterAll(){
    await this.$click("all")
  }

  /**筛选未完成的事项 */
  async filterActive(){
    await this.$click("active")
  }

  /**筛选已完成的 */
  async filterCompleted(){
    await this.$click("completed")
  }

  /**删除已完成的 */
  async deletCompleted(){
    let selector = "button.clear-completed"
    let handle = await this.$context.page.$(selector)
    if(handle){
      await handle.click()
    }else{
      throw new Error("can not find the clear completed button")
    }
  }

  /**剩余待办事项的数目 */
  async getLeftItemNuber(){
    return await this.$textOf("item left")
  }

}

/**todo面板 */
export class TodoPanel extends Panel{
  static $definition = UIDefinition.root("section.todoapp")

  /**获取添加新条目的输入框 */
  async getNewTodo(){
    return await this.$context.waitFor(NewTodo)
  }

  /**获取Todo列表 */
  async getTodoList(){
    return await this.$context.waitFor(TodoList)
  }

  /**获取过滤器 */
  async getFIlter(){
    return await this.$context.waitFor(Filter)
  }

  /**获得最新一条待办事项 */
  async getLatestItem(){
    return await this.$context.waitFor(LatestTodoItem)
  }

  /**添加待办事项 */
  addTodoItem(item:string ){
    return chain(async ()=>{
      let newTodo = await this.getNewTodo()
      await newTodo.inputItem(item)
      return this.$context.waitFor(TodoPanel);
    });
  }

  /**获取已完成和待办事项的数目 */
  async getAllTodoItem(){

    let todoList = await this.getTodoList()
    let num = await todoList.getNumberOfAllTodoItem()
    return num
  }


  /**获得待办事项的数目 */
  async getLeftItemNuber(){
    const filter = await this.getFIlter()
    let number = await filter.getLeftItemNuber()
    return number
}

  /**清空todoList */
  emptyTodoList(){
    return chain(async()=>{
      let filter = await this.getFIlter()
      let selector = "input.toggle-all"
      let handle = await this.$context.page.$(selector)
      if(handle){
        await handle.click()
      }else{
        throw new Error("can not find the select all button")
      }
      await filter.deletCompleted()
      return this;
    });
  }


  /**勾选待办事项 */
  checkoutItem(){
    return chain(async()=>{
      let latestItem = await this.getLatestItem();
      await latestItem.checkoutTodoITem();
      return this; 
    })
  }


  /**筛选未完成的事项 */
  filterActive(){
    return chain(async()=>{
      let filter = await this.getFIlter()
      await filter.filterActive()
      return this;
    });
  }

  /**筛选已完成的事项 */
  filterCompleted(){
    return chain(async()=>{
      let filter = await this.getFIlter()
      await filter.filterCompleted()
      return this;
    });
  }

  /**删除已完成的事项 */
  deletCompleted(){
    return chain(async()=>{
      let filter = await this.getFIlter()
      await filter.deletCompleted()
      return this;
    });
  }

  /**删除todoLit item */
  deleteTodoItem(){
    return chain(async()=>{
      let lasteTodoItem = await this.getLatestItem()
      await lasteTodoItem.delteTodoItem()
      return this;
    });    
  }
}