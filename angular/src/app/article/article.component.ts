import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service'; // Assure-toi que le chemin du service est correct
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by title" (input)="onFilterChange($event)">
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="results">
      <div *ngIf="filteredArticles.length > 0; else noArticles">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let article of filteredArticles">
              <td>{{ article.id }}</td>
              <td>{{ article.title }}</td>  
            </tr>
          </tbody>
        </table>
      </div>

      <ng-template #noArticles>
        <p>Aucun article trouvé.</p>
      </ng-template>
    </section>
  `,
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  articles: any[] = [];  // Tableau pour stocker les articles récupérés
  filteredArticles: any[] = [];  // Tableau pour les articles filtrés

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.getArticles();  // Appel à la méthode pour récupérer les articles
  }

  // Méthode pour récupérer les articles depuis l'API
  getArticles(): void {
    this.articleService.getArticles().subscribe((data: any) => {
      this.articles = data;
      this.filteredArticles = data;  // Par défaut, tous les articles sont affichés
    });
  }

  // Méthode pour filtrer les articles par titre
  onFilterChange(event: any): void {
    const searchValue = event.target.value.toLowerCase();
    this.filteredArticles = this.articles.filter(article =>
      article.title.toLowerCase().includes(searchValue)
    );
  }
}
