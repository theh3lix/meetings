import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Komitet } from '../_models/komitet.model';
import { DBContext } from '../_services/mokdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedId: number;
  komitety: Komitet[]; 

  constructor(dbContext: DBContext) {
    this.komitety = dbContext.Komitety;
    this.selectedId = 0;
  }

  setId(id: number) {
    this.selectedId = id;
    console.log("Selected ID: " + this.selectedId);
  }
}
