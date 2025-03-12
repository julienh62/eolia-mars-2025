<?php

// src/Controller/EventController.php

namespace App\Controller;

use App\Repository\EventRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EventController extends AbstractController
{
    #[Route('/api/events', name: 'get_events')]
    public function getEvents(EventRepository $eventRepository): JsonResponse
    {
        $events = $eventRepository->findAll();
        $formattedEvents = [];

        foreach ($events as $event) {
            $formattedEvents[] = [
               'title' => $event->getTitle(),
               'date' => $event->getDate()->format(\DateTime::ATOM),  // Formatez la date au format ISO 8601
            ];
        }

        return $this->json($formattedEvents);  // Renvoie les événements formatés en JSON
    }
}
