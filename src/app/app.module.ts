import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { ContactService } from './contact.service';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IconsModule } from './icons/icons.module';
import { LanguagesComponent } from './languages/languages.component';
import { LocaleService } from './locale.service';
import { OtherComponent } from './other/other.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SectionComponent } from './section/section.component';
import { SocialComponent } from './social/social.component';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { ThemeService } from './theme.service';

export function createTranslateLoader(http: HttpClient) {

	return new TranslateHttpLoader(http, './../assets/i18n/', '.json');

}

@NgModule({
	declarations: [
		AppComponent,
		BackgroundComponent,
		SectionComponent,
		AboutComponent,
		HomeComponent,
		ContactComponent,
		ScrollComponent,
		SocialComponent,
		OtherComponent,
		TecnologiesComponent,
		LanguagesComponent,
		ProjectsComponent
	],
	imports: [
		IconsModule,
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		NgbModule,
		HttpClientModule,
		TranslateModule.forRoot({

			loader: {

				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]

			}

		})
	],
	providers: [
		CookieService,
		ThemeService,
		LocaleService,
		ContactService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
