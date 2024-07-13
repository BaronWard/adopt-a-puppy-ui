import { Component, inject, OnInit } from '@angular/core';
import { PuppyCardComponent } from '../../shared/components/puppy-card/puppy-card.component';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Puppy } from '../../core/models/puppy.model';
import { PuppyService } from '../../shared/services/puppy.service';
import { AsyncPipe, IMAGE_CONFIG } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PuppyCardComponent, AsyncPipe, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  providers: [{ provide: IMAGE_CONFIG, useValue: { disableImageSizeWarning: true, disableImageLazyLoadWarning: true } },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  puppyService = inject(PuppyService);
  puppies: Observable<Puppy[]> | undefined;
  searchQuery: string = '';
  filteredPuppies: Observable<Puppy[]> | undefined;
  displayedPuppies: Observable<Puppy[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.puppies = this.puppyService.getAllPuppies();
    this.displayedPuppies = this.puppies;
  }

  navigateToDetails(puppyId: string) {
    console.log(puppyId);
  }

  filterPuppiesArray(searchQuery: string){
    let filteredPuppies: Observable<Puppy[]> | undefined;
    if (this.puppies && searchQuery) {
      filteredPuppies = this.puppies.pipe(
        map(puppies => puppies.filter(puppy => Object.values(puppy).some(value => String(value).toLowerCase().includes(searchQuery.toLowerCase()))))
      )
      this.displayedPuppies = filteredPuppies;
    } else{
      this.displayedPuppies = this.puppies;
    }
  }
}
