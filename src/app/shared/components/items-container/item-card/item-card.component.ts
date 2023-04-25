import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Router } from '@angular/router'

import { environment } from '@env/environment'
import { Illustration } from '@resources/illustration/illustration.model'

@Component({
  selector: 'pb-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent implements OnChanges {
  @Input() item: Illustration

  env = environment
  imgUrl = ''
  minPrice = 0
  maxPrice = 0

  constructor(
    private router: Router,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item) {
      this.imgUrl = this.item.images.packShot
      this.minPrice = Math.min.apply(Math, this.item.formats.map(format => format.price))
      this.maxPrice = Math.max.apply(Math, this.item.formats.map(format => format.price))
    }
  }

  goToIllustration(id: string) {
    this.router.navigate(['/illustrations', id])
  }

  changeImage(key: 'packShot' | 'settingScene') {
    this.imgUrl = this.item.images[key]
  }
}
