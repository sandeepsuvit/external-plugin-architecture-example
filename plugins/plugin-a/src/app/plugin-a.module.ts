import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluginAComponent } from './plugin-a.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [PluginAComponent],
    entryComponents: [PluginAComponent],
    providers: [{
        provide: 'plugins',
        useValue: [{
            name: 'plugin-a-component',
            component: PluginAComponent,
        }],
        multi: true
    }]
})
export class PluginAModule { }