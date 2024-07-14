import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { PUPPY_API } from '../../core/constants/api.constants';
import { Puppy } from '../../core/models/puppy.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuppyService {
  private httpService = inject(HttpService)

  constructor() { }

  getAllPuppies() : Observable<Array<Puppy>> {
    return this.httpService.get(`${PUPPY_API.BASE}`)
  }

  filterPuppies(filters: any): Observable<Array<Puppy>> {
    return this.httpService.get(`${PUPPY_API.FILTER}?age=${filters.age.toLowerCase() ?? ''}&breed=${filters.breed.toLowerCase() ?? ''}&gender=${filters.gender.toLowerCase() ?? ''}&size=${filters.size.toLowerCase() ?? ''}`)
  }

  getPuppyDetails(puppyId: number): Observable<Puppy> {
    return this.httpService.get(`${PUPPY_API.BASE}/${puppyId}`)
  }
}
