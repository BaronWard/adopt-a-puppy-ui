import { TitleCasePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puppy-card',
  standalone: true,
  imports: [MatCardModule, TitleCasePipe],
  templateUrl: './puppy-card.component.html',
  styleUrl: './puppy-card.component.scss'
})
export class PuppyCardComponent {
  @Input() puppy: any;
  router = inject(Router);

  navigateToDetails(puppyId: string){
    console.log(puppyId);
    this.router.navigate(['puppy', puppyId]);
  }
}
