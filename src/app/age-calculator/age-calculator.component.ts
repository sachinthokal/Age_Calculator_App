import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css'],
})
export class AgeCalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data = new FormGroup({
    dob: new FormControl(),
    currentdate: new FormControl(),
  });

  Year: any = null;
  Month: any = null;
  Day: any = null;

  submit() {
    if (
      this.data.invalid == false &&
      this.data.value.dob <= this.data.value.currentdate
    ) {
      const dt1 = new Date(this.data.value.dob);
      const dt2 = new Date(this.data.value.currentdate);
      var time = (dt2.getTime() - dt1.getTime()) / 1000;
      // console.log('Time ' + time);
      var year = Math.abs(Math.floor(time / (60 * 60 * 24) / 365));
      var month = Math.abs(Math.floor(time / (60 * 60 * 24 * 30.41)));
      var days = Math.abs(Math.floor(time / (60 * 60 * 24)));
      this.Year = year;
      this.Month = month;
      this.Day = days;

      // let yy, mm, dd;

      // yy = Math.abs(Math.floor(time / (60 * 60 * 24) / 365)); // 0
      // mm = Math.abs(Math.floor(time / (60 * 60 * 24) / 30.41) / 30.41); // 60
      // dd = Math.abs(Math.floor(time / (60 * 60 * 24))); //2

      // console.log(time);
      // console.log('Year :- ' + yy + ' Month :- ' + mm + ' Days :- ' + dd);
    } else {
      alert(
        " Please select correct date's & date of birth should be less than current / till date."
      );
    }
  }
}
