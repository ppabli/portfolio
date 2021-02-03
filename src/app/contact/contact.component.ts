import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	FormGroup: FormGroup;
	constructor(private builder: FormBuilder, private contact: ContactService) {

	}

	ngOnInit() {
		this.FormGroup = this.builder.group({
			name: new FormControl('', [Validators.required]),
			email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
			subject: new FormControl('', [Validators.required]),
			message: new FormControl('', [Validators.required])
		})
	}

	onSubmit(FormData) {

		if (this.FormGroup.valid) {

			this.contact.postMessage(FormData).subscribe();

		}

	}

}