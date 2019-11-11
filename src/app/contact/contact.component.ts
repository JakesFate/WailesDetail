import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isContact = true;
  isloading = false;
  submit() {
    this.isloading = !this.isloading;
  }
  toggle() {
    this.isContact = !this.isContact;
  }

  constructor() { }

  ngOnInit() {
  }

}
