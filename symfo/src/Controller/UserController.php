<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    // Injection du EntityManager dans le contrôleur
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/api/users', name: 'api_users', methods: ['GET'])]
    public function getUsers(): JsonResponse
    {
        // Utilisation du repository pour récupérer tous les users
        $users = $this->entityManager->getRepository(User::class)->findAll();

        // Sérialisation des users en JSON
        return $this->json($users);
    }

    #[Route('/api/user/{id}', name: 'api_user_show', methods: ['GET'])]
    public function getUserById(int $id): JsonResponse
    {
        // Recherche un user spécifique par ID
        $user = $this->entityManager->getRepository(User::class)->find($id);

        if (!$user) {
            return new JsonResponse(['message' => 'User not found'], JsonResponse::HTTP_NOT_FOUND);
        }

        // Retourner l'user sous format JSON
        return $this->json($user);
    }
}
