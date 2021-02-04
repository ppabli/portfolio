import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LocaleService } from './locale.service';
import { ThemeService } from './theme.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

	@ViewChild('main') section: ElementRef;

	ts: number = 0;
	ignoreNewEvent = false;
	themeService: ThemeService = null;

	constructor(private localeService: LocaleService, private newThemeService: ThemeService) {

		localeService.initLocale();
		this.themeService = newThemeService;

	}

	ngAfterViewInit() {

		this.themeService.initTheme();

	}

	onWheelScroll(e) {

		e.preventDefault();

		if (this.ignoreNewEvent) {

			return;

		}

		this.ignoreNewEvent = true;

		let actualSectionId = Math.floor(window.pageYOffset / window.innerHeight) + 1;

		let element = document.getElementById(String(actualSectionId + (e.deltaY / 100)));

		if (element) {

			element.scrollIntoView({ behavior: 'smooth', block: 'start' })

		}

		setTimeout(() => {

			this.ignoreNewEvent = false;

		}, 250);

	}

	nullEvent(e) {

		e.preventDefault();

	}

}
