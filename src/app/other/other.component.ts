import { Component } from '@angular/core';
import { LocaleService } from '../locale.service';
import { ThemeService } from '../theme.service';

@Component({
	selector: 'app-other',
	templateUrl: './other.component.html',
	styleUrls: ['./other.component.scss']
})
export class OtherComponent {

	locales: string[] = [];
	themes: string[] = [];

	constructor(private localeService: LocaleService, private themeService: ThemeService) {

		this.locales = localeService.getAvailablesLocales();
		this.themes = themeService.getAvailableThemes();

	}

	changeLocale(localeName: string) {

		this.localeService.setPreferedLocale(localeName);

	}

	toggleTheme(themeName: string) {

		this.themeService.toggleTheme(themeName);

	}

}
