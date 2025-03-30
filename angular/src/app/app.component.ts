import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';

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

        <router-outlet>
        </router-outlet>
      </section>
    </main>  
  `,
  styleUrls: ['./app.component.css'],
  imports: [ArticleComponent, UserComponent, RouterModule]
})
export class AppComponent {
  title = 'articles';
}
