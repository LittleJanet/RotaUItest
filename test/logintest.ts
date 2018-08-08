import { context } from "zle";
import { loginPage } from "../pages/loginpage";


test("tenant login", async () => {
  const app = await context.waitFor(loginPage);
  await app
    .getLogin()
    .addEmail("admin")
    .addPassword("Admin@123")
    .loginButton()
    .openRota()
    .openConfigPage()
    .openRotaschedulePage()
    .openrotaaddschedulePage()
    .createRotaschedulepage()
    .addscheduleName("testhu")
    .addschedulescription("scription")
    .addButton()
    .$done()

});

