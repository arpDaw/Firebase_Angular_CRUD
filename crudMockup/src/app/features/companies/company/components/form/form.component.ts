import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Company } from '../../../interfaces/company.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly company: Company
  ){}

  ngOnInit(): void {
      this.setForm();
  }

  setForm(){
    this.form = this.formBuilder.group({
      defaultTemplateId: [this.company.defaultTemplateId, [Validators.required]],
      departments: [this.company.departments, [Validators.required]],
      name:[this.company.name, [Validators.required]],
      productTypes: [this.company.productTypes, [Validators.required]]
    })
  }

  submit(){
    this.dialogRef.close({...this.company, ...this.form.value})
  }

}
