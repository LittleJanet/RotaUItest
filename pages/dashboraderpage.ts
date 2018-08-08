import { Page, chain } from "zle";
import { DashboradPanel } from "../components/dashboradpanel";
import { RotaPage } from "./Rotapage";

export class DashboraderPage extends Page{
  static $initialPanels = [DashboradPanel]


  openRota(){
    return chain(async ()=>{
      let panel = await this.$context.waitFor(DashboradPanel)
      await panel.openRota()
      return this.$context.waitFor(RotaPage)
    })
  }
}