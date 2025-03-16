import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Assure-toi que le chemin du service est correct
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <section>

      <div *ngIf="filteredUsers.length > 0; else noUsers">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let user of filteredUsers">
              <td>{{ user.id }}</td>
              <td>{{ user.email }}</td>  
            </tr>
          </tbody>
        </table>
      </div>

      <ng-template #noUsers>
        <p>Aucun user trouvé.</p>
      </ng-template>
    </section>
  `,
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: any[] = [];  // Tableau pour stocker les users récupérés
  filteredUsers: any[] = [];  // Tableau pour les users filtrés

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();  // Appel à la méthode pour récupérer les users
  }

  // Méthode pour récupérer les users depuis l'API
  getUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      this.filteredUsers = data;  // Par défaut, tous les users sont affichés
    });
  }

  // Méthode pour filtrer les users par titre
  onFilterChange(event: any): void {
    const searchValue = event.target.value.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.email.toLowerCase().includes(searchValue)
    );
  }
}
