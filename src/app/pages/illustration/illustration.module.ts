import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxImageZoomModule } from 'ngx-image-zoom'
import { TranslateModule } from '@ngx-translate/core'

import { IllustrationsRoutingModule } from './illustration-routing.module'
import { IllustrationsComponent } from './illustrations/illustrations.component'
import { IllustrationComponent } from './illustration/illustration.component'
import { IllustrationImageComponent } from './illustration/illustration-image/illustration-image.component'
import { IllustrationDescriptionComponent } from './illustration/illustration-description/illustration-description.component'
import { LayoutModule } from '@shared/layout/layout.module'
import { ItemsContainerModule } from '@shared/components/items-container/items-container.module'
import { GenericButtonModule } from '@shared/components/generic-button/generic-button.module'
import { QuantitySelectorModule } from '@shared/components/quantity-selector/quantity-selector.module'
import { CollectionImagesModule } from '@shared/components/collection-images/collection-images.module'
import { I18nService } from '@resources/i18n/i18n.service'

import illustrationEN from './lang/en/illustration.json'
import illustrationFR from './lang/fr/illustration.json'

@NgModule({
  declarations: [
    IllustrationsComponent,
    IllustrationComponent,
    IllustrationImageComponent,
    IllustrationDescriptionComponent,
  ],
  imports: [
    CommonModule,
    IllustrationsRoutingModule,
    LayoutModule,
    ItemsContainerModule,
    GenericButtonModule,
    NgxImageZoomModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    QuantitySelectorModule,
    CollectionImagesModule,
    TranslateModule,
  ],
})
export class IllustrationModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.addTranslations('en', illustrationEN)
    this.i18nService.addTranslations('fr', illustrationFR)
  }
}
