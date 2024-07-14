import { Component, inject, OnInit, viewChild } from '@angular/core';
import { PuppyCardComponent } from '../../shared/components/puppy-card/puppy-card.component';
import { map, Observable } from 'rxjs';
import { Puppy } from '../../core/models/puppy.model';
import { PuppyService } from '../../shared/services/puppy.service';
import { AsyncPipe, IMAGE_CONFIG } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatDividerModule, 
      ReactiveFormsModule, AsyncPipe, FormsModule, PuppyCardComponent, RouterModule],
  providers: [{ provide: IMAGE_CONFIG, useValue: { disableImageSizeWarning: true, disableImageLazyLoadWarning: true } },
  ], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  readonly filterDialogTrigger = viewChild.required(MatMenuTrigger);
  router = inject(Router); 
  puppyService = inject(PuppyService);
  puppies: Observable<Puppy[]> | undefined;
  searchQuery: string = '';
  filteredPuppies: Observable<Puppy[]> | undefined;
  displayedPuppies: Observable<Puppy[]> | undefined;
  filterGroup: FormGroup;


  constructor(private fb: FormBuilder) {
    this.filterGroup = this.fb.group({
      age: [''],
      breed: [''],
      gender: [''],
      size: [''],
    })
  }

  ngOnInit(): void {
    this.puppies = this.puppyService.getAllPuppies();
    this.displayedPuppies = this.puppies;
  }

  filterPuppiesArray(searchQuery: string){
    let filteredPuppies: Observable<Puppy[]> | undefined;
    if (this.displayedPuppies && searchQuery) {
      filteredPuppies = this.displayedPuppies.pipe(
        map(puppies => puppies.filter(puppy => Object.values(puppy).some(value => String(value).toLowerCase().includes(searchQuery.toLowerCase()))))
      )
      this.displayedPuppies = filteredPuppies;
    } else{
      this.displayedPuppies = this.puppies;
    }
  }

  openFiltersDialog(){
    console.log('open filters dialog');
  }

  filterPuppies() {
    this.displayedPuppies = this.puppyService.filterPuppies(this.filterGroup.value);
  }
}
