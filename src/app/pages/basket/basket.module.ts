import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { TranslateModule } from '@ngx-translate/core'

import { BasketRoutingModule } from './basket-routing.module'
import { BasketComponent } from './basket.component'
import { BasketTableComponent } from './basket-table/basket-table.component'
import { BasketBannerComponent } from './basket-banner/basket-banner.component'
import { LayoutModule } from '@shared/layout/layout.module'
import { GenericButtonModule } from '@shared/components/generic-button/generic-button.module'
import { QuantitySelectorModule } from '@shared/components/quantity-selector/quantity-selector.module'
import { I18nService } from '@resources/i18n/i18n.service'

import basketEN from './lang/en/basket.json'
import basketFR from './lang/fr/basket.json'

@NgModule({
  declarations: [
    BasketComponent,
    BasketTableComponent,
    BasketBannerComponent,
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    LayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    GenericButtonModule,
    QuantitySelectorModule,
    TranslateModule,
  ],
})
export class BasketModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.addTranslations('en', basketEN)
    this.i18nService.addTranslations('fr', basketFR)
  }
}
