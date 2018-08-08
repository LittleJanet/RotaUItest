import { Page, chain } from 'zle';
import { createschedulePanels, editschedulePanels } from '../components/rotapopuppanels';


//新建排班表
export class rotaaddschedulePage extends Page {
  static $initialPanels = [createschedulePanels];

  createRotaschedulepage() {
    return chain(async () => {
      return await this.$context.waitFor(createschedulePanels)
    });
  }


}

export class rotaeditschedulePage extends Page {
  static $initialPanels = [createschedulePanels];

  createRotaschedulepage() {
    return chain(async () => {
      return await this.$context.waitFor(createschedulePanels)
    });
  }

  editRotaschedulepage() {
    return chain(async () => {
      return await this.$context.waitFor(editschedulePanels)
    })
  }

}