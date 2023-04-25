import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { TranslateModule } from '@ngx-translate/core'
import { RouterModule } from '@angular/router'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header/header.component'
import { LoginPopupComponent } from './header/login-popup/login-popup.component'
import { FooterComponent } from './footer/footer.component'
import { GenericButtonModule } from '@shared/components/generic-button/generic-button.module'
import { I18nService } from '@resources/i18n/i18n.service'
import { DirectivesModule } from '@shared/directives/directives.module'

import layoutEN from './lang/en/layout.json'
import layoutFR from './lang/fr/layout.json'

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    LoginPopupComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    GenericButtonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    TranslateModule,
    DirectivesModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.addTranslations('en', layoutEN)
    this.i18nService.addTranslations('fr', layoutFR)
  }
}
