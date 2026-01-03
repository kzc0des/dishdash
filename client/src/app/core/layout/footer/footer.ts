import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly portfolioUrl = 'https://kenzo-vidal.vercel.app';
  readonly githubUrl = 'https://github.com/kzc0des';
  readonly linkedinUrl = 'https://linkedin.com/in/your-profile';
}