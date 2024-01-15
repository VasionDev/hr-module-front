import { Component, OnInit } from '@angular/core';
import { Recruitment } from 'src/app/hr/models/recruitment.model';
import { Sex } from 'src/app/hr/models/sex.model';
import { ApiService } from 'src/app/hr/services/api.service';

@Component({
  selector: 'app-recruitment-form',
  templateUrl: './recruitment-form.component.html',
  styleUrls: ['./recruitment-form.component.css']
})
export class RecruitmentFormComponent implements OnInit {
  testA:Sex []= [];
  constructor(
    public recruitmentClass: Recruitment,
    private apiService: ApiService
  ) { 
    this.recruitmentClass = new Recruitment().deserialize({});
  }

  ngOnInit(): void {
    this.apiService.getGenderList().subscribe(res=> {
      res.forEach(element => {
        this.testA.push(new Sex().deserialize(element));
      });
      console.log(this.testA);
    })
  }

  checkDataUpdate() {
    console.log(this.recruitmentClass)
  }

  onCheckboxChanges(e: any) {
    console.log(e)
  }

  onDateChange(e: any) {
    console.log(e.detail.value)
    this.recruitmentClass.dob = e.detail.value
  }

}
