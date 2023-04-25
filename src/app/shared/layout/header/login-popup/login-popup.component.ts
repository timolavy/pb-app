import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslateService } from '@ngx-translate/core'

import { AuthService } from '@resources/auth/auth.service'

@Component({
  selector: 'pb-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPopupComponent {
  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private translate: TranslateService,
    private snackBar: MatSnackBar,
  ) { }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue()).subscribe(logged => {
        const message = this.translate.instant(logged ? 'LOGIN.SUCCESS' : 'LOGIN.ERROR')
        this.snackBar.open(message, 'Ok', {duration: 3000})
      })
    }
  }

  ngOnDestroy() {
    this.loginForm.reset()
  }
}
