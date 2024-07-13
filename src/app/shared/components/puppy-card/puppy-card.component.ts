import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-puppy-card',
  standalone: true,
  imports: [MatCardModule, TitleCasePipe],
  templateUrl: './puppy-card.component.html',
  styleUrl: './puppy-card.component.scss'
})
export class PuppyCardComponent {
  @Input() puppy: any;

  navigateToDetails(puppyId: string){
    console.log(puppyId);
  }
}
