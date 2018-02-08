import {} from '@types/googlemaps';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ContactForm } from './../../models/contactForm';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isSubmitMessageVisible: boolean;

  private contactForm: ContactForm = {
    name: null,
    phone: null,
    email: null,
    message: null,
    spamFilter: null
  };

  constructor(
    private _contactService: ContactService
  ) { }

  ngOnInit() {
    this.isSubmitMessageVisible = false;
  }

  sendMail = (form: NgForm) => {
    if (this.contactForm.spamFilter == null) {
      this._contactService.sendContactData(this.contactForm)
        .subscribe(
        result => {
          this.isSubmitMessageVisible = true;
        });
    }

  }

}
