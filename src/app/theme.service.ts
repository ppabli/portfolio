import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ThemeService {

	availableThemes: string[] = ['white', 'dark', 'blue'];

	constructor(private cookieService: CookieService) {

	}

	initTheme() {

		if (this.cookieService.get('preferedTheme')) {

			this.toggleTheme(this.cookieService.get('preferedTheme'));

		} else {

			let date = new Date();
			let hour = date.getHours();

			if (hour > 19 || hour < 10) {

				this.toggleTheme('dark');

			} else {

				this.toggleTheme('white');

			}

		}

	}

	getAvailableThemes() {

		return this.availableThemes;

	}

	toggleTheme(themeName: string) {

		switch (themeName.toLowerCase()) {
			case 'white':
				this.applyWhiteTheme();
				break;
			case 'dark':
				this.applyDarkTheme();
				break;
			case 'blue':
				this.applyBlueTheme();
				break;
			default:
				this.applyWhiteTheme();
				break;
		}

	}

	resetTheme() {

		document.querySelectorAll('.toggleTheme').forEach(element => {

			let regex1 = new RegExp('\\b' + 'bg-' + '[^ ]*[ ]?\\b', 'g');
			let regex2 = new RegExp('\\b' + 'text-[w|d|p]' + '[^ ]*[ ]?\\b', 'g');
			let regex3 = new RegExp('\\b' + 'arrow-' + '[^ ]*[ ]?\\b', 'g');
			let regex4 = new RegExp('\\b' + 'border-' + '[^ ]*[ ]?\\b', 'g');

			element.className = element.className.replace(regex1, '');
			element.className = element.className.replace(regex2, '');
			element.className = element.className.replace(regex3, '');
			element.className = element.className.replace(regex4, '');

		});

	}

	applyWhiteTheme() {

		this.resetTheme();

		document.querySelectorAll('.toggleTheme').forEach(element => {

			if (element.tagName != 'A') {

				element.classList.add('bg-white');

			}

			element.classList.add('text-dark');
			element.classList.add('arrow-dark');
			element.classList.add('border-dark');

		});

		this.cookieService.set('preferedTheme', 'white');

	}

	applyDarkTheme() {

		this.resetTheme();

		document.querySelectorAll('.toggleTheme').forEach(element => {

			if (element.tagName != 'A') {

				element.classList.add('bg-dark');

			}

			element.classList.add('text-white');
			element.classList.add('arrow-white');
			element.classList.add('border-white');

		});

		this.cookieService.set('preferedTheme', 'dark');

	}

	applyBlueTheme() {

		this.resetTheme();

		document.querySelectorAll('.toggleTheme').forEach(element => {

			if (element.tagName != 'A') {

				element.classList.add('bg-primary');

			}

			element.classList.add('text-white');
			element.classList.add('arrow-white');
			element.classList.add('border-white');

		});

		this.cookieService.set('preferedTheme', 'blue');

	}

}