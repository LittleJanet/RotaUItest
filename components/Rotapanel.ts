import { Panel, UIDefinition } from 'zle';

export class RotaPanle extends Panel {
  static $definition = UIDefinition.root("div.full-content")
    .withDescendant(".ec-side-menu-list-item-selected","Calendar")
    .withDescendant(".ec-side-menu-list-item:nth-child(3)","Log")
    .withDescendant(".ec-side-menu-list-item:nth-child(3)","Config")

  async openCalendarPage(){
      await this.$click("Calendar")
  }

  async openLogPage() {
    await this.$click("Log")
  }
  
  async openConfigPage() {
      await this.$click("Config")
  }
}


