import { Page, chain } from 'zle';
import { rotaschedulePanels } from '../components/rotaschedulepanels';
import { rotaaddschedulePage, rotaeditschedulePage } from './rotapopuppage';

export class RotaschedulePage extends Page {
  static $initialPanels = [rotaschedulePanels]

//创建排班表
  openrotaaddschedulePage() {
    return chain(async () => {
      let panel = await this.$context.waitFor(rotaschedulePanels)
      await panel.opencreateSchedulePage()
      return await this.$context.waitFor(rotaaddschedulePage)
    })
  }

//编辑排班表
  openrotaeditschedulePage(){
    return chain(async()=>{
      let panel = await this.$context.waitFor(rotaschedulePanels)
      await panel.openeditSchedulePage()
      return await this.$context.waitFor(rotaeditschedulePage)
    })
  }

//启用/禁用排班表
  schedulestatusPage(){
   return chain(async()=>{
     let panel = await this.$context.waitFor(rotaschedulePanels)
     await panel.editschedulestatusPage()
     return this
   })
  }

//删除排班表
  deleteschedulePage(){
    return chain(async()=>{
      let panel = await this.$context.waitFor(rotaschedulePanels)
      await panel.deletescheduelPage()
      return this
    })
  }

//搜索排班表
  searchschedulePage(){
    return chain(async () => {
      return await this.$context.waitFor(rotaschedulePanels)
      
    })
  }

  //
}
