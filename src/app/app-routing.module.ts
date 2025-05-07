import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PipeCustomPipeComponent } from './pipe-custom-pipe/pipe-custom-pipe.component';
import {CustomDirectTestComponent} from './custom-directive/custom-direct-test/custom-direct-test.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { QueryRouteParamsComponent } from './query-route-params/query-route-params.component';
import { QueryParamsComponent } from './query-route-params/query-params/query-params.component';
import { RouteParamsComponent } from './query-route-params/route-params/route-params.component';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from './auth.guard';
import { TrackByComponent } from './track-by/track-by.component';
import { ObservCompComponent } from './observ-comp/observ-comp.component';
import { RatingComponent } from './rating/rating.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UnitTestComponent } from './unit-test/unit-test.component';

const routes: Routes = [
  {
    path : '',
    component: TemplateDrivenComponent
  },
  {
    path : 'InputOutput',
    component: InputOutputComponent
  },
  {
    path : 'PipeCustomP',
    component: PipeCustomPipeComponent
  },
  {
    path : 'CustomDirective',
    component : CustomDirectTestComponent
  },
  {
    path : 'ReactiveForms',
    loadChildren: () => import('./reactive-forms/reactive-forms.module').then(m => m.ReactiveModule)
  },
  {
    path: 'DynamicForms',
    component : DynamicFormsComponent
  },
  {
    path: 'QueryRouteParams',
    component: QueryRouteParamsComponent
  },
  {
    path: 'QueryParams',
    component: QueryParamsComponent
  },
  {
    path: 'RouteParams/:id',
    component: RouteParamsComponent
  },
  {
    path: 'ServiceComp',
    component: ServiceCompComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'TrackBy',
    component: TrackByComponent
  },
  {
    path: 'Observabel',
    component: ObservCompComponent
  },
  {
    path: 'Rating',
    component: RatingComponent
  },
  {
    path: 'FileUpload',
    component: FileUploadComponent
  },
  {
    path: 'UnitTest',
    component: UnitTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
