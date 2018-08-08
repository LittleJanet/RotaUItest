import { Panel, UIDefinition, chain } from 'zle';

//排班表设置页面 schedule
export class rotaschedulePanels extends Panel {
  static $definition = UIDefinition.root("div.config-schedule", "schedulepage")
    .withDescendant("button", "newschedule")
    .withDescendant("div.uy-table", "allschedule")
    .withDescendant("tr.uy-table-row.uy-table-row-level-0:nth-child(1) span.schedule-button-opt:nth-child(1)", "editschedule")
    .withDescendant("tr.uy-table-row.uy-table-row-level-0:nth-child(1) span.uy-switch-wrapper", "schedulestatus")
    .withDescendant("tr.uy-table-row.uy-table-row-level-0:nth-child(1) span.schedule-button-stop", "deleteschedule")
    .withDescendant("input.uy-input", "searchbox")
    .withDescendant("")
    


  //打开创建排班表弹窗
  async opencreateSchedulePage() {
    await this.$click("newschedule")
  }

  //打开编辑排班表弹窗
  async openeditSchedulePage(){
    await this.$click("editschedule")
  }

  //编辑启用/禁用状态
  async editschedulestatusPage(){
    await this.$click("schedulestatus")

  }

  //删除排班表
  async deletescheduelPage(){
    await this.$click("deleteschedule")
  }

  //搜索排班表
  async searchschedule(item:string){
    return chain(async()=>{
      await this.$type("searchbox", item)
      
    })
  }

  //获取最新排班表信息

}


