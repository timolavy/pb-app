import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'pb-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent { }
