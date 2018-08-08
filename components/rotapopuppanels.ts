import { Panel, UIDefinition, chain } from "zle";
import { RotaschedulePage } from "../pages/rotaschedulepage";

//添加轮班弹窗
export class newshiftPanels extends Panel {
  static $definition = UIDefinition.root('div.uy - modal - content', 'newshiftpopup')
    .withDescendant('input#name', 'shiftname')
    .withDescendant('div.uy-select-selection.uy-select-selection--single', 'selectshift');

  //轮班名称输入
  addShiftname(item: string) {
    return chain(async () => {
      await this.$type('shiftname', item);
      return this;
    });
  }

  //选择轮班

}

//添加排班表弹窗
export class createschedulePanels extends Panel {
  static $definition = UIDefinition.root("div.uy-modal-wrap ", "newschedulepopup")
  .withDescendant("input#name", "schedulename")
  .withDescendant("textarea#description", "scheduledescription")
  .withDescendant("button.mr10.uy-btn-primary", "addbutton")
  .withDescendant("button.uy-modal-close", "closebutton")
  .withDescendant("button.")
  
  

  //点击关闭按钮关闭弹窗
  closepopup(){
    return chain(async()=>{
      await this.$click("closebutton")
      return this.$context.waitFor(RotaschedulePage)
    })
  }


  //输入名称
  addscheduleName(item: string) {
    return chain(async () => {
      
      await this.$type("schedulename", item)
      return this
    });
  }
  //输入描述
  addschedulescription(item: string) {
    return chain(async () => {
      await this.$type("scheduledescription", item)
      return this
    });
  }
  //点击添加
  addButton() {
    return chain(async () => {
      await this.$click("addbutton")
      return this.$context.waitFor(RotaschedulePage)
    })
  }
}


//编辑排班表弹窗
export class editschedulePanels extends Panel {
  static $definition = UIDefinition.root("div.uy-modal-content", "editschedulepopup")
    .withDescendant("input#name", "schedulename")
    .withDescendant("textarea#description", "scheduledescription")
    .withDescendant("button.mr10.uy-btn-primary", "addbutton")
    .withDescendant("button.uy-modal-close", "closebutton")


  //点击关闭按钮关闭弹窗
  closepopup() {
    return chain(async () => {
      await this.$click("closebutton")
      return this.$context.waitFor(RotaschedulePage)
    })
  }


  //更改名称
  addscheduleName(item: string) {
    return chain(async () => {
      await this.$click("schedulename")
      await this.$context.page.keyboard.down("Shift")
      await this.$context.page.keyboard.down("Home")
      await this.$context.page.keyboard.up("Home")
      await this.$context.page.keyboard.up("Shift")
      await this.$type("schedulename", item)
      return this
    });
  }
  //输入描述
  addschedulescription(item: string) {
    return chain(async () => {

      await this.$type("scheduledescription", item)
      return this
    });
  }
  //点击添加
  addButton() {
    return chain(async () => {
      await this.$click("addbutton")
      return this.$context.waitFor(RotaschedulePage)
    })
  }
}

//删除排班表