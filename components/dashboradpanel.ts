import { Panel, UIDefinition } from "zle";
//import { RotaPage } from "../pages/Rotapage";

export class DashboradPanel extends Panel{
  static $definition = UIDefinition.root("div#main")
    .withDescendant('img[alt="Rota"]',"rota");

    async openRota(){
      await this.$click("rota")
    }

}