import { Page, chain } from "zle";
import { RotaPanle } from "../components/Rotapanel";
import { RotaconfigPage } from "./rotaconfigpage";
//import { RotacalendarPage } from "./rotacalendarpage";


export class RotaPage extends Page {
  static $initialPanels = [RotaPanle];


  // openCelendarPage(){
  //   return chain(async()=>{
  //     let panel = await this.$context.waitFor(RotaPanle)
  //     await panel.openCalendarPage()
  //     return await this.$context.waitFor(RotacalendarPage)
  //   })
  // }

  openConfigPage(){
    return chain(async () => {
      let panel = await this.$context.waitFor(RotaPanle)
      await panel.openConfigPage()
      return this.$context.waitFor(RotaconfigPage);
    });
  }
}
