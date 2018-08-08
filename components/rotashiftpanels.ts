import { Panel, UIDefinition, chain } from 'zle';

//轮班设置页面 shift
export class rotashiftPanels extends Panel {
  static $definition = UIDefinition.root("div.shift", "shiftpag")
    .withDescendant("p.shift-content-nav-button", "newshift")
    .withDescendant(".uy-col-8:nth-child(1)", "shiftcard")
  //创建轮班
  opencreateShiftPage() {
    return chain(async () => {
      await this.$click("newshift")
      return this.$context.waitFor(newshiftPanel)
    })
  }
}

//添加轮班弹窗
export class newshiftPanel extends Panel {
  static $definition = UIDefinition.root("div.uy - modal - content", "newshiftpopup")
    .withDescendant("input#name", "shiftname")
    .withDescendant("div.uy-select-selection.uy-select-selection--single", "selectshift")

  //轮班名称输入
  addShiftname(item: string) {
    return chain(async () => {
      await this.$type("shiftname", item)
      return this
    })
  }


}
