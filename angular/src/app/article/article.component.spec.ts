import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';

// Définition du bloc de test pour le composant ArticleComponent
describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  // Avant chaque test, on configure le module de test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // On importe le composant dans le module de test
      imports: [ ArticleComponent ]
    })
    .compileComponents(); // Compilation des composants nécessaires

    // Création d'une instance du composant pour le test
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Déclenche la détection des changements dans Angular
  });

  // Test de base pour vérifier si le composant est bien créé
  it('should create', () => {
    expect(component).toBeTruthy(); // Vérifie que l'instance du composant existe
  });
});
