import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ClipboardModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    RouterLink

  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
