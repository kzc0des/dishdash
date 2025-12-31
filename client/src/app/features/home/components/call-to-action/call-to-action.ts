import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.html',
  styleUrls: ['./call-to-action.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CallToAction {}