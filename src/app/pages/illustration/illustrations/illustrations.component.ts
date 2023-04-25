import { ChangeDetectionStrategy, Component } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { combineLatestWith, map, startWith, switchMap, tap } from 'rxjs/operators'

import { IllustrationService } from '@resources/illustration/illustration.service'
import { Illustration, IllustrationParams } from '@resources/illustration/illustration.model'

@Component({
  selector: 'pb-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IllustrationsComponent {
  defaultPerPage = 15

  maxItems$: BehaviorSubject<number> = new BehaviorSubject(0)
  illustrationsParams$: BehaviorSubject<IllustrationParams> = new BehaviorSubject({perPage: this.defaultPerPage})
  illustrations$: Observable<Illustration[]> = this.illustrationsParams$.pipe(
    switchMap(params => this.illustrationService.getIllustrations(params)),
    tap(response => this.maxItems$.next(response.maxItems)),
    map(response => response.illustrations),
    startWith([]),
  )
  canLoadMore$: Observable<boolean> = this.illustrationsParams$.pipe(
    combineLatestWith(this.maxItems$),
    map(([params, maxItems]) => maxItems > params.perPage),
  )

  constructor(
    private illustrationService: IllustrationService,
  ) { }

  loadMoreProduct(): void {
    const perPage = (this.illustrationsParams$.value.perPage || 0) + this.defaultPerPage
    this.illustrationsParams$.next({perPage: perPage})
  }

}
