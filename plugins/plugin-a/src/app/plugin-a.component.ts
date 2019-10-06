import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'plugin-a-component',
    templateUrl: './plugin-a.component.html'
})
export class PluginAComponent implements OnInit{
    public myForm: FormGroup;
    fb: FormBuilder;

    constructor(
        @Inject(FormBuilder) formBuilder: FormBuilder,
    ) { 
        this.fb = formBuilder;
    }

    ngOnInit() {
        // Initilalize the form
        this._initForm();
    }

    private _initForm() {
        this.myForm = this.fb.group({
            firstName: [null, [Validators.required]],
            lastName: [null, Validators.required]
        });
    }

    onSubmit() {
        console.log(this.myForm.value);
    }
}