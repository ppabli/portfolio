import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-scroll',
	templateUrl: './scroll.component.html',
	styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {

	@Input('id')
	id: number;

	@Input('way')
	way: 'up' | 'down';

	scroll(e) {

		e.preventDefault();

		let finalId = this.id;

		if (this.way == 'up') {

			finalId--;

		} else {

			finalId++

		}

		let element = document.getElementById(String(finalId));

		if (element) {

			element.scrollIntoView({ behavior: 'smooth', block: 'start' })

		}

	}

}
