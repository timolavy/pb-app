import { ChangeDetectionStrategy, Component } from '@angular/core'
import { map, tap } from 'rxjs/operators'
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslateService } from '@ngx-translate/core'

import { Illustration } from '@resources/illustration/illustration.model'
import { BasketService } from '@resources/basket/basket.service'
import { Format } from '@resources/format/format.model'

@Component({
  selector: 'pb-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IllustrationComponent {
  selectedFormat$: ReplaySubject<Format> = new ReplaySubject(1)
  selectedImage$: ReplaySubject<string> = new ReplaySubject(1)
  selectedQuantity$: BehaviorSubject<number> = new BehaviorSubject(1)
  illustration$: Observable<Illustration> = this.route.data.pipe(
    map(data => data.illustration),
    tap(illustration => {
      this.selectedFormat$.next(illustration.formats[0])
      this.selectedImage$.next(illustration.images.packShot)
    }),
  )

  constructor(
    private route: ActivatedRoute,
    private basketService: BasketService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
  ) { }

  onSelectImage(selected: string): void {
    this.selectedImage$.next(selected)
  }

  onChangeFormat(format: Format): void {
    this.selectedFormat$.next(format)
  }

  onChangeQuantity(quantity: number): void {
    this.selectedQuantity$.next(quantity)
  }

  onAddToCart(params: {illustration: Illustration, selectedFormat: Format, selectedQuantity: number}) {
    this.basketService.addProduct(params.illustration, params.selectedFormat, params.selectedQuantity)
    this.snackBar.open(this.translate.instant('ILLUSTRATION.PRODUCT_ADDED'), 'Ok', {
      duration: 3000,
    })
  }
}
