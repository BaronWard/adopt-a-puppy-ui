import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-adoption-form',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule
    , FormsModule, ReactiveFormsModule
  ],
  templateUrl: './adoption-form.component.html',
  styleUrl: './adoption-form.component.scss'
})
export class AdoptionFormComponent {
  applicationFormGroup: FormGroup;

  //Create FormGroup For Form Containing Name, Contact Details, Home Address
  constructor(private fb: FormBuilder){
    this.applicationFormGroup = this.fb.group({
      name: [''],
      contactNumber: [''],
      homeAddress: ['']
    })
  }

  submitApplication() {
    //Add API Call for submitting form
  }
}
