import { Component } from '@angular/core';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent {

	private static classCounter: number = 1;
	id: number = SectionComponent.classCounter;

	constructor() {

		SectionComponent.classCounter++;

		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		window.addEventListener('resize', () => {

			let newVH = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${newVH}px`);

		});

	}

}
