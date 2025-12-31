import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { CommunityShowcase } from './components/community-showcase/community-showcase';
import { CallToAction } from './components/call-to-action/call-to-action';
import { FeaturesBenefits } from './components/features-benefits/features-benefits';
import { AnimateOnScrollDirective } from '../../core/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, HowItWorks, CommunityShowcase, FeaturesBenefits, CallToAction, AnimateOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  
}
