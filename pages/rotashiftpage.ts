import { Page, chain } from 'zle';
import { rotashiftPanels } from '../components/rotashiftpanels';


export class rotashiftPage extends Page {
  static  $initialPanels = [rotashiftPanels]

  openShiftPage() {
    return chain(async () => {
      let panel = await this.$context.waitFor(rotashiftPanels)
      await panel.opencreateShiftPage()
      return await this.$context.waitFor(rotashiftPage);
    });
  }
}
