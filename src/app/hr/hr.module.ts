import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { RecruitmentFormComponent } from './components/recruitment/recruitment-form/recruitment-form.component';
import { RecruitmentListComponent } from './components/recruitment/recruitment-list/recruitment-list.component';
import { Recruitment } from './models/recruitment.model';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecruitmentComponent,
    RecruitmentFormComponent,
    RecruitmentListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Recruitment],
  imports: [
    CommonModule,
    HrRoutingModule,
    FormsModule
  ],

})
export class HrModule { }
