import { Component, Input } from '@angular/core';
import { routes } from '../../app.routes';

const appRoutes = routes;

@Component({
  selector: 'app-puppy-details',
  standalone: true,
  imports: [],
  templateUrl: './puppy-details.component.html',
  styleUrl: './puppy-details.component.scss'
})
export class PuppyDetailsComponent {
  @Input()
    set id(id: string) {
      this.puppyId = id;
    }

  puppyId: string = '1';
}
