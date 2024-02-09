import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css',
})
export class AccountSettingsComponent implements OnInit {
  userForm!: FormGroup;
  validationError: string[] = [];


  constructor(private titleService: Title, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.titleService.setTitle('MaÉ ♡ | Paramètres du compte');

    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required, Validators.pattern("^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z0-9\\s,.'-]+$")]],
      addressLine2: [null],
      zip: [null, [Validators.required, Validators.pattern("^\\d{5}$")]],
      city: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: [null, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
      newPassword: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
      newPasswordConfirmation: [null, [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
    });
  }

  // check if valid to do...
  submitModifications() {
    console.log(this.userForm.value)
    this.validationError = [];
  
    if (this.userForm.invalid) {
      const invalidControls = Object.keys(this.userForm.controls).filter(controlName => {
        const currentControl = this.userForm.get(controlName);
        return currentControl && currentControl.invalid;
      });
      this.validationError = invalidControls;
    } else {
      // Si valide, enregistre en base de données et lacent une modale qui confirme les modifif enregistrées
    }
  }
}


