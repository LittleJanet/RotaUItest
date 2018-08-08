import * as assert from "assert";
import { context } from "zle";
import { TodoApp } from "../pages/TodoApp";

test("add todo item", async () => {
  const app = await context.waitFor(TodoApp);
  await app.getTodoPanel()
     .addTodoItem("test1")
     .addTodoItem("test2")
     .addTodoItem("test3")
     .$inspect(async self =>{
       assert.equal(await self.getLeftItemNuber(),"3")
     })
     .emptyTodoList()
     .$done();
});

test("checkout todo item",async()=>{
  const app = await context.waitFor(TodoApp)
  await app.getTodoPanel()
    .addTodoItem("test1")
    .addTodoItem("test2")
    .checkoutItem()
    .addTodoItem("test3")
    .$inspect(async self =>{
      assert.equal(await self.getLeftItemNuber(),"2")
    })
    .emptyTodoList()
    .$done()
})

test("filter all item",async()=>{
  const app = await context.waitFor(TodoApp)
  await app.getTodoPanel()
  .addTodoItem("test1")
  .addTodoItem("test2")
  .checkoutItem()
  .addTodoItem("test3")
  .$inspect(async self=>{
    assert.equal(await self.getAllTodoItem(),"3")
  })
  .emptyTodoList()
  .$done()
})

test("filter active item",async()=>{
  const app = await context.waitFor(TodoApp)
  await app.getTodoPanel()
  .addTodoItem("test1")
  .addTodoItem("test2")
  .checkoutItem()
  .addTodoItem("test3")
  .filterActive()
  .$inspect(async self=>{
    assert.equal(await self.getAllTodoItem(),"2")
  })
  .emptyTodoList()
  .$done()
})

test("filter completed item",async()=>{
  const app = await context.waitFor(TodoApp)
  await app.getTodoPanel()
    .addTodoItem("test1")
    .addTodoItem("test2")
    .checkoutItem()
    .addTodoItem("test3")
    .filterCompleted()
    .$inspect(async self =>{
      assert.equal(await self.getAllTodoItem(),"1")
    })
    .$inspect(async self =>{
      assert.equal(await self.getLeftItemNuber(),"2")
    })
    .emptyTodoList()
    .$done()
})


test("delete todo item",async()=>{
  const app = await context.waitFor(TodoApp)
  await app.getTodoPanel()
    .addTodoItem("test1")
    .addTodoItem("test2")
    .deleteTodoItem()
    .addTodoItem("test3")
    .deleteTodoItem()
    .$inspect(async self =>{
      assert.equal(await self.getAllTodoItem(),"1")
    })
    .$inspect(async self =>{
      assert.equal(await self.getLeftItemNuber(),"1")
    })
    .emptyTodoList()
    .$done()
})