import { Panel, UIDefinition, chain } from "zle";

export class kbPanel extends Panel{
 static $definition = UIDefinition.root("div#layout")
   .withDescendant("div.ant-btn","addknowledge")
   .withDescendant("div.container","allpage")

   //录入知识按钮
   addknowledgeSpan(){
     return chain(async ()=>{
       await this.$click("addknowledge")
       return this.$context.waitFor(modal)
     })
   }
}


//模板选择弹窗
export class modal extends Panel {
	static $definition = UIDefinition.root("div.add-knowledge-modal")
		.withDescendant("button.ant-modal-close", "closemodal")
		.withDescendant("div.template-content li:nth-child(1)","emptymodal")


  //关闭选择模板弹窗
	closemodalButton() {
		return chain(async () => {
			await this.$click('closemodal')
			return this.$context.waitFor(kbPanel)
		})
  }

  //选择空白页面模板
  chooseModal(){
    return chain(async ()=>{
      await this.$click('emptymodal')
      return this.$context.waitFor(createnew)
    })
  }
}

//录入知识页面
export class createnew extends Panel {
  static $definition = UIDefinition.root('div.content')
    .withDescendant('input#title','createtitle')
    



    
}
