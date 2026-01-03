import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-features-benefits',
  templateUrl: './features-benefits.html',
  styleUrls: ['./features-benefits.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    id: 'features'
  }
})
export class FeaturesBenefits {}