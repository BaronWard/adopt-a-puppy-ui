import { Component, inject, Input } from '@angular/core';
import { routes } from '../../app.routes';
import { PuppyService } from '../../shared/services/puppy.service';
import { Puppy } from '../../core/models/puppy.model';
import { Observable } from 'rxjs';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AdoptionFormComponent } from './components/adoption-form/adoption-form.component';

const appRoutes = routes;

@Component({
  selector: 'app-puppy-details',
  standalone: true,
  imports: [ AsyncPipe, TitleCasePipe,
    MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, MatDialogModule
  ],
  templateUrl: './puppy-details.component.html',
  styleUrl: './puppy-details.component.scss'
})
export class PuppyDetailsComponent {
  puppy: Observable<Puppy> | undefined;
  puppyService = inject(PuppyService);
  @Input()
    set id(id: string) {
      this.puppyId = id;
      this.puppy = this.puppyService.getPuppyDetails(parseInt(this.puppyId));
    }
  puppyId: string = '1';
  readonly dialog = inject(MatDialog)


  openAdoptionForm(){
    const dialogRef = this.dialog.open(AdoptionFormComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
