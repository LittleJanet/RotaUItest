import { Panel, UIDefinition, chain } from "zle";
import { DashboraderPage } from "../pages/dashboraderpage";


export class LoginPanel extends Panel{
  static $definition = UIDefinition.root("div.login")
  .withDescendant("input#email","username")
  .withDescendant("input#passwd","password")
  .withDescendant("button","loginbutton")


  /*账号输入*/
  addEmail(item: string) {
    return chain(async () => {
      await this.$type("username",item)
      return this
    });
  }

  /*密码输入*/
  addPassword(item: string) {
    return chain(async () => {
      await this.$type("password",item)
      return this
    });
  }

  /*登录按钮*/
  loginButton(){
    return chain(async () =>{
      await this.$click("loginbutton")
      return this.$context.waitFor(DashboraderPage)
    })
  }
}
