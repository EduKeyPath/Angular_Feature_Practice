import { NgModule  } from "@angular/core";
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { ReactiveFormsComponent } from "./reactive-forms.component";
import {ReactiveRouterModule} from './reactive-router.module';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        ReactiveFormsComponent
    ],
    imports: [
        ReactiveFormsModule,
        ReactiveRouterModule,
        CommonModule,
        FormsModule
    ],
    providers: []
})

export class ReactiveModule{}