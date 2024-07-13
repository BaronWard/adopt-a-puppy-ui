import { Component } from '@angular/core';
import { PuppyCardComponent } from '../../shared/components/puppy-card/puppy-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PuppyCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  puppies: any[] = [
    {
      "id": 1,
      "name": "Samuel",
      "age": 1,
      "gender": "male",
      "isVaccinated": true,
      "isNeutered": true,
      "size": "small",
      "breed": "Jack Russell",
      "traits": [ "Quiet", "Great with children" ],
      "photoUrl": "https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      "id": 2,
      "name": "Tillie",
      "age": 2,
      "gender": "female",
      "isVaccinated": true,
      "isNeutered": true,
      "size": "medium",
      "breed": "Collie cross",
      "traits": [ "Affectionate", "Loves to play" ],
      "photoUrl": "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "id": 3,
      "name": "Barnaby",
      "age": 1,
      "gender": "male",
      "isVaccinated": false,
      "isNeutered": false,
      "size": "large",
      "breed": "Labrador",
      "traits": [ "Very active", "Big appetite" ],
      "photoUrl": "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      "id": 4,
      "name": "Emily",
      "age": 3,
      "gender": "female",
      "isVaccinated": false,
      "isNeutered": true,
      "size": "small",
      "breed": "Springer Spaniel",
      "traits": [ "Friendly", "Great around other dogs" ],
      "photoUrl": "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    {
      "id": 5,
      "name": "Elmo",
      "age": 4,
      "gender": "male",
      "isVaccinated": false,
      "isNeutered": true,
      "size": "small",
      "breed": "French Bulldog",
      "traits": [ "Friendly", "Great around other dogs" ],
      "photoUrl": "https://images.unsplash.com/photo-1579198026529-512e75ad82c2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 6,
      "name": "Zoe",
      "age": 3,
      "gender": "female",
      "isVaccinated": false,
      "isNeutered": true,
      "size": "small",
      "breed": "French Bulldog",
      "traits": [ "Friendly", "Great with children" ],
      "photoUrl": "https://images.unsplash.com/photo-1716585365681-1e491ae533a1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  navigateToDetails(puppyId: string) {
    console.log(puppyId);
  }
}
