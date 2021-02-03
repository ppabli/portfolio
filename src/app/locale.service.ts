import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LocaleService {

	availableLocales = ['es', 'gl', 'en'];

	constructor(private translate: TranslateService, private cookieService: CookieService) {

	}

	initLocale() {

		this.setPreferedLocale(this.cookieService.get('preferedLocale') || this.getPreferedLocale());

	}

	getAvailablesLocales() {

		return this.availableLocales;

	}


	getPreferedLocale() {

		for (let locale of navigator.languages) {

			let localeName = locale.replace(/_|-.*/, '');

			if (this.availableLocales.includes(localeName)) {

				return localeName;

			}

		}

	}

	setPreferedLocale(localeName: string) {

		if (this.availableLocales.includes(localeName)) {

			this.cookieService.set('preferedLocale', localeName);
			this.translate.setDefaultLang(localeName);

		}

	}

}