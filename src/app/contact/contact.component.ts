import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

	FormGroup: FormGroup;

	ngOnInit() {
		this.FormGroup = this.builder.group({
			name: ['', Validators.required],
			email: ['', Validators.required],
			subject: ['', Validators.required],
			message: ['', Validators.required]
		});
	}

	constructor(private builder: FormBuilder, private contact: ContactService, private toastr: ToastrService, private translate: TranslateService) {

	}

	onSubmit(FormData) {

		if (this.FormGroup.valid) {

			this.contact.postMessage(FormData).subscribe();
			this.toastr.success(this.translate.instant('contact.success'), '');
			this.FormGroup.reset();

		}

	}

}
