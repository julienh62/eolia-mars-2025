import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { UserComponent } from './user/user.component';
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

        <app-user>

        </app-user>
      </section>
    </main>  
  `,
  styleUrls: ['./app.component.css'],
  imports: [ArticleComponent, UserComponent]
})
export class AppComponent {
  title = 'articles';
}
