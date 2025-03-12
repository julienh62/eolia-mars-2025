import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/votre-logo.png"
        alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-article>

        </app-article>
      </section>
    </main>  
  `,
  styleUrls: ['./app.component.css'],
  imports: [ArticleComponent]
})
export class AppComponent {
  title = 'articles';
}
