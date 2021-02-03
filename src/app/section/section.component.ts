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

	}

}
