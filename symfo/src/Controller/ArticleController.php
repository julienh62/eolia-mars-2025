<?php

namespace App\Controller;

use App\Entity\Article;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends AbstractController
{
    // Injection du EntityManager dans le contrôleur
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/api/articles', name: 'api_articles', methods: ['GET'])]
    public function getArticles(): JsonResponse
    {
        // Utilisation du repository pour récupérer tous les articles
        $articles = $this->entityManager->getRepository(Article::class)->findAll();

        // Sérialisation des articles en JSON
        return $this->json($articles);
    }

    #[Route('/api/article/{id}', name: 'api_article_show', methods: ['GET'])]
    public function getArticle(int $id): JsonResponse
    {
        // Recherche un article spécifique par ID
        $article = $this->entityManager->getRepository(Article::class)->find($id);

        if (!$article) {
            return new JsonResponse(['message' => 'Article not found'], JsonResponse::HTTP_NOT_FOUND);
        }

        // Retourner l'article sous format JSON
        return $this->json($article);
    }
}
