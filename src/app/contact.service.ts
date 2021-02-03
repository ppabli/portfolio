import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ContactService {

	private url: string = 'https://formspree.io/f/xbjpwwwa';

	constructor(private http: HttpClient) {

	}

	postMessage(input: any) {

		return this.http.post(this.url, input, { responseType: 'text' }).pipe(
			(response) => {

				if (response) {

					return response;

				}

			}, (error: any) => {

				return error;

			}

		)

	}

}
