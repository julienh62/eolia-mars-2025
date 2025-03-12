<?php 


namespace App\ApiResource;

use App\Entity\Event;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\Post;

#[ApiResource(
    operations: [
        new Get(),
        new Post()
    ]
)]
class EventResource // Renommé pour éviter le conflit
{
    // Votre logique API
}
