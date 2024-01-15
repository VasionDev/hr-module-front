import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { RecruitmentFormComponent } from './components/recruitment/recruitment-form/recruitment-form.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitmentComponent,
    children: [
      {path: '', component: RecruitmentFormComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
