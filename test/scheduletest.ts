import { context } from 'zle';
import { loginPage } from '../pages/loginpage';

//创建排班表
test('newschedule', async () => {
	const newschedule = await context.waitFor(loginPage);
	await newschedule
	.getLogin()
	.addEmail("admin")		
	.addPassword("Admin@123")
	.loginButton()
	.openRota()
	.openConfigPage()
	.openRotaschedulePage()
	.openrotaaddschedulePage()
	.createRotaschedulepage()
	.addscheduleName("test")
	.addschedulescription("scription")
	.addButton()
	.$done()
});

//编辑排班表
// test("editschedule", async()=>{
// 	const editschedule = await context.waitFor(loginPage);
// 	await editschedule
// 	.getLogin()
// 	.addEmail("admin")		
// 	.addPassword("Admin@123")
// 	.loginButton()
// 	.openRota()
// 	.openConfigPage()
// 	.openRotaschedulePage()
// 	.openrotaeditschedulePage()
// 	.editRotaschedulepage()
// 	.addscheduleName("edit")
// 	.addschedulescription("edit")
// 	.addButton()
// 	.$done()
	
// })

//搜素排班表
// test("searchschedule", async()=>{
// 	const searchschedule = await context.waitFor(loginPage);
// 	await searchschedule
// 	.getLogin()
// 	.addEmail("admin")		
// 	.addPassword("Admin@123")
// 	.loginButton()
// 	.openRota()
// 	.openConfigPage()
// 	.openRotaschedulePage()
// 	.searchschedulePage()
// 	.searchschedule("test")
	

// })