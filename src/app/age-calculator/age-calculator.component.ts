import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as fs from 'node:fs';
@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css'],
})
export class AgeCalculatorComponent implements OnInit {
  ngOnInit(): void {}

  data = new FormGroup({
    dob: new FormControl(),
    currentdate: new FormControl(),
  });

  Year: any = null;
  Month: any = null;
  Day: any = null;
  Hours: any = null;

  submit() {
    if (
      this.data.invalid == false &&
      this.data.value.dob <= this.data.value.currentdate
    ) {
      const dt1 = new Date(this.data.value.dob);
      const dt2 = new Date(this.data.value.currentdate);
      var time = (dt2.getTime() - dt1.getTime()) / 1000;
      var year = Math.abs(Math.floor(time / (60 * 60 * 24) / 365));
      var month = Math.abs(Math.floor(time / (60 * 60 * 24 * 30.41)));
      var days = Math.abs(Math.floor(time / (60 * 60 * 24)));
      var hours = days * 24;
      this.Year = year;
      this.Month = month;
      this.Day = days;
      this.Hours = hours;
    } else {
      alert(
        " Please select correct date's & date of birth should be less than current / till date."
      );
    }
  }
}
