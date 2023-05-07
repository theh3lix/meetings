import { Component } from '@angular/core';
import { DBContext } from '../_services/mokdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  constructor(private dbContext: DBContext, private route: ActivatedRoute) {
    let id = +this.route.snapshot.params['id'];
    console.log(id);
  }
}
