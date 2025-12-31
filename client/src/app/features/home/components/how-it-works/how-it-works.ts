import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.html',
  styleUrls: ['./how-it-works.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HowItWorks {}