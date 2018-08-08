import { Page, chain } from "zle";
import { LoginPanel } from "../components/loginpanels";

export class loginPage extends Page {
  static $url = "http://10.1.62.234";
  static $initialPanels = [LoginPanel];

  getLogin(){
    return chain(async ()=>{
      return await this.$context.waitFor(LoginPanel)
    });
  }
}
