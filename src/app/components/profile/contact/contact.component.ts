import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import '../../../../assets/smtp.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public Email: any;
  public model: any = {};
  public fg: FormGroup = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    patronus: new FormControl(''),
    image: new FormControl(''),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fg = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  public validFields(field: string) {
    return this.fg.controls[field].errors && this.fg.controls[field].touched;
  }
  public sendEmail() {
    console.log(this.fg.value);
    this.fg.reset;
    
    this.Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'luisguerrero12387@gmail.com',
      Password: 'CBDCDC32BF6F14BF4895BAA07A9DD97081E1',
      To: 'udith.indrakantha@gmail.com',
      From: `luisguerrero12387@gmail.com`,
      Subject: 'este es el asunto',
      Body: 'te en enviaron un mensaje',
    }).then(console.log('bien'));
  }

}
