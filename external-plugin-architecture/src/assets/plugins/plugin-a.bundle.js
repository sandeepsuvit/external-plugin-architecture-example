(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms'], factory) :
	(factory((global['plugin-a'] = {}),global.core,global.forms));
}(this, (function (exports,core,forms) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

let PluginAComponent = class PluginAComponent {
    constructor(formBuilder) {
        this.fb = formBuilder;
    }
    ngOnInit() {
        this._initForm();
    }
    _initForm() {
        this.myForm = this.fb.group({
            firstName: [null, [forms.Validators.required]],
            lastName: [null, forms.Validators.required]
        });
    }
    onSubmit() {
        console.log(this.myForm.value);
    }
};
PluginAComponent = __decorate([
    core.Component({
        selector: 'plugin-a-component',
        template: `<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" formControlName="firstName" required />
    </div>

    <div class="form-group">
        <label for="alterEgo">Last Name</label>
        <input type="text" class="form-control" formControlName="lastName">
    </div>

    <button type="submit" class="btn btn-success">Submit</button>
</form>`
    }),
    __param(0, core.Inject(forms.FormBuilder))
], PluginAComponent);

exports.PluginAModule = class PluginAModule {
};
exports.PluginAModule = __decorate([
    core.NgModule({
        imports: [
            // CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule
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
], exports.PluginAModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
