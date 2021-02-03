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

			return

		}

		this.ignoreNewEvent = true;

		let actualSectionId = Math.floor(window.pageYOffset / window.innerHeight);
		let diff = window.pageYOffset - (window.innerHeight * actualSectionId);

		window.scroll({
			top: (window.pageYOffset + (window.innerHeight * (e.deltaY / 100))) - diff,
			left: 0,
			behavior: 'smooth'
		});

		setTimeout(() => {

			this.ignoreNewEvent = false;

		}, 250);

	}

	setTS(e) {

		this.ts = e.touches[0].clientY;

	}

	onTouchScroll(e) {

		e.preventDefault();

		if (this.ignoreNewEvent) {

			return

		}

		this.ignoreNewEvent = true;

		let te = e.changedTouches[0].clientY;

		let actualSectionId = Math.floor(window.pageYOffset / window.innerHeight);
		let diff = window.pageYOffset - (window.innerHeight * actualSectionId);

		window.scroll({
			top: (window.pageYOffset + (window.innerHeight * (this.ts > te ? 1 : -1))) - diff,
			left: 0,
			behavior: 'smooth'
		});

		setTimeout(() => {

			this.ignoreNewEvent = false;

		}, 100);

	}

}
