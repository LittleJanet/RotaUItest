import { Panel, UIDefinition } from 'zle';


export class RotaconfigPanles extends Panel {
  static $definition = UIDefinition.root("div.config", "config")
    .withDescendant('a[href="#/config/shift"]', "shift")
    .withDescendant("div.config-content-schedule", "schedule")
  //设置页面
  //轮班设置 shift
  async openShiftPage() {
      await this.$click("shift")
  }
  //排班表设置 schedule
  async openSchedulePage() {
      await this.$click("schedule")
  }
}
