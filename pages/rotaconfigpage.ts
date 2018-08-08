import { Page, chain } from 'zle';
import { RotaconfigPanles } from '../components/rotaconfigpanels';
import { RotaschedulePage } from './rotaschedulepage';
//import { rotashiftPage } from './rotashiftpage';


export class RotaconfigPage extends Page {
	static $initialPanels = [RotaconfigPanles]

	openRotaschedulePage() {
		return chain(async () => {
			let panel = await this.$context.waitFor(RotaconfigPanles)
			await panel.openSchedulePage()
			return this.$context.waitFor(RotaschedulePage);
		});
	}


	
}
