import { Component } from '@angular/core';
import { Komitet } from '../_models/komitet.model';
import { DBContext } from '../_services/mokdb.service';
import { ActivatedRoute } from '@angular/router';
import { Agenda } from '../_models/agenda.model';

@Component({
  selector: 'app-komitet',
  templateUrl: './komitet.component.html',
  styleUrls: ['./komitet.component.css'],
})
export class KomitetComponent {
  Komitet: Komitet;
  Agendas: Agenda[];
  constructor(private dbContext: DBContext, private route: ActivatedRoute) {
    let id = +this.route.snapshot.params['id'];
    this.Komitet = this.dbContext.Komitety.find(x=>x.Id == id)!;
    this.Agendas = this.dbContext.Agendy.filter(x=>x.KomitetId == id);
  }

  addAgenda() {
    let el = document.getElementById("add_agenda")!;
    el.style.display = "block";
  }

  cancelAddingAgenda() {
    let el = document.getElementById("add_agenda")!;
    el.style.display = "none";
  }
}
