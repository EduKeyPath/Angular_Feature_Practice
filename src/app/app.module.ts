import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { CommonModule } from '@angular/common';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './input-output/child/child.component';
import { PipeCustomPipeComponent } from './pipe-custom-pipe/pipe-custom-pipe.component';
import { CustomMultiplyPipe } from './pipe-custom-pipe/custom-multiply.pipe';
import { FilterPipePipe } from './pipe-custom-pipe/filter-pipe.pipe';
import { CustomDirectiveDirective } from './custom-directive/custom-directive.directive';
import { CustomDirectTestComponent } from './custom-directive/custom-direct-test/custom-direct-test.component';
import { HoverDirective } from './custom-directive/hover-directive';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { QueryRouteParamsComponent } from './query-route-params/query-route-params.component';
import { QueryParamsComponent } from './query-route-params/query-params/query-params.component';
import { RouteParamsComponent } from './query-route-params/route-params/route-params.component';
import { IfDirectiveDirective } from './custom-directive/if-directive.directive';
import { CamelPipePipe } from './pipe-custom-pipe/camel-pipe.pipe';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SortingPipe } from './pipe-custom-pipe/sorting.pipe';
import { TrackByComponent } from './track-by/track-by.component';
import { StatusPipe } from './track-by/status.pipe';
import { ObservCompComponent } from './observ-comp/observ-comp.component';
import { RatingComponent } from './rating/rating.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UnitTestComponent } from './unit-test/unit-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    InputOutputComponent,
    ChildComponent,
    PipeCustomPipeComponent,
    CustomMultiplyPipe,
    FilterPipePipe,
    CustomDirectiveDirective,
    CustomDirectTestComponent,
    HoverDirective,
    DynamicFormsComponent,
    QueryRouteParamsComponent,
    QueryParamsComponent,
    RouteParamsComponent,
    IfDirectiveDirective,
    CamelPipePipe,
    ServiceCompComponent,
    DashboardComponent,
    SortingPipe,
    TrackByComponent,
    StatusPipe,
    ObservCompComponent,
    RatingComponent,
    FileUploadComponent,
    UnitTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
