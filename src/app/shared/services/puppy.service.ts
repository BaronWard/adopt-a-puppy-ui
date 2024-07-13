import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { PUPPY_API } from '../../core/constants/api.constants';
import { Puppy } from '../../core/models/puppy.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuppyService {
  httpService = inject(HttpService)

  constructor() { }

  getAllPuppies() : Observable<Array<Puppy>> {
    return this.httpService.get(`${PUPPY_API.BASE}`)
  }
}
